
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-primary opacity-90"></div>
          
          <div className="relative z-10 px-6 py-16 md:p-16 text-center md:text-left">
            <div className="md:max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to transform your digital experience?
              </h2>
              <p className="text-white/90 text-lg mb-8 md:pr-12">
                Join thousands of satisfied customers who have elevated their workflow with our platform. Get started today with a 14-day free trial.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" variant="secondary" className="font-semibold group">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </div>
          
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/10 transform skew-x-12 translate-x-1/2 hidden md:block"></div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
