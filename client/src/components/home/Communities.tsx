import naplesImg from "@assets/generated_images/naples_beach_aerial.png";
import marcoImg from "@assets/generated_images/marco_island_sunset.png";
import bonitaImg from "@assets/generated_images/bonita_springs_marina.png";
import capeImg from "@assets/generated_images/cape_coral_aerial.png";

const communities = [
  {
    name: "Naples",
    count: 142,
    image: naplesImg,
    desc: "Coastal paradise with pristine beaches"
  },
  {
    name: "Marco Island",
    count: 86,
    image: marcoImg,
    desc: "Island living at its finest"
  },
  {
    name: "Bonita Springs",
    count: 54,
    image: bonitaImg,
    desc: "Family-friendly waterfront living"
  },
  {
    name: "Cape Coral",
    count: 93,
    image: capeImg,
    desc: "Florida's waterfront wonderland"
  }
];

export function Communities() {
  return (
    <section className="py-24 bg-secondary" id="communities">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Explore Southwest Florida Communities</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">Find the perfect neighborhood to call home</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {communities.map((community) => (
            <div key={community.name} className="group relative overflow-hidden rounded-lg cursor-pointer h-[400px]">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${community.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 p-6 w-full transform transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="text-2xl font-serif font-bold text-white mb-1">{community.name}</h3>
                <p className="text-white/80 text-sm mb-2">{community.desc}</p>
                <p className="text-accent text-xs font-medium uppercase tracking-wider">{community.count} Properties Available</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
