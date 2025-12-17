import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/luxury_living_room_hero.png";

export default function HeroSection() {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight * 0.85, behavior: "smooth" });
  };

  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden" data-testid="section-hero">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury living room interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl space-y-8">
          <div className="space-y-4">
            <p className="text-white/80 text-sm uppercase tracking-[0.2em] font-medium">
              Luxury Interior Design Studio
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
              Transform Your Space Into a 
              <span className="italic"> Masterpiece</span>
            </h1>
            <p className="text-white/80 text-lg sm:text-xl leading-relaxed max-w-xl">
              We craft personalized, timeless interiors that elevate your lifestyle. 
              From concept to completion, every detail is thoughtfully designed.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="gap-2 bg-white text-black hover:bg-white/90" data-testid="button-hero-quote">
                Get a Quote
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20"
                data-testid="button-hero-portfolio"
              >
                View Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}
