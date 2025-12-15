import { Link } from "wouter";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Properties", href: "#properties" },
    { name: "Communities", href: "#communities" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-primary text-white py-4 shadow-lg"
          : "bg-transparent text-white py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif font-bold tracking-tight cursor-pointer">
          NAPLES<span className="text-accent">PLATINUM</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wide hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-6">
          <a href="tel:+12395551975" className="flex items-center space-x-2 text-sm font-medium hover:text-accent transition-colors">
            <Phone className="h-4 w-4" />
            <span>(239) 555-1975</span>
          </a>
          <Button className="bg-accent hover:bg-accent/90 text-white font-medium uppercase tracking-wide rounded-sm px-6">
            Schedule Consultation
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-primary border-t border-white/10 p-6 shadow-xl">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white text-lg font-medium hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col space-y-4">
              <a href="tel:+12395551975" className="flex items-center space-x-2 text-white font-medium">
                <Phone className="h-4 w-4" />
                <span>(239) 555-1975</span>
              </a>
              <Button className="bg-accent hover:bg-accent/90 text-white w-full">
                Schedule Consultation
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
