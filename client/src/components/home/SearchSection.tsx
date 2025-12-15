import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function SearchSection() {
  return (
    <section className="relative z-20 py-12 bg-secondary border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-md shadow-lg p-6 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Select>
              <SelectTrigger className="h-12 border-gray-200 bg-gray-50 focus:ring-0 rounded-sm">
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
              <SelectTrigger className="h-12 border-gray-200 bg-gray-50 focus:ring-0 rounded-sm">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="house">Single Family Home</SelectItem>
                <SelectItem value="condo">Condo / Apartment</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="h-12 border-gray-200 bg-gray-50 focus:ring-0 rounded-sm">
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
