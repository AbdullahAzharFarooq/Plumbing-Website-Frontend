import { AlertCircle, ArrowUp, Eraser, Minus, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { business } from "@/data/businessData";
import { sendMessage, type ChatTurn } from "@/services/chatService";
import { ChatMessage, type UiMessage } from "./ChatMessage";
import { SuggestedQuestions } from "./SuggestedQuestions";
import { TypingIndicator } from "./TypingIndicator";

const welcome = `Hi! 👋 I'm the Plumbing Assistant. I can help you learn about our services, service areas, hours, and how to contact our team.`;

function createWelcome(): UiMessage {
  return { id: "welcome", role: "assistant", content: welcome, at: Date.now() };
}

export function ChatWindow({ onClose, onMinimize }: { onClose: () => void; onMinimize: () => void }) {
  const [messages, setMessages] = useState<UiMessage[]>(() => [createWelcome()]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [failed, setFailed] = useState<string | null>(null);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const node = scrollRef.current;
    if (node) node.scrollTop = node.scrollHeight;
  }, [messages, busy]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const run = async (text: string, history: UiMessage[]) => {
    setBusy(true);
    setFailed(null);
    try {
      const pending: UiMessage = { id: "pending", role: "user", content: text, at: Date.now() };
      const turns: ChatTurn[] = [...history, pending]
        .filter((message) => message.id !== "welcome")
        .map((message) => ({ role: message.role, content: message.content }));

      const { reply } = await sendMessage(turns);
      setMessages((prev) => [
        ...prev,
        { id: `a-${Date.now()}`, role: "assistant", content: reply, at: Date.now() },
      ]);
    } catch {
      setFailed(text);
    } finally {
      setBusy(false);
    }
  };

  const submit = (raw: string) => {
    const text = raw.trim();
    if (!text || busy) return;
    const userMessage: UiMessage = { id: `u-${Date.now()}`, role: "user", content: text, at: Date.now() };
    const history = messages;
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    void run(text, history);
  };

  const retry = () => {
    if (!failed) return;
    const history = messages.filter((message) => message.content !== failed || message.role !== "user");
    void run(failed, history);
  };

  const clear = () => {
    setMessages([createWelcome()]);
    setFailed(null);
    setInput("");
    inputRef.current?.focus();
  };

  const showSuggestions = messages.length <= 1 && !busy;

  return (
    <div
      role="dialog"
      aria-label="Plumbing Assistant chat"
      className="fixed inset-0 z-60 flex flex-col overflow-hidden bg-background sm:inset-auto sm:right-6 sm:bottom-6 sm:h-[min(38rem,calc(100dvh-6rem))] sm:w-100 sm:rounded-2xl sm:border sm:border-border sm:shadow-panel"
    >
      <header className="flex items-start justify-between gap-3 bg-navy px-5 py-4 text-navy-foreground">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-[0.9375rem] font-bold text-navy-foreground">Plumbing Assistant</h2>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-navy-foreground/10 px-2 py-0.5 text-[0.6875rem] font-semibold text-navy-foreground/80">
              <span className="size-1.5 rounded-full bg-teal" aria-hidden="true" />
              Online
            </span>
          </div>
          <p className="mt-1 text-xs text-navy-foreground/60">How can we help you today?</p>
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={clear}
            aria-label="Clear conversation"
            className="inline-flex size-8 items-center justify-center rounded-md text-navy-foreground/60 transition-colors hover:bg-navy-foreground/10 hover:text-navy-foreground"
          >
            <Eraser className="size-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={onMinimize}
            aria-label="Minimize chat"
            className="hidden size-8 items-center justify-center rounded-md text-navy-foreground/60 transition-colors hover:bg-navy-foreground/10 hover:text-navy-foreground sm:inline-flex"
          >
            <Minus className="size-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close chat"
            className="inline-flex size-8 items-center justify-center rounded-md text-navy-foreground/60 transition-colors hover:bg-navy-foreground/10 hover:text-navy-foreground"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>
      </header>

      <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-5 py-5" aria-live="polite">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}

        {busy && <TypingIndicator />}

        {failed && (
          <div className="rounded-xl border border-destructive/25 bg-destructive/5 p-3 text-sm text-destructive">
            <p className="flex items-start gap-2 font-medium">
              <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              We couldn't reach the assistant. Try again, or call {business.phone}.
            </p>
            <button type="button" onClick={retry} className="mt-2 text-sm font-semibold underline">
              Retry
            </button>
          </div>
        )}

        {showSuggestions && (
          <div className="pt-1">
            <p className="mb-2 text-[0.6875rem] font-bold tracking-[0.14em] text-muted-foreground uppercase">
              Suggested
            </p>
            <SuggestedQuestions onSelect={submit} disabled={busy} />
          </div>
        )}
      </div>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          submit(input);
        }}
        className="border-t border-border bg-background p-3"
      >
        <div className="flex items-end gap-2 rounded-xl border border-input bg-background p-2 focus-within:border-primary">
          <label htmlFor="chat-input" className="sr-only">
            Message the Plumbing Assistant
          </label>
          <textarea
            id="chat-input"
            ref={inputRef}
            rows={1}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                submit(input);
              }
            }}
            placeholder="Ask about services, areas or hours…"
            className="max-h-32 min-h-9 flex-1 resize-none bg-transparent px-2 py-1.5 text-[0.9375rem] leading-relaxed text-foreground placeholder:text-muted-foreground/70 focus:outline-none"
          />
          <button
            type="submit"
            disabled={busy || input.trim().length === 0}
            aria-label="Send message"
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-40"
          >
            <ArrowUp className="size-4" aria-hidden="true" />
          </button>
        </div>
        <p className="mt-2 px-1 text-[0.6875rem] text-muted-foreground">
          Enter to send · Shift + Enter for a new line
        </p>
      </form>
    </div>
  );
}
