import { Scissors, Crown, Sparkles, Wind, Brush, PenTool } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Scissors,
    title: "Exclusivo Classico",
    description:
      "Classic precision haircut tailored to your face shape and style.",
    price: "₱160",
    duration: "30-45 min",
  },
  {
    icon: Crown,
    title: "Exclusivo Signature",
    description:
      "Premium haircut with consultation, wash, and professional styling.",
    price: "₱220",
    duration: "45-60 min",
  },
  {
    icon: Sparkles,
    title: "Exclusivo Deluxe",
    description:
      "Luxury straight razor shave with hot towel and relaxing treatment.",
    price: "₱750",
    duration: "40-50 min",
  },
  {
    icon: Wind,
    title: "Beard Shave / Shaping / Sculpting",
    description:
      "Expert beard maintenance with clean lines and sculpted definition.",
    price: "₱100",
    duration: "15-25 min",
  },
  {
    icon: Brush,
    title: "Hair Spa",
    description:
      "Deep conditioning treatment that nourishes, strengthens, and revitalizes hair.",
    price: "₱500",
    duration: "30-45 min",
  },
  {
    icon: Brush,
    title: "Hair Scrub",
    description:
      "Exfoliating scalp treatment that removes buildup and promotes healthy growth.",
    price: "₱300",
    duration: "20-30 min",
  },
  {
    icon: PenTool,
    title: "Hair Tattoo",
    description:
      "Creative hair designs shaved with precision and clean detailing.",
    price: "₱100",
    duration: "10-20 min",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-3">
            Our Services
          </p>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-balance">
            Crafted for the Modern Gentleman
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer"
            >
              <CardContent className="p-6 lg:p-8">
                <div className="mb-6">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-2xl font-bold text-primary">
                    {service.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {service.duration}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
