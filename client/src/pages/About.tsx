import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Lightbulb, Target, Gem } from "lucide-react";
import { Link } from "wouter";
import studioImage from "@assets/generated_images/design_studio_workspace.png";

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
                    The Home Project Studio was founded with a singular vision: to create spaces that transcend
                    the ordinary and become true reflections of our clients' aspirations and lifestyles.
                  </p>
                  <p>
                    From our humble beginnings as a boutique design studio, we have grown into a
                    full-service interior design firm, completing over 50 projects across residential,
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
      </main>
      <Footer />
    </div>
  );
}
