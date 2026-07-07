import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Instagram, Facebook, Send } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Input, Textarea, Label } from '../ui/Form';

export function ContactUs() {
  return (
    <section className="relative overflow-hidden bg-bg-base py-16 sm:py-20 md:py-28">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-[20%] h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-brand-50/40 blur-[120px]" />
        <div className="absolute bottom-0 left-[10%] h-[500px] w-[500px] translate-y-1/3 rounded-full bg-accent-50/30 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-16 sm:mb-20 md:mb-24">
          
          {/* Left Side: Contact Form (55%) */}
          <div className="w-full lg:w-[55%] flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[20px] border border-gray-100 bg-white p-6 sm:p-8 lg:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.08)] relative"
            >
              <h2 className="mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 font-heading">
                Send us a Message
              </h2>
              
              <form action="https://formsubmit.co/Rashtrahit28marketing@gmail.com" method="POST" className="space-y-6">
                <input type="hidden" name="_captcha" value="false" />
                <div className="space-y-2 relative group">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" name="fullName" placeholder="Enter your name" className="bg-gray-50/50 focus:bg-white transition-all duration-300" required />
                </div>
                
                <div className="space-y-2 relative group">
                  <Label htmlFor="emailAddress">Email Address</Label>
                  <Input id="emailAddress" name="email" type="email" placeholder="Enter your email" className="bg-gray-50/50 focus:bg-white transition-all duration-300" required />
                </div>
                
                <div className="space-y-2 relative group">
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input id="phoneNumber" name="phone" type="tel" placeholder="Enter your phone number" className="bg-gray-50/50 focus:bg-white transition-all duration-300" required />
                </div>
                
                <div className="space-y-2 relative group">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Write your message" className="bg-gray-50/50 focus:bg-white transition-all duration-300 min-h-[120px]" required />
                </div>
                
                <Button type="submit" variant="primary" size="lg" className="w-full group mt-4 h-14 rounded-full text-base">
                  Send Message
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </Button>
              </form>
            </motion.div>
          </div>

          {/* Right Side: Contact Information (45%) */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[20px] border border-gray-100 bg-white p-6 sm:p-8 lg:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.08)] h-full flex flex-col"
            >
              <h2 className="mb-8 sm:mb-10 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 font-heading">
                Get in Touch
              </h2>
              
              <ul className="space-y-8 flex-1">
                <li className="flex items-start gap-6 group">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col pt-1">
                    <span className="text-sm font-semibold text-gray-900 mb-1 uppercase tracking-wider">Address</span>
                    <span className="text-gray-600 leading-relaxed">
                      592/D-14, Sec-5 Sheetla Colony,<br />
                      Gurugram,<br />
                      Pincode-12201
                    </span>
                  </div>
                </li>
                
                <li className="flex items-start gap-6 group">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col pt-1">
                    <span className="text-sm font-semibold text-gray-900 mb-1 uppercase tracking-wider">Phone Numbers</span>
                    <a href="tel:+917290873707" className="text-gray-600 hover:text-brand-600 transition-colors">+91 7290873707</a>
                  </div>
                </li>
                
                <li className="flex items-start gap-6 group">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col pt-1">
                    <span className="text-sm font-semibold text-gray-900 mb-1 uppercase tracking-wider">Emails</span>
                    <a href="mailto:abhishekinsan137@gmail.com" className="text-gray-600 hover:text-brand-600 transition-colors">abhishekinsan137@gmail.com</a>
                  </div>
                </li>
              </ul>
              
              <div className="mt-12 pt-8 border-t border-gray-100 flex items-center gap-4">
                <a 
                  href="https://www.instagram.com/_abhishek_2805/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 text-gray-500 hover:bg-brand-50 hover:text-brand-700 transition-all hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.facebook.com/Aj2805" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 text-gray-500 hover:bg-brand-50 hover:text-brand-700 transition-all hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Full-width Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <Badge variant="subtle" className="mb-6">Our Office Location</Badge>
          
          <div className="w-full h-[300px] sm:h-[380px] md:h-[480px] rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-xl shadow-brand-900/5 bg-gray-50 relative">
            <iframe 
              src="https://maps.google.com/maps?q=592%2FD-14%2C%20Sec-5%20Sheetla%20Colony%20Gurugram%2C%20Pincode-12201&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="Google Map Location"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
