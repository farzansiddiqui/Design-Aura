import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Lightbulb, PenTool, Settings, CheckCircle } from "lucide-react";
import studioImage1 from "@assets/generated_images/design_studio_workspace.png";
import studioImage2 from "@assets/generated_images/luxury_living_room_hero.png";
import studioImage3 from "@assets/generated_images/modern_luxury_kitchen.png";
import studioImage4 from "@assets/generated_images/luxury_master_bedroom.png";

const steps = [
    {
        title: "Discovery",
        description: "We dive deep into your vision, values, and space requirements to uncover the heart of your project's story.",
        icon: Lightbulb,
        image: studioImage1,
    },
    {
        title: "Concept Development",
        description: "Ideas take shape as we translate insights into mood boards, layouts, and design directions that reflect your style.",
        icon: PenTool,
        image: studioImage2,
    },
    {
        title: "Execution & Craftsmanship",
        description: "Impeccable craftsmanship and coordination bring the design to life with meticulous attention to every detail.",
        icon: Settings,
        image: studioImage3,
    },
    {
        title: "Hand Over & Beyond",
        description: "We ensure your space is perfectly ready for living, backed by our committed long-term quality assurance.",
        icon: CheckCircle,
        image: studioImage4,
    },
];

export default function WorkProcess() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end end"]
    });

    return (
        <section ref={containerRef} className="py-24 bg-[#F9F7F2]" data-testid="section-work-process">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4"
                    >
                        How We Work
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-serif text-3xl sm:text-4xl lg:text-5xl"
                    >
                        Our Design Process
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg"
                    >
                        From the first sketch to the final reveal — discover how our
                        step-by-step process brings your design to life.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Sticky Image Column */}
                    <div className="hidden lg:block sticky top-32">
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                            {steps.map((step, index) => {
                                const stepProgress = 1 / steps.length;
                                const start = index * stepProgress;
                                const end = (index + 1) * stepProgress;

                                // For the last item, don't fade out at the end of the section
                                const isLast = index === steps.length - 1;
                                // eslint-disable-next-line react-hooks/rules-of-hooks
                                const opacity = useTransform(
                                    scrollYProgress,
                                    isLast ? [start, start + 0.1] : [start, start + 0.1, end - 0.1, end],
                                    isLast ? [0, 1] : [0, 1, 1, 0]
                                );
                                // eslint-disable-next-line react-hooks/rules-of-hooks
                                const scale = useTransform(scrollYProgress, [start, end], [1.1, 1]);

                                return (
                                    <motion.div
                                        key={index}
                                        style={{ opacity }}
                                        className="absolute inset-0"
                                    >
                                        <motion.img
                                            style={{ scale }}
                                            src={step.image}
                                            alt={step.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/10" />
                                    </motion.div>
                                );
                            })}

                            {/* Decorative Wavy Border (Simplified SVG version) */}
                            <div className="absolute top-0 left-0 bottom-0 w-12 bg-[#8BA88D]/20 backdrop-blur-sm z-10 flex flex-col justify-around py-4">
                                {[...Array(10)].map((_, i) => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-[#8BA88D]/40 -ml-4" />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Scrolling Steps Column */}
                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-black/[0.03] group hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                            >
                                <div className="flex flex-col sm:flex-row gap-8 items-start">
                                    <div className="bg-[#F9F7F2] p-4 rounded-xl group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                                        <step.icon className="w-8 h-8" />
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4">
                                            <span className="text-primary font-bold text-sm tracking-widest uppercase">Step 0{index + 1}</span>
                                            <div className="h-[1px] w-12 bg-primary/20" />
                                        </div>
                                        <h3 className="font-serif text-2xl sm:text-3xl group-hover:text-primary transition-colors duration-500">
                                            {step.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed text-lg">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
