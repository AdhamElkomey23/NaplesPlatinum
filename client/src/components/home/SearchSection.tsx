import { Search, MapPin, Home, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export function SearchSection() {
  return (
    <section className="relative z-20 py-16 bg-secondary border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 space-y-3">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
            Choose Your Home with the Perfect Location
          </h2>
          <p className="text-gray-500 text-lg">
            Search through our exclusive database of luxury properties
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
            <div className="space-y-3">
              <Label htmlFor="location" className="text-sm font-medium text-gray-500 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Location
              </Label>
              <Select>
                <SelectTrigger id="location" className="h-12 border-gray-200 bg-gray-50 focus:ring-0 rounded-lg">
                  <SelectValue placeholder="Select Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="naples">Naples</SelectItem>
                  <SelectItem value="marco">Marco Island</SelectItem>
                  <SelectItem value="bonita">Bonita Springs</SelectItem>
                  <SelectItem value="cape">Cape Coral</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label htmlFor="type" className="text-sm font-medium text-gray-500 flex items-center gap-2">
                <Home className="w-4 h-4" />
                Property Type
              </Label>
              <Select>
                <SelectTrigger id="type" className="h-12 border-gray-200 bg-gray-50 focus:ring-0 rounded-lg">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="house">Single Family Home</SelectItem>
                  <SelectItem value="condo">Condo / Apartment</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label htmlFor="price" className="text-sm font-medium text-gray-500 flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Price Range
              </Label>
              <Select>
                <SelectTrigger id="price" className="h-12 border-gray-200 bg-gray-50 focus:ring-0 rounded-lg">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1m-2m">$1M - $2M</SelectItem>
                  <SelectItem value="2m-5m">$2M - $5M</SelectItem>
                  <SelectItem value="5m+">$5M+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="h-12 bg-accent hover:bg-accent/90 text-white rounded-full font-medium uppercase tracking-wide w-full shadow-md">
              <Search className="mr-2 h-4 w-4" /> Search Properties
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
