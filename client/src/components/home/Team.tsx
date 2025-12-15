import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

import agent1 from "@assets/generated_images/male_broker_headshot.png";
import agent2 from "@assets/generated_images/female_agent_headshot.png";
import agent3 from "@assets/generated_images/male_agent_headshot_2.png";

const agents = [
  {
    name: "James Sterling",
    role: "Founder & Principal Broker",
    bio: "With over 20 years in luxury real estate, James has built a reputation as Naples' most trusted property expert.",
    image: agent1
  },
  {
    name: "Victoria Chase",
    role: "Senior Partner",
    bio: "Specializing in waterfront estates, Victoria has closed over $200M in sales and maintains a 100% client satisfaction rate.",
    image: agent2
  },
  {
    name: "Michael Torres",
    role: "Luxury Property Specialist",
    bio: "Former architect turned realtor, Michael brings unique insights into property value and design potential.",
    image: agent3
  }
];

export function Team() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Meet Our Experts</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">Award-winning agents dedicated to your success</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {agents.map((agent, index) => (
            <div key={index} className="group">
              <div className="relative mb-6 overflow-hidden rounded-lg aspect-square">
                <img 
                  src={agent.image} 
                  alt={agent.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-serif font-bold text-primary mb-1">{agent.name}</h3>
                <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">{agent.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 max-w-xs mx-auto">{agent.bio}</p>
                <div className="flex justify-center space-x-3">
                  <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-white rounded-sm">Contact {agent.name.split(' ')[0]}</Button>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-primary rounded-full">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
