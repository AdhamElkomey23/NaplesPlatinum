import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "Working with Naples Platinum was an absolute pleasure. They found us the perfect waterfront property and guided us through every step of the process. Highly recommended!",
    author: "Sarah Mitchell",
    role: "Homeowner, Marco Island",
    initials: "SM"
  },
  {
    quote: "Professional, knowledgeable, and always available. They sold our estate in record time for above asking price. We couldn't be happier!",
    author: "Robert Chen",
    role: "Former Seller, Naples",
    initials: "RC"
  },
  {
    quote: "The team's expertise in the luxury market is unmatched. They understood exactly what we were looking for and delivered beyond our expectations.",
    author: "Jennifer Rodriguez",
    role: "Homeowner, Bonita Springs",
    initials: "JR"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">What Our Clients Say</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">Don't just take our word for it - hear from our satisfied clients</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-600 italic mb-8 flex-grow leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center mt-auto">
                  <Avatar className="h-12 w-12 mr-4 border-2 border-white shadow-sm">
                    <AvatarFallback className="bg-primary text-white text-xs">{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold text-primary">{testimonial.author}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
