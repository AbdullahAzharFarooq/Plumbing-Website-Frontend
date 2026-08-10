import type { ChatRole } from "@/services/chatService";

export type UiMessage = {
  id: string;
  role: ChatRole;
  content: string;
  at: number;
};

function formatTime(at: number) {
  return new Date(at).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

export function ChatMessage({ message }: { message: UiMessage }) {
  const isUser = message.role === "user";

  return (
    <div className={`flex flex-col gap-1 ${isUser ? "items-end" : "items-start"}`}>
      <div
        className={
          isUser
            ? "max-w-[85%] rounded-2xl rounded-br-sm bg-primary px-4 py-2.5 text-[0.9375rem] leading-relaxed text-primary-foreground"
            : "max-w-[92%] text-[0.9375rem] leading-relaxed whitespace-pre-line text-foreground"
        }
      >
        {message.content}
      </div>
      <time
        dateTime={new Date(message.at).toISOString()}
        className="px-1 text-[0.6875rem] text-muted-foreground"
      >
        {formatTime(message.at)}
      </time>
    </div>
  );
}
