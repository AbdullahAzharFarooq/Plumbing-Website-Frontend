export const suggestedQuestions = [
  "What services do you offer?",
  "Do you provide emergency plumbing?",
  "What areas do you serve?",
  "What are your business hours?",
  "How can I contact you?",
];

export function SuggestedQuestions({
  onSelect,
  disabled = false,
}: {
  onSelect: (question: string) => void;
  disabled?: boolean;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {suggestedQuestions.map((question) => (
        <button
          key={question}
          type="button"
          disabled={disabled}
          onClick={() => onSelect(question)}
          className="rounded-full border border-border bg-background px-3.5 py-2 text-left text-[0.8125rem] font-medium text-navy transition-colors hover:border-primary/40 hover:bg-surface disabled:opacity-50"
        >
          {question}
        </button>
      ))}
    </div>
  );
}
