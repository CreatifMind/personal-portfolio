"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, User, Send, Github, Linkedin, ArrowUp } from "lucide-react";

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    
    // Create a mailto link
    const subject = encodeURIComponent(`Portfolio Contact Form Message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:chriswonglihong@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative pt-24 border-t border-zinc-200/50 dark:border-zinc-800/50 bg-white/10 dark:bg-black/10 backdrop-blur-sm z-10">
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Get In Touch</h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Have a question or want to work together? I'm currently open to new opportunities and collaborations. Drop me a message below.
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:chriswonglihong@gmail.com" className="flex items-center gap-4 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium break-all">chriswonglihong@gmail.com</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-zinc-900/50 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-zinc-200/50 dark:shadow-none"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-zinc-700 dark:text-zinc-300">Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-zinc-400" />
                  <Input id="name" name="name" placeholder="John Doe" className="pl-10 h-12 bg-zinc-50 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700 focus-visible:ring-blue-500" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-zinc-700 dark:text-zinc-300">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-zinc-400" />
                  <Input id="email" name="email" type="email" placeholder="john@example.com" className="pl-10 h-12 bg-zinc-50 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700 focus-visible:ring-blue-500" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-zinc-700 dark:text-zinc-300">Message</Label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-zinc-400" />
                  <Textarea id="message" name="message" placeholder="How can I help you?" className="pl-10 min-h-[120px] resize-none bg-zinc-50 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700 focus-visible:ring-blue-500 pt-3" required />
                </div>
              </div>

              <Button type="submit" className="w-full h-12 text-base font-medium rounded-xl gap-2 bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 dark:text-zinc-900 transition-colors">
                Send Message <Send className="w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      <footer className="border-t border-zinc-200/50 dark:border-zinc-800/50 py-8 px-4 sm:px-6 lg:px-8 bg-white/10 dark:bg-zinc-900/20 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">
            © 2026 Chris Wong Lihong. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors bg-white dark:bg-zinc-800 rounded-full shadow-sm hover:shadow dark:shadow-none border border-zinc-200 dark:border-zinc-700">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors bg-white dark:bg-zinc-800 rounded-full shadow-sm hover:shadow dark:shadow-none border border-zinc-200 dark:border-zinc-700">
              <span className="sr-only">GitHub</span>
              <Github className="w-5 h-5" />
            </a>
            <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 border border-zinc-200 dark:border-zinc-700 ml-4 hidden sm:flex">
              <a href="#">
                <ArrowUp className="w-4 h-4" />
                <span className="sr-only">Back to top</span>
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </section>
  );
}
