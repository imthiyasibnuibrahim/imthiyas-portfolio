import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import JourneyTimeline from "@/components/JourneyTimeline";
import InteractiveDiagrams from "@/components/InteractiveDiagrams";
import CreativePortfolio from "@/components/CreativePortfolio";
import BusinessVentures from "@/components/BusinessVentures";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

import { client } from "@/sanity/lib/client";

export default async function Home() {
  const portfolioItems = await client.fetch(`*[_type == "portfolioItem" && isFeatured == true] | order(date desc)`);

  return (
    <main className="min-h-screen relative flex flex-col pt-safe bg-background text-foreground" id="top">
      <Navigation />
      
      <Hero />
      <JourneyTimeline />
      <InteractiveDiagrams />
      <CreativePortfolio initialItems={portfolioItems} />
      <BusinessVentures />
      <ContactForm />
      
      <Footer />
    </main>
  );
}
