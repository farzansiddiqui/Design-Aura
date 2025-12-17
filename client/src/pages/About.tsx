import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Heart, Lightbulb, Target, Gem } from "lucide-react";
import { Link } from "wouter";
import studioImage from "@assets/generated_images/design_studio_workspace.png";
import designerPortrait1 from "@assets/generated_images/female_designer_portrait.png";
import designerPortrait2 from "@assets/generated_images/male_designer_portrait.png";
import designerPortrait3 from "@assets/generated_images/young_designer_portrait.png";

const team = [
  {
    name: "Victoria Sterling",
    role: "Founder & Principal Designer",
    bio: "With over 15 years of experience in luxury residential design, Victoria founded Atelier Interiors to bring personalized, timeless design to discerning clients.",
    specialties: ["Luxury Residential", "Color Theory", "Space Planning"],
    image: designerPortrait1,
  },
  {
    name: "Marcus Webb",
    role: "Senior Commercial Designer",
    bio: "Marcus brings a decade of commercial design expertise, creating inspiring workspaces that enhance productivity and brand identity.",
    specialties: ["Commercial Design", "Office Spaces", "Hospitality"],
    image: designerPortrait2,
  },
  {
    name: "Sophia Chen",
    role: "Design Director",
    bio: "Sophia's innovative approach to modern design has earned her recognition in leading design publications and numerous industry awards.",
    specialties: ["Modern Design", "Sustainable Interiors", "Art Curation"],
    image: designerPortrait3,
  },
];

const values = [
  {
    icon: Heart,
    title: "Client-Centered",
    description: "Every design decision is guided by our clients' unique lifestyles, preferences, and aspirations.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We blend timeless design principles with contemporary innovations and cutting-edge materials.",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Attention to detail in every aspect, from initial concept through final installation.",
  },
  {
    icon: Gem,
    title: "Quality",
    description: "We source only the finest materials and partner with skilled artisans to ensure exceptional results.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="relative h-[60vh] min-h-[400px] overflow-hidden" data-testid="section-about-hero">
          <div className="absolute inset-0">
            <img
              src={studioImage}
              alt="Design studio"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center text-center">
            <div className="max-w-2xl space-y-6">
              <p className="text-white/80 text-sm uppercase tracking-[0.2em]">About Us</p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white">
                Crafting Exceptional Spaces Since 2010
              </h1>
            </div>
          </div>
        </section>

        <section className="py-20" data-testid="section-story">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Our Story</p>
                <h2 className="font-serif text-3xl sm:text-4xl">
                  Where Vision Meets Craftsmanship
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Atelier Interiors was founded with a singular vision: to create spaces that transcend 
                    the ordinary and become true reflections of our clients' aspirations and lifestyles.
                  </p>
                  <p>
                    From our humble beginnings as a boutique design studio, we have grown into a 
                    full-service interior design firm, completing over 500 projects across residential, 
                    commercial, and hospitality sectors.
                  </p>
                  <p>
                    Our approach combines meticulous attention to detail with innovative design thinking, 
                    ensuring each project is both timeless and contemporary. We believe that great design 
                    should not only look beautiful but also enhance the way you live and work.
                  </p>
                </div>
                <Link href="/contact">
                  <Button className="gap-2" data-testid="button-about-contact">
                    Start Your Project
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <img
                  src={studioImage}
                  alt="Our studio"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card" data-testid="section-values">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Our Philosophy
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl">
                Values That Guide Us
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center space-y-4" data-testid={`value-${value.title.toLowerCase()}`}>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20" data-testid="section-team">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Meet the Team
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl">
                Our Design Experts
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="p-8 space-y-6" data-testid={`card-team-${member.name.toLowerCase().replace(/\s+/g, "-")}`}>
                  <Avatar className="h-24 w-24 mx-auto">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                  </Avatar>
                  <div className="text-center space-y-2">
                    <h3 className="font-serif text-xl">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.specialties.map((specialty) => (
                      <Badge key={specialty} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
