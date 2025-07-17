import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Elegant fashion photography"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-hero mb-6 animate-fade-in">
            Elevate Your
            <span className="block bg-gradient-luxury bg-clip-text text-transparent">
              Style
            </span>
          </h1>
          
          <p className="text-elegant mb-8 max-w-2xl mx-auto text-gray-200">
            Discover our curated collection of luxury fashion pieces designed to make you feel confident and sophisticated. From timeless classics to modern statements.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-100 transition-smooth px-8 py-3 text-lg font-semibold"
            >
              Shop Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black transition-smooth px-8 py-3 text-lg font-semibold"
            >
              Explore New Arrivals
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-8 bg-white rounded-full opacity-60"></div>
      </div>
    </section>
  );
};

export default Hero;