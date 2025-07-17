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
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold tracking-tight">
              <span className="text-primary">LUXE</span>
              <span className="text-accent">FASHION</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
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
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hover:bg-muted">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="hover:bg-muted">
              <User className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="hover:bg-muted relative">
              <ShoppingBag className="h-4 w-4" />
              <Badge className="absolute -top-1 -right-1 h-4 w-4 rounded-full text-xs p-0 bg-accent">
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
              className="hover:bg-muted"
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
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="fashion-link text-sm font-medium text-foreground hover:text-accent transition-smooth"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="flex items-center space-x-4 mt-4 pt-4 border-t">
              <Button variant="ghost" size="sm" className="hover:bg-muted">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-muted">
                <User className="h-4 w-4 mr-2" />
                Account
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-muted relative">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Cart
                <Badge className="ml-2 h-4 w-4 rounded-full text-xs p-0 bg-accent">
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