import { MessagesSquare } from "lucide-react";
import { useState } from "react";

import { ChatWindow } from "./ChatWindow";

export function Chatbot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={false}
          className="animate-in fade-in slide-in-from-bottom-4 fixed right-4 bottom-4 z-50 inline-flex h-13 items-center gap-2.5 rounded-full bg-navy pr-5 pl-4 text-sm font-semibold text-navy-foreground shadow-panel transition-all duration-200 duration-500 hover:bg-navy-soft hover:shadow-lift sm:right-6 sm:bottom-6"
        >
          <span className="flex size-7 items-center justify-center rounded-full bg-teal/20 text-teal">
            <MessagesSquare className="size-4" aria-hidden="true" />
          </span>
          Ask Us
        </button>
      )}

      {open && <ChatWindow onClose={() => setOpen(false)} onMinimize={() => setOpen(false)} />}
    </>
  );
}
