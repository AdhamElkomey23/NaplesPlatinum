import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import heroBg from "@assets/generated_images/luxury_waterfront_estate_hero_background.png";

export function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/20 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-tight drop-shadow-md animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Discover Your Dream Waterfront Estate
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-sm font-light animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
            Experience unparalleled luxury living in Southwest Florida
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white min-w-[200px] h-14 text-sm uppercase tracking-wide rounded-sm font-medium">
              View Exclusive Listings
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary min-w-[200px] h-14 text-sm uppercase tracking-wide rounded-sm font-medium bg-transparent backdrop-blur-sm">
              Request Free Valuation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
