import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import heroBg from "@assets/generated_images/luxury_waterfront_estate_hero_background.png";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center">
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
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-block bg-accent/90 px-3 py-1 rounded-sm mb-2 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="text-white text-xs font-bold uppercase tracking-widest">Naples Luxury Real Estate</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-tight drop-shadow-md animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Discover Your Dream <br /> Waterfront Estate
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-sm font-light animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
            Experience unparalleled luxury living in Southwest Florida's most prestigious communities
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white min-w-[200px] h-14 text-sm uppercase tracking-wide rounded-sm font-medium">
              View Exclusive Listings
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary min-w-[200px] h-14 text-sm uppercase tracking-wide rounded-sm font-medium bg-transparent backdrop-blur-sm">
              Request Free Valuation
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-16 bg-white rounded-md shadow-2xl p-4 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500 hidden md:block">
          <div className="grid grid-cols-4 gap-4">
            <Select>
              <SelectTrigger className="h-12 border-0 bg-gray-50 focus:ring-0 rounded-sm">
                <SelectValue placeholder="Select Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="naples">Naples</SelectItem>
                <SelectItem value="marco">Marco Island</SelectItem>
                <SelectItem value="bonita">Bonita Springs</SelectItem>
                <SelectItem value="cape">Cape Coral</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="h-12 border-0 bg-gray-50 focus:ring-0 rounded-sm">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="house">Single Family Home</SelectItem>
                <SelectItem value="condo">Condo / Apartment</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="h-12 border-0 bg-gray-50 focus:ring-0 rounded-sm">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1m-2m">$1M - $2M</SelectItem>
                <SelectItem value="2m-5m">$2M - $5M</SelectItem>
                <SelectItem value="5m+">$5M+</SelectItem>
              </SelectContent>
            </Select>

            <Button className="h-12 bg-accent hover:bg-accent/90 text-white rounded-sm font-medium uppercase tracking-wide w-full">
              <Search className="mr-2 h-4 w-4" /> Search Properties
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
