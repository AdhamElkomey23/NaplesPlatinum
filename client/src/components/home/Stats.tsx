import { Trophy, Users, Home, Award } from "lucide-react";

const stats = [
  {
    icon: Trophy,
    number: "$500M+",
    label: "IN PROPERTY SALES"
  },
  {
    icon: Users,
    number: "500+",
    label: "HAPPY CLIENTS"
  },
  {
    icon: Home,
    number: "15+",
    label: "YEARS EXPERIENCE"
  },
  {
    icon: Award,
    number: "98%",
    label: "SATISFACTION RATE"
  }
];

export function Stats() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <stat.icon className="w-14 h-14 text-accent mb-6 opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">{stat.number}</div>
              <div className="text-xs md:text-sm font-medium uppercase tracking-widest text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
