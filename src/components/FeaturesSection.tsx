
import { CircleCheck, Sparkles, Layers, Zap, ShieldCheck, Users } from "lucide-react";

const FeatureCard = ({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => {
  return (
    <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border">
      <div className="h-12 w-12 flex items-center justify-center rounded-md bg-primary/10 text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Intuitive Design",
      description: "Clean, modern interfaces that are easy to navigate and visually appealing."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Optimized performance for quick loading times and smooth interactions."
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Customizable",
      description: "Tailor the platform to your needs with flexible options and components."
    },
    {
      icon: <CircleCheck className="h-6 w-6" />,
      title: "Reliable",
      description: "Built with stability in mind, ensuring your work is never interrupted."
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Secure",
      description: "Enterprise-grade security to protect your data and privacy."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Collaborative",
      description: "Work together seamlessly with integrated tools for team productivity."
    }
  ];

  return (
    <section id="features" className="py-20 px-4 md:px-8 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful <span className="text-gradient-primary">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build amazing products, all in one platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
