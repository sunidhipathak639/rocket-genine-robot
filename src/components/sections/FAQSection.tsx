"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "Do I need prior coding experience?",
      answer:
        "For our Foundations bootcamp, no prior experience is required. However, for the Engineering and Mastery tracks, we recommend basic proficiency in Python and an understanding of foundational math.",
    },
    {
      question: "What is the format of the classes?",
      answer:
        "Classes are a blend of live online lectures, interactive code-alongs in our cloud environment, and self-paced project work. You will also have weekly 1-on-1 mentorship sessions.",
    },
    {
      question: "Is there a job guarantee?",
      answer:
        "While we do not guarantee a job, we have a 94% placement rate within 6 months of graduation. Our career services team works with you until you are placed.",
    },
    {
      question: "What kind of projects will I build?",
      answer:
        "You will build production-ready applications including RAG systems, custom generative models, computer vision classifiers, and predictive data pipelines.",
    },
    {
      question: "Are payment plans available?",
      answer:
        "Yes, we offer multiple financing options including income share agreements (ISAs), upfront discounts, and monthly installment plans. Book a call to learn more.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Everything you need to know about the curriculum, admissions, and
              careers.
            </p>
            <p className="text-sm text-muted-foreground">
              Can't find the answer you're looking for? Reach out to our
              admissions team at{" "}
              <a
                href="mailto:admissions@robotgenie.ai"
                className="text-foreground font-medium underline"
              >
                admissions@robotgenie.ai
              </a>
            </p>
          </div>

          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-border/50 py-2"
                >
                  <AccordionTrigger className="text-left text-lg font-medium hover:no-underline hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
