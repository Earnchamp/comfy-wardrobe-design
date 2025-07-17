import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const FeaturedCollections = () => {
  const collections = [
    {
      id: 1,
      title: "Summer Essentials",
      description: "Light, breathable fabrics perfect for warm weather",
      image: product2,
      itemCount: 24,
      color: "from-amber-100 to-orange-100"
    },
    {
      id: 2,
      title: "Business Professional",
      description: "Sophisticated pieces for the modern workplace",
      image: product3,
      itemCount: 18,
      color: "from-gray-100 to-slate-100"
    },
    {
      id: 3,
      title: "Evening Elegance",
      description: "Luxurious designs for special occasions",
      image: product1,
      itemCount: 15,
      color: "from-purple-100 to-pink-100"
    }
  ];

  const getAnimationDelay = (index: number) => {
    const delays = ['200', '400', '600'];
    return delays[index];
  };

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16 opacity-0 animate-fadeInUp">
          <h2 className="text-section mb-6">Curated Collections</h2>
          <p className="text-elegant max-w-2xl mx-auto">
            Explore our carefully curated collections designed for every occasion and lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {collections.map((collection, index) => (
            <Card key={collection.id} className={`group product-card border-0 shadow-elegant overflow-hidden opacity-0 animate-fadeInUp animate-delay-${getAnimationDelay(index)}`}>
              <CardContent className="p-0">
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${collection.color} opacity-10`}></div>
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover transition-smooth group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-smooth"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{collection.title}</h3>
                  <p className="text-muted-foreground mb-4">{collection.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {collection.itemCount} items
                    </span>
                    <Button variant="ghost" size="sm" className="group-hover:text-accent transition-smooth hover-lift">
                      Shop Now
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;