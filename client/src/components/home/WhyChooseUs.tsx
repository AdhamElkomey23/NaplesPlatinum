import { Star, Shield, Heart, Home } from "lucide-react";

const benefits = [
  {
    icon: Star,
    title: "Local Market Expertise",
    description: "Over 15 years of experience in Southwest Florida's luxury real estate market with deep knowledge of every community."
  },
  {
    icon: Shield,
    title: "Trusted Professionals",
    description: "Award-winning agents with proven track records. We've successfully closed over $500M in luxury property transactions."
  },
  {
    icon: Heart,
    title: "White-Glove Service",
    description: "Personalized attention for every client. From first viewing to closing day, we're with you every step of the journey."
  },
  {
    icon: Home,
    title: "Exclusive Listings",
    description: "Access to off-market properties and pre-launch opportunities not available to the general public."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">The Naples Platinum Difference</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">Exceptional service, unmatched expertise, outstanding results</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 text-accent">
                <benefit.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary mb-3">{benefit.title}</h3>
              <p className="text-gray-500 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
