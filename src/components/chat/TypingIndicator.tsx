export function TypingIndicator() {
  return (
    <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-sm bg-surface-soft px-4 py-3" aria-hidden="true">
      {[0, 1, 2].map((dot) => (
        <span
          key={dot}
          className="size-1.5 animate-bounce rounded-full bg-muted-foreground/60"
          style={{ animationDelay: `${dot * 140}ms`, animationDuration: "1s" }}
        />
      ))}
    </div>
  );
}
