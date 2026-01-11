"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-4 md:px-6 py-24 text-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-4xl space-y-8"
      >
        <div className="mx-auto w-fit rounded-full border border-border/50 bg-secondary/50 px-4 py-1.5 text-xs font-medium text-secondary-foreground backdrop-blur-md">
          Cybersecurity Research & Writeups
        </div>
        
        <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-7xl md:text-8xl text-glow">
          Uncovering the
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground">
            Unknown
          </span>
        </h1>
        
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed">
          Deep dives into cybersecurity, vulnerability research, and advanced exploitation techniques. 
          Knowledge is the currency of the future.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/blog"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-foreground px-8 text-sm font-medium text-background transition-colors hover:bg-black/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Read Writeups
          </Link>
          <Link
            href="/projects"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-white/10 bg-white/5 px-8 text-sm font-medium text-foreground transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            View Projects
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
