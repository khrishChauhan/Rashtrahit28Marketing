import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Twitter } from 'lucide-react';
import { Badge } from '../ui/Badge';

const TEAM_MEMBERS = [
  {
    name: "Sarah Jenkins",
    role: "Head of Strategy",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "David Chen",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Maya Patel",
    role: "Lead Designer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "James Wilson",
    role: "Technical Lead",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
  }
];

export function Team() {
  return (
    <section className="relative overflow-hidden bg-gray-50/50 py-24 md:py-32">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/3 translate-x-1/3 rounded-full bg-brand-50/40 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="mx-auto mb-20 flex max-w-2xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge variant="subtle" className="mb-6">Leadership</Badge>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-[3.5rem] font-heading">
              Meet Our Team
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl mx-auto">
              The creative minds and strategic thinkers driving our agency's success. 
              Together, we engineer digital growth.
            </p>
          </motion.div>
        </div>

        {/* Team Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col rounded-[20px] border border-gray-100 bg-white p-3 sm:p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-[6px] hover:border-brand-200 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
            >
              {/* Profile Image */}
              <div className="relative mb-4 w-full overflow-hidden rounded-[14px] aspect-[4/5] bg-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Image Overlay Gradient (Subtle) */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              {/* Profile Info */}
              <div className="flex flex-col items-center text-center px-1 pb-2">
                <h3 className="mb-1 text-lg md:text-xl font-bold text-gray-900 font-heading transition-colors duration-300 group-hover:text-brand-700 m-0">
                  {member.name}
                </h3>
                <p className="mb-3 md:mb-4 text-xs md:text-sm font-semibold text-brand-600 m-0">
                  {member.role}
                </p>

                {/* Social Icons */}
                <div className="flex items-center gap-2 text-gray-400">
                  <a 
                    href="#" 
                    aria-label={`${member.name}'s LinkedIn`}
                    className="flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-full bg-gray-50 transition-all duration-300 hover:bg-brand-50 hover:text-brand-700 hover:scale-110"
                  >
                    <Linkedin className="h-3.5 w-3.5 md:h-4 md:w-4" />
                  </a>
                  <a 
                    href="#" 
                    aria-label={`${member.name}'s Twitter`}
                    className="flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-full bg-gray-50 transition-all duration-300 hover:bg-brand-50 hover:text-brand-700 hover:scale-110"
                  >
                    <Twitter className="h-3.5 w-3.5 md:h-4 md:w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
