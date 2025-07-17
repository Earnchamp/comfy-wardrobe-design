import { Facebook, Instagram, Twitter, Youtube, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const footerSections = [
    {
      title: "Shop",
      links: [
        { name: "New Arrivals", href: "#new" },
        { name: "Women", href: "#women" },
        { name: "Men", href: "#men" },
        { name: "Accessories", href: "#accessories" },
        { name: "Sale", href: "#sale" }
      ]
    },
    {
      title: "Customer Service",
      links: [
        { name: "Contact Us", href: "#contact" },
        { name: "Size Guide", href: "#size" },
        { name: "Shipping Info", href: "#shipping" },
        { name: "Returns", href: "#returns" },
        { name: "FAQ", href: "#faq" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Careers", href: "#careers" },
        { name: "Press", href: "#press" },
        { name: "Sustainability", href: "#sustainability" },
        { name: "Privacy Policy", href: "#privacy" }
      ]
    }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="border-b border-primary-foreground/20 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4">Stay in Style</h3>
            <p className="text-primary-foreground/80 mb-6">
              Subscribe to our newsletter for exclusive offers and the latest fashion trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 transition-smooth">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary-foreground">LUXE</span>
                <span className="text-accent">FASHION</span>
              </h2>
              <p className="text-primary-foreground/80 mb-6">
                Premium fashion for the modern individual. Discover luxury pieces that define your personal style.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-primary-foreground/80 hover:text-accent transition-smooth text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 LuxeFashion. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#terms" className="text-primary-foreground/60 hover:text-accent transition-smooth text-sm">
                Terms of Service
              </a>
              <a href="#privacy" className="text-primary-foreground/60 hover:text-accent transition-smooth text-sm">
                Privacy Policy
              </a>
              <a href="#cookies" className="text-primary-foreground/60 hover:text-accent transition-smooth text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;