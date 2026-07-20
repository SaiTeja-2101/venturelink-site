/**
 * Single source of truth for the coming-soon page. Edit these values, not the
 * components.
 */

/**
 * The launch instant the countdown targets.
 *
 * Written as a fixed ISO string WITH an explicit timezone offset so every
 * visitor (and the server) resolves the exact same moment — it is not
 * recomputed relative to "now". `+05:30` is India Standard Time.
 *
 * Default: 2026-07-21 11:00 IST — i.e. 24 hours after 2026-07-20 11:00 IST.
 * To move the launch, change ONLY this line.
 */
export const LAUNCH_AT = new Date("2026-07-21T11:00:00+05:30");

export const BRAND = {
  name: "VENTURELINK",
  descriptor: "ADVISORY PRIVATE LIMITED",
} as const;

export const COPY = {
  /** The word rendered in the serif-italic accent inside the headline. */
  headlineLead: "Something",
  headlineAccent: "exceptional",
  headlineTail: "is almost here.",
  sub: "We're putting the finishing touches on a smarter way to fund and grow your business. The doors open in exactly 24 hours.",
  liveHeadline: "We're live.",
  liveSub: "VentureLink Advisory is now open. Reach out and let's get started.",
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
