import chefImage from "@/assets/chef-portrait.jpg";
import { Award, Clock, Heart } from "lucide-react";

const About = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <img 
              src={chefImage} 
              alt="Chef Jean-Pierre Laurent" 
              className="rounded-lg shadow-2xl w-full object-cover aspect-[4/5]"
            />
          </div>
          
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our Chef
            </h2>
            <h3 className="text-2xl text-primary mb-4 font-semibold">
              Chef Jean-Pierre Laurent
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With over 25 years of culinary excellence, Chef Jean-Pierre brings his passion for 
              French cuisine with a modern twist. Trained in Paris and celebrated with multiple 
              awards, he creates dishes that tell a story on every plate.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              His philosophy is simple: use the finest ingredients, respect traditional techniques, 
              and never stop innovating.
            </p>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <p className="font-semibold text-foreground">25+ Awards</p>
                <p className="text-sm text-muted-foreground">International</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-8 h-8 text-accent" />
                </div>
                <p className="font-semibold text-foreground">25+ Years</p>
                <p className="text-sm text-muted-foreground">Experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <p className="font-semibold text-foreground">Pure Passion</p>
                <p className="text-sm text-muted-foreground">For Cuisine</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
