import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Menu = () => {
  const starters = [
    { name: "French Onion Soup", description: "Caramelized onions, Gruyère cheese, crispy crouton", price: "$14" },
    { name: "Escargots de Bourgogne", description: "Burgundy snails, garlic herb butter, toasted baguette", price: "$18" },
    { name: "Foie Gras Terrine", description: "Duck liver pâté, fig compote, brioche toast", price: "$22" },
    { name: "Seared Scallops", description: "Pan-seared scallops, cauliflower purée, truffle oil", price: "$24" },
  ];

  const mains = [
    { name: "Filet Mignon", description: "8oz tenderloin, red wine reduction, seasonal vegetables", price: "$48" },
    { name: "Duck Breast", description: "Pan-roasted duck, orange glaze, wild rice, asparagus", price: "$42" },
    { name: "Bouillabaisse", description: "Traditional Provençal fish stew, saffron aioli, rouille", price: "$38" },
    { name: "Rack of Lamb", description: "Herb-crusted lamb, rosemary jus, potato gratin", price: "$52" },
    { name: "Lobster Thermidor", description: "Fresh lobster, cognac cream sauce, gratin topping", price: "$58" },
  ];

  const desserts = [
    { name: "Crème Brûlée", description: "Classic vanilla custard, caramelized sugar, fresh berries", price: "$12" },
    { name: "Chocolate Fondant", description: "Warm chocolate cake, molten center, vanilla ice cream", price: "$14" },
    { name: "Tarte Tatin", description: "Caramelized apple tart, crème fraîche, caramel sauce", price: "$13" },
    { name: "Profiteroles", description: "Choux pastry, vanilla ice cream, warm chocolate sauce", price: "$12" },
  ];

  const wines = [
    { name: "Château Margaux 2015", description: "Bordeaux, France - Red", price: "$385" },
    { name: "Chablis Grand Cru", description: "Burgundy, France - White", price: "$145" },
    { name: "Dom Pérignon 2012", description: "Champagne, France - Sparkling", price: "$325" },
    { name: "Châteauneuf-du-Pape", description: "Rhône Valley, France - Red", price: "$98" },
  ];

  return (
    <section id="menu" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Menu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of dishes, crafted with the finest ingredients
          </p>
        </div>

        <Tabs defaultValue="starters" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12 h-auto">
            <TabsTrigger value="starters" className="text-sm md:text-base py-3">Starters</TabsTrigger>
            <TabsTrigger value="mains" className="text-sm md:text-base py-3">Mains</TabsTrigger>
            <TabsTrigger value="desserts" className="text-sm md:text-base py-3">Desserts</TabsTrigger>
            <TabsTrigger value="wines" className="text-sm md:text-base py-3">Wines</TabsTrigger>
          </TabsList>

          <TabsContent value="starters" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {starters.map((item, idx) => (
                <div key={idx} className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <span className="text-primary font-bold text-lg">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="mains" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {mains.map((item, idx) => (
                <div key={idx} className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <span className="text-primary font-bold text-lg">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="desserts" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {desserts.map((item, idx) => (
                <div key={idx} className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <span className="text-primary font-bold text-lg">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="wines" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {wines.map((item, idx) => (
                <div key={idx} className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <span className="text-primary font-bold text-lg">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Menu;
