import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SiFacebook, SiInstagram, SiPinterest, SiLinkedin } from "react-icons/si";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "Residential Design",
  "Commercial Spaces",
  "Modular Interiors",
  "Luxury Renovations",
  "Consultation",
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      console.log("Newsletter subscription:", email);
      setEmail("");
    }
  };

  return (
    <footer className="bg-card border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl font-semibold">Atelier</span>
              <span className="font-serif text-2xl text-muted-foreground">Interiors</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Creating timeless, personalized interiors that reflect your unique lifestyle. 
              From concept to completion, we transform spaces into extraordinary living experiences.
            </p>
            <div className="flex items-center gap-3">
              <Button size="icon" variant="ghost" data-testid="link-social-facebook">
                <SiFacebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" data-testid="link-social-instagram">
                <SiInstagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" data-testid="link-social-pinterest">
                <SiPinterest className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" data-testid="link-social-linkedin">
                <SiLinkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground text-sm transition-colors hover:text-foreground"
                  data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-6">
            <h4 className="font-semibold text-lg">Our Services</h4>
            <nav className="flex flex-col gap-3">
              {services.map((service) => (
                <span
                  key={service}
                  className="text-muted-foreground text-sm"
                >
                  {service}
                </span>
              ))}
            </nav>
          </div>

          <div className="space-y-6">
            <h4 className="font-semibold text-lg">Contact & Newsletter</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  123 Design Avenue, Suite 400<br />New York, NY 10001
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                <span className="text-muted-foreground text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                <span className="text-muted-foreground text-sm">hello@atelierinteriors.com</span>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  data-testid="input-newsletter-email"
                />
                <Button size="icon" onClick={handleSubscribe} data-testid="button-newsletter-subscribe">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              2024 Atelier Interiors. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-privacy">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-terms">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
