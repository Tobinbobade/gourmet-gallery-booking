import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">La Maison</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Experience the finest in French cuisine with a modern twist. 
              Every dish tells a story of passion and excellence.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80">info@lamaison.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80">
                    123 Gourmet Street<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <div>
                  <p className="font-medium">Dinner</p>
                  <p className="text-primary-foreground/80 text-sm">Tuesday - Sunday</p>
                  <p className="text-primary-foreground/80 text-sm">5:30 PM - 10:30 PM</p>
                </div>
              </div>
              <p className="text-primary-foreground/80 text-sm mt-4">
                Closed on Mondays
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <p className="text-primary-foreground/80 mb-4">
              Stay updated with our latest creations and events
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-primary-foreground/60">
            © {new Date().getFullYear()} La Maison Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
