import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** clsx + tailwind-merge: the last conflicting Tailwind class wins. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
