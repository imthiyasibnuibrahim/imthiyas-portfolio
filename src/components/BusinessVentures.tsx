"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Presentation, ShoppingBag, Target } from "lucide-react";

export default function BusinessVentures() {
  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Digital Strategy",
      description: "Data-driven marketing campaigns designed to maximize ROI, optimize conversion funnels, and scale user acquisition.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Growth Analytics",
      description: "Implementing complex tracking pixels and analytics tools to gain deeper granular insights into customer behavior.",
    },
    {
      icon: <Presentation className="w-6 h-6" />,
      title: "Brand Development",
      description: "Crafting compelling narratives and brand identities that resonate with target demographics and stand out in crowded markets.",
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "E-Commerce",
      description: "Running end-to-end e-commerce operations, from product sourcing to digital storefront optimization and fulfillment.",
    },
  ];

  return (
    <section id="ventures" className="py-24 relative overflow-hidden bg-background">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-900/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Entrepreneurial Endeavors
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Scaling Ideas into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-500">
                Profitable Ventures
              </span>
            </h2>
            
            <p className="text-foreground/70 text-lg mb-8 leading-relaxed">
              Beyond code and cameras, I am a builder of businesses. My expertise in digital marketing allows me to not just create products, but to ensure they effectively reach and resonate with their intended audience.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-400">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Digital Marketing Consulting</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    Leveraging programmatic advertising, SEO, and social media algorithms to drive targeted traffic and measurable growth for clients.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Personalized Framing Business</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    Founded and scaled a custom framing venture. Managing the entire operational pipeline from customer acquisition to product delivery and satisfaction.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors font-medium group"
              >
                Discuss a Project
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform text-accent" />
              </motion.a>
            </div>
          </motion.div>

          {/* Value Props / Visual Column */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5, scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
                className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all group cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-foreground to-foreground/80 flex items-center justify-center text-background mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
