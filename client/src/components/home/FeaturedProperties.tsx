import { MapPin, BedDouble, Bath, SquareArrowOutUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Import images
import prop1 from "@assets/generated_images/luxury_beachfront_mansion.png";
import prop2 from "@assets/generated_images/modern_waterfront_villa.png";
import prop3 from "@assets/generated_images/private_island_residence.png";
import prop4 from "@assets/generated_images/contemporary_beach_house.png";
import prop5 from "@assets/generated_images/golf_course_estate.png";
import prop6 from "@assets/generated_images/coastal_mansion.png";

const properties = [
  {
    id: 1,
    title: "Luxury Beachfront Estate",
    location: "Naples, FL",
    price: "$4,250,000",
    beds: 5,
    baths: 6,
    sqft: "6,500",
    image: prop1,
    featured: true,
  },
  {
    id: 2,
    title: "Modern Waterfront Villa",
    location: "Marco Island, FL",
    price: "$3,850,000",
    beds: 4,
    baths: 5,
    sqft: "5,200",
    image: prop2,
    featured: true,
  },
  {
    id: 3,
    title: "Private Island Residence",
    location: "Bonita Springs, FL",
    price: "$7,500,000",
    beds: 6,
    baths: 7,
    sqft: "8,000",
    image: prop3,
    featured: true,
  },
  {
    id: 4,
    title: "Contemporary Beach House",
    location: "Naples, FL",
    price: "$2,950,000",
    beds: 4,
    baths: 4,
    sqft: "4,200",
    image: prop4,
    featured: true,
  },
  {
    id: 5,
    title: "Golf Course Estate",
    location: "Estero, FL",
    price: "$3,200,000",
    beds: 5,
    baths: 6,
    sqft: "6,800",
    image: prop5,
    featured: true,
  },
  {
    id: 6,
    title: "Coastal Mansion",
    location: "Cape Coral, FL",
    price: "$8,750,000",
    beds: 7,
    baths: 8,
    sqft: "9,500",
    image: prop6,
    featured: true,
  },
];

export function FeaturedProperties() {
  return (
    <section className="py-24 bg-white" id="properties">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Signature Properties</h2>
            <p className="text-gray-500 text-lg">Explore our curated collection of premium waterfront estates</p>
          </div>
          <a href="#" className="hidden md:flex items-center text-accent font-medium hover:text-accent/80 transition-colors mt-4 md:mt-0">
            View All Properties <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card key={property.id} className="group overflow-hidden border border-gray-100/80 shadow-sm hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] hover:border-accent/20 transition-all duration-500 rounded-xl bg-white">
              <div className="relative aspect-[16/9] overflow-hidden rounded-t-xl">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                {property.featured && (
                  <Badge className="absolute top-4 left-4 bg-[#d4af37] hover:bg-[#d4af37]/90 text-white border-none rounded-sm px-3 py-1 font-medium uppercase tracking-wide text-xs shadow-md">
                    Featured
                  </Badge>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
                   <Button className="w-full bg-accent hover:bg-accent/90 text-white rounded-sm">View Details</Button>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif font-bold text-primary line-clamp-1">{property.title}</h3>
                </div>
                
                <div className="flex items-center text-gray-700 mb-4 text-base font-medium">
                  <MapPin className="h-5 w-5 mr-1" />
                  {property.location}
                </div>

                <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-100 mb-4">
                  <div className="flex items-center text-gray-600 text-sm">
                    <BedDouble className="h-4 w-4 mr-2 text-gray-400" />
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Bath className="h-4 w-4 mr-2 text-gray-400" />
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <SquareArrowOutUpRight className="h-4 w-4 mr-2 text-gray-400" />
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{property.price}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Button variant="outline" className="w-full border-accent text-accent">View All Properties</Button>
        </div>
      </div>
    </section>
  );
}
