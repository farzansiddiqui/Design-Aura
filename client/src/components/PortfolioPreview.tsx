import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import livingRoomImage from "@assets/generated_images/luxury_living_room_hero.png";
import kitchenImage from "@assets/generated_images/modern_luxury_kitchen.png";
import bedroomImage from "@assets/generated_images/luxury_master_bedroom.png";
import officeImage from "@assets/generated_images/modern_office_interior.png";
import diningImage from "@assets/generated_images/elegant_dining_room.png";
import bathroomImage from "@assets/generated_images/luxury_spa_bathroom.png";

const projects = [
  { id: 1, title: "Modern Penthouse", category: "Residential", image: livingRoomImage },
  { id: 2, title: "Gourmet Kitchen", category: "Kitchen", image: kitchenImage },
  { id: 3, title: "Master Suite", category: "Bedroom", image: bedroomImage },
  { id: 4, title: "Tech Startup Office", category: "Commercial", image: officeImage },
  { id: 5, title: "Elegant Dining", category: "Dining", image: diningImage },
  { id: 6, title: "Spa Bathroom", category: "Bathroom", image: bathroomImage },
];

export default function PortfolioPreview() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-card" data-testid="section-portfolio-preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Our Work
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl max-w-lg">
              Featured Projects
            </h2>
          </div>
          <Link href="/portfolio">
            <Button variant="outline" className="gap-2" data-testid="button-view-portfolio">
              View Full Portfolio
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link key={project.id} href={`/portfolio/${project.id}`}>
              <div
                className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                data-testid={`card-project-${project.id}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                />
                <div
                  className={`absolute bottom-0 left-0 right-0 p-6 transition-transform duration-300 ${
                    hoveredIndex === index ? "translate-y-0" : "translate-y-full"
                  }`}
                >
                  <p className="text-white/70 text-sm uppercase tracking-wider mb-1">
                    {project.category}
                  </p>
                  <h3 className="font-serif text-xl text-white">{project.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
