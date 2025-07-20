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
          className="w-full h-full object-cover animate-scaleIn"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white container-padding">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-hero mb-8 opacity-0 animate-fadeInUp">
            Elevate Your
            <span className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold hero-text-animated">
              Fashion
            </span>
          </h1>
          
          <p className="text-elegant mb-12 max-w-2xl mx-auto text-gray-200 opacity-0 animate-fadeInUp animate-delay-400">
            Discover our curated collection of luxury fashion pieces designed to make you feel confident and sophisticated. From timeless classics to modern statements.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fadeInUp animate-delay-600">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-100 transition-smooth px-8 py-3 text-lg font-semibold hover-lift shimmer-effect"
            >
              Shop Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="bg-yellow-400 border-yellow-400 text-black hover:bg-yellow-500 hover:border-yellow-500 transition-smooth px-8 py-3 text-lg font-semibold hover-lift"
            >
              Explore New Arrivals
            </Button>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fadeInUp animate-delay-800">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-white/60 text-sm hidden sm:block">Scroll to explore</span>
          <div className="w-1 h-8 bg-white/60 rounded-full animate-bounce-custom"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;