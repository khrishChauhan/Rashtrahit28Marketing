import React from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input, Textarea, Label } from '../ui/Form';

export function TrustAndContact() {
  return (
    <section className="relative overflow-hidden bg-gray-50/50 py-16 sm:py-20 md:py-28">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-[10%] top-[10%] h-[600px] w-[600px] rounded-full bg-brand-100/30 blur-[120px]" />
        <div className="absolute -right-[10%] bottom-[10%] h-[500px] w-[500px] rounded-full bg-accent-50/40 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[20px] border border-gray-100 bg-white p-6 sm:p-8 lg:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.08)] relative"
        >
          <div className="mb-10 text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 font-heading mb-4">
              Let's Work Together
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-xl mx-auto">
              Ready to transform your brand? Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </div>

          <form action="https://formsubmit.co/Rashtrahit28marketing@gmail.com" method="POST" className="space-y-6">
            <input type="hidden" name="_captcha" value="false" />
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2 text-left">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Name" className="bg-gray-50/50 focus:bg-white" required />
              </div>
              <div className="space-y-2 text-left">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="Email" className="bg-gray-50/50 focus:bg-white" required />
              </div>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2 text-left">
                <Label htmlFor="mobile">Mobile No.</Label>
                <Input id="mobile" name="mobile" type="tel" placeholder="Mobile No." className="bg-gray-50/50 focus:bg-white" required />
              </div>
              <div className="space-y-2 text-left">
                <Label htmlFor="address">Address</Label>
                <Input id="address" name="address" placeholder="Address" className="bg-gray-50/50 focus:bg-white" />
              </div>
            </div>
            
            <div className="space-y-2 text-left">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" name="description" placeholder="Description" className="bg-gray-50/50 focus:bg-white min-h-[120px]" required />
            </div>
            
            <Button type="submit" variant="primary" size="lg" className="w-full group mt-6">
              Submit Now
              <Send className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Button>
            
            <p className="text-center text-xs font-medium text-gray-500 mt-6">
              By submitting this form, you agree to our privacy policy and terms of service.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
