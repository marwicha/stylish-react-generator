
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-5 px-4 md:px-8 lg:px-12 fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-gradient-primary">Horizon</a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">Features</a>
          <a href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors">Testimonials</a>
          <a href="#pricing" className="text-foreground/80 hover:text-primary transition-colors">Pricing</a>
          <a href="#faq" className="text-foreground/80 hover:text-primary transition-colors">FAQ</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline">Log in</Button>
          <Button>Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-md" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b animate-fade-in">
          <div className="px-4 py-6 space-y-4 flex flex-col">
            <a href="#features" className="py-2 text-foreground/80 hover:text-primary transition-colors" onClick={toggleMenu}>Features</a>
            <a href="#testimonials" className="py-2 text-foreground/80 hover:text-primary transition-colors" onClick={toggleMenu}>Testimonials</a>
            <a href="#pricing" className="py-2 text-foreground/80 hover:text-primary transition-colors" onClick={toggleMenu}>Pricing</a>
            <a href="#faq" className="py-2 text-foreground/80 hover:text-primary transition-colors" onClick={toggleMenu}>FAQ</a>
            <div className="flex flex-col space-y-3 pt-4">
              <Button variant="outline">Log in</Button>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
