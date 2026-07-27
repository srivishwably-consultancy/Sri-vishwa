import { ArrowRight, Target, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../components/Container";
import { FadeIn } from "../components/FadeIn";
import { ContactSection } from "../components/ContactSection";
import { AnimatedButton } from "../components/AnimatedButton";
import { Counter } from "../components/Counter";
import { Card3D } from "../components/Card3D";
import { Marquee } from "../components/Marquee";
import { RippleRings } from "../components/RippleRings";
import { FloatingParticles } from "../components/FloatingParticles";
import { MagneticButton } from "../components/MagneticButton";
import { LevitatingCard } from "../components/LevitatingCard";
import { FloatingImages } from "../components/FloatingImages";
import { DriftingTestimonials } from "../components/DriftingTestimonials";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import React, { useRef } from "react";

export function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 50, stiffness: 400 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);
  
  const bgX = useTransform(springX, [-0.5, 0.5], ["-2%", "2%"]);
  const bgY = useTransform(springY, [-0.5, 0.5], ["-2%", "2%"]);

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  return (
    <main className="overflow-x-hidden">
      {/* Premium Hero Section with anti-gravity ambient effects */}
      <section 
        ref={heroRef}
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={() => {
          mouseX.set(0);
          mouseY.set(0);
        }}
        className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0a0c16]"
      >
        {/* Soft glowing ambient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '12s' }} />
        
        {/* Anti-gravity particle layers */}
        <FloatingParticles count={25} color="rgba(6, 182, 212, 0.3)" className="z-10" />
        <FloatingParticles count={15} color="rgba(139, 92, 246, 0.2)" className="z-10" />

        <motion.div 
          className="absolute inset-0 z-0 scale-[1.05] opacity-80"
          style={{ x: bgX, y: bgY }}
        >
          <img
            src="https://res.cloudinary.com/dcm8qwji0/image/upload/v1779196559/eb203d4b-0270-44b9-a6f1-fec887948680_u81uwu.png"
            alt="Luxury modern villa exterior at twilight"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Subtle dark tint to maintain absolute legibility of the white text */}
          <div className="absolute inset-0 bg-black/25 pointer-events-none" />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent z-0" />

        <Container className="relative z-20 w-full flex flex-col items-center text-center mt-20 pointer-events-none">
          <FadeIn direction="scale">
            <h4 className="text-accent text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-6">
              Design-Build Contractor
            </h4>
          </FadeIn>
          <FadeIn delay={0.2} direction="up">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif leading-[0.9] tracking-tight uppercase mb-8 text-white">
              Find Your Dream <br />
              <span className="text-outline">Luxury Home</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.4} direction="up" className="pointer-events-auto">
            <div className="mt-8">
              <MagneticButton glowColor="rgba(6, 182, 212, 0.45)">
                <AnimatedButton
                  to="/#contact"
                  onClick={() => {
                    setTimeout(() => {
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }}
                >
                  Start Your Project
                </AnimatedButton>
              </MagneticButton>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* About Teaser */}
      <section id="about-us" className="py-32 bg-[#111111] relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        <Container>
          <div className="max-w-3xl">
            <FadeIn delay={0.2} direction="right">
              <h4 className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                About Us
              </h4>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                We shape spaces that inspire living.
              </h2>
              <div className="w-16 h-px bg-accent mb-8" />
              <p className="text-secondary/70 leading-relaxed font-light mb-12 text-lg">
                Sri Vishwa Consultancy is a premier design-build contractor
                specializing in high-end residential and commercial projects. We
                bridge the gap between visionary architectural design and
                flawless structural construction, ensuring a seamless journey
                from concept to completion.
              </p>
              <MagneticButton glowColor="rgba(196, 169, 98, 0.3)">
                <AnimatedButton to="/projects">Explore Our Work</AnimatedButton>
              </MagneticButton>
            </FadeIn>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center mt-32">
            {[
              { num: 18, suffix: "+", label: "Months Experience" },
              { num: 5, suffix: "+", label: "Design concepts created" },
              { num: 100, suffix: "%", label: "Client Satisfaction" },
              { num: 45, suffix: "+", label: "Premium interior concepts" },
            ].map((stat, i) => (
              <FadeIn key={i} delay={0.2 + i * 0.1} direction="up">
                {/* 3D rotating stat card borders with conic gradients */}
                <div className="relative p-3 sm:p-6 md:p-8 overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent rotate-0 group-hover:animate-spin" style={{ animationDuration: '3s' }} />
                  <div className="absolute inset-[1px] bg-[#111111] z-10" />
                  <div className="relative z-20 flex flex-col items-center">
                    <h5 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-2 sm:mb-4 flex flex-row items-baseline justify-center text-center whitespace-nowrap">
                      <Counter from={0} to={stat.num} duration={2 + i * 0.5} />
                      <span className="text-base sm:text-xl md:text-3xl ml-0.5 sm:ml-1">{stat.suffix}</span>
                    </h5>
                    <p className="text-secondary/70 text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest text-center mt-1 sm:mt-2 leading-relaxed">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-[#0a0a0a] overflow-hidden relative">
        <Container className="relative z-10">
          <FadeIn className="text-center mb-20" direction="down">
            <h4 className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Expertise
            </h4>
            <h2 className="text-4xl md:text-5xl font-serif">Our Services</h2>
          </FadeIn>

          {/* Premium Levitating Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {[
              {
                title: "Architectural Design",
                desc: "Conceptualizing spaces that harmoniously blend aesthetics with functionality.",
                img: "https://res.cloudinary.com/dcm8qwji0/image/upload/f_auto,q_auto/front1_p9vwzj"
              },
              {
                title: "Construction Build",
                desc: "Executing complex structures with precision, quality materials, and expert craftsmanship.",
                img: "https://res.cloudinary.com/dcm8qwji0/image/upload/f_auto,q_auto/Untitled_design_4_l9gays"
              },
              {
                title: "Interior Styling",
                desc: "Curating bespoke interiors that speak to your personal lifestyle and taste.",
                img: "https://res.cloudinary.com/dcm8qwji0/image/upload/f_auto,q_auto/Untitled_design_3_wpeeme"
              },
            ].map((service, index) => (
              <FadeIn
                key={index}
                delay={index * 0.1}
                direction="up"
                className="h-full"
              >
                <LevitatingCard delay={index * 0.3} className="h-full flex flex-col group">
                  <div className="aspect-[4/3] w-full overflow-hidden relative">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <div className="p-8 flex-grow flex flex-col justify-between">
                    <div>
                      <span className="text-4xl font-serif text-white/10 block mb-6 transition-colors group-hover:text-accent/30">
                        0{index + 1}
                      </span>
                      <Link
                        to="/services"
                        className="block text-2xl font-serif mb-4 hover:text-accent transition-colors text-white"
                      >
                        {service.title}
                      </Link>
                      <p className="text-secondary/50 font-light leading-relaxed text-sm mb-6">
                        {service.desc}
                      </p>
                    </div>
                    <Link 
                      to="/services" 
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-accent font-medium hover:text-white transition-colors mt-auto"
                    >
                      Read More <ArrowRight size={14} />
                    </Link>
                  </div>
                </LevitatingCard>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="py-32 bg-[#111111] relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        </div>
        <FloatingParticles count={20} color="rgba(196, 169, 98, 0.15)" />
        
        <Container className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <FadeIn direction="left">
              <div className="bg-[#0a0a0a]/80 backdrop-blur-sm p-10 md:p-14 border border-white/5 rounded-2xl h-full flex flex-col items-start group hover:border-accent/30 transition-colors duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/15 transition-all duration-700 group-hover:scale-150" />
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-8 shrink-0 relative z-10 group-hover:scale-110 transition-transform duration-500">
                  <Eye className="text-accent animate-blink" size={32} />
                </div>
                <h3 className="text-3xl font-serif mb-6 text-white relative z-10">Our Vision</h3>
                <ul className="text-secondary/70 font-light leading-relaxed text-sm space-y-4 list-none relative z-10">
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-accent mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0 group-hover/item:scale-150 transition-transform" />
                    <span>Pioneer future-ready construction through continuous technological upgradation.</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-accent mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0 group-hover/item:scale-150 transition-transform" />
                    <span>Establish enduring benchmarks for structural quality and precision.</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-accent mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0 group-hover/item:scale-150 transition-transform" />
                    <span>Shape sustainable, innovative environments for the next generation.</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
            
            <FadeIn direction="right" delay={0.2}>
              <div className="bg-[#0a0a0a]/80 backdrop-blur-sm p-10 md:p-14 border border-white/5 rounded-2xl h-full flex flex-col items-start group hover:border-accent/30 transition-colors duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/15 transition-all duration-700 group-hover:scale-150" />
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-8 shrink-0 relative z-10 group-hover:scale-110 transition-transform duration-500">
                  <Target className="text-accent animate-[spin_6s_linear_infinite]" size={32} />
                </div>
                <h3 className="text-3xl font-serif mb-6 text-white relative z-10">Our Mission</h3>
                <ul className="text-secondary/70 font-light leading-relaxed text-sm space-y-4 list-none relative z-10">
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-accent mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0 group-hover/item:scale-150 transition-transform" />
                    <span>Bridge imaginative design with meticulous execution.</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-accent mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0 group-hover/item:scale-150 transition-transform" />
                    <span>Deliver projects with complete transparency and speed.</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-accent mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0 group-hover/item:scale-150 transition-transform" />
                    <span>Build with enduring, high-quality craftsmanship.</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Featured Projects */}
      <section className="py-32 bg-[#0a0a0a]">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6 text-center md:text-left">
            <FadeIn direction="up">
              <h4 className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                Portfolio
              </h4>
              <h2 className="text-4xl md:text-6xl font-serif">
                Featured Projects
              </h2>
            </FadeIn>
            <FadeIn delay={0.2} direction="up">
              <MagneticButton glowColor="rgba(196, 169, 98, 0.3)">
                <AnimatedButton to="/projects">View All Works</AnimatedButton>
              </MagneticButton>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FadeIn delay={0.1} direction="scale">
              <Card3D>
                <Link to="/projects/1" className="group block overflow-hidden bg-white/5 rounded-lg border border-white/10 hover:border-accent/50 transition-colors">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/dcm8qwji0/image/upload/f_auto,q_auto/1_c56eq6"
                      alt="Project 1"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <div className="p-8 flex justify-between items-center">
                    <div>
                      <h3 className="text-2xl font-serif mb-2 text-white group-hover:text-accent transition-colors">
                        BITM College Ballari
                      </h3>
                      <p className="text-secondary/50 font-light text-sm uppercase tracking-widest">
                        Enhancing Campus Spaces
                      </p>
                    </div>
                    <ArrowRight className="text-white/30 group-hover:text-accent transition-colors group-hover:translate-x-2 duration-300" />
                  </div>
                </Link>
              </Card3D>
            </FadeIn>
            
            <FadeIn delay={0.3} direction="scale" className="md:mt-24">
              <Card3D>
                <Link to="/projects/2" className="group block overflow-hidden bg-white/5 rounded-lg border border-white/10 hover:border-accent/50 transition-colors">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/dcm8qwji0/image/upload/v1784895186/1_cbcvnx.png"
                      alt="Project 2"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <div className="p-8 flex justify-between items-center">
                    <div>
                      <h3 className="text-2xl font-serif mb-2 text-white group-hover:text-accent transition-colors">
                        Lokur Multi - Specialty Hospital
                      </h3>
                      <p className="text-secondary/50 font-light text-sm uppercase tracking-widest">
                        Commercial
                      </p>
                    </div>
                    <ArrowRight className="text-white/30 group-hover:text-accent transition-colors group-hover:translate-x-2 duration-300" />
                  </div>
                </Link>
              </Card3D>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
