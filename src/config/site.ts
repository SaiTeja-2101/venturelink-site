/**
 * Single source of truth for the coming-soon page. Edit these values, not the
 * components.
 */

/**
 * The countdown is a ROLLING 24-hour clock: it always counts down to the next
 * occurrence of this wall-clock time, and the instant it hits 00:00:00 it rolls
 * over to the following day's target — a fresh 24 hours, forever.
 *
 * Anchored to India Standard Time (UTC+05:30, no DST) so every visitor sees the
 * same target regardless of their own timezone. Change these two numbers to
 * move the daily reset time.
 */
export const RESET_HOUR_IST = 11; // 11:00 AM India time
export const RESET_MINUTE_IST = 0;

const IST_OFFSET_MS = 5.5 * 60 * 60 * 1000;
const DAY_MS = 24 * 60 * 60 * 1000;

/**
 * Given the current epoch time, returns the epoch time of the next daily reset
 * (today's if it hasn't passed, otherwise tomorrow's). Recomputed every tick, so
 * when `now` crosses the target the countdown automatically jumps back to ~24h.
 */
export function nextDailyTarget(now: number): number {
  // Read the IST wall-clock date for `now`, build that day's reset instant in
  // IST, then convert back to a real UTC epoch.
  const ist = new Date(now + IST_OFFSET_MS);
  const istMidnightReset = Date.UTC(
    ist.getUTCFullYear(),
    ist.getUTCMonth(),
    ist.getUTCDate(),
    RESET_HOUR_IST,
    RESET_MINUTE_IST,
    0,
    0,
  );
  const target = istMidnightReset - IST_OFFSET_MS;
  return now < target ? target : target + DAY_MS;
}

export const BRAND = {
  name: "VENTURELINK",
  descriptor: "ADVISORY PRIVATE LIMITED",
} as const;

export const COPY = {
  /** The word rendered in the serif-italic accent inside the headline. */
  headlineLead: "Something",
  headlineAccent: "exceptional",
  headlineTail: "is almost here.",
  sub: "We're putting the finishing touches on a smarter way to fund and grow your business. Launching very soon.",
} as const;

/**
 * Contact details shown at the foot of the page. Anything left null is omitted.
 * `whatsapp` is in wa.me format: country code, no plus, no spaces.
 */
export const CONTACT = {
  phone: "7600371402" as string | null,
  whatsapp: "917600371402" as string | null,
  email: "Info@venturelinkadvisory.com" as string | null,
} as const;

export const DISCLAIMER =
  "VentureLink Advisory Private Limited is an independent private consulting firm. We are not affiliated with, or endorsed by, any Government or Non-Government authority.";
