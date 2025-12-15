import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#2d3748] text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-serif font-bold tracking-tight block mb-4 cursor-pointer">
              NAPLES<span className="text-accent">PLATINUM</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner in luxury real estate, dedicated to finding you the perfect waterfront estate in Southwest Florida's most prestigious communities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Properties", "Communities", "About Us", "Contact", "Blog"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-accent transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Communities */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Communities</h4>
            <ul className="space-y-3">
              {["Naples", "Marco Island", "Bonita Springs", "Cape Coral", "Estero", "Fort Myers"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-accent transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5" />
                <span className="text-gray-400 text-sm">1875 Pine Ridge Rd,<br />Naples, FL 34108</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-gray-400 text-sm">(239) 555-1975</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-gray-400 text-sm">info@naplesplatinum.com</span>
              </li>
              <li className="pt-2">
                <span className="text-gray-500 text-xs uppercase tracking-wider block mb-1">Office Hours</span>
                <span className="text-gray-400 text-sm">Mon-Sat: 9AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; 2024 Naples Platinum Realty Group. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
