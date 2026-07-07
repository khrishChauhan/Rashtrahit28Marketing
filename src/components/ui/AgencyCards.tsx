import React from "react";
import { cn } from "../../lib/utils";
import { ArrowRight, Quote, Linkedin, Twitter } from "lucide-react";
import { motion } from "motion/react";

/* --- Base Card --- */
export function Card({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/* --- Service Card --- */
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}
export function ServiceCard({ title, description, icon, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="group flex h-full flex-col">
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-700 group-hover:text-white">
          {icon}
        </div>
        <h3 className="mb-3 text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mb-6 flex-1 text-gray-600 leading-relaxed">{description}</p>
        <a href="#" className="inline-flex items-center text-sm font-semibold text-brand-700 transition-colors group-hover:text-brand-900">
          Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </Card>
    </motion.div>
  );
}

/* --- Testimonial Card --- */
interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  delay?: number;
}
export function TestimonialCard({ quote, author, role, delay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="flex h-full flex-col bg-gray-50/50">
        <Quote className="mb-6 h-8 w-8 text-brand-300" />
        <p className="mb-8 flex-1 text-lg text-gray-700 leading-relaxed">"{quote}"</p>
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-semibold uppercase">
            {author.charAt(0)}
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{author}</h4>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

/* --- Team Card --- */
interface TeamCardProps {
  name: string;
  role: string;
  delay?: number;
}
export function TeamCard({ name, role, delay = 0 }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="group overflow-hidden p-0">
        <div className="aspect-[4/5] w-full bg-gray-100 transition-colors group-hover:bg-gray-200" />
        <div className="p-6">
          <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
          <p className="mb-4 text-sm text-accent-600 font-medium">{role}</p>
          <div className="flex items-center gap-3 text-gray-400">
            <a href="#" className="hover:text-brand-700 transition-colors"><Linkedin className="h-5 w-5" /></a>
            <a href="#" className="hover:text-brand-700 transition-colors"><Twitter className="h-5 w-5" /></a>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
