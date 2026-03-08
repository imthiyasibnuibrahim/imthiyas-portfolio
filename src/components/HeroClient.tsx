"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Twitter } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";

export default function HeroClient({ settings }: { settings?: any }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 bg-background">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-900/40 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-accent/20 rounded-full blur-[150px] opacity-40" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={itemVariants} className="mb-6 flex items-center gap-3">
            <span className="px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-semibold tracking-wide">
              Engineering × Creativity
            </span>
            <span className="text-foreground/50 text-sm flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Available for work
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants} 
            className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-foreground"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent">{settings?.name?.split(' ')[0] || 'Imthiyas'}</span>
            <br />
            <span className="text-3xl md:text-5xl text-foreground/80 mt-2 block">
              {settings?.role || "Builder. Storyteller."}
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants} 
            className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl leading-relaxed whitespace-pre-wrap"
          >
            {settings?.heroDescription || (
              <>
                I'm a Computer Science student at GEC Palakkad bridging the gap between <strong className="text-foreground">software engineering</strong>, <strong className="text-foreground">cloud infrastructure</strong>, and <strong className="text-foreground">visual artistry</strong>. Building robust backends and directing compelling stories.
              </>
            )}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#portfolio" 
              className="px-8 py-4 rounded-full bg-foreground text-background font-semibold hover:bg-foreground/90 transition-all flex items-center gap-2 group shadow-xl shadow-white/5"
            >
              Explore My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={settings?.resumeUrl || "#"} 
              className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-foreground font-semibold transition-all flex items-center gap-2 backdrop-blur-sm"
              target="_blank" rel="noopener noreferrer"
              onClick={(e) => {
                if (!settings?.resumeUrl) {
                  e.preventDefault();
                  alert("Please upload your resume in the Sanity Global Site Settings panel.");
                }
              }}
            >
              <Download size={18} />
              Resume
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 flex items-center gap-6">
            {settings?.githubUrl && (
              <a href={settings.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 text-foreground/70 hover:text-foreground hover:bg-white/10 hover:border-white/20 transition-all">
                <Github size={20} />
              </a>
            )}
            {settings?.linkedinUrl && (
              <a href={settings.linkedinUrl} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 text-foreground/70 hover:text-foreground hover:bg-white/10 hover:border-white/20 transition-all">
                <Linkedin size={20} />
              </a>
            )}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 text-foreground/70 hover:text-foreground hover:bg-white/10 hover:border-white/20 transition-all">
              <Twitter size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Visual Content (Image Placeholder) */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
           animate={{ opacity: 1, scale: 1, rotate: 0 }}
           transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
           className="relative aspect-[4/5] lg:aspect-square w-full max-w-md mx-auto xl:max-w-lg mt-12 lg:mt-0"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary-500/20 to-accent/20 border border-white/10 backdrop-blur-3xl overflow-hidden shadow-2xl flex items-center justify-center">
            {/* Inner Glow Image Placeholder */}
            <div className="absolute inset-px rounded-[2rem] overflow-hidden bg-background/50">
               {settings?.heroImage ? (
                  <img src={urlFor(settings.heroImage).auto('format').fit('max').url()} alt="Profile" className="w-full h-full object-cover" />
               ) : (
                 <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 to-background flex items-center justify-center p-8 text-center">
                    <div className="text-white/40 font-mono text-sm leading-relaxed border border-white/10 p-6 rounded-xl bg-black/20 backdrop-blur-sm">
                      <p className="mb-2 opacity-50">src: null</p>
                      <p>Open Sanity Studio to upload your Profile Image.</p>
                      <p>It will seamlessly blend with the dark neo-morphic styling.</p>
                    </div>
                 </div>
               )}
            </div>
            
            {/* Floating badges */}
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-12 -left-6 md:-left-12 px-5 py-3 rounded-2xl bg-background/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" fillOpacity="0.2"/><path d="M7 12L10 15L17 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <p className="text-xs text-foreground/60 font-medium">AWS Certified</p>
                <p className="text-sm font-bold text-foreground">Cloud Dev</p>
              </div>
            </motion.div>

            <motion.div 
               animate={{ y: [0, 15, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute bottom-16 -right-4 md:-right-8 px-5 py-3 rounded-2xl bg-background/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <div>
                <p className="text-xs text-foreground/60 font-medium">Frame'24</p>
                <p className="text-sm font-bold text-foreground">Director</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
