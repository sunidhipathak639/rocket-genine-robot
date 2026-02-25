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
    <section id="faq" className="py-24 relative overflow-hidden bg-[#030712]">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-[120px] rounded-full opacity-50" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCBMIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==')] opacity-20" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-black tracking-widest uppercase"
              >
                Information Hub
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
                Frequently{" "}
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Asked Questions
                </span>
              </h2>
              <p className="text-lg text-blue-100/40 font-medium">
                Everything you need to know about the curriculum, admissions,
                and careers.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
              <p className="text-sm text-blue-100/60 font-medium leading-relaxed">
                Can&apos;t find the answer you&apos;re looking for? Reach out to
                our admissions team at{" "}
                <a
                  href="mailto:admissions@robotgenie.ai"
                  className="text-white font-black underline decoration-cyan-500/50 hover:decoration-cyan-500 transition-all"
                >
                  admissions@robotgenie.ai
                </a>
              </p>
            </div>
          </div>

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-0 px-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all data-[state=open]:bg-white/[0.05] data-[state=open]:border-purple-500/30 shadow-xl overflow-hidden"
                >
                  <AccordionTrigger className="text-left text-lg font-black text-white hover:no-underline hover:text-cyan-400 transition-colors py-5 tracking-tight">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-blue-100/40 text-base font-medium leading-relaxed pb-6">
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
