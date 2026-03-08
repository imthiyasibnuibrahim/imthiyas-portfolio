"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ShoppingCart, Star, Filter, Package, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import { urlFor } from "@/sanity/lib/image";

type Product = {
  _id: string;
  title: string;
  category: "Digital Asset" | "Physical Print" | "Preset";
  price: number;
  rating: number;
  mainImage?: any;
  badge?: string;
  description?: any;
};

interface StorefrontClientProps {
  initialProducts?: Product[];
}

export default function StorefrontClient({ initialProducts = [] }: StorefrontClientProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const displayProducts = initialProducts.length > 0 ? initialProducts : [];
  const filteredProducts = activeFilter === "All" 
    ? displayProducts 
    : displayProducts.filter(p => p.category === activeFilter);

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />

      <section className="flex-1 pt-32 pb-24 relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-900/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="mb-12">
            <Link href="/" className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary-400 transition-colors mb-6 text-sm font-medium">
              <ArrowLeft size={16} />
              Back to Portfolio
            </Link>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Creator <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-500">Storefront</span>
                </h1>
                <p className="text-foreground/70 max-w-xl text-lg">
                  Curated digital assets, Lightroom presets, and personalized physical prints available for purchase.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors font-medium">
                  <Filter size={18} />
                  Filters
                </button>
                <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-500 text-white transition-colors font-medium relative shadow-lg shadow-primary-500/20">
                  <ShoppingCart size={18} />
                  Cart
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-accent text-background text-xs font-bold flex items-center justify-center">
                    0
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {["All", "Digital Asset", "Preset", "Physical Print"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? "bg-foreground text-background"
                    : "bg-white/5 text-foreground/70 hover:bg-white/10 hover:text-foreground border border-white/10"
                }`}
              >
                {filter === "Physical Print" && <Package size={14} className="inline mr-2" />}
                {(filter === "Digital Asset" || filter === "Preset") && <ImageIcon size={14} className="inline mr-2" />}
                {filter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <motion.div
                key={product._id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden hover:border-white/20 transition-all"
              >
                {/* Product Image */}
                <div className={`relative aspect-square w-full bg-black/20 overflow-hidden`}>
                  {product.mainImage ? (
                      <img 
                        src={urlFor(product.mainImage).auto('format').fit('max').url()} 
                        alt={product.title} 
                        className="w-full h-full object-cover"
                      />
                  ) : (
                      <div className="absolute inset-0 flex items-center justify-center opacity-20">
                         <ImageIcon size={64} />
                      </div>
                  )}

                  {product.badge && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-accent text-background text-xs font-bold uppercase tracking-wider rounded-full z-10">
                      {product.badge}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                  
                  {/* Quick Add Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm z-20">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 rounded-full bg-white text-black font-semibold flex items-center gap-2 shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      <ShoppingCart size={18} />
                      Quick Add
                    </motion.button>
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-primary-400 uppercase tracking-wider">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1 text-yellow-500 text-sm font-medium">
                      <Star size={14} className="fill-yellow-500" />
                      {product.rating}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 line-clamp-2">{product.title}</h3>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-2xl font-light">${product.price}</span>
                    <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-foreground hover:bg-white hover:text-black transition-colors">
                      <ArrowRight size={18} className="-rotate-45" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
