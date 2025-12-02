import Link from "next/link";
import { Scissors, Instagram, Facebook, Twitter } from "lucide-react";

const footerLinks = {
  services: [
    { href: "#services", label: "Exclusivo Classico" },
    { href: "#services", label: "Exclusivo Signature" },
    { href: "#services", label: "Exclusivo Deluxe" },
    { href: "#services", label: "Beard Shave / Shaping / Sculpting" },
    { href: "#services", label: "Hair Spa" },
    { href: "#services", label: "Hair Scrub" },
    { href: "#services", label: "Hair Tattoo" },
  ],

  company: [
    { href: "#team", label: "Our Team" },
    { href: "#booking", label: "Book Now" },
    { href: "#contact", label: "Contact" },
  ],
};

const socialLinks = [
  { href: "#", icon: Instagram, label: "Instagram" },
  {
    href: "https://www.facebook.com/profile.php?id=61554523430327",
    icon: Facebook,
    label: "Facebook",
  },
  { href: "#", icon: Twitter, label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Scissors className="h-6 w-6 text-primary" />
              <span className="font-serif text-xl font-bold tracking-wide">
                EXCLUSIVO
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Premium grooming services for the modern gentleman. Experience the
              perfect cut in a refined atmosphere.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wider text-sm">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wider text-sm">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wider text-sm">
              Hours
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex justify-between">
                <span>Everyday</span>
                <span>10AM - onwards</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Exclusivo. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
