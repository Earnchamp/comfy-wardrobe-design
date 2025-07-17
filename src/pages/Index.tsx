import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import FeaturedCollections from "@/components/FeaturedCollections";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProductGrid />
      <FeaturedCollections />
      <Footer />
    </div>
  );
};

export default Index;
