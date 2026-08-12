
export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  service?: string; 
  message: string;
};

export type ContactResult = {
  ok: true;
};

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

export async function submitContactForm(
  payload: ContactPayload
): Promise<ContactResult> {
  const response = await fetch(`${API_BASE_URL}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || `Contact request failed: ${response.status}`
    );
  }

  return {
    ok: true,
  };
}
