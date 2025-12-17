import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import designerPortrait1 from "@assets/generated_images/female_designer_portrait.png";
import designerPortrait2 from "@assets/generated_images/male_designer_portrait.png";
import designerPortrait3 from "@assets/generated_images/young_designer_portrait.png";

const testimonials = [
  {
    quote: "Atelier Interiors transformed our house into a dream home. Their attention to detail and understanding of our vision was exceptional. The team delivered on time and exceeded our expectations.",
    author: "Sarah Mitchell",
    role: "Homeowner",
    project: "3 BHK Apartment, Manhattan",
    image: designerPortrait1,
  },
  {
    quote: "Working with the Atelier team was an absolute pleasure. They created a workspace that perfectly reflects our company culture while being both functional and beautiful.",
    author: "Michael Chen",
    role: "CEO, TechStart Inc.",
    project: "Corporate Office, Brooklyn",
    image: designerPortrait2,
  },
  {
    quote: "The quality of materials and craftsmanship is outstanding. Our kitchen renovation was completed ahead of schedule, and the results are stunning. Highly recommend their services.",
    author: "Emily Rodriguez",
    role: "Restaurant Owner",
    project: "Modular Kitchen, Queens",
    image: designerPortrait3,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20" data-testid="section-testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Client Stories
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 space-y-6"
              data-testid={`card-testimonial-${index}`}
            >
              <Quote className="h-10 w-10 text-primary/20" />
              <p className="text-foreground leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={testimonial.image} alt={testimonial.author} />
                  <AvatarFallback>{testimonial.author.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.project}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
