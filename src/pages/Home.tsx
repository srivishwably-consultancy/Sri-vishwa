import { ArrowRight, CheckCircle2 } from "lucide-react";
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
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
            
            <FadeIn delay={0.4} direction="perspective">
              <div className="relative group">
                {/* Border glow animation on about image */}
                <div className="absolute -inset-1 bg-gradient-to-r from-accent via-[#ffdfb0] to-accent rounded-sm blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                <div className="relative aspect-[4/5] bg-black">
                  <img 
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" 
                    alt="Interior Architecture" 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-32">
            {[
              { num: 15, suffix: "+", label: "Years Experience" },
              { num: 120, suffix: "+", label: "Projects Delivered" },
              { num: 100, suffix: "%", label: "Client Satisfaction" },
              { num: 25, suffix: "", label: "Design Awards" },
            ].map((stat, i) => (
              <FadeIn key={i} delay={0.2 + i * 0.1} direction="up">
                {/* 3D rotating stat card borders with conic gradients */}
                <div className="relative p-8 overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent rotate-0 group-hover:animate-spin" style={{ animationDuration: '3s' }} />
                  <div className="absolute inset-[1px] bg-[#111111] z-10" />
                  <div className="relative z-20 flex flex-col items-center">
                    <h5 className="text-white text-5xl font-serif mb-4 flex items-center">
                      <Counter from={0} to={stat.num} duration={2 + i * 0.5} />
                      {stat.suffix}
                    </h5>
                    <p className="text-secondary/70 text-xs uppercase tracking-widest">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Services Section with Marquee */}
      <section className="py-32 bg-[#0a0a0a] overflow-hidden relative">
        <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 opacity-5 pointer-events-none z-0">
          <Marquee speed={30}>
            <span className="text-9xl font-serif uppercase tracking-tighter">Architecture - Interior - Construction - Design - Build -</span>
          </Marquee>
        </div>
        
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

      {/* Why Choose Us - 3D Orbit */}
      <section className="py-32 bg-[#111111] relative overflow-hidden">
        <RippleRings />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <h4 className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                Why Choose Us
              </h4>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                Engineering excellence in every detail.
              </h2>
              <ul className="space-y-6 mb-8">
                {[
                  "Uncompromising Quality Standards",
                  "Innovative & Sustainable Design",
                  "Transparent Communication",
                  "End-to-End Project Management"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-secondary/80">
                    <CheckCircle2 className="text-accent shrink-0" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <MagneticButton glowColor="rgba(196, 169, 98, 0.3)">
                <AnimatedButton to="/contact">Get in Touch</AnimatedButton>
              </MagneticButton>
            </FadeIn>

            <FadeIn direction="right" delay={0.3}>
              <div className="relative aspect-square flex items-center justify-center">
                {/* 3D spinning orbit */}
                <motion.div 
                  className="absolute inset-4 rounded-full border border-dashed border-white/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute inset-16 rounded-full border border-white/10"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-accent/10 rounded-full flex items-center justify-center backdrop-blur-md border border-accent/30 shadow-[0_0_50px_rgba(212,175,55,0.2)] p-6">
                    <img 
                      src="https://res.cloudinary.com/dcm8qwji0/image/upload/f_auto,q_auto/SVC_LOGO_web_2_qduowt" 
                      alt="Sri Vishwa Logo" 
                      className="w-full h-auto object-contain brightness-110 filter drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Orbiting dots/elements */}
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute w-full h-full"
                    animate={{ rotate: 360 }}
                    initial={{ rotate: i * 120 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-accent rounded-full shadow-[0_0_15px_rgba(212,175,55,0.8)]" />
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Floating Image Presentation Section (Suspended depth / parallax) */}
      <section className="py-32 bg-[#0c0d14] relative overflow-hidden">
        <FloatingParticles count={15} color="rgba(6, 182, 212, 0.25)" />
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <h4 className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                Suspended Architecture
              </h4>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                Defying Visual Weight with Graceful Proportion
              </h2>
              <div className="w-16 h-px bg-accent mb-8" />
              <p className="text-secondary/70 leading-relaxed font-light mb-8 text-lg">
                We craft structural works that prioritize visual lightness, using double-height glass volumes, deep cantilevers, and suspended structural elements. Our spaces feel unbound, providing a serene sense of weightlessness and visual fluidity that redefines modern luxury living.
              </p>
              <div className="flex flex-wrap gap-4">
                <MagneticButton glowColor="rgba(139, 92, 246, 0.4)">
                  <AnimatedButton to="/services">View Our Work</AnimatedButton>
                </MagneticButton>
              </div>
            </FadeIn>
            
            <FadeIn direction="right" delay={0.2}>
              <FloatingImages />
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
                      src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                      alt="Project 2"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <div className="p-8 flex justify-between items-center">
                    <div>
                      <h3 className="text-2xl font-serif mb-2 text-white group-hover:text-accent transition-colors">
                        Aura Commercial Plaza
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

      {/* Drifting Testimonials Section */}
      <section className="py-32 bg-[#0e0c15] relative overflow-hidden">
        <FloatingParticles count={12} color="rgba(196, 169, 98, 0.25)" />
        <Container>
          <div className="text-center mb-16">
            <FadeIn direction="down">
              <h4 className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                Testimonials
              </h4>
              <h2 className="text-4xl md:text-5xl font-serif">What Our Clients Say</h2>
            </FadeIn>
          </div>
          <FadeIn direction="up" delay={0.2}>
            <DriftingTestimonials />
          </FadeIn>
        </Container>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
