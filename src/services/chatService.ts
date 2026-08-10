export type ChatRole = "user" | "assistant";

export type ChatTurn = {
  role: ChatRole;
  content: string;
};

export type ChatResponse = {
  reply: string;
};

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

export async function sendMessage(
  messages: ChatTurn[]
): Promise<ChatResponse> {
  const response = await fetch(`${API_BASE_URL}/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messages,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || `Chat request failed: ${response.status}`
    );
  }

  if (!data.reply || typeof data.reply !== "string") {
    throw new Error("Backend did not return a valid reply");
  }

  return {
    reply: data.reply,
  };
}

