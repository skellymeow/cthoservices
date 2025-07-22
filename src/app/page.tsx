'use client';

import Header from "@/components/ui/Header";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { 
  Zap, 
  ArrowRight, 
  CheckCircle,
  Users,
  TrendingUp,
  Globe,
  ArrowUp,
  MessageCircle,
  Box,
  CircuitBoard,
  Search,
  FileText,
  Bell,
  Rocket,
  Calendar,
  Check,
  Twitter,
  ShoppingCart,
  Server,
  Key,
  Repeat
} from "lucide-react";
import { fadeInUp } from "@/lib/animations";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Footer from "@/components/ui/Footer";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ContactDialog from "@/components/ui/ContactDialog";

// CHANGELOG
// - Removed the entire pricing section from the landing page
// - Hosting section visually and structurally normalized to match pricing card: reduced card size, matched padding, font sizes, and spacing for consistency
// - Rewrote Pricing section for clarity and value
// - Added 50/50 split for hosting options (DFY vs Self-Hosted)
// - Added Add-Ons section with cards for each add-on
// - All changes use production-grade, standardized UI components
// - Replaced all 'Book a Call' calendly links with /book
// - Removed the 'Need more or want something custom?' card section from the landing page
// - Removed all card-like backgrounds, borders, and padding from the hosting section. Now flat, simple, and visually consistent with the rest of the landing page (no Card, no bg-muted, no shadow, no rounded, no border, no extra padding).
// - Rewrote all copy that was meme-y, tryhard, or juvenile to be both casual and professional. Tone is now friendly, direct, and grown.
// - Hosting is now a single, consistent pricing bullet: $25/mo, half-size, matches the rest of the pricing/features list. Removed all flex/columns/extra markup.
// - Made all CTAs/buttons consistent in size and style. Where multiple CTAs appear, they are now horizontally aligned, centered vertically, and use the same btn-primary, text-base, py-3, px-6, gap-4, and flex-row classes.

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('section');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setShowScrollTop(window.scrollY > heroBottom);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-scroll carousel every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // setCurrentProjectIndex((prev) => (prev + 1) % projects.length); // This line is removed
    }, 15000);

    return () => clearInterval(interval);
  }, []); // This line is removed

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onOpenContactModal={() => setIsModalOpen(true)} />
      {/* Hero Section */}
      <section className="section mt-[150px] flex flex-col items-center justify-center">
        <div className="container-sm text-center flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Get More Clients Online<br />
            <span className="bg-[#6017EA] text-white px-2 py-1 rounded">In weeks, not months</span>
          </h1>
          <p className="text-base text-muted-foreground font-medium mb-8">
            I&#39;m Christian. I build and launch real websites for real businesses—fast, clean, and without the agency overhead. Based in Southern Ontario, working with clients anywhere.
          </p>
          <div className="flex justify-center">
            <a href="/our-work" className="btn-primary flex items-center gap-2 text-sm">
              View Our Work
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </a>
          </div>
        </div>
      </section>
      {/* Second Fold Section */}
      <section className="section flex flex-col items-center justify-center">
        <div className="container-sm text-center flex flex-col items-center justify-center">
          <h2 className="text-5xl font-bold text-foreground mb-6">Got an idea? Let&#39;s make it real.</h2>
          <ul className="space-y-4 mb-8 inline-block mx-auto text-left">
            <li className="flex items-center gap-4 text-base"><Zap className="w-7 h-7 text-[#6017EA] flex-shrink-0" /><span><span className="font-semibold text-foreground">All-in-one</span> <span className="text-muted-foreground">Website, landing page, integrations. Everything you need, included.</span></span></li>
            <li className="flex items-center gap-4 text-base"><Box className="w-7 h-7 text-[#6017EA] flex-shrink-0" /><span><span className="font-semibold text-foreground">Modern tech</span> <span className="text-muted-foreground">Fast, scalable, SEO-ready. Built for performance.</span></span></li>
            <li className="flex items-center gap-4 text-base"><CircuitBoard className="w-7 h-7 text-[#6017EA] flex-shrink-0" /><span><span className="font-semibold text-foreground">Work direct</span> <span className="text-muted-foreground">You work with me, Christian. No middlemen, no handoffs.</span></span></li>
            <li className="flex items-center gap-4 text-base"><Search className="w-7 h-7 text-[#6017EA] flex-shrink-0" /><span><span className="font-semibold text-foreground">SEO built-in</span> <span className="text-muted-foreground">Rank where it matters. Reach real customers.</span></span></li>
          </ul>
          
        </div>
      </section>
      {/* Website Sprint Offer Section */}
      <section className="section flex flex-col items-center justify-center">
        <div className="container-sm text-center flex flex-col items-center justify-center">
          <h2 className="text-5xl font-bold text-foreground mb-6">Website Sprint — $1,750 CAD once</h2>
          <p className="text-base text-muted-foreground font-medium mb-8 max-w-2xl mx-auto">
            Everything you need to get online, fast — no fluff, no upsells.
          </p>
          <ul className="space-y-4 mb-8 inline-block mx-auto text-left">
            <li className="flex items-center gap-4 text-base"><Check className="w-6 h-6 text-[#6017EA] flex-shrink-0" /><span><span className="font-semibold text-foreground">Up to 10 custom-designed pages</span></span></li>
            <li className="flex items-center gap-4 text-base"><Rocket className="w-6 h-6 text-[#6017EA] flex-shrink-0" /><span><span className="font-semibold text-foreground">Modern tech</span> <span className="text-muted-foreground">(fast, SEO-ready, mobile-optimized)</span></span></li>
            <li className="flex items-center gap-4 text-base"><FileText className="w-6 h-6 text-[#6017EA] flex-shrink-0" /><span><span className="font-semibold text-foreground">CMS/blog included</span> <span className="text-muted-foreground">— add/edit content easily</span></span></li>
            <li className="flex items-center gap-4 text-base"><MessageCircle className="w-6 h-6 text-[#6017EA] flex-shrink-0" /><span><span className="font-semibold text-foreground">Lead capture</span> <span className="text-muted-foreground">(forms, email, calendar links, etc.)</span></span></li>
            <li className="flex items-center gap-4 text-base"><Search className="w-6 h-6 text-[#6017EA] flex-shrink-0" /><span><span className="font-semibold text-foreground">Basic SEO setup</span> <span className="text-muted-foreground">+ Google Analytics</span></span></li>
            <li className="flex items-center gap-4 text-base"><Users className="w-6 h-6 text-[#6017EA] flex-shrink-0" /><span><span className="font-semibold text-foreground">1:1 workflow</span> <span className="text-muted-foreground">— you work directly with me, Christian</span></span></li>
            <li className="flex items-center gap-4 text-base"><Repeat className="w-6 h-6 text-[#6017EA] flex-shrink-0" /><span><span className="font-semibold text-foreground">Two revision rounds</span></span></li>
            <li className="flex items-center gap-4 text-base"><Rocket className="w-6 h-6 text-[#6017EA] flex-shrink-0" /><span><span className="font-semibold text-foreground">Launch + 2 weeks of post-launch support</span></span></li>
            <li className="flex items-center gap-4 text-base"><Server className="w-6 h-6 text-[#6017EA] flex-shrink-0" /><span><span className="font-semibold text-foreground">Hosting:</span> <span className="text-muted-foreground">$25/mo (fully managed, blazing fast, no branding)</span></span></li>
          </ul>
          <div className="text-base text-muted-foreground font-medium mb-6">Timeline: <span className="text-foreground font-semibold">2–3 weeks</span> start to finish</div>
          <div className="flex flex-row items-center justify-center gap-4 mt-2">
            <a href="/book" className="btn-primary text-base py-3 px-6 flex items-center gap-2"><Calendar className="w-5 h-5 flex-shrink-0" />Book a Call</a>
            <button onClick={() => setIsModalOpen(true)} className="btn-primary text-base py-3 px-6 flex items-center gap-2"><ArrowRight className="w-5 h-5 flex-shrink-0" />Contact Christian</button>
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="section flex flex-col items-center justify-center">
        <div className="container-sm text-center flex flex-col items-center justify-center">
          <h2 className="text-5xl font-bold text-foreground mb-6">How It Works</h2>
          <ul className="space-y-4 mb-6 inline-block mx-auto text-left">
            <li className="flex items-center gap-4 text-base">
              <FileText className="w-7 h-7 text-[#6017EA] flex-shrink-0" />
              <span><span className="font-semibold text-foreground">Discovery</span> <span className="text-muted-foreground">We talk about your goals. Clear, simple, actionable.</span></span>
            </li>
            <li className="flex items-center gap-4 text-base">
              <Bell className="w-7 h-7 text-[#6017EA] flex-shrink-0" />
              <span><span className="font-semibold text-foreground">Build</span> <span className="text-muted-foreground">You get regular updates and working demos. Always in the loop.</span></span>
            </li>
            <li className="flex items-center gap-4 text-base">
              <Rocket className="w-7 h-7 text-[#6017EA] flex-shrink-0" />
              <span><span className="font-semibold text-foreground">Launch</span> <span className="text-muted-foreground">Site goes live with SEO setup and training. Ongoing support available.</span></span>
            </li>
          </ul>
        </div>
      </section>
      {/* Value of an MVP Section */}
      <section className="section flex flex-col items-center justify-center">
        <div className="container-sm text-center flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 mb-4 justify-center">
            <h2 className="text-5xl font-bold text-foreground">Why a Real Website?</h2>
          </div>
          <ul className="mb-6 mt-2 space-y-4 inline-block mx-auto text-left">
            <li className="flex items-center gap-4 text-base">
              <FileText className="w-7 h-7 text-[#6017EA] flex-shrink-0" />
              <span><span className="font-semibold text-foreground">Most sites are just digital flyers.</span> <span className="text-muted-foreground">Yours should bring you real business.</span></span>
            </li>
            <li className="flex items-center gap-4 text-base">
              <Users className="w-7 h-7 text-[#6017EA] flex-shrink-0" />
              <span><span className="font-semibold text-foreground">Turn visitors into clients,</span> <span className="text-muted-foreground">not just clicks.</span></span>
            </li>
            <li className="flex items-center gap-4 text-base">
              <TrendingUp className="w-7 h-7 text-[#6017EA] flex-shrink-0" />
              <span><span className="font-semibold text-foreground">Stand out, get found, and grow—</span><span className="text-muted-foreground">no fluff, just results.</span></span>
            </li>
          </ul>
        </div>
      </section>
      {/* Meet the founder Section */}
      <section className="section flex flex-col items-center justify-center">
        <div className="container-sm text-center flex flex-col items-center justify-center">
          <div className="flex flex-col items-center mb-5">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 bg-card flex items-center justify-center">
              
            </div>
            <h2 className="text-5xl font-bold text-foreground mb-6">Meet Your Builder</h2>
            <div className="flex items-center gap-4 justify-center mb-2">
              <span className="inline-flex items-center bg-muted px-3 py-1 rounded-full text-sm font-semibold text-foreground"><Twitter className="w-6 h-6 mr-2 text-[#1da1f2] flex-shrink-0" />@43skell</span>
              <CheckCircle className="w-6 h-6 text-[#6017EA] flex-shrink-0" />
            </div>
          </div>
          <div className="space-y-3 text-base text-muted-foreground mb-2">
            <p>I’m Christian Thompson, based in Southern Ontario. I build web products that get used—not just admired.</p>
            <p>I work with local businesses, creators, and founders who want clear answers and solid delivery. No middlemen. Real results.</p>
            <p>Let’s talk about your idea and get it launched—fast. DM me on Twitter or use the form below.</p>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="section">
        <div className="container-sm max-w-lg mx-auto">
          <h3 className="text-3xl font-bold text-foreground mb-6 text-center">FAQ</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="q1">
              <AccordionTrigger className="text-lg font-semibold flex items-center justify-center">
                <Globe className="w-5 h-5 text-[#6017EA] mr-2" />
                Is ongoing SEO or social media included?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base text-center">
                <div className="max-w-md mx-auto">
                  Launch SEO is included (meta tags, indexing, analytics). Ongoing SEO or social media services are available as add-ons—let’s talk if you want to go deeper.
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger className="text-lg font-semibold flex items-center justify-center">
                <FileText className="w-5 h-5 text-[#6017EA] mr-2" />
                Can you build a custom blog or CMS?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base text-center">
                <div className="max-w-md mx-auto">
                  Absolutely. I can build custom blogs or CMS solutions (Supabase, Google Auth, etc.) or integrate with your preferred platform. You get full control—no locked-in templates. You can write your own content (DIY) or have me do it for you (DFY).
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger className="text-lg font-semibold flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-[#6017EA] mr-2" />
                What about e-commerce?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base text-center">
                <div className="max-w-md mx-auto">
                  For e-commerce, I use Shopify for reliability and scalability. If you want something else, we can discuss custom builds or hosted solutions (GoDaddy, etc.) based on your budget.
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q4">
              <AccordionTrigger className="text-lg font-semibold flex items-center justify-center">
                <Server className="w-5 h-5 text-[#6017EA] mr-2" />
                How does hosting work?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base text-center">
                <div className="max-w-md mx-auto">
                  I offer hosting for custom-coded sites with a one-time setup and an extremely low monthly fee. No contracts, cancel anytime if you’re not seeing results. You’re always in control.
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q5">
              <AccordionTrigger className="text-lg font-semibold flex items-center justify-center">
                <Key className="w-5 h-5 text-[#6017EA] mr-2" />
                Who owns the site and content?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base text-center">
                <div className="max-w-md mx-auto">
                  You own your site and content, always. I’ll hand off all code, assets, and access so you’re never locked in.
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
              <h2 className="text-5xl font-bold mb-3">Let’s Get You More Clients</h2>
              <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto font-medium">
                30-minute call, zero pressure. Or email me at{' '}
                <a 
                  href="mailto:christianthodesign@gmail.com" 
                  className="text-[#6017EA] underline hover:text-[#4F14B8] transition-colors"
                >
                  christianthodesign@gmail.com
                </a>
              </p>
              <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto font-medium mt-2">
                Have a unique project or need ongoing support? Let’s talk about what works for you.
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
      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0, 
          scale: showScrollTop ? 1 : 0 
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-40 p-3 sm:p-4 rounded-full bg-[#6017EA] hover:bg-[#4F14B8] text-white shadow-lg hover:shadow-[#6017EA]/25 transition-all duration-300"
      >
        <ArrowUp className="w-6 h-6 flex-shrink-0" />
      </motion.button>

      <Footer />
    </div>
  );
}
