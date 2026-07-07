import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Plus, Minus } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

const FAQS = [
  {
    id: 1,
    question: "What services do we offer?",
    answer: "We offer comprehensive digital marketing services including Social Media Management, Search Engine Optimization (SEO), Video Editing, Graphic Designing, Web Designing, and Political Campaigns tailored to your specific goals."
  },
  {
    id: 2,
    question: "How do we help brands and leaders grow?",
    answer: "By creating data-driven digital strategies, optimizing online presence, and running targeted campaigns that engage the right audience and convert them into loyal clients or supporters."
  },
  {
    id: 3,
    question: "Why should clients choose us?",
    answer: "We combine years of expertise with a results-oriented approach. Our dedication to quality, modern design, and measurable growth sets us apart as a top-tier digital marketing partner."
  },
  {
    id: 4,
    question: "What makes our approach different?",
    answer: "We focus on premium, timeless design and strategic messaging rather than just following trends. We ensure every campaign we run is meticulously crafted to leave a lasting impact on your audience."
  }
];

function AccordionItem({ 
  item, 
  isOpen, 
  onToggle 
}: { 
  item: typeof FAQS[0]; 
  isOpen: boolean; 
  onToggle: () => void;
  key?: string | number;
}) {
  return (
    <div className="border-b border-gray-100 last:border-none">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg px-2 -mx-2 transition-colors hover:bg-gray-50/50"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-gray-900 pr-8">{item.question}</span>
        <div 
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
            isOpen 
              ? "bg-brand-50 border-brand-200 text-brand-700" 
              : "bg-white border-gray-200 text-gray-500 group-hover:border-brand-200 group-hover:text-brand-600"
          )}
        >
          {isOpen ? <Minus className="h-5 w-5 transition-transform duration-300" /> : <Plus className="h-5 w-5 transition-transform duration-300" />}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 px-2 text-gray-600 leading-relaxed">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function AboutFAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-accent-50/30 blur-[120px]" />
        <div className="absolute bottom-[10%] -right-[10%] h-[600px] w-[600px] rounded-full bg-brand-50/40 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
          
          {/* Left Side: Content (50%) */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="sticky top-40"
            >
              <Badge variant="subtle" className="mb-6">ABOUT COMPANY</Badge>
              
              <h2 className="mb-8 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-[3.5rem] lg:leading-[1.1] font-heading">
                Where Strategy Meets Digital Influence
              </h2>
              
              <div className="mb-8 h-1 w-16 bg-brand-500 rounded-full" />
              
              <p className="mb-10 text-lg leading-relaxed text-gray-600">
                We partner with brands and leaders to accelerate growth using strategic digital marketing. By combining performance campaigns, content, and targeted outreach, we help build visibility, engagement, and results that translate into real business impact.
              </p>
              
              <Button variant="primary" size="lg" className="group rounded-full px-8">
                Contact Us
                <ArrowRight className="ml-2.5 h-4 w-4 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>

          {/* Right Side: FAQ Accordion (50%) */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[20px] border border-gray-100 bg-white p-5 sm:p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)] relative"
            >
              {/* Very subtle top border accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-1/3 bg-gradient-to-r from-transparent via-brand-300 to-transparent opacity-50" />
              
              <div className="flex flex-col">
                {FAQS.map((faq) => (
                  <AccordionItem 
                    key={faq.id} 
                    item={faq} 
                    isOpen={openId === faq.id}
                    onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
                  />
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
