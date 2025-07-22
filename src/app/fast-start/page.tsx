'use client';

import Header from "@/components/ui/Header";
import { motion } from "framer-motion";
import { useState } from "react";
import { fadeInUp } from "@/lib/animations";
import Footer from "@/components/ui/Footer";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ContactDialog from "@/components/ui/ContactDialog";
import { Calendar, ArrowRight, CheckCircle, Users, FileText, Server, TrendingUp, Globe } from "lucide-react";

export default function FastStart() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onOpenContactModal={() => setIsModalOpen(true)} />
      {/* Hero Section */}
      <section className="section mt-[150px] flex flex-col items-center justify-center">
        <div className="container-sm text-center flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Get Your Business Online<br />
            <span className="bg-[#6017EA] text-white px-2 py-1 rounded">$350 for 1 Year</span>
          </h1>
          <p className="text-base text-muted-foreground font-medium mb-8">
            3 core pages. Built by a local expert. Fast, secure, and real support. No contracts, no hidden fees, just results.
          </p>
          <div className="flex justify-center">
            <a href="/our-work" className="btn-primary flex items-center gap-2 text-sm">
              View Our Work
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </a>
          </div>
        </div>
      </section>
      {/* Offer Details Section */}
      <section className="section flex flex-col items-center justify-center">
        <div className="container-sm text-center flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">What You Get</h2>
          <ul className="space-y-4 mb-8 inline-block mx-auto text-left">
            <li className="flex items-center gap-4 text-base"><FileText className="w-7 h-7 text-[#6017EA] flex-shrink-0" /><span><span className="font-semibold text-foreground">3 core pages</span> <span className="text-muted-foreground">— Home, Services, Contact</span></span></li>
            <li className="flex items-center gap-4 text-base"><Users className="w-7 h-7 text-[#6017EA] flex-shrink-0" /><span><span className="font-semibold text-foreground">Custom-built for your business</span> <span className="text-muted-foreground">— no templates, no cookie-cutter</span></span></li>
            <li className="flex items-center gap-4 text-base"><Server className="w-7 h-7 text-[#6017EA] flex-shrink-0" /><span><span className="font-semibold text-foreground">1 year of hosting & SSL</span> <span className="text-muted-foreground">— fast, secure, and reliable</span></span></li>
            <li className="flex items-center gap-4 text-base"><CheckCircle className="w-7 h-7 text-[#6017EA] flex-shrink-0" /><span><span className="font-semibold text-foreground">Unlimited revisions before launch</span> <span className="text-muted-foreground">— get it right, no stress</span></span></li>
            <li className="flex items-center gap-4 text-base"><Globe className="w-7 h-7 text-[#6017EA] flex-shrink-0" /><span><span className="font-semibold text-foreground">Real support from a real person</span> <span className="text-muted-foreground">— not a call center</span></span></li>
            <li className="flex items-center gap-4 text-base"><TrendingUp className="w-7 h-7 text-[#6017EA] flex-shrink-0" /><span><span className="font-semibold text-foreground">Upgrade anytime</span> <span className="text-muted-foreground">— your $450 applies as credit</span></span></li>
          </ul>
          {/* Removed Book a Call and Contact Christian CTAs from this section */}
        </div>
      </section>
      {/* Conviction Section */}
      <section className="section flex flex-col items-center justify-center">
        <div className="container-sm text-center flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Why Fast-Start?</h2>
          <ul className="mb-6 mt-2 space-y-4 inline-block mx-auto text-left">
            <li className="flex items-center gap-4 text-base">
              <CheckCircle className="w-7 h-7 text-[#6017EA] flex-shrink-0" />
              <span><span className="font-semibold text-foreground">No contracts, no hidden fees</span> <span className="text-muted-foreground">— just results</span></span>
            </li>
            <li className="flex items-center gap-4 text-base">
              <Users className="w-7 h-7 text-[#6017EA] flex-shrink-0" />
              <span><span className="font-semibold text-foreground">Built for business owners</span> <span className="text-muted-foreground">— not hobbyists</span></span>
            </li>
            <li className="flex items-center gap-4 text-base">
              <Server className="w-7 h-7 text-[#6017EA] flex-shrink-0" />
              <span><span className="font-semibold text-foreground">Real support, real fast</span> <span className="text-muted-foreground">— talk to a human, not a bot</span></span>
            </li>
          </ul>
        </div>
      </section>
      {/* CTA Section */}
      <section id="contact" className="section flex flex-col items-center justify-center">
        <div className="container-md text-center flex flex-col items-center justify-center">
          <motion.div
            {...fadeInUp}
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-5 sm:space-y-7"
          >
            <div>
              <h2 className="text-4xl font-bold mb-3">Ready to Launch?</h2>
              <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto font-medium">
                Book a call or email me at{' '}
                <a 
                  href="mailto:christianthodesign@gmail.com" 
                  className="text-[#6017EA] underline hover:text-[#4F14B8] transition-colors"
                >
                  christianthodesign@gmail.com
                </a>
              </p>
              <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto font-medium mt-2">
                Get your business online, fast. No contracts, no hidden fees, just results.
              </p>
            </div>
            <div className="flex flex-row items-center justify-center gap-4 mt-6">
              <a href="/book" className="btn-primary text-base py-3 px-6 flex items-center gap-2"><Calendar className="w-5 h-5 flex-shrink-0" />Book a Call</a>
              <button onClick={() => setIsModalOpen(true)} className="btn-primary text-base py-3 px-6 flex items-center gap-2"><ArrowRight className="w-5 h-5 flex-shrink-0" />Contact Christian</button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Modal rendered at page level */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-md w-full">
          <ContactDialog onClose={() => setIsModalOpen(false)} />
        </DialogContent>
      </Dialog>
      <Footer />
    </div>
  );
} 