
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How do I get started with your platform?",
      answer: "Getting started is easy! Simply sign up for a free account, and you'll be guided through our onboarding process. You can start with our free trial which gives you full access to all features for 14 days, no credit card required."
    },
    {
      question: "Is there a limit to the number of projects I can create?",
      answer: "No, there's no limit to the number of projects you can create on our platform. Our pricing plans are based on features and team size, not on the number of projects."
    },
    {
      question: "Can I use your platform with my existing tools?",
      answer: "Yes, our platform is designed to integrate seamlessly with most popular tools and services. We offer native integrations with tools like Slack, GitHub, and Figma, plus a robust API for custom integrations."
    },
    {
      question: "How secure is my data on your platform?",
      answer: "Security is our top priority. We use industry-standard encryption for all data in transit and at rest, regular security audits, and follow best practices for data protection. We're also SOC 2 Type II compliant."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We offer comprehensive support including detailed documentation, video tutorials, a community forum, and direct support from our team. Our premium plans include priority support with faster response times."
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. If you cancel, you'll have access until the end of your current billing period."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 md:px-8 lg:px-12 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-gradient-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our platform.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
