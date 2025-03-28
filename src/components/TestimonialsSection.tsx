
import { Star } from "lucide-react";

type TestimonialProps = {
  quote: string;
  author: string;
  role: string;
  stars: number;
};

const Testimonial = ({ quote, author, role, stars }: TestimonialProps) => {
  return (
    <div className="bg-card rounded-lg p-6 border shadow-sm hover:shadow-md transition-shadow">
      <div className="flex mb-4">
        {Array.from({ length: stars }).map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-primary text-primary" />
        ))}
      </div>
      <blockquote className="mb-4 text-foreground/90">"{quote}"</blockquote>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "This platform has completely transformed our workflow. The interface is intuitive and the features are exactly what we needed.",
      author: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      stars: 5
    },
    {
      quote: "I've tried many similar tools, but none compare to the speed and reliability of this one. It's been a game-changer for our team.",
      author: "Michael Chen",
      role: "Lead Developer at InnovateLabs",
      stars: 5
    },
    {
      quote: "The customer support is exceptional. Any questions we had were answered promptly, and the team went above and beyond to help us.",
      author: "Alex Rodriguez",
      role: "CTO at StartupX",
      stars: 4
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 md:px-8 lg:px-12 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="text-gradient-primary">Thousands</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear what our customers have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              stars={testimonial.stars}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
