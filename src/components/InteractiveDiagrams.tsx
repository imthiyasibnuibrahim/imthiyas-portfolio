"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cloud, Database, Globe, Lock, Server, Shield, Zap } from "lucide-react";

type NodeId = 'route53' | 'cloudfront' | 'waf' | 'alb' | 'ec2' | 'rds' | 's3' | null;

export default function InteractiveDiagrams() {
  const [activeNode, setActiveNode] = useState<NodeId>(null);

  const nodes = {
    route53: {
      id: "route53",
      name: "Amazon Route 53",
      icon: <Globe className="w-6 h-6" />,
      description: "Highly available and scalable cloud Domain Name System (DNS) web service. Routes user requests globally to the nearest edge location.",
      color: "from-blue-400 to-blue-600",
      x: "10%",
      y: "50%",
    },
    cloudfront: {
      id: "cloudfront",
      name: "Amazon CloudFront",
      icon: <Zap className="w-6 h-6" />,
      description: "Content Delivery Network (CDN) that securely delivers data, videos, applications, and APIs to customers globally with low latency.",
      color: "from-purple-400 to-purple-600",
      x: "25%",
      y: "30%",
    },
    waf: {
      id: "waf",
      name: "AWS WAF",
      icon: <Shield className="w-6 h-6" />,
      description: "Web Application Firewall that helps protect web applications or APIs against common web exploits and bots that may affect availability.",
      color: "from-red-400 to-red-600",
      x: "40%",
      y: "30%",
    },
    alb: {
      id: "alb",
      name: "Application Load Balancer",
      icon: <Server className="w-6 h-6" />,
      description: "Distributes incoming application traffic across multiple targets, such as EC2 instances, in multiple Availability Zones.",
      color: "from-emerald-400 to-emerald-600",
      x: "55%",
      y: "50%",
    },
    ec2: {
      id: "ec2",
      name: "Auto Scaling EC2 Target Group",
      icon: <Server className="w-6 h-6" />,
      description: "Secure and resizable compute capacity in the cloud. Auto Scaling ensures the correct number of Amazon EC2 instances are available to handle the load.",
      color: "from-orange-400 to-orange-600",
      x: "70%",
      y: "30%",
    },
    rds: {
      id: "rds",
      name: "Amazon RDS (Multi-AZ)",
      icon: <Database className="w-6 h-6" />,
      description: "Managed relational database service providing high availability, durability, and automatic failover for critical data.",
      color: "from-blue-500 to-indigo-600",
      x: "85%",
      y: "70%",
    },
    s3: {
      id: "s3",
      name: "Amazon S3",
      icon: <Cloud className="w-6 h-6" />,
      description: "Object storage service offering industry-leading scalability, data availability, security, and performance for static assets.",
      color: "from-green-400 to-emerald-600",
      x: "70%",
      y: "70%",
    },
  };

  return (
    <section id="architecture" className="py-24 relative bg-background border-t border-white/5 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.02]" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
            <Lock className="w-4 h-4" />
            DevOps Showcase
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Cloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Architecture</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Hover over the components below to explore the design decisions behind a highly available, scalable, and secure AWS web application infrastructure.
          </p>
        </motion.div>

        {/* Interactive Diagram Canvas */}
        <div className="relative w-full h-[600px] md:h-[500px] rounded-[2rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row p-6">
          
          {/* Node Canvas Area */}
          <div className="relative w-full md:w-2/3 h-1/2 md:h-full border-b md:border-b-0 md:border-r border-white/10 p-4">
            
            {/* SVG Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5" />
                </linearGradient>
              </defs>
              <path d="M 10% 50% L 25% 30%" stroke="url(#lineGrad)" strokeWidth="2" fill="none" strokeDasharray="4 4" className="animate-pulse" />
              <path d="M 25% 30% L 40% 30%" stroke="url(#lineGrad)" strokeWidth="2" fill="none" strokeDasharray="4 4" />
              <path d="M 40% 30% L 55% 50%" stroke="url(#lineGrad)" strokeWidth="2" fill="none" strokeDasharray="4 4" />
              <path d="M 10% 50% L 55% 50%" stroke="url(#lineGrad)" strokeWidth="2" fill="none" strokeDasharray="4 4" opacity="0.5" />
              <path d="M 55% 50% L 70% 30%" stroke="url(#lineGrad)" strokeWidth="2" fill="none" strokeDasharray="4 4" />
              <path d="M 55% 50% L 70% 70%" stroke="url(#lineGrad)" strokeWidth="2" fill="none" strokeDasharray="4 4" />
              <path d="M 70% 30% L 85% 70%" stroke="url(#lineGrad)" strokeWidth="2" fill="none" strokeDasharray="4 4" opacity="0.5" />
            </svg>

            {/* Render Nodes */}
            {Object.values(nodes).map((node) => (
              <motion.div
                key={node.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
                style={{ left: node.x, top: node.y }}
                whileHover={{ scale: 1.15, zIndex: 20 }}
                onMouseEnter={() => setActiveNode(node.id as NodeId)}
              >
                <div className={`p-4 rounded-2xl bg-background border border-white/20 shadow-[0_0_20px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center gap-2 transition-all 
                  ${activeNode === node.id ? `ring-2 ring-white/50 shadow-[0_0_30px_rgba(59,130,246,0.3)]` : ''}`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${node.color}`}>
                    {node.icon}
                  </div>
                  <span className="text-[10px] font-bold text-foreground/80 md:hidden absolute -bottom-5 text-center w-24">
                    {node.name.split(' ')[1] || node.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Info Panel Area */}
          <div className="w-full md:w-1/3 h-1/2 md:h-full p-6 md:p-8 flex items-center justify-center bg-black/20">
            <AnimatePresence mode="wait">
              {activeNode ? (
                <motion.div
                  key={activeNode}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${nodes[activeNode].color} mb-6 shadow-lg`}>
                    {nodes[activeNode].icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{nodes[activeNode].name}</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {nodes[activeNode].description}
                  </p>
                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-xs text-primary-400 font-mono">
                    <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                    System Active
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center text-foreground/40"
                >
                  <Server className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Hover over any architecture node to view detailed technical specifications.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
