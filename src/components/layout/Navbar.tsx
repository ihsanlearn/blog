"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Overview", href: "/" },
  { name: "Research", href: "/blog" },
  { name: "Projects", href: "/work-in-progress" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 mx-auto">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-mono text-xl font-bold tracking-tighter text-foreground">
            iihn<span className="text-secondary-foreground/60">sight</span>
          </span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-foreground",
                  isActive ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    className="absolute -bottom-[21px] left-0 right-0 h-[1px] bg-accent-foreground"
                    layoutId="navbar-indicator"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-4">
          {/* Add search or theme toggle here later */}
          <Link
             href="/contact"
             className="inline-flex h-9 items-center justify-center rounded-full border border-input bg-secondary px-4 text-sm font-medium transition-colors hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
             Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
