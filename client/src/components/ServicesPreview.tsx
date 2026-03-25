import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import kitchenImage from "@assets/generated_images/modern_luxury_kitchen.png";
import bedroomImage from "@assets/generated_images/luxury_master_bedroom.png";
import commercialArchImage from "@assets/generated_images/commercial_architecture.png";

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
    title: "Architectural Construction",
    description: "Create inspiring work environments that enhance productivity and reflect your brand identity.",
    image: commercialArchImage,
    link: "/services#commercial",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function ServicesPreview() {
  return (
    <section className="py-20" data-testid="section-services-preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Our Services
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl max-w-lg">
              Complete Interior Solutions
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/services">
              <Button variant="outline" className="gap-2" data-testid="button-view-all-services">
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className="group overflow-hidden border-0 bg-transparent h-full cursor-pointer"
                data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-6 shadow-md shadow-black/5 group-hover:shadow-xl transition-shadow duration-500">
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <Link href={service.link} className="inline-flex items-center gap-2 text-sm font-medium text-primary group/link" data-testid={`link-service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}>
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
