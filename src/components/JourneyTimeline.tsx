"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cloud, Code, Database, Server, Smartphone, Terminal } from "lucide-react";

export default function JourneyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const journeyItems = [
    {
      year: "2024",
      title: "Cloud & DevOps Focus",
      description: "Deep dive into AWS ecosystem. Building scalable CI/CD pipelines, containerizing applications with Docker, and provisioning infrastructure using Terraform.",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: ["AWS", "Docker", "CI/CD", "Terraform"],
    },
    {
      year: "2023",
      title: "Smart Campus Navigation App",
      description: "Developed a comprehensive routing and navigation system for GEC Palakkad campus. Implemented sophisticated pathfinding algorithms and a user-friendly mobile interface.",
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-500",
      skills: ["React Native", "Node.js", "MongoDB", "Algorithms"],
    },
    {
      year: "2022",
      title: "Full Stack Engineering",
      description: "Mastered modern web development paradigms. Built robust RESTful APIs, designed relational database schemas, and created responsive frontend applications.",
      icon: <Server className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      skills: ["React", "Express", "PostgreSQL", "System Design"],
    },
    {
      year: "2021",
      title: "Computer Science Foundations",
      description: "Started the journey at GEC Palakkad. Built a strong foundation in data structures, generic programming, and computational solving.",
      icon: <Terminal className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      skills: ["C++", "Java", "Data Structures", "OOP"],
    },
  ];

  return (
    <section id="journey" className="py-24 relative bg-background">
      <div className="container mx-auto px-6 md:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">The Engineering <span className="text-primary-500">Journey</span></h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            A chronological look at my technical evolution, focusing on software development, cloud infrastructure, and DevOps practices.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          
          {/* Animated Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-white/5 md:-translate-x-1/2 rounded-full overflow-hidden">
            <motion.div 
              style={{ height: timelineHeight }} 
              className="w-full bg-gradient-to-b from-primary-500 via-accent to-purple-500 rounded-full"
            />
          </div>

          <div className="space-y-16">
            {journeyItems.map((item, index) => (
              <TimelineItem 
                key={index} 
                item={item} 
                index={index} 
                isLeft={index % 2 === 0} 
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item, index, isLeft }: { item: any; index: number; isLeft: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`relative flex flex-col md:flex-row items-center ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Icon Node */}
      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-background border-4 border-primary-900 z-10 shadow-[0_0_15px_rgba(37,99,235,0.3)]">
        <div className={`w-full h-full rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white p-2.5`}>
          {item.icon}
        </div>
      </div>

      {/* Content Card */}
      <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}>
        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group overflow-hidden relative">
          
          {/* Architecture Blueprint Hover Effect for AWS Item (Future Feature Hook) */}
          {item.year === "2024" && (
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 group-hover:scale-105 transition-all duration-700 pointer-events-none flex items-center justify-center">
              <div className="absolute font-mono text-xs border border-white/20 p-2 rounded transform rotate-12 -translate-y-4">
                Architecture Diagram
              </div>
            </div>
          )}

          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4 bg-gradient-to-r ${item.color} text-white shadow-lg relative z-10`}>
            {item.year}
          </span>
          <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-400 transition-colors relative z-10">
            {item.title}
          </h3>
          <p className="text-foreground/70 mb-6 leading-relaxed">
            {item.description}
          </p>
          <div className={`flex flex-wrap gap-2 ${isLeft ? "md:justify-end" : "md:justify-start"}`}>
            {item.skills.map((skill: string, idx: number) => (
              <span 
                key={idx}
                className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-foreground/80 hover:text-white hover:border-white/30 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      
    </motion.div>
  );
}
