"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUp, Check, Copy, Github, Linkedin, Mail } from "lucide-react";

const EMAIL = "chriswonglihong@gmail.com";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Ignore if clipboard access is unavailable
    }
  };

  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="space-y-6 max-w-2xl"
        >
          <p className="font-mono text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            05 / Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            Let&apos;s work together.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Currently open to Business Analyst, Data Analyst, Product/Tech Analyst, and Consulting roles. The fastest way to reach me is by email.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={`mailto:${EMAIL}`}
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 px-5 rounded-md text-sm font-medium gap-2"
              )}
            >
              <Mail className="h-4 w-4" />
              {EMAIL}
            </a>

            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={handleCopyEmail}
              className="h-11 px-4 rounded-md text-sm font-medium gap-2"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  Copy Email
                </>
              )}
            </Button>
          </div>
        </motion.div>
      </div>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted-foreground">
            © 2026 Chris Wong Lihong
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/chriswonglihong/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "h-9 w-9 text-muted-foreground hover:text-foreground"
              )}
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/CreatifMind"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "h-9 w-9 text-muted-foreground hover:text-foreground"
              )}
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Back to top"
              className={cn(
                buttonVariants({ variant: "outline", size: "icon" }),
                "h-9 w-9 rounded-full ml-2"
              )}
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
