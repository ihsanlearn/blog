"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WriteupCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  tags?: string[];
  index: number;
}

export function WriteupCard({ title, excerpt, date, slug, tags, index }: WriteupCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link href={`/blog/${slug}`} className="group block h-full">
        <article className="glass-card flex h-full flex-col justify-between rounded-xl p-6 md:p-8 bg-card text-card-foreground border border-border/50 shadow-sm hover:shadow-md hover:border-accent/40 transition-all duration-300">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {tags?.map((tag) => (
                <span key={tag} className="inline-flex items-center rounded-md bg-accent/10 px-2 py-1 text-xs font-medium text-accent-foreground ring-1 ring-inset ring-accent/20">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-2xl font-bold leading-tight tracking-tight text-foreground transition-colors group-hover:text-accent-foreground">
              {title}
            </h3>
            <p className="text-muted-foreground line-clamp-3">
              {excerpt}
            </p>
          </div>
          <div className="mt-8 flex items-center justify-between text-sm text-muted-foreground">
            <time dateTime={date}>{date}</time>
            <span className="group-hover:translate-x-1 transition-transform duration-300">Read more →</span>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
