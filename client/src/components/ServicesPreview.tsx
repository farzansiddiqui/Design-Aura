import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import kitchenImage from "@assets/generated_images/modern_luxury_kitchen.png";
import bedroomImage from "@assets/generated_images/luxury_master_bedroom.png";
import officeImage from "@assets/generated_images/modern_office_interior.png";

const services = [
  {
    title: "Residential Design",
    description: "Transform your home into a personalized sanctuary with our full-service residential interior design.",
    image: bedroomImage,
    link: "/services#residential",
  },
  {
    title: "Modular Interiors",
    description: "Efficient, space-saving modular solutions for kitchens, wardrobes, and storage spaces.",
    image: kitchenImage,
    link: "/services#modular",
  },
  {
    title: "Commercial Spaces",
    description: "Create inspiring work environments that enhance productivity and reflect your brand identity.",
    image: officeImage,
    link: "/services#commercial",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-20" data-testid="section-services-preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Our Services
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl max-w-lg">
              Complete Interior Solutions
            </h2>
          </div>
          <Link href="/services">
            <Button variant="outline" className="gap-2" data-testid="button-view-all-services">
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 bg-transparent"
              data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-3">
                <h3 className="font-serif text-2xl">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <Link href={service.link} className="inline-flex items-center gap-2 text-sm font-medium text-primary" data-testid={`link-service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
