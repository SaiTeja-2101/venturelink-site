/**
 * The layered dark canvas: a base navy vignette, two drifting blue aurora
 * blooms, a faint architectural grid, and a film-grain overlay. The grain is
 * what stops the gradients reading as a flat, generated wash. Pure CSS — no
 * JS — so it costs nothing and paints before hydration.
 */
export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% -10%, #0d3357 0%, #0a2743 34%, #071d32 68%, #05141f 100%)",
        }}
      />

      {/* Aurora bloom — top left, cool blue */}
      <div
        className="animate-aurora absolute -left-[20%] -top-[25%] h-[70vmax] w-[70vmax] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(44,120,167,0.55) 0%, rgba(20,81,123,0.28) 40%, transparent 70%)",
        }}
      />

      {/* Aurora bloom — bottom right, deeper blue */}
      <div
        className="animate-aurora-slow absolute -bottom-[30%] -right-[15%] h-[65vmax] w-[65vmax] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(13,65,106,0.5) 0%, rgba(11,44,73,0.25) 45%, transparent 72%)",
        }}
      />

      {/* Gold trace — small, low, warms one corner only */}
      <div
        className="animate-glow absolute bottom-[8%] left-[12%] h-[22vmax] w-[22vmax] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(210,162,56,0.16) 0%, transparent 68%)",
        }}
      />

      {/* Architectural grid */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(191,215,230,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(191,215,230,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(110% 80% at 50% 20%, black 30%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(110% 80% at 50% 20%, black 30%, transparent 78%)",
        }}
      />

      {/* Film grain */}
      <div
        className="absolute inset-0 opacity-[0.18] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Bottom fade to seat the footer */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#05131e] to-transparent" />
    </div>
  );
}
