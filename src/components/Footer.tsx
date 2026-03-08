"use client";

import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-background py-12 border-t border-white/5 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tighter">
              Imthiyas<span className="text-primary-500">.</span>
            </span>
          </div>

          <p className="text-foreground/50 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Imthiyas Ibnu Ibrahim. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <motion.a whileHover={{ y: -3, color: "#fff" }} whileTap={{ scale: 0.9 }} href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-foreground transition-all">
              <Github size={20} />
            </motion.a>
            <motion.a whileHover={{ y: -3, color: "#fff" }} whileTap={{ scale: 0.9 }} href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-foreground transition-all">
              <Linkedin size={20} />
            </motion.a>
            <motion.a whileHover={{ y: -3, color: "#fff" }} whileTap={{ scale: 0.9 }} href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-foreground transition-all">
              <Twitter size={20} />
            </motion.a>
            <motion.a whileHover={{ y: -3, backgroundColor: "rgba(255,255,255,0.15)" }} whileTap={{ scale: 0.9 }} href="#top" className="ml-4 p-2 rounded-full bg-white/5 text-foreground/70 hover:text-foreground transition-all border border-white/10">
              <ArrowUp size={16} />
            </motion.a>
          </div>

        </div>
      </div>
    </footer>
  );
}
