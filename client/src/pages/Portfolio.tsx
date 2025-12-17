import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import livingRoomImage from "@assets/generated_images/luxury_living_room_hero.png";
import kitchenImage from "@assets/generated_images/modern_luxury_kitchen.png";
import bedroomImage from "@assets/generated_images/luxury_master_bedroom.png";
import officeImage from "@assets/generated_images/modern_office_interior.png";
import diningImage from "@assets/generated_images/elegant_dining_room.png";
import bathroomImage from "@assets/generated_images/luxury_spa_bathroom.png";

const categories = ["All", "Residential", "Commercial", "Kitchen", "Bedroom", "Bathroom"];

const projects = [
  {
    id: 1,
    title: "Modern Manhattan Penthouse",
    category: "Residential",
    location: "New York, NY",
    area: "3,500 sq ft",
    image: livingRoomImage,
    description: "A luxurious penthouse featuring floor-to-ceiling windows, custom millwork, and a curated art collection.",
  },
  {
    id: 2,
    title: "Gourmet Chef's Kitchen",
    category: "Kitchen",
    location: "Brooklyn, NY",
    area: "450 sq ft",
    image: kitchenImage,
    description: "A professional-grade kitchen with marble countertops, custom cabinetry, and state-of-the-art appliances.",
  },
  {
    id: 3,
    title: "Serene Master Suite",
    category: "Bedroom",
    location: "Hamptons, NY",
    area: "800 sq ft",
    image: bedroomImage,
    description: "A tranquil retreat featuring bespoke furniture, luxury textiles, and a spa-inspired ensuite.",
  },
  {
    id: 4,
    title: "Tech Startup Headquarters",
    category: "Commercial",
    location: "San Francisco, CA",
    area: "12,000 sq ft",
    image: officeImage,
    description: "An innovative workspace designed to foster collaboration, creativity, and employee wellbeing.",
  },
  {
    id: 5,
    title: "Elegant Formal Dining",
    category: "Residential",
    location: "Greenwich, CT",
    area: "600 sq ft",
    image: diningImage,
    description: "A sophisticated dining room with custom lighting, statement chandelier, and designer furniture.",
  },
  {
    id: 6,
    title: "Luxury Spa Bathroom",
    category: "Bathroom",
    location: "Miami, FL",
    area: "350 sq ft",
    image: bathroomImage,
    description: "A spa-like sanctuary featuring a freestanding tub, marble surfaces, and heated floors.",
  },
  {
    id: 7,
    title: "Boutique Hotel Lobby",
    category: "Commercial",
    location: "Los Angeles, CA",
    area: "2,800 sq ft",
    image: livingRoomImage,
    description: "A welcoming hotel entrance blending contemporary design with local artistic influences.",
  },
  {
    id: 8,
    title: "Contemporary Kitchen Remodel",
    category: "Kitchen",
    location: "Chicago, IL",
    area: "380 sq ft",
    image: kitchenImage,
    description: "A complete kitchen transformation featuring integrated appliances and waterfall island.",
  },
  {
    id: 9,
    title: "Urban Loft Bedroom",
    category: "Bedroom",
    location: "Boston, MA",
    area: "550 sq ft",
    image: bedroomImage,
    description: "An industrial-chic bedroom with exposed brick, custom built-ins, and designer lighting.",
  },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="pt-32 pb-12" data-testid="section-portfolio-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Our Portfolio
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl mb-6">
              Featured Projects
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our collection of completed projects showcasing our commitment 
              to exceptional design and craftsmanship.
            </p>
          </div>
        </section>

        <section className="pb-8 sticky top-20 z-40 bg-background/95 backdrop-blur-sm" data-testid="section-portfolio-filters">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3 py-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                  data-testid={`button-filter-${category.toLowerCase()}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20" data-testid="section-portfolio-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                  data-testid={`card-portfolio-${project.id}`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <Badge variant="secondary" className="mb-2">
                      {project.category}
                    </Badge>
                    <h3 className="font-serif text-xl text-white">{project.title}</h3>
                    <p className="text-white/70 text-sm">{project.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden">
            {selectedProject && (
              <>
                <div className="relative aspect-video">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Badge variant="secondary" className="mb-2">
                        {selectedProject.category}
                      </Badge>
                      <DialogTitle className="font-serif text-2xl">
                        {selectedProject.title}
                      </DialogTitle>
                    </div>
                  </div>
                  <div className="flex gap-6 text-sm text-muted-foreground">
                    <span>Location: {selectedProject.location}</span>
                    <span>Area: {selectedProject.area}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </main>
      <Footer />
    </div>
  );
}
