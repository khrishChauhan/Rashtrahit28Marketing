import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, Send } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input, Textarea, Label } from '../ui/Form';
import { Badge } from '../ui/Badge';

const TESTIMONIALS = [
  {
    quote: "Excellent service and support. Their digital strategy helped us grow our brand",
    author: "Amit Sharma",
    role: "Business Owner",
    rating: 5,
  },
  {
    quote: "My reason for claiming Digital Marketing King as the best Website designing company",
    author: "Rajesh Gupta",
    role: "CEO, Gupta & Sons",
    rating: 5,
  }
];

export function TrustAndContact() {
  return (
    <section className="relative overflow-hidden bg-gray-50/50 py-24 md:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-[20%] top-[10%] h-[600px] w-[600px] rounded-full bg-brand-100/30 blur-[120px]" />
        <div className="absolute -right-[10%] bottom-[10%] h-[500px] w-[500px] rounded-full bg-accent-50/40 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12">
          
          {/* Left Column: Testimonials (45%) */}
          <div className="lg:w-[45%] flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-12"
            >
              <Badge variant="subtle" className="mb-6">Testimonials</Badge>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-[3.5rem] lg:leading-[1.1] font-heading mb-6">
                Client Success <br className="hidden lg:block" /> Stories
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                Don't just take our word for it. Hear from the visionary leaders who have partnered with us.
              </p>
            </motion.div>

            <div className="flex flex-col gap-6">
              {TESTIMONIALS.map((testimonial, idx) => (
                <motion.div
                  key={testimonial.author}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.1 + idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative rounded-[20px] border border-gray-100 bg-white p-4 sm:p-5 lg:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-[6px] hover:border-brand-200 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
                >
                  <Quote className="absolute right-5 top-5 sm:right-6 sm:top-6 h-6 w-6 lg:h-8 lg:w-8 text-brand-50 transition-colors duration-500 group-hover:text-brand-100" />
                  
                  <div className="mb-4 flex gap-1 relative z-10">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent-500 text-accent-500" />
                    ))}
                  </div>
                  
                  <p className="mb-6 text-sm md:text-[15px] lg:text-base leading-[1.6] text-gray-700 relative z-10">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center gap-3 mt-auto relative z-10">
                    <div>
                      <h4 className="text-sm md:text-base font-bold text-gray-900 font-heading m-0">{testimonial.author}</h4>
                      <p className="text-xs md:text-sm font-semibold text-gray-500 m-0">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form (55%) */}
          <div className="lg:w-[55%] lg:pl-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[20px] border border-gray-100 bg-white p-6 sm:p-8 lg:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.08)] relative"
            >
              <div className="mb-10">
                <h3 className="text-3xl font-bold tracking-tight text-gray-900 font-heading mb-4">
                  Let's Work Together
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Ready to transform your brand? Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Name" className="bg-gray-50/50 focus:bg-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Email" className="bg-gray-50/50 focus:bg-white" />
                  </div>
                </div>
                
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="mobile">Mobile No.</Label>
                    <Input id="mobile" type="tel" placeholder="Mobile No." className="bg-gray-50/50 focus:bg-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" placeholder="Address" className="bg-gray-50/50 focus:bg-white" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Description" className="bg-gray-50/50 focus:bg-white" />
                </div>
                
                <Button variant="primary" size="lg" className="w-full group mt-4">
                  Submit Now
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </Button>
                
                <p className="text-center text-xs font-medium text-gray-500 mt-6">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
