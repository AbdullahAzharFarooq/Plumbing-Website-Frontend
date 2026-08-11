import { Star } from "lucide-react";

export function Stars({ rating, className = "" }: { rating: number; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-0.5 ${className}`}
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          aria-hidden="true"
          className={`size-4 ${star <= Math.round(rating) ? "fill-teal text-teal" : "text-border"}`}
        />
      ))}
    </span>
  );
}
