import Image from "next/image";
import { Facebook } from "lucide-react";

const barbers = [
  {
    name: "Reuel Laceda",
    role: "Barber",
    image: "/barber1.jpg",
    facebook: "https://www.facebook.com/riowell",
    specialty: "Classic Cuts",
  },
  {
    name: "Deonix Medrano",
    role: "Barber",
    image: "/barber2.jpg",
    facebook: "https://www.facebook.com/deonix.onardemii",
    specialty: "Fades & Designs",
  },
  {
    name: "Ronnel Billete",
    role: "Barber",
    image: "/barber3.jpg",
    facebook: "https://www.facebook.com/billete.ronnel",
    specialty: "Modern Styles",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-3">
            The Team
          </p>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-balance">
            Meet Our Expert Barbers
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto cursor-pointer">
          {barbers.map((barber) => (
            <div key={barber.name} className="group">
              <div className="relative aspect-4/5 mb-4 overflow-hidden rounded-lg bg-muted">
                <Image
                  src={barber.image || "/placeholder.svg"}
                  alt={barber.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <a
                  href={barber.facebook}
                  target="_blank"
                  className="absolute bottom-4 right-4 p-2 bg-primary text-primary-foreground rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                  aria-label={`${barber.name}'s Facebook`}
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
              <h3 className="font-serif text-xl font-semibold">
                {barber.name}
              </h3>
              <p className="text-muted-foreground text-sm">{barber.role}</p>
              <p className="text-primary text-sm mt-1">{barber.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
