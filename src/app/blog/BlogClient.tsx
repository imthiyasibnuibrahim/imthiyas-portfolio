"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Clock, Code, Film, Calendar } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import { urlFor } from "@/sanity/lib/image";

type BlogPost = {
  _id: string;
  title: string;
  excerpt: string;
  category: "Technical" | "Creative";
  publishedAt: string;
  readTime: string;
  mainImage: any;
  tags: string[];
};

interface BlogClientProps {
  initialPosts?: BlogPost[];
}

export default function BlogClient({ initialPosts = [] }: BlogClientProps) {
  const [activeCategory, setActiveCategory] = useState<"All" | "Technical" | "Creative">("All");

  const displayPosts = initialPosts.length > 0 ? initialPosts : [];
  const filteredPosts = activeCategory === "All" 
    ? displayPosts 
    : displayPosts.filter(p => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />

      <section className="flex-1 pt-32 pb-24 relative">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          
          <div className="mb-16">
            <Link href="/" className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary-400 transition-colors mb-6 text-sm font-medium">
              <ArrowLeft size={16} />
              Back to Portfolio
            </Link>
            
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Dispatches & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Insights</span>
              </h1>
              <p className="text-foreground/70 text-lg">
                Technical deep dives into AWS and software engineering, alongside creative breakdowns of my cinematography and photography projects.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-12">
            {["All", "Technical", "Creative"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category as any)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-foreground text-background shadow-lg"
                    : "bg-white/5 text-foreground/70 hover:bg-white/10 hover:text-foreground border border-white/10"
                }`}
              >
                {category === "Technical" && <Code size={14} className="inline mr-2" />}
                {category === "Creative" && <Film size={14} className="inline mr-2" />}
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <motion.article
                key={post._id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col sm:flex-row gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all cursor-pointer"
              >
                {/* Thumbnail */}
                <div className={`w-full sm:w-48 h-48 sm:h-auto rounded-2xl flex-shrink-0 relative overflow-hidden bg-white/5`}>
                  {post.mainImage && (
                    <img 
                      src={urlFor(post.mainImage).auto('format').fit('max').url()} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-10">
                     <span className={`px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded backdrop-blur-md ${
                       post.category === "Technical" ? "bg-blue-500/80 text-white" : "bg-purple-500/80 text-white"
                     }`}>
                       {post.category}
                     </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 py-2">
                  <div className="flex items-center gap-4 text-xs text-foreground/50 mb-3 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {new Date(post.publishedAt).toLocaleDateString()}
                    </span>
                    {post.readTime && (
                      <span className="flex items-center gap-1">
                        <Clock size={12} /> {post.readTime}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-foreground/60 text-sm line-clamp-3 mb-6 flex-1">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {post.tags?.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-foreground/70">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
