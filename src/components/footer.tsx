"use client";

import { Github } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 py-6 px-6 md:py-4">
        {/* Left side */}
        <div className="flex flex-col md:flex-row items-center gap-2 text-sm text-muted-foreground">
          <p className="text-center md:text-left">
            © {currentYear} <span className="font-semibold text-foreground">FrameForge</span> • <span className="font-medium">Create Framework App</span>. All rights reserved.
          </p>
          <span className="hidden md:inline-block">•</span>
          <span className="text-muted-foreground">MIT License</span>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          <Link
            href="https://github.com/mewisme/create-fw-app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="h-4 w-4 transition-transform hover:scale-110" />
            <span>GitHub</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
