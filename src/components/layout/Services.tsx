import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MonitorSmartphone, 
  Megaphone, 
  Search, 
  PenTool, 
  Users,
  Video
} from 'lucide-react';
import { Badge } from '../ui/Badge';

const SERVICES_DATA = [
  {
    title: "Social Media Management(SMM)",
    description: "Enhance your brand's online presence by collaborating with Gurgaon’s premier social media marketing agency. Get professional growth, engagement, and strategy for your company!",
    icon: <Users className="h-6 w-6" />,
    href: "/services/social-media-management"
  },
  {
    title: "Search Engine Optimization (SEO)",
    description: "The top SEO services in Gurgaon are provided by GST Industrial & Marketing Services, ensuring that your company achieves increased organic traffic and optimal visibility.",
    icon: <Search className="h-6 w-6" />,
    href: "/services/search-engine-optimization"
  },
  {
    title: "Video Editing",
    description: "Increase brand awareness with Gurgaon’s best video marketing company! Professional video editing services to produce captivating, excellent material that produces outcomes.",
    icon: <Video className="h-6 w-6" />,
    href: "/services/video-editing"
  },
  {
    title: "Web Designing",
    description: "GST Marketing Company offers high-impact web design services that help brands build a strong, credible, and conversion-focused online presence. We design modern, responsive,",
    icon: <MonitorSmartphone className="h-6 w-6" />,
    href: "/services/web-designing"
  },
  {
    title: "Graphic Designing",
    description: "Creative social media post services that attract attention, engage audiences, and build strong brand presence every single day. Make your brand memorable with custom logo design services tailored to your vision and business goals.",
    icon: <PenTool className="h-6 w-6" />,
    href: "/services/graphic-designing"
  },
  {
    title: "Political Campaign & Marketing",
    description: "Political campaigns and marketing play a vital role in building public trust, shaping voter perception, and driving meaningful engagement during elections. As a Top Campaign Marketing Agency in Gurgaon,",
    icon: <Megaphone className="h-6 w-6" />,
    href: "/political"
  }
];

export function Services() {
  return (
    <section className="relative overflow-hidden bg-bg-base py-32 md:py-40">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-brand-50/50 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[800px] w-[800px] translate-x-1/3 translate-y-1/3 rounded-full bg-accent-50/40 blur-[120px]" />
        {/* Tiny geometric decorations */}
        <div className="absolute top-[20%] left-[10%] h-2 w-2 rounded-full bg-brand-200" />
        <div className="absolute bottom-[20%] right-[15%] h-3 w-3 rounded-full bg-accent-200" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="mx-auto mb-24 flex max-w-2xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <Badge variant="subtle" className="mb-6">Welcome</Badge>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-[4rem] font-heading mb-8">
              to Our Services
            </h2>
            <div className="h-1 w-20 bg-brand-500 rounded-full" />
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-4 md:gap-5 lg:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES_DATA.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group flex h-full flex-col rounded-[20px] border border-gray-100 bg-white p-4 sm:p-5 lg:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-[6px] hover:border-brand-200 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
            >
              <div className="mb-3 inline-flex h-[42px] w-[42px] md:h-12 md:w-12 lg:h-14 lg:w-14 shrink-0 items-center justify-center rounded-full bg-brand-50/50 border border-brand-100 text-brand-700 transition-all duration-500 group-hover:scale-105 group-hover:bg-brand-600 group-hover:border-brand-600 group-hover:text-white">
                {service.icon}
              </div>
              
              <h3 className="mt-0 mb-[10px] text-xl md:text-[22px] lg:text-2xl font-bold text-gray-900 font-heading transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="mb-6 flex-1 text-gray-600 leading-[1.6] text-sm md:text-[15px] lg:text-base">
                {service.description}
              </p>
              
              <div className="mt-auto">
                <Link 
                  to={service.href} 
                  className="inline-flex h-[46px] w-full sm:w-auto items-center justify-center rounded-full border border-gray-200 bg-transparent px-6 text-sm font-bold text-gray-700 transition-all duration-500 group-hover:border-brand-500 group-hover:bg-brand-50 group-hover:text-brand-700"
                >
                  Read More
                  <ArrowRight className="ml-2.5 h-4 w-4 transition-transform duration-500 group-hover:translate-x-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
