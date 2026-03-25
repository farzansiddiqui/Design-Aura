import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Home, Building, Utensils, Palette, Sparkles, Ruler } from "lucide-react";
import { Link } from "wouter";
import kitchenImage from "@assets/generated_images/modern_luxury_kitchen.png";
import bedroomImage from "@assets/generated_images/luxury_master_bedroom.png";
import commercialArchImage from "@assets/generated_images/commercial_architecture.png";
import livingRoomImage from "@assets/generated_images/luxury_living_room_hero.png";

const services = [
  {
    id: "residential",
    icon: Home,
    title: "Residential Design",
    description: "Transform your home into a personalized sanctuary that reflects your unique style and enhances your daily life.",
    features: ["Complete home interiors", "Room-by-room design", "Furniture selection", "Color consultation", "Lighting design"],
    image: bedroomImage,
  },
  {
    id: "commercial",
    icon: Building,
    title: "Architectural Construction",
    description: "Create inspiring work environments that enhance productivity, reflect your brand identity, and impress clients.",
    features: ["Office design", "Retail spaces", "Restaurant interiors", "Hotel lobbies", "Co-working spaces"],
    image: commercialArchImage,
  },
  {
    id: "modular",
    icon: Utensils,
    title: "Modular Interiors",
    description: "Efficient, space-saving modular solutions crafted with precision for kitchens, wardrobes, and storage.",
    features: ["Modular kitchens", "Custom wardrobes", "Storage solutions", "Entertainment units", "Study areas"],
    image: kitchenImage,
  },
  {
    id: "luxury",
    icon: Sparkles,
    title: "Luxury Renovations",
    description: "Premium renovation services that breathe new life into existing spaces with sophisticated upgrades.",
    features: ["Premium materials", "High-end finishes", "Art curation", "Smart home integration"],
    image: livingRoomImage,
  },
];

const process = [
  { step: 1, title: "Consultation", description: "We discuss your vision, requirements, and budget" },
  { step: 2, title: "Concept Design", description: "Creating mood boards and initial design concepts" },
  { step: 3, title: "3D Visualization", description: "Detailed 3D renders to visualize your space" },
  { step: 4, title: "Execution", description: "Project management and quality craftsmanship" },
  { step: 5, title: "Handover", description: "Final walkthrough and project completion" },
];

export default function Services() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="pt-32 pb-20" data-testid="section-services-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Our Services
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl mb-6">
              Complete Interior Solutions
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From concept to completion, we offer comprehensive interior design services
              tailored to your unique needs and aspirations.
            </p>
          </div>
        </section>

        <section className="py-12" data-testid="section-services-list">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  data-testid={`service-${service.id}`}
                >
                  <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h2 className="font-serif text-3xl sm:text-4xl">{service.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <Button className="gap-2" data-testid={`button-${service.id}-quote`}>
                        Get a Quote
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full rounded-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-card" data-testid="section-process">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
                How We Work
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl">
                Our Design Process
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {process.map((step, index) => (
                <div key={step.step} className="text-center space-y-4" data-testid={`process-step-${step.step}`}>
                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground font-serif text-2xl">
                      {step.step}
                    </div>
                    {index < process.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-border -translate-y-1/2" />
                    )}
                  </div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20" data-testid="section-services-cta">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation and let's discuss how we can
              transform your space.
            </p>
            <Link href="/contact">
              <Button size="lg" className="gap-2" data-testid="button-services-contact">
                Schedule a Consultation
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
