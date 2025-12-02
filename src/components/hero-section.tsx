import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 lg:pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/exclusivo-pg.png')`,
        }}
      >
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 lg:mb-6">
            Premium Grooming Experience
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 text-balance">
            Where Style
            <br />
            Meets Precision
          </h1>
          <p className="text-muted-foreground text-lg lg:text-xl max-w-xl mb-8 lg:mb-10 leading-relaxed">
            Experience the art of grooming at its finest. Our master barbers
            deliver exceptional cuts, classic shaves, and modern styles in a
            refined atmosphere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-base">
              <Link href="#booking">
                Book Your Cut
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base bg-transparent"
            >
              <Link href="#services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-widest text-muted-foreground">
          Scroll
        </span>
        <div className="w-px h-12 bg-linear-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}
