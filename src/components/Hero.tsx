import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-restaurant.jpg";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>
      
      <div className="relative z-10 text-center container-custom animate-fade-in">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
          La Maison
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-2xl mx-auto">
          Experience Exquisite Cuisine
        </p>
        <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
          Where culinary artistry meets refined elegance
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            onClick={scrollToBooking}
          >
            Reserve Your Table
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Menu
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white/70" />
      </div>
    </section>
  );
};

export default Hero;
