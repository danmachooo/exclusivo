import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { GallerySection } from "@/components/gallery-section";
import { TeamSection } from "@/components/team-section";
import { BookingSection } from "@/components/booking-section";
import { ContactSection } from "../components/contact-section";
import { Footer } from "../components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <TeamSection />
      <BookingSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
