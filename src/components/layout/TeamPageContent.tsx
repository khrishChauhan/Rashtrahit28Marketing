import React from 'react';
import { motion } from 'motion/react';
import { Badge } from '../ui/Badge';

const SOCIAL_MEDIA_TEAM = [
  { name: "Manish Kumar", role: "Manager", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400" },
  { name: "Chandeshwar", role: "Video Editor", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400" },
  { name: "Nishant Mishra", role: "Video Editor", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400" },
  { name: "Tanya Pandey", role: "Content Writer", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400" },
];

const DEV_TEAM = [
  { name: "Abhishek Jha", role: "Software Developer", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=400" },
  { name: "Mona Jha", role: "SEO Marketing", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400" },
];

const PRINT_TEAM = [
  { name: "Rahul Yadav", role: "Print Media Solutions", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400" },
];

function TeamMemberCard({ member }: { member: any, key?: number | string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-full cursor-pointer flex-col items-center rounded-[20px] border border-gray-100 bg-white p-4 sm:p-5 lg:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-[6px] hover:border-brand-200 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
    >
      <div className="relative mb-4 h-24 w-24 md:h-28 md:w-28 shrink-0 overflow-hidden rounded-full border border-gray-50 bg-gray-100 shadow-sm">
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <h3 className="mb-1 text-lg md:text-xl font-bold text-gray-900 font-heading transition-colors duration-300 group-hover:text-brand-700 text-center m-0">
        {member.name}
      </h3>
      <p className="text-xs md:text-sm font-semibold text-brand-600 text-center m-0">
        {member.role}
      </p>
    </motion.div>
  );
}

export function TeamPageContent() {
  return (
    <div className="relative min-h-screen bg-bg-base overflow-hidden pb-24 md:pb-32">
      {/* Decorative Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-50/40 blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 h-[600px] w-[600px] translate-x-1/3 rounded-full bg-accent-50/20 blur-[120px]" />
        <div className="absolute top-1/2 left-0 h-[500px] w-[500px] -translate-x-1/3 rounded-full bg-brand-50/20 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* SECTION 1: HERO */}
        <section className="py-20 md:py-32 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[700px] flex flex-col items-center"
          >
            <Badge variant="subtle" className="mb-8">OUR TEAM</Badge>
            <h1 className="mb-8 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl font-heading leading-tight">
              Meet the People Behind Our Success
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Our team is made up of passionate professionals specializing in digital marketing, software development, SEO, content creation, video production and print media. Together we work to deliver creative, strategic and performance-driven solutions for every client.
            </p>
          </motion.div>
        </section>

        {/* SECTION 2: DIRECTOR */}
        <section className="mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group relative mx-auto flex max-w-2xl cursor-pointer flex-col items-center rounded-[20px] border border-gray-100 bg-white p-6 sm:p-8 lg:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-[6px] hover:border-brand-200 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
          >
            <div className="relative mb-6 flex h-32 w-32 items-center justify-center rounded-full border border-brand-100 bg-brand-50/50 shadow-inner transition-transform duration-500 group-hover:scale-105 group-hover:bg-brand-50">
              <span className="font-heading text-4xl font-bold tracking-wider text-brand-700">
                AJ
              </span>
            </div>
            <h3 className="mb-[10px] font-heading text-2xl md:text-3xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-brand-700 text-center mt-0">
              Abhishek Jha
            </h3>
            <p className="mb-4 text-lg md:text-xl font-semibold text-brand-600 text-center m-0">
              Director
            </p>
            <p className="text-center text-sm md:text-[15px] lg:text-base leading-[1.6] text-gray-600 max-w-md m-0">
              Leading the company's vision, innovation and strategic growth.
            </p>
          </motion.div>
        </section>

        {/* SECTION 3: SOCIAL MEDIA MARKETING TEAM */}
        <section className="mb-24 md:mb-32">
          <div className="mb-16 flex flex-col items-center text-center">
            <h2 className="mb-6 font-heading text-3xl font-bold text-gray-900 md:text-4xl">
              Social Media Marketing Team
            </h2>
            <p className="max-w-2xl text-lg text-gray-600 leading-relaxed">
              Our creative team manages branding, content creation, audience engagement and visual storytelling.
            </p>
          </div>
          <div className="grid gap-4 md:gap-5 lg:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {SOCIAL_MEDIA_TEAM.map((member, idx) => (
              <TeamMemberCard key={idx} member={member} />
            ))}
          </div>
        </section>

        {/* SECTION 4: DEVELOPMENT MARKETING TEAM */}
        <section className="mb-24 md:mb-32">
          <div className="mb-16 flex flex-col items-center text-center">
            <h2 className="mb-6 font-heading text-3xl font-bold text-gray-900 md:text-4xl">
              Development Marketing Team
            </h2>
            <p className="max-w-2xl text-lg text-gray-600 leading-relaxed">
              Our technical experts build software solutions and improve online visibility through technology and SEO.
            </p>
          </div>
          <div className="mx-auto grid max-w-3xl gap-4 md:gap-5 lg:gap-6 grid-cols-1 sm:grid-cols-2">
            {DEV_TEAM.map((member, idx) => (
              <TeamMemberCard key={idx} member={member} />
            ))}
          </div>
        </section>

        {/* SECTION 5: PRINT MEDIA TEAM */}
        <section>
          <div className="mb-16 flex flex-col items-center text-center">
            <h2 className="mb-6 font-heading text-3xl font-bold text-gray-900 md:text-4xl">
              Print Media
            </h2>
            <p className="max-w-2xl text-lg text-gray-600 leading-relaxed">
              Our print media division delivers high-quality branding and offline marketing solutions.
            </p>
          </div>
          <div className="mx-auto max-w-[340px]">
            {PRINT_TEAM.map((member, idx) => (
              <TeamMemberCard key={idx} member={member} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
