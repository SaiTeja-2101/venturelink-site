"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Background } from "@/components/Background";
import { Countdown } from "@/components/Countdown";
import { ContactRow } from "@/components/ContactRow";
import { useNow } from "@/lib/useNow";
import { BRAND, COPY, DISCLAIMER, LAUNCH_AT } from "@/config/site";

const TARGET = LAUNCH_AT.getTime();

export function ComingSoon() {
  const reduce = useReducedMotion();
  const now = useNow();
  const launched = now !== null && now >= TARGET;

  // Entrance: staggered rise. Disabled under reduced-motion.
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: 0.1 },
    },
  };
  const item = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
        },
      };

  return (
    <main className="relative flex min-h-[100svh] flex-col items-center justify-between gap-y-14 px-5 py-10 sm:gap-y-20 sm:py-14">
      <Background />

      {/* Top: brand lockup */}
      <motion.header
        variants={item}
        initial="hidden"
        animate="show"
        className="flex items-center gap-3"
      >
        <span className="relative inline-flex">
          <span className="animate-glow absolute inset-0 -z-10 rounded-full bg-gold-500/20 blur-xl" />
          <Image
            src="/brand/venturelink-symbol.webp"
            alt={`${BRAND.name} logo`}
            width={52}
            height={35}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </span>
        <span className="flex flex-col leading-none">
          <span className="font-display text-base font-[650] tracking-[0.02em] text-text-on-dark sm:text-lg">
            {BRAND.name}
          </span>
          <span className="mt-1 font-body text-[8px] font-medium tracking-[0.28em] text-blue-200 sm:text-[9px]">
            {BRAND.descriptor}
          </span>
        </span>
      </motion.header>

      {/* Middle: the pitch + countdown */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex max-w-3xl flex-col items-center text-center"
      >
        <motion.p
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-body text-[11px] font-medium uppercase tracking-[0.28em] text-blue-200"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-500/70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold-500" />
          </span>
          {launched ? "Now open" : "Launching soon"}
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-text-on-dark sm:text-6xl md:text-7xl"
        >
          {launched ? (
            COPY.liveHeadline
          ) : (
            <>
              {COPY.headlineLead}{" "}
              <span className="font-serif font-normal italic text-gold-300">
                {COPY.headlineAccent}
              </span>{" "}
              {COPY.headlineTail}
            </>
          )}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl font-body text-base leading-relaxed text-text-muted-dark sm:text-lg"
        >
          {launched ? COPY.liveSub : COPY.sub}
        </motion.p>

        <motion.div variants={item} className="mt-12 sm:mt-14">
          <Countdown target={TARGET} />
        </motion.div>
      </motion.div>

      {/* Bottom: contact + footer */}
      <motion.footer
        variants={container}
        initial="hidden"
        animate="show"
        className="flex w-full max-w-2xl flex-col items-center gap-6"
      >
        <motion.div variants={item}>
          <ContactRow />
        </motion.div>
        <motion.p
          variants={item}
          className="max-w-xl text-center font-body text-[11px] leading-relaxed text-text-muted-dark/70"
        >
          {DISCLAIMER}
        </motion.p>
        <motion.p
          variants={item}
          className="font-body text-[11px] tracking-wide text-text-muted-dark/60"
        >
          © {new Date().getFullYear()} {BRAND.name} {BRAND.descriptor}. All rights
          reserved.
        </motion.p>
      </motion.footer>
    </main>
  );
}
