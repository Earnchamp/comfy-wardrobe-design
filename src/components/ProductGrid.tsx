import { Heart, ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Luxury Leather Handbag",
      price: 24999,
      originalPrice: 33299,
      image: product1,
      badge: "Sale",
      category: "Accessories"
    },
    {
      id: 2,
      name: "Silk Blouse",
      price: 15749,
      image: product2,
      badge: "New",
      category: "Women"
    },
    {
      id: 3,
      name: "Charcoal Suit Jacket",
      price: 37499,
      image: product3,
      category: "Men"
    },
    {
      id: 4,
      name: "Emerald Evening Dress",
      price: 27499,
      image: product4,
      badge: "Featured",
      category: "Women"
    },
    {
      id: 5,
      name: "Classic Trench Coat",
      price: 49999,
      image: product1,
      category: "Outerwear"
    },
    {
      id: 6,
      name: "Designer Sunglasses",
      price: 16599,
      originalPrice: 21599,
      image: product2,
      badge: "Sale",
      category: "Accessories"
    },
    {
      id: 7,
      name: "Cashmere Sweater",
      price: 20799,
      image: product3,
      category: "Men"
    },
    {
      id: 8,
      name: "Midi Skirt",
      price: 12449,
      image: product4,
      badge: "New",
      category: "Women"
    }
  ];

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case "Sale":
        return "bg-destructive text-destructive-foreground";
      case "New":
        return "bg-accent text-accent-foreground";
      case "Featured":
        return "bg-luxury text-luxury-foreground";
      default:
        return "bg-primary text-primary-foreground";
    }
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-section mb-4">Featured Products</h2>
          <p className="text-elegant max-w-2xl mx-auto">
            Discover our handpicked selection of premium fashion pieces that define contemporary elegance and timeless style.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group product-card border-0 shadow-elegant">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover transition-smooth group-hover:scale-105"
                  />
                  
                  {/* Badge */}
                  {product.badge && (
                    <Badge className={`absolute top-3 left-3 ${getBadgeVariant(product.badge)}`}>
                      {product.badge}
                    </Badge>
                  )}
                  
                  {/* Quick Actions */}
                  <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-smooth">
                    <Button size="sm" variant="secondary" className="w-8 h-8 p-0 hover-lift">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="w-8 h-8 p-0 hover-lift">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  {/* Add to Cart Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                    <Button className="w-full bg-white text-black hover:bg-gray-100 transition-smooth">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-1">{product.name}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-primary">₹{product.price.toLocaleString('en-IN')}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8 py-3 text-lg font-semibold hover-lift">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;