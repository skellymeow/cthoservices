"use client";

import Header from "@/components/ui/Header";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp } from "@/lib/animations";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import ContactDialog from "@/components/ui/ContactDialog";
import Footer from "@/components/ui/Footer";

export default function OurWork() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header onOpenContactModal={() => {}} />
      <main className="flex flex-1 flex-col items-center justify-center pt-32 pb-16 w-full">
        <Link href="http://lifesapitchroofing.net/" target="_blank" rel="noopener noreferrer" className="block w-full max-w-3xl px-4">
          <Image
            src="/roofing-site.jpg"
            alt="Life's A Pitch Roofing Website"
            width={1200}
            height={800}
            className="rounded-2xl shadow-xl object-cover w-full max-h-[520px] bg-muted transition-transform duration-300 hover:scale-[1.025] hover:shadow-2xl hover:shadow-[#6017EA]/20"
            priority
          />
        </Link>
        <Link href="https://demo2.ctho.work/" target="_blank" rel="noopener noreferrer" className="block w-full max-w-3xl px-4 mt-10">
          <Image
            src="/orthotics-demo.jpg"
            alt="Orthotics Demo Website"
            width={1200}
            height={800}
            className="rounded-2xl shadow-xl object-cover w-full max-h-[520px] bg-muted transition-transform duration-300 hover:scale-[1.025] hover:shadow-2xl hover:shadow-[#6017EA]/20"
          />
        </Link>
        <Link href="https://csgocases.codes/" target="_blank" rel="noopener noreferrer" className="block w-full max-w-3xl px-4 mt-10">
          <Image
            src="/gaming-affiliate.jpg"
            alt="CSGO Cases Codes Website"
            width={1200}
            height={800}
            className="rounded-2xl shadow-xl object-cover w-full max-h-[520px] bg-muted transition-transform duration-300 hover:scale-[1.025] hover:shadow-2xl hover:shadow-[#6017EA]/20"
          />
        </Link>
        <Link href="https://orthoticsnow.godaddysites.com/" target="_blank" rel="noopener noreferrer" className="block w-full max-w-3xl px-4 mt-10">
          <Image
            src="/orthoticsnowmodern2.png"
            alt="Orthotics Now Modern Website"
            width={1200}
            height={800}
            className="rounded-2xl shadow-xl object-cover w-full max-h-[520px] bg-muted transition-transform duration-300 hover:scale-[1.025] hover:shadow-2xl hover:shadow-[#6017EA]/20"
          />
        </Link>
      </main>
      {/* CTA Section */}
      <section className="section">
        <div className="container-md text-center">
          <motion.div
            {...fadeInUp}
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-5 sm:space-y-7"
          >
            <div>
              <h2 className="text-5xl font-bold mb-3">Your project here next.</h2>
              <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto font-medium">
                30-minute call, zero pressure. Or email me at{' '}
                <a 
                  href="mailto:christianthodesign@gmail.com" 
                  className="text-[#6017EA] underline hover:text-[#4F14B8] transition-colors"
                >
                  christianthodesign@gmail.com
                </a>
              </p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex items-center gap-4 mx-auto text-lg"
                >
                  Contact Christian
                  <ArrowRight className="w-6 h-6 flex-shrink-0" />
                </motion.button>
              </DialogTrigger>
              <DialogContent className="max-w-md w-full">
                <ContactDialog onClose={() => {}} />
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
} 