"use client";

import { useSyncExternalStore } from "react";

/**
 * A once-per-second clock that is hydration-safe by construction.
 *
 * The snapshot MUST be a cached value that only changes on a real tick —
 * returning a fresh `Date.now()` from `getSnapshot` on every call makes React
 * think the store changed on every render and loops forever. So the current
 * time is cached in `currentNow` and only advanced inside the interval.
 *
 * The server (and the first client hydration render) both read the server
 * snapshot — `null` — so the markup matches and there is no mismatch. React
 * then re-renders with the live client time.
 */
let currentNow = Date.now();

function getSnapshot(): number {
  return currentNow;
}

function getServerSnapshot(): null {
  return null;
}

function subscribe(onChange: () => void) {
  const id = setInterval(() => {
    currentNow = Date.now();
    onChange();
  }, 1000);
  return () => clearInterval(id);
}

export function useNow(): number | null {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
