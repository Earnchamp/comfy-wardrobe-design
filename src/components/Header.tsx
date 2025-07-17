import { useState } from "react";
import { Menu, X, ShoppingBag, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "New Arrivals", href: "#new" },
    { name: "Women", href: "#women" },
    { name: "Men", href: "#men" },
    { name: "Accessories", href: "#accessories" },
    { name: "Sale", href: "#sale" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b animate-slideInDown">
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 opacity-0 animate-fadeInLeft">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
              <span className="text-primary">LUXE</span>
              <span className="text-accent">FASHION</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 opacity-0 animate-fadeInUp animate-delay-200">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="fashion-link text-sm font-medium text-foreground hover:text-accent transition-smooth"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4 opacity-0 animate-fadeInRight animate-delay-400">
            <Button variant="ghost" size="sm" className="hover:bg-muted hover-lift">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="hover:bg-muted hover-lift">
              <User className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="hover:bg-muted hover-lift relative">
              <ShoppingBag className="h-4 w-4" />
              <Badge className="absolute -top-1 -right-1 h-4 w-4 rounded-full text-xs p-0 bg-accent animate-glowPulse">
                2
              </Badge>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:bg-muted hover-lift"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-slideInDown">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`fashion-link text-sm font-medium text-foreground hover:text-accent transition-smooth opacity-0 animate-fadeInLeft animate-delay-${index * 100 + 200}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="flex flex-col space-y-3 mt-4 pt-4 border-t">
              <Button variant="ghost" size="sm" className="hover:bg-muted hover-lift justify-start opacity-0 animate-fadeInLeft animate-delay-600">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-muted hover-lift justify-start opacity-0 animate-fadeInLeft animate-delay-700">
                <User className="h-4 w-4 mr-2" />
                Account
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-muted hover-lift justify-start relative opacity-0 animate-fadeInLeft animate-delay-800">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Cart
                <Badge className="ml-2 h-4 w-4 rounded-full text-xs p-0 bg-accent animate-glowPulse">
                  2
                </Badge>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;