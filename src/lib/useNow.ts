"use client";

import { useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 1000);
  return () => clearInterval(id);
}

/**
 * A once-per-second clock that is hydration-safe by construction.
 *
 * The server (and the first client hydration render) both read the server
 * snapshot — `null` — so the markup matches and there is no mismatch. React
 * then re-renders with the live client time. Callers render a stable
 * placeholder while `now` is `null`. This is why the page never needs a manual
 * `mounted` flag or a `setState` inside an effect.
 */
export function useNow(): number | null {
  return useSyncExternalStore(
    subscribe,
    () => Date.now(),
    () => null,
  );
}
