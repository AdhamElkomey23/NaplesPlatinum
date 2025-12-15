import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { SearchSection } from "@/components/home/SearchSection";
import { FeaturedProperties } from "@/components/home/FeaturedProperties";
import { Communities } from "@/components/home/Communities";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Stats } from "@/components/home/Stats";
import { Testimonials } from "@/components/home/Testimonials";
import { Team } from "@/components/home/Team";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <SearchSection />
        <FeaturedProperties />
        <Communities />
        <WhyChooseUs />
        <Stats />
        <Testimonials />
        <Team />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
