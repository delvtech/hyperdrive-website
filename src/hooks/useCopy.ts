import { useState } from "react";

/**
 * Returns a function to copy text to the clipboard as well as a boolean that
 * will be true for a short period of time after the text is copied, for showing
 * temporary feedback to the user.
 */
export function useCopy() {
  const [copied, setCopied] = useState(false);

  function copy(text: string) {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1200);
  }

  return { copied, copy };
}
