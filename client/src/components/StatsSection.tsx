import { Award, Clock, Shield, Building } from "lucide-react";

const stats = [
  {
    icon: Building,
    value: "500+",
    label: "Projects Completed",
    description: "Luxury homes and commercial spaces transformed",
  },
  {
    icon: Shield,
    value: "10",
    suffix: " Years",
    label: "Warranty",
    description: "Every material backed with long-term guarantee",
  },
  {
    icon: Clock,
    value: "60",
    suffix: " Days",
    label: "Delivery",
    description: "Fast-track delivery without compromising quality",
  },
  {
    icon: Award,
    value: "25+",
    label: "Design Awards",
    description: "Recognized excellence in interior design",
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-card" data-testid="section-stats">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Why Choose Us
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl">
            Excellence in Every Detail
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-4 p-6"
              data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
                <stat.icon className="h-7 w-7 text-primary" />
              </div>
              <div>
                <span className="font-serif text-4xl sm:text-5xl font-semibold">
                  {stat.value}
                </span>
                {stat.suffix && (
                  <span className="font-serif text-2xl text-muted-foreground">
                    {stat.suffix}
                  </span>
                )}
              </div>
              <h3 className="font-semibold text-lg">{stat.label}</h3>
              <p className="text-muted-foreground text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
