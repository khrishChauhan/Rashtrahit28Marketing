import React from 'react';
import { motion } from 'motion/react';
import { Facebook, Instagram, Youtube, Linkedin, ExternalLink } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

const SOCIAL_PLATFORMS = [
  {
    name: "Instagram",
    icon: <Instagram className="h-6 w-6" />,
    handle: "@rashtrahit28",
    color: "hover:border-pink-200 hover:shadow-pink-500/5",
    iconBg: "bg-pink-50 text-pink-600",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="h-6 w-6" />,
    handle: "Rashtrahit28 Marketing",
    color: "hover:border-blue-200 hover:shadow-blue-600/5",
    iconBg: "bg-blue-50 text-blue-600",
  },
  {
    name: "Facebook",
    icon: <Facebook className="h-6 w-6" />,
    handle: "Rashtrahit28",
    color: "hover:border-blue-200 hover:shadow-blue-500/5",
    iconBg: "bg-blue-50 text-blue-600",
  },
  {
    name: "YouTube",
    icon: <Youtube className="h-6 w-6" />,
    handle: "Rashtrahit28 Agency",
    color: "hover:border-red-200 hover:shadow-red-500/5",
    iconBg: "bg-red-50 text-red-600",
  }
];

export function ConnectWithUs() {
  return (
    <section className="relative overflow-hidden bg-bg-base py-24 md:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute left-[10%] top-[20%] h-[600px] w-[600px] rounded-full bg-brand-50/40 blur-[120px]" />
        <div className="absolute right-[5%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-accent-50/30 blur-[100px]" />
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
            <Badge variant="subtle" className="mb-6">Stay Connected</Badge>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-[3.5rem] font-heading">
              Connect With Us
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl mx-auto">
              Join our growing community. Follow us for the latest industry insights, agency news, and digital marketing strategies.
            </p>
          </motion.div>
        </div>

        {/* Social Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {SOCIAL_PLATFORMS.map((platform, idx) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative flex flex-col rounded-[2rem] border border-gray-100 bg-white p-6 sm:p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${platform.color}`}
            >
              {/* Header */}
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${platform.iconBg} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    {platform.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 font-heading">{platform.name}</h3>
                    <p className="text-sm font-medium text-gray-500">{platform.handle}</p>
                  </div>
                </div>
                <a 
                  href="#" 
                  aria-label={`Visit ${platform.name}`}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-50 text-gray-400 transition-all hover:bg-gray-100 hover:text-gray-900 hover:scale-105"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>

              {/* Mock Embed Content Area */}
              <div className="relative mb-8 flex-1 w-full overflow-hidden rounded-[1.5rem] bg-gray-50/80 aspect-video flex flex-col items-center justify-center border border-gray-100/50 p-6 text-center">
                <div className="mb-3 rounded-full bg-white p-3 shadow-sm text-gray-300">
                  {React.cloneElement(platform.icon, { className: 'h-6 w-6' })}
                </div>
                <p className="text-sm font-semibold text-gray-500">Embedded {platform.name} Feed</p>
                <p className="mt-1 text-xs font-medium text-gray-400">Widget loads here</p>
                
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-100/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              {/* Action */}
              <Button variant="outline" className="w-full group-hover:border-gray-300 group-hover:bg-gray-50 transition-colors">
                Follow on {platform.name}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
