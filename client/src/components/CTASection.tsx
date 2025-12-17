import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import studioImage from "@assets/generated_images/design_studio_workspace.png";

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden" data-testid="section-cta">
      <div className="absolute inset-0">
        <img
          src={studioImage}
          alt="Design studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white">
            Ready to Transform Your Space?
          </h2>
          <p className="text-white/80 text-lg leading-relaxed">
            Book a free consultation with our expert designers and take the first step 
            toward creating your dream interior.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="gap-2 bg-white text-black hover:bg-white/90" data-testid="button-cta-consultation">
                Schedule Consultation
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20"
                data-testid="button-cta-explore"
              >
                Explore Our Work
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
