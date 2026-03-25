import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "The Home Project Studio transformed our house into a dream home. Their attention to detail and understanding of our vision was exceptional. The team delivered on time and exceeded our expectations.",
    author: "Rakesh Chaudhary",
    role: "CEO",
    project: "5 BHK Apartment, Bangalore",
  },
  {
    quote: "Working with The Home Project Studio team was an absolute pleasure. They created a workspace that perfectly reflects our company culture while being both functional and beautiful.",
    author: "Balaji ",
    role: "Frelancer",
    project: "3 BHK Apartment, Bangalore",
  },
  {
    quote: "The quality of materials and craftsmanship is outstanding. Our kitchen renovation was completed ahead of schedule, and the results are stunning. Highly recommend their services.",
    author: "Sumair Rashid",
    role: "Land Owner",
    project: "PG in Bangalore",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function TestimonialsSection() {
  return (
    <section className="py-20 overflow-hidden" data-testid="section-testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Client Stories
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl">
            What Our Clients Say
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className="p-8 space-y-6 h-full hover:shadow-xl transition-all duration-300 border-primary/5 hover:border-primary/20 group"
                data-testid={`card-testimonial-${index}`}
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Quote className="h-10 w-10 text-primary/20 group-hover:text-primary/40 transition-colors" />
                </motion.div>
                <p className="text-foreground leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      y: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                      },
                      scale: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10
                      }
                    }}
                    className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shadow-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                  >
                    {testimonial.author.split(" ").map(n => n[0]).join("")}
                  </motion.div>
                  <div>
                    <p className="font-semibold group-hover:text-primary transition-colors">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.project}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
