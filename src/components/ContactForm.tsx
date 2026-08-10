import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { useState } from "react";

import { submitContactForm } from "@/services/contactService";
import { btnPrimary } from "@/lib/ui";

type Fields = { name: string; email: string; phone: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const emptyFields: Fields = { name: "", email: "", phone: "", message: "" };

function validate(fields: Fields): Errors {
  const errors: Errors = {};
  if (fields.name.trim().length < 2) errors.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(fields.email.trim())) errors.email = "Please enter a valid email address.";
  if (fields.phone.replace(/\D/g, "").length < 10) errors.phone = "Please enter a phone number we can reach you on.";
  if (fields.message.trim().length < 10) errors.message = "Please add a few details about the problem.";
  return errors;
}

const fieldClass =
  "mt-2 h-12 w-full rounded-lg border border-input bg-background px-4 text-[0.9375rem] text-foreground transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none";

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(emptyFields);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const update = (key: keyof Fields) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((prev) => ({ ...prev, [key]: event.target.value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
    if (status === "error") setStatus("idle");
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(fields);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      await submitContactForm({
        name: fields.name.trim(),
        email: fields.email.trim(),
        phone: fields.phone.trim(),
        message: fields.message.trim(),
      });
      setStatus("success");
      setFields(emptyFields);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="mt-6 rounded-xl border border-teal/25 bg-teal/5 p-6" role="status">
        <CheckCircle2 className="size-6 text-teal" aria-hidden="true" />
        <p className="mt-3 font-semibold text-navy">
          Thank you! Your message has been sent successfully. We'll get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-semibold text-primary hover:text-navy"
        >
          Send another message
        </button>
      </div>
    );
  }

  const isSubmitting = status === "submitting";

  return (
    <form onSubmit={onSubmit} noValidate className="mt-6 space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="text-sm font-semibold text-navy">
            Full Name
          </label>
          <input
            id="cf-name"
            name="name"
            autoComplete="name"
            value={fields.name}
            onChange={update("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "cf-name-error" : undefined}
            className={fieldClass}
            placeholder="Jane Doyle"
            required
          />
          {errors.name && (
            <p id="cf-name-error" className="mt-1.5 text-xs font-medium text-destructive">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="cf-phone" className="text-sm font-semibold text-navy">
            Phone Number
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={fields.phone}
            onChange={update("phone")}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "cf-phone-error" : undefined}
            className={fieldClass}
            placeholder="(416) 555-0148"
            required
          />
          {errors.phone && (
            <p id="cf-phone-error" className="mt-1.5 text-xs font-medium text-destructive">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="cf-email" className="text-sm font-semibold text-navy">
          Email
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          autoComplete="email"
          value={fields.email}
          onChange={update("email")}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "cf-email-error" : undefined}
          className={fieldClass}
          placeholder="jane@example.com"
          required
        />
        {errors.email && (
          <p id="cf-email-error" className="mt-1.5 text-xs font-medium text-destructive">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="cf-message" className="text-sm font-semibold text-navy">
          Message
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          value={fields.message}
          onChange={update("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "cf-message-error" : undefined}
          className="mt-2 w-full resize-y rounded-lg border border-input bg-background px-4 py-3 text-[0.9375rem] leading-relaxed text-foreground transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none"
          placeholder="Describe the issue, the fixture involved, and when it started."
          required
        />
        {errors.message && (
          <p id="cf-message-error" className="mt-1.5 text-xs font-medium text-destructive">
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <p className="flex items-start gap-2 rounded-lg border border-destructive/25 bg-destructive/5 p-3 text-sm font-medium text-destructive" role="alert">
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          We couldn't send your message. Please try again or call us directly.
        </p>
      )}

      <button type="submit" className={`${btnPrimary} w-full`} disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            <Send className="size-4" aria-hidden="true" />
            Send Message
          </>
        )}
      </button>
      <p aria-live="polite" className="sr-only">
        {isSubmitting ? "Sending your message" : ""}
      </p>
    </form>
  );
}
