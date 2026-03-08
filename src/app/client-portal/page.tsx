"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Download, Image as ImageIcon, Lock, LogOut } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Dummy data for a client gallery
const clientGallery = {
  clientName: "Acme Corp Event",
  date: "October 12, 2024",
  images: [
    { id: 1, url: "bg-slate-800" },
    { id: 2, url: "bg-slate-700" },
    { id: 3, url: "bg-slate-900" },
    { id: 4, url: "bg-zinc-800" },
    { id: 5, url: "bg-zinc-900" },
    { id: 6, url: "bg-neutral-800" },
  ] // using gradient classes to simulate images
};

export default function ClientPortal() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessCode, setAccessCode] = useState("");
  const [error, setError] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticating(true);
    setError("");

    // Simulate network delay and authentication check
    // In a real app, this would hit an API endpoint that checks against a database
    setTimeout(() => {
      // Dummy access code for demo: "frame24"
      if (accessCode.toLowerCase() === "frame24") {
        setIsAuthenticated(true);
      } else {
        setError("Invalid access code. Please check your invitation email.");
      }
      setIsAuthenticating(false);
    }, 1000);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setAccessCode("");
  };

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />

      <section className="flex-1 pt-32 pb-24 relative flex flex-col">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10 flex-1 flex flex-col">
          
          <AnimatePresence mode="wait">
            {!isAuthenticated ? (
              // -- LOGIN VIEW --
              <motion.div
                key="login"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex-1 flex flex-col items-center justify-center max-w-md mx-auto w-full"
              >
                 <Link href="/" className="self-start inline-flex items-center gap-2 text-foreground/60 hover:text-blue-400 transition-colors mb-12 text-sm font-medium">
                  <ArrowLeft size={16} />
                  Return Home
                </Link>

                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-2xl">
                  <Lock size={28} className="text-blue-400" />
                </div>
                
                <h1 className="text-4xl font-bold mb-4 text-center">Client Portal</h1>
                <p className="text-foreground/70 text-center mb-8">
                  Enter your unique access code to view and download your private photography gallery.
                </p>

                <form onSubmit={handleLogin} className="w-full space-y-4">
                  <div>
                    <input
                      type="password"
                      placeholder="Access Code (try 'frame24')"
                      value={accessCode}
                      onChange={(e) => setAccessCode(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-center tracking-widest focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all font-mono"
                      required
                    />
                  </div>
                  
                  {error && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm text-center">
                      {error}
                    </motion.p>
                  )}

                  <button
                    type="submit"
                    disabled={isAuthenticating}
                    className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isAuthenticating ? (
                       <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      "Access Gallery"
                    )}
                  </button>
                </form>
              </motion.div>

            ) : (
              // -- GALLERY VIEW --
              <motion.div
                key="gallery"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex-1 flex flex-col"
              >
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-8">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
                       <Lock size={12} /> Secure Connection
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-2">
                       {clientGallery.clientName}
                    </h1>
                    <p className="text-foreground/60 flex items-center gap-2">
                       Shot on {clientGallery.date}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors font-medium text-sm">
                      <Download size={16} />
                      Download All
                    </button>
                    <button onClick={handleLogout} className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-500 transition-colors font-medium text-sm border border-red-500/20">
                      <LogOut size={16} />
                      Disconnect
                    </button>
                  </div>
                </div>

                {/* Masonry-style Grid Simulator */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                   {clientGallery.images.map((img) => (
                      <motion.div 
                        key={img.id}
                        whileHover={{ scale: 1.02 }}
                        className={`relative rounded-2xl overflow-hidden w-full break-inside-avoid ${img.url} border border-white/10 group cursor-pointer shadow-xl`}
                        // Simulating varying heights for masonry look
                        style={{ height: `${Math.floor(Math.random() * 200) + 250}px` }}
                      >
                         {/* Watermark Overlay */}
                         <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none z-10 select-none">
                            <span className="text-white text-3xl font-black tracking-widest font-mono transform -rotate-45">
                               PROOF
                            </span>
                         </div>
                         
                         {/* Hover Actions */}
                         <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20 backdrop-blur-sm">
                            <button className="p-3 rounded-full bg-white text-black hover:scale-110 transition-transform">
                              <ImageIcon size={20} />
                            </button>
                            <button className="p-3 rounded-full bg-blue-600 text-white hover:scale-110 transition-transform">
                              <Download size={20} />
                            </button>
                         </div>
                      </motion.div>
                   ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

      <Footer />
    </main>
  );
}
