import React from 'react';
import { motion } from 'motion/react';
import { Facebook, Instagram, Youtube, Linkedin, ExternalLink } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

const SOCIAL_PLATFORMS = [
  {
    name: "Instagram",
    icon: <Instagram className="h-6 w-6" />,
    handle: "@_abhishek_2805",
    color: "hover:border-pink-200 hover:shadow-pink-500/5",
    iconBg: "bg-pink-50 text-pink-600",
    url: "https://www.instagram.com/_abhishek_2805/",
    cta: "Visit Instagram"
  },
  {
    name: "Facebook",
    icon: <Facebook className="h-6 w-6" />,
    handle: "Aj2805",
    color: "hover:border-blue-200 hover:shadow-blue-500/5",
    iconBg: "bg-blue-50 text-blue-600",
    url: "https://www.facebook.com/Aj2805",
    cta: "Visit Facebook"
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
              className={`group relative flex flex-col rounded-[20px] border border-gray-100 bg-white p-4 sm:p-5 lg:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-[6px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] ${platform.color}`}
            >
              {/* Header */}
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${platform.iconBg} transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3`}>
                    {platform.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 font-heading m-0">{platform.name}</h3>
                    <p className="text-xs font-medium text-gray-500 m-0">{platform.handle}</p>
                  </div>
                </div>
                <a 
                  href={platform.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${platform.name}`}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-50 text-gray-400 transition-all hover:bg-gray-100 hover:text-gray-900 hover:scale-105"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* Action */}
              <Button 
                variant="outline" 
                className="w-full h-[42px] group-hover:border-gray-300 group-hover:bg-gray-50 transition-colors mt-auto"
                onClick={() => window.open(platform.url, '_blank')}
              >
                {platform.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
