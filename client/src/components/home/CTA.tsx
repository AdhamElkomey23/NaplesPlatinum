import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden" id="contact">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
            Ready to Find Your Dream Estate?
          </h2>
          <p className="text-xl text-white/80 font-light">
            Let our experienced team guide you to the perfect luxury property in Southwest Florida
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white min-w-[200px] h-14 text-sm uppercase tracking-wide rounded-sm font-medium">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary min-w-[200px] h-14 text-sm uppercase tracking-wide rounded-sm font-medium bg-transparent">
              Browse All Properties
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 text-white/70">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>Call Us Today: (239) 555-1975</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <span>Email: info@naplesplatinum.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
