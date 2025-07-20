'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { 
  Code, 
  Palette, 
  Smartphone, 
  Zap, 
  ArrowRight, 
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Globe,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
  Menu,
  MessageCircle
} from "lucide-react";
import { fadeInUp, scaleIn, staggerContainer, hoverScale, hoverLift } from "@/lib/animations";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    service: '',
    budget: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});

  const projects = [
    {
      title: "Life's A Pitch Roofing",
      description: "Local roofing business website with explosive SEO results - 315 organic hits in first 13 days",
      image: "/roofing-site.jpg",
      image2: "/roofing-site-appointment-booking.png",
      link: "http://lifesapitchroofing.net/",
      timeline: "Launched June 17th, 2025",
      features: ["Local SEO", "Lead capture", "Mobile responsive", "Appointment booking"],
      results: {
        organicHits: "315",
        timeFrame: "June 2025",
        additionalHits: "180",
        additionalTimeFrame: "July 1-18"
      },
      testimonial: {
        name: "Greg",
        company: "Life's A Pitch Roofing Owner",
        rating: 5,
        text: "Our phone has been ringing non-stop since the website went live."
      }
    },
    {
      title: "OrthoticsNow - Custom Mockup",
      description: "Custom coded mockup proposal for modern orthotics practice website",
      image: "/orthotics-demo.jpg",
      image2: "/orthotics-demo-responisve-mobileheader.png",
      link: "https://demo2.ctho.work/",
      timeline: "June 2025 Proposal",
      features: ["Custom design", "Lead generation", "Mobile responsive", "Modern UI"],
      testimonial: {
        name: "Robert Neposlan",
        company: "OrthoticsNow Owner",
        rating: 5,
        text: "The website exceeded our expectations and started generating qualified leads immediately."
      }
    },
    {
      title: "OrthoticsNow - Live Site",
      description: "Modern GoDaddy-hosted website for orthotics practice with booking system",
      image: "/orthoticsnowmodern1.png",
      image2: "/orthoticsnowmodern2.png",
      link: "https://orthoticsnow.godaddysites.com/",
      timeline: "June 2025 Live",
      features: ["GoDaddy hosting", "Booking system", "Lead capture", "Cost optimization"],
      results: {
        costSavings: "80%",
        migration: "2012→2024",
        improvement: "Performance & UX"
      },
      testimonial: {
        name: "Robert Neposlan",
        company: "OrthoticsNow Owner",
        rating: 5,
        text: "The website exceeded our expectations and started generating qualified leads immediately."
      }
    },
    {
      title: "Gaming Affiliate",
      description: "High-converting affiliate platform for CS2 and Rust",
      image: "/gaming-affiliate.jpg",
      image2: "/seo-affiliate-site.png",
      link: "http://csgocases.codes/",
      timeline: "1 week",
      features: ["Traffic generation", "SEO rankings", "Conversion optimization", "Organic growth"],
      testimonial: {
        name: "CSGOCases Team",
        company: "Gaming Affiliate",
        rating: 5,
        text: "Steady traffic and conversions within 1 week of organic SEO, ranking 5-10 in competitive searches."
      }
    },
    {
      title: "Creator Suite",
      description: "YouTube creator platform with link-in-bio and content locking",
      image: "/creator-suite.jpg",
      image2: "/bio-site-dashboard.png",
      link: "https://ctho.work",
      timeline: "2 weeks",
      features: ["Content locking", "Link-in-bio", "Creator tools", "Monetization"],
      testimonial: {
        name: "Creator Community",
        company: "YouTube Creators",
        rating: 5,
        text: "The platform has revolutionized how we monetize our content and engage with our audience."
      }
    }
  ];

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
      setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
    }, 15000);

    return () => clearInterval(interval);
  }, [projects.length]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.project.trim()) {
      errors.project = 'Project description is required';
    } else if (formData.project.trim().length < 10) {
      errors.project = 'Please provide more details about your project (at least 10 characters)';
    }
    
    if (!formData.service) {
      errors.service = 'Please select a service';
    }
    
    if (!formData.budget) {
      errors.budget = 'Please select a budget range';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', project: '', service: '', budget: '' });
    setFormErrors({});
    setSubmitError('');
    setSubmitSuccess(false);
    setIsSubmitting(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);
    
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (response.ok && responseData.success) {
        setSubmitSuccess(true);
        resetForm();
      } else {
        setSubmitError(responseData.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    resetForm();
    setSubmitSuccess(false);
    setSubmitError('');
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 sm:py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/cthoworkwhitetext.png"
              alt="Cthowork Logo"
              width={140}
              height={45}
              className="h-8 sm:h-10 w-auto object-contain"
              priority
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white/90 hover:text-white transition-all duration-300 font-medium text-sm relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6017EA] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('stats')}
              className="text-white/90 hover:text-white transition-all duration-300 font-medium text-sm relative group"
            >
              Stats
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6017EA] transition-all duration-300 group-hover:w-full"></span>
            </button>

            <button 
              onClick={() => scrollToSection('work')}
              className="text-white/90 hover:text-white transition-all duration-300 font-medium text-sm relative group"
            >
              Work
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6017EA] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="text-white/90 hover:text-white transition-all duration-300 font-medium text-sm relative group"
            >
              Process
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6017EA] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white/90 hover:text-white transition-all duration-300 font-medium text-sm relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6017EA] transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* Desktop CTA */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="hidden md:flex items-center gap-2 bg-[#6017EA] hover:bg-[#4F14B8] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-[#6017EA]/25 text-sm"
          >
            Contact us
            <ArrowRight className="w-4 h-4 flex-shrink-0" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white/90 hover:text-white transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md border-b border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-white/90 hover:text-white transition-colors duration-200 font-medium text-sm py-3"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('stats')}
                className="block w-full text-left text-white/90 hover:text-white transition-colors duration-200 font-medium text-sm py-3"
              >
                Stats
              </button>

              <button 
                onClick={() => scrollToSection('work')}
                className="block w-full text-left text-white/90 hover:text-white transition-colors duration-200 font-medium text-sm py-3"
              >
                Work
              </button>
              <button 
                onClick={() => scrollToSection('process')}
                className="block w-full text-left text-white/90 hover:text-white transition-colors duration-200 font-medium text-sm py-3"
              >
                Process
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-white/90 hover:text-white transition-colors duration-200 font-medium text-sm py-3"
              >
                Contact
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-[#6017EA] hover:bg-[#4F14B8] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-[#6017EA]/25 text-sm flex items-center justify-center gap-2 mt-4"
              >
                Contact us
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </button>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/10 via-background to-gray-800/10"></div>
        <div className="relative z-10 text-center px-6 sm:px-8 max-w-5xl mx-auto">
          <motion.div {...fadeInUp}>
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-8 leading-tight">
              We Build Websites
              <br />
              <span className="text-[#6017EA]">That Get Results</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              For businesses and creators who need more than just a pretty website.
            </p>
            <div className="relative">
              <motion.button
                onClick={() => scrollToSection('process')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-[#6017EA] hover:bg-[#4F14B8] text-white px-10 py-5 rounded-xl text-lg font-semibold flex items-center gap-3 mx-auto transition-all duration-300 shadow-xl hover:shadow-[#6017EA]/30 z-10"
              >
                See our process
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <div className="absolute inset-0 rounded-xl gradient-glow blur-sm -z-10"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 sm:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeInUp}
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">What We Do</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium">Results-driven websites that convert visitors into customers.</p>
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <Code className="w-10 h-10" />,
                title: "Lead Generation Sites",
                description: "Custom websites that convert visitors into paying clients"
              },
              {
                icon: <Globe className="w-10 h-10" />,
                title: "SEO & Traffic Growth",
                description: "Get more organic traffic and local search visibility"
              },
              {
                icon: <Palette className="w-10 h-10" />,
                title: "Creator Monetization",
                description: "Link-in-bio sites and content locking for creators"
              },
              {
                icon: <Zap className="w-10 h-10" />,
                title: "High-Converting Platforms",
                description: "Affiliate systems and tracking platforms that scale"
              },
              {
                icon: <TrendingUp className="w-10 h-10" />,
                title: "AI-Powered Automation",
                description: "AI tools to automate and scale your business"
              },
              {
                icon: <Smartphone className="w-10 h-10" />,
                title: "Local Business Websites",
                description: "Professional sites that drive local customers"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="bg-background p-8 sm:p-10 rounded-2xl border border-border hover:border-[#6017EA]/50 transition-all duration-300 hover:shadow-xl"
              >
                <div className="text-[#6017EA] mb-6">{service.icon}</div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16 px-6 sm:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeInUp}
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
              From Concept to Live in 2 Weeks
            </p>
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Brief Call",
                description: "30-minute chat about your goals and needs. Coffee if you're near Windsor, Ontario!",
                icon: <MessageCircle className="w-10 h-10" />
              },
              {
                title: "Build Week",
                description: "1 week to build your website. We work quickly and efficiently.",
                icon: <Code className="w-10 h-10" />
              },
              {
                title: "Go Live",
                description: "1 week to launch and get indexed in Google. SEO included if needed.",
                icon: <Globe className="w-10 h-10" />
              },
              {
                title: "Max 2 Weeks",
                description: "Complete project in 2 weeks. Can take longer if you need more.",
                icon: <Zap className="w-10 h-10" />
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="bg-card p-8 sm:p-10 rounded-2xl border border-border hover:border-[#6017EA]/50 transition-all duration-300 hover:shadow-xl"
              >
                <div className="text-[#6017EA] mb-6">{step.icon}</div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-16 px-6 sm:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-12 sm:gap-16 text-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { number: "15+", label: "Projects Delivered", icon: <CheckCircle className="w-8 h-8 mx-auto mb-3" /> },
              { number: "7+", label: "Happy Clients", icon: <Users className="w-8 h-8 mx-auto mb-3" /> },
              { number: "6+", label: "Years Experience", icon: <Star className="w-8 h-8 mx-auto mb-3" /> },
              { number: "99%", label: "Client Satisfaction", icon: <TrendingUp className="w-8 h-8 mx-auto mb-3" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="text-white"
              >
                {stat.icon}
                <div className="text-3xl sm:text-4xl font-bold mb-3">{stat.number}</div>
                <div className="text-muted-foreground text-base font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>



      {/* Experience Section */}
      <section id="work" className="py-16 px-6 sm:px-8 bg-card overflow-hidden">
        <div className="max-w-6xl mx-auto">


          <motion.div 
            className="relative"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div
              key={currentProjectIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              {/* Desktop Layout - Modern Grid */}
              <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start">
                {/* Left Side - Images */}
                <div className="col-span-5 space-y-4">
                  <a
                    href={projects[currentProjectIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block aspect-video bg-card relative overflow-hidden rounded-xl hover:scale-[1.02] transition-transform duration-300"
                  >
                    <Image
                      src={projects[currentProjectIndex].image}
                      alt={projects[currentProjectIndex].title}
                      fill
                      className="object-cover"
                    />
                  </a>
                  <a
                    href={projects[currentProjectIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block aspect-video bg-card relative overflow-hidden rounded-xl hover:scale-[1.02] transition-transform duration-300"
                  >
                    <Image
                      src={projects[currentProjectIndex].image2}
                      alt={projects[currentProjectIndex].title}
                      fill
                      className="object-cover"
                    />
                  </a>
                </div>

                {/* Right Side - Content */}
                <div className="col-span-7 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-4 text-white">{projects[currentProjectIndex].title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">{projects[currentProjectIndex].description}</p>
                  </div>

                  {/* Project Details Card */}
                  <div className="bg-background border border-border rounded-xl p-6">
                    {/* Testimonial */}
                    <div className="border-t border-border pt-4">
                      <div className="flex items-center gap-2 mb-2">
                        {[...Array(projects[currentProjectIndex].testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-muted-foreground italic text-sm mb-2">"{projects[currentProjectIndex].testimonial.text}"</p>
                      <p className="text-white font-medium text-sm">
                        {projects[currentProjectIndex].testimonial.name}
                        <span className="text-muted-foreground ml-2">• {projects[currentProjectIndex].testimonial.company}</span>
                      </p>
                    </div>
                  </div>

                  <a
                    href={projects[currentProjectIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#6017EA] hover:bg-[#4F14B8] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-[#6017EA]/30"
                  >
                    View Project <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Mobile Layout - Stacked */}
              <div className="lg:hidden space-y-4">
                <a
                  href={projects[currentProjectIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block aspect-video bg-card relative overflow-hidden rounded-xl hover:scale-[1.02] transition-transform duration-300"
                >
                  <Image
                    src={projects[currentProjectIndex].image}
                    alt={projects[currentProjectIndex].title}
                    fill
                    className="object-cover"
                  />
                </a>
                <a
                  href={projects[currentProjectIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block aspect-video bg-card relative overflow-hidden rounded-xl hover:scale-[1.02] transition-transform duration-300"
                >
                  <Image
                    src={projects[currentProjectIndex].image2}
                    alt={projects[currentProjectIndex].title}
                    fill
                    className="object-cover"
                  />
                </a>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-white">{projects[currentProjectIndex].title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{projects[currentProjectIndex].description}</p>
                  </div>

                  {/* Project Details Card */}
                  <div className="bg-background border border-border rounded-lg p-4">
                    {/* Testimonial */}
                    <div className="border-t border-border pt-3">
                      <div className="flex items-center gap-2 mb-2">
                        {[...Array(projects[currentProjectIndex].testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-muted-foreground italic text-sm mb-2">"{projects[currentProjectIndex].testimonial.text}"</p>
                      <p className="text-white font-medium text-sm">
                        {projects[currentProjectIndex].testimonial.name}
                        <span className="text-muted-foreground ml-1">• {projects[currentProjectIndex].testimonial.company}</span>
                      </p>
                    </div>
                  </div>

                  <a
                    href={projects[currentProjectIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#6017EA] hover:bg-[#4F14B8] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-[#6017EA]/30"
                  >
                    View Project <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Carousel Controls */}
            <div className="relative mt-8 sm:mt-12">
              {/* Arrow Controls - Centered */}
              <motion.button
                onClick={prevProject}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-[#6017EA] hover:bg-[#4F14B8] text-white transition-colors shadow-lg"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>

              <motion.button
                onClick={nextProject}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-[#6017EA] hover:bg-[#4F14B8] text-white transition-colors shadow-lg"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>

              {/* Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-1 mb-6">
                <motion.div
                  className="bg-[#6017EA] h-1 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 15, ease: "linear" }}
                  onAnimationComplete={() => {
                    nextProject();
                  }}
                />
              </div>

              {/* Thumbnails */}
              <div className="flex justify-center gap-3">
                {projects.map((project, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProjectIndex(index)}
                    className={`relative aspect-video w-20 rounded-lg overflow-hidden transition-all duration-300 ${
                      index === currentProjectIndex 
                        ? 'ring-2 ring-[#6017EA] scale-110' 
                        : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 px-6 sm:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            {...fadeInUp}
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-12 sm:space-y-16"
          >
            {/* Profile Picture */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full mx-auto overflow-hidden bg-card flex items-center justify-center">
              <Image
                src="/headshot.jpg"
                alt="Christian Tho"
                width={112}
                height={112}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
                Ready to Get More Clients?
              </h2>
              <p className="text-muted-foreground text-xl sm:text-2xl leading-relaxed max-w-3xl mx-auto font-medium">
                Let's have a focused 30-minute discussion about your business goals. 
                Prefer email? Reach out at{' '}
                <a 
                  href="mailto:christianthodesign@gmail.com" 
                  className="text-[#6017EA] underline hover:text-[#4F14B8] transition-colors"
                >
                  christianthodesign@gmail.com
                </a>
              </p>
            </div>

            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#6017EA] hover:bg-[#4F14B8] text-white px-10 py-5 rounded-xl text-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-[#6017EA]/30 flex items-center gap-3 mx-auto"
            >
              Contact us
              <ArrowRight className="w-6 h-6" />
            </motion.button>

            {/* Footer Logo */}
            <div className="pt-8 sm:pt-12 border-t border-border/20">
              <Image
                src="/cthoworkwhitetext.png"
                alt="Cthowork Logo"
                width={120}
                height={40}
                className="mx-auto mb-4 object-contain"
              />
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()}. All rights reserved.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

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
        <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
      </motion.button>

      {/* Lead Capture Modal */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-card border border-border rounded-xl p-6 sm:p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl sm:text-2xl font-bold">Contact us</h3>
              <button
                onClick={closeModal}
                className="text-muted-foreground hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {submitSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Thank you for your inquiry!</h4>
                <p className="text-muted-foreground mb-6">We will get back to you ASAP.</p>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-background border border-border rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-2">Email us for more details or questions:</p>
                    <a 
                      href="mailto:christianthodesign@gmail.com"
                      className="text-[#6017EA] hover:text-[#4F14B8] font-medium text-sm"
                    >
                      christianthodesign@gmail.com
                    </a>
                  </div>
                </div>
                
                <button
                  onClick={closeModal}
                  className="bg-[#6017EA] hover:bg-[#4F14B8] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Your name"
                      className={`w-full px-4 py-3 rounded-lg bg-background border transition-colors focus:outline-none ${
                        formErrors.name ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-[#6017EA]'
                      }`}
                    />
                    {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="Your email"
                      className={`w-full px-4 py-3 rounded-lg bg-background border transition-colors focus:outline-none ${
                        formErrors.email ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-[#6017EA]'
                      }`}
                    />
                    {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tell me about your project</label>
                  <textarea
                    required
                    value={formData.project}
                    onChange={(e) => setFormData({...formData, project: e.target.value})}
                    placeholder="Tell me about your project..."
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg bg-background border transition-colors resize-none focus:outline-none ${
                      formErrors.project ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-[#6017EA]'
                    }`}
                  />
                  {formErrors.project && <p className="text-red-500 text-xs mt-1">{formErrors.project}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">How can I help you?</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['DESIGN', 'DEVELOPMENT', 'BRANDING', 'PRODUCT DESIGN'].map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => setFormData({...formData, service})}
                        className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                          formData.service === service 
                            ? 'bg-[#6017EA] text-white' 
                            : 'bg-background border border-border hover:border-[#6017EA]'
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                  {formErrors.service && <p className="text-red-500 text-xs mt-1">{formErrors.service}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Your budget</label>
                  <select
                    required
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    className={`w-full px-4 py-3 rounded-lg bg-background border transition-colors focus:outline-none ${
                      formErrors.budget ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-[#6017EA]'
                    }`}
                  >
                    <option value="">Select...</option>
                    <option value="Under $5k">Under $5k</option>
                    <option value="$5k - $10k">$5k - $10k</option>
                    <option value="$10k - $15k">$10k - $15k</option>
                    <option value="$15k+">$15k+</option>
                  </select>
                  {formErrors.budget && <p className="text-red-500 text-xs mt-1">{formErrors.budget}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || submitSuccess}
                  className="w-full bg-[#6017EA] hover:bg-[#4F14B8] text-white py-4 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-[#6017EA]/25 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Contact us
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                {submitError && (
                  <div className="bg-red-100 border border-red-200 text-red-800 px-4 py-3 rounded-lg relative" role="alert">
                    <strong className="font-bold">Error!</strong>
                    <span className="block sm:inline"> {submitError}</span>
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                      <button onClick={() => setSubmitError('')} className="text-red-800 hover:text-red-900">
                        <X className="h-6 w-6" />
                      </button>
                    </span>
                  </div>
                )}

                <p className="text-xs text-muted-foreground text-center">
                  By clicking "Send message", you agree to our{' '}
                  <a 
                    href="https://ctho.work/privacy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#6017EA] underline hover:text-[#4F14B8] transition-colors"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
