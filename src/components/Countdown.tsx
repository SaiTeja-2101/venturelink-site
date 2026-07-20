"use client";

import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/cn";
import { useNow } from "@/lib/useNow";

type Remaining = { hours: number; minutes: number; seconds: number };

function remainingFrom(target: number, now: number): Remaining {
  const totalSeconds = Math.max(0, Math.floor((target - now) / 1000));
  return {
    hours: Math.floor(totalSeconds / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

/**
 * A single 0-9 digit that slides+blurs when its value changes. Each digit in a
 * unit animates independently, so only the digits that actually change move.
 */
function Digit({ value }: { value: string }) {
  return (
    <span className="relative inline-block h-[1em] w-[0.62em] overflow-hidden tabular">
      <AnimatePresence initial={false} mode="popLayout">
        <motion.span
          key={value}
          initial={{ y: "-100%", opacity: 0, filter: "blur(6px)" }}
          animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "100%", opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function Unit({ value, label }: { value: number; label: string }) {
  const digits = String(value).padStart(2, "0").split("");
  return (
    <div className="flex flex-col items-center gap-3 sm:gap-4">
      <div
        className={cn(
          "relative flex items-center justify-center rounded-2xl px-4 py-4 sm:px-7 sm:py-6",
          "border border-white/10 bg-white/[0.04] backdrop-blur-md",
          "shadow-[0_20px_60px_-15px_rgba(4,15,26,0.9)]",
        )}
      >
        {/* top sheen */}
        <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        <span className="font-display text-5xl font-semibold leading-none text-text-on-dark sm:text-7xl md:text-8xl">
          {digits.map((d, i) => (
            <Digit key={i} value={d} />
          ))}
        </span>
      </div>
      <span className="font-body text-[10px] font-medium uppercase tracking-[0.32em] text-text-muted-dark sm:text-xs">
        {label}
      </span>
    </div>
  );
}

function Separator() {
  return (
    <span
      aria-hidden
      className="animate-float font-display text-4xl font-light leading-none text-gold-500/70 sm:text-6xl md:text-7xl"
    >
      :
    </span>
  );
}

export function Countdown({ target }: { target: number }) {
  const now = useNow();
  // Until the client clock is live, render a stable all-zero placeholder that
  // matches the server HTML (see useNow).
  const r = now === null ? { hours: 0, minutes: 0, seconds: 0 } : remainingFrom(target, now);

  return (
    <div
      className="flex items-start justify-center gap-2 sm:gap-4"
      role="timer"
      aria-label="Time remaining until launch"
    >
      <Unit value={r.hours} label="Hours" />
      <div className="pt-4 sm:pt-6">
        <Separator />
      </div>
      <Unit value={r.minutes} label="Minutes" />
      <div className="pt-4 sm:pt-6">
        <Separator />
      </div>
      <Unit value={r.seconds} label="Seconds" />
    </div>
  );
}
