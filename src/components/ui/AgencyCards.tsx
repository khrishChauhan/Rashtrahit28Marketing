import React from "react";
import { cn } from "../../lib/utils";
import { ArrowRight, Quote, Linkedin, Twitter } from "lucide-react";
import { motion } from "motion/react";

/* --- Base Card --- */
export function Card({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[20px] border border-gray-100 bg-white p-4 sm:p-5 lg:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:border-brand-200",
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
        <div className="mb-3 inline-flex h-[42px] w-[42px] md:h-12 md:w-12 lg:h-14 lg:w-14 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:scale-105 group-hover:bg-brand-700 group-hover:text-white">
          {icon}
        </div>
        <h3 className="mb-[10px] mt-0 text-xl md:text-[22px] lg:text-2xl font-semibold text-gray-900">{title}</h3>
        <p className="mb-6 flex-1 text-gray-600 leading-[1.6] text-sm md:text-[15px] lg:text-base">{description}</p>
        <a href="#" className="inline-flex h-[46px] items-center text-sm font-semibold text-brand-700 transition-colors group-hover:text-brand-900">
          Learn More <ArrowRight className="ml-2.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
        <Quote className="mb-4 h-6 w-6 lg:h-8 lg:w-8 text-brand-300" />
        <p className="mb-6 flex-1 text-sm md:text-[15px] lg:text-base text-gray-700 leading-[1.6]">"{quote}"</p>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 lg:h-12 lg:w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-semibold uppercase">
            {author.charAt(0)}
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 text-sm md:text-base">{author}</h4>
            <p className="text-xs md:text-sm text-gray-500">{role}</p>
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
      <Card className="group overflow-hidden !p-0">
        <div className="aspect-[4/5] w-full bg-gray-100 transition-colors group-hover:bg-gray-200" />
        <div className="p-4 sm:p-5 lg:p-6 flex flex-col gap-1.5">
          <h4 className="text-lg md:text-xl font-semibold text-gray-900 m-0">{name}</h4>
          <p className="mb-2 text-sm text-accent-600 font-medium m-0">{role}</p>
          <div className="flex items-center gap-3 text-gray-400">
            <a href="#" className="hover:text-brand-700 transition-colors"><Linkedin className="h-4 w-4 md:h-5 md:w-5" /></a>
            <a href="#" className="hover:text-brand-700 transition-colors"><Twitter className="h-4 w-4 md:h-5 md:w-5" /></a>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
