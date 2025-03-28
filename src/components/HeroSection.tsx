
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 md:px-8 lg:px-12 overflow-hidden bg-grid">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Elevate Your Digital <span className="text-gradient-primary">Experience</span>
            </h1>
            <p className="text-xl text-foreground/80 max-w-xl">
              Build stunning interfaces with our modern platform. Streamline your workflow and bring your ideas to life faster than ever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                View Demo
              </Button>
            </div>
          </div>
          
          <div className="flex-1 animate-slide-in">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-30"></div>
              <div className="relative bg-card rounded-lg shadow-xl p-4 md:p-8">
                <div className="aspect-video bg-muted rounded-md overflow-hidden flex items-center justify-center">
                  <div className="text-2xl font-semibold text-muted-foreground">Dashboard Preview</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
