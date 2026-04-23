"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Map, Navigation, Smartphone, Shield, Search } from "lucide-react";

export default function SoftwareProjects() {
  const features = [
    {
      title: "Interactive Map",
      description: "Integrates an advanced digital twin using the Mappedin API, rendering detailed floor plans and point-to-point directions.",
      icon: <Map className="w-5 h-5" />
    },
    {
      title: "Robust Directory",
      description: "A highly searchable directory that categorizes locations and maps them to staff/faculty present in those rooms.",
      icon: <Search className="w-5 h-5" />
    },
    {
      title: "User Roles & Auth",
      description: "Secure JWT-based access control supporting diverse user roles, including student, staff, visitor, and admin.",
      icon: <Shield className="w-5 h-5" />
    },
    {
      title: "Cross-Platform Ready",
      description: "Containerized with Capacitor, meaning the application can be seamlessly deployed as native iOS and Android apps.",
      icon: <Smartphone className="w-5 h-5" />
    }
  ];

  const techStack = [
    "React 19", "Vite", "TailwindCSS", "Mappedin JS", "Capacitor JS", "Node.js", "Express", "MongoDB"
  ];

  return (
    <section id="engineering" className="py-24 relative bg-background border-t border-white/5">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-900/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            Software Engineering
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent">Works</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Showcasing full-stack applications and complex systems designed to solve real-world problems.
          </p>
        </motion.div>

        {/* Project Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl overflow-hidden flex flex-col lg:flex-row group relative"
        >
          {/* Content Side */}
          <div className="w-full lg:w-3/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20 text-white">
                <Navigation className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-3xl font-bold">CampusNav</h3>
                <p className="text-foreground/50 text-sm font-medium">Indoor Mapping & Navigation App</p>
              </div>
            </div>

            <p className="text-foreground/80 text-lg leading-relaxed mb-8">
              CampusNav is a modern, cross-platform indoor mapping and campus navigation application. It provides an intuitive "digital twin" of a campus, helping students, staff, and visitors seamlessly locate classrooms, labs, offices, and facilities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-emerald-400">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-foreground/60 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-10">
              <h4 className="text-sm font-bold text-foreground/50 uppercase tracking-wider mb-4">Technology Stack</h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-foreground/80">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-auto">
              <a 
                href="https://the-campus-nav.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/25"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo / Working Link
              </a>
              <a 
                href="https://github.com/imthiyasibnuibrahim/theCampusNav" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors border border-white/10"
              >
                <Github className="w-5 h-5" />
                GitHub Repository
              </a>
            </div>
          </div>

          {/* Visual Side */}
          <div className="w-full lg:w-2/5 relative min-h-[400px] lg:min-h-full bg-[#050505] border-l border-white/5 overflow-hidden flex items-center justify-center p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent z-0" />
            
            {/* Abstract Mobile App Representation */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 w-full max-w-[280px] aspect-[1/2] rounded-[2.5rem] border-[6px] border-white/10 bg-background shadow-2xl overflow-hidden flex flex-col"
            >
              {/* App Header */}
              <div className="h-16 border-b border-white/10 flex items-center px-6 gap-3 bg-white/5">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <Navigation className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="h-2 w-24 bg-white/20 rounded-full" />
              </div>
              {/* App Map Area */}
              <div className="flex-1 bg-[#0a0a0a] relative overflow-hidden p-4">
                {/* Simulated Path */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                   <path d="M 40 80 Q 80 100 120 60 T 200 120" stroke="#10b981" strokeWidth="4" fill="none" strokeDasharray="6 6" className="animate-pulse" />
                   <circle cx="40" cy="80" r="6" fill="#10b981" />
                   <circle cx="200" cy="120" r="6" fill="#ef4444" />
                </svg>
                {/* Simulated UI Cards */}
                <div className="absolute bottom-4 left-4 right-4 h-24 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 p-4">
                  <div className="h-3 w-3/4 bg-white/20 rounded-full mb-3" />
                  <div className="h-2 w-1/2 bg-white/10 rounded-full mb-2" />
                  <div className="h-2 w-1/3 bg-white/10 rounded-full" />
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
