"use client";

import { useState } from "react";
import { Share } from "@/components/icons";

export function ShareButton({ title, path }: { title: string; path: string }) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const url = `${window.location.origin}${path}`;
    if (navigator.share) {
      await navigator.share({ title: `${title} — Velvet Blue`, url });
      return;
    }
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <button onClick={handleShare} className="flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/10 px-4 text-[10px] uppercase tracking-[0.18em] text-white/50 transition-colors hover:border-white/25 hover:text-white" aria-label={`Share ${title}`}>
      <Share className="h-3.5 w-3.5" /> {copied ? "Copied" : "Share"}
    </button>
  );
}
