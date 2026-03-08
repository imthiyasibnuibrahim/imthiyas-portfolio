"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Film, Maximize2 } from "lucide-react";

import { urlFor } from "@/sanity/lib/image";

type Category = "All" | "Photography" | "Cinematography";

export interface PortfolioItem {
  _id: string;
  title: string;
  category: "Photography" | "Cinematography";
  image: any;
  description: string;
  date: string;
  isFeatured: boolean;
  span?: string; 
}

interface CreativePortfolioProps {
  initialItems?: PortfolioItem[];
}

export default function CreativePortfolio({ initialItems = [] }: CreativePortfolioProps) {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // If initialItems is empty (user hasn't added data in Sanity yet), provide a graceful fallback
  const displayItems = initialItems.length > 0 ? initialItems : [];

  const filteredItems = displayItems.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-24 bg-background relative border-t border-white/5">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Vision</span>
            </h2>
            <p className="text-foreground/70 text-lg">
              Showcasing my work behind the lens. From intricate details captured on my Nikon Z6 to directorial projects with the Frame'24 film club.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-2"
          >
            {(["All", "Photography", "Cinematography"] as Category[]).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === category
                    ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    : "bg-white/5 text-foreground/70 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {category === "Photography" && <Camera size={14} className="inline mr-2" />}
                {category === "Cinematography" && <Film size={14} className="inline mr-2" />}
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              // Procedurally generate span classes if they aren't provided by Sanity
              // This makes the masonry grid dynamic
              const spanClass = item.span || (index % 5 === 0 ? "md:col-span-2 md:row-span-2" : index % 3 === 0 ? "md:col-span-1 md:row-span-2" : "md:col-span-1 md:row-span-1");
              
              return (
                <motion.div
                  key={item._id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className={`relative rounded-3xl overflow-hidden group cursor-pointer border border-white/10 ${
                    activeCategory === "All" ? spanClass : "md:col-span-1 md:row-span-1"
                  }`}
                  onMouseEnter={() => setHoveredId(item._id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Dynamic Sanity Image */}
                  <div className={`absolute inset-0 transition-transform duration-700 group-hover:scale-110 flex items-center justify-center bg-white/5`}>
                     {item.image ? (
                        <img 
                          src={urlFor(item.image).auto('format').fit('max').url()} 
                          alt={item.title} 
                          className="w-full h-full object-cover"
                        />
                     ) : (
                        <div className="opacity-20 flex flex-col items-center">
                            {item.category === "Photography" ? <Camera size={64} /> : <Film size={64} />}
                            <span className="font-mono mt-4 text-sm bg-black/50 px-3 py-1 rounded-md">Missing Image</span>
                        </div>
                     )}
                  </div>
                  
                  {/* Overlay */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 flex flex-col justify-end p-8 ${
                      hoveredId === item._id ? "opacity-100" : "opacity-0 md:opacity-100 lg:opacity-0"
                    }`}
                  >
                  <div className="transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                    <span className="text-xs font-bold tracking-wider text-accent uppercase mb-2 block">
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/70 text-sm line-clamp-2">{item.description}</p>
                  </div>
                  
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-4 group-hover:translate-y-0">
                    <Maximize2 size={18} className="text-white" />
                  </div>
                </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
