import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../components/Container";
import { FadeIn } from "../components/FadeIn";
import { ContactSection } from "../components/ContactSection";
import { AnimatedButton } from "../components/AnimatedButton";

export function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.ibb.co/zWFSDG2D/SVC-bg-image.png"
            alt="Luxury modern villa exterior at twilight"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
        </div>

        <Container className="relative z-10 w-full flex flex-col items-center text-center mt-20">
          <FadeIn>
            <h4 className="text-accent text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-6">
              Design-Build Contractor
            </h4>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif leading-[0.9] tracking-tight uppercase mb-8">
              Find Your Dream <br />
              <span className="text-outline">Luxury Home</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="mt-8">
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
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* About Teaser */}
      <section id="about-us" className="py-32 bg-[#111111]">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn delay={0.2}>
              <h4 className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                About Us
              </h4>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                We shape spaces that inspire living.
              </h2>
              <div className="w-16 h-px bg-accent mx-auto mb-8" />
              <p className="text-secondary/70 leading-relaxed font-light mb-12 text-lg">
                Sri Vishwa Consultancy is a premier design-build contractor
                specializing in high-end residential and commercial projects. We
                bridge the gap between visionary architectural design and
                flawless structural construction, ensuring a seamless journey
                from concept to completion.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-12">
                <div className="p-4 border border-white/5 bg-white/[0.01]">
                  <h5 className="text-white text-lg font-serif mb-2">
                    Commitment
                  </h5>
                  <p className="text-secondary/70 text-sm uppercase tracking-widest">
                    to Excellence
                  </p>
                </div>
                <div className="p-4 border border-white/5 bg-white/[0.01]">
                  <h5 className="text-white text-lg font-serif mb-2">
                    Personalized
                  </h5>
                  <p className="text-secondary/70 text-sm uppercase tracking-widest">
                    Project Management
                  </p>
                </div>
                <div className="p-4 border border-white/5 bg-white/[0.01]">
                  <h5 className="text-white text-lg font-serif mb-2">
                    On-Time
                  </h5>
                  <p className="text-secondary/70 text-sm uppercase tracking-widest">
                    Delivery Guarantee
                  </p>
                </div>
                <div className="p-4 border border-white/5 bg-white/[0.01]">
                  <h5 className="text-white text-lg font-serif mb-2">100%</h5>
                  <p className="text-secondary/70 text-sm uppercase tracking-widest">
                    Client Satisfaction
                  </p>
                </div>
              </div>

              <AnimatedButton to="/projects">Explore Our Work</AnimatedButton>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-[#0a0a0a]">
        <Container>
          <FadeIn className="text-center mb-20">
            <h4 className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Expertise
            </h4>
            <h2 className="text-4xl md:text-5xl font-serif">Our Services</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-white/5">
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
                delay={index * 0.2}
                className="group border-b md:border-b-0 md:border-r border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors duration-500 overflow-hidden flex flex-col pt-8 md:pt-0"
              >
                <div className="aspect-[4/3] w-full overflow-hidden mb-8">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-10 pt-0 md:pt-4">
                  <span className="text-5xl font-serif text-white/10 block mb-8">
                    0{index + 1}
                  </span>
                  <Link
                    to="/services"
                    className="block text-2xl font-serif mb-4 hover:text-accent transition-colors"
                  >
                    {service.title}
                  </Link>
                  <p className="text-secondary/50 font-light leading-relaxed text-sm">
                    {service.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Projects Projects */}
      <section className="py-32 bg-[#111111]">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6 text-center md:text-left">
            <FadeIn>
              <h4 className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                Portfolio
              </h4>
              <h2 className="text-4xl md:text-6xl font-serif">
                Featured Projects
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <AnimatedButton to="/projects">View All Works</AnimatedButton>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <Link to="/projects/1" className="group block overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden mb-6">
                  <img
                    src="https://res.cloudinary.com/dcm8qwji0/image/upload/f_auto,q_auto/1_c56eq6"
                    alt="Project 1"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex justify-between items-center pr-4">
                  <div>
                    <h3 className="text-2xl font-serif mb-2 group-hover:text-accent transition-colors">
                      BITM College Ballari
                    </h3>
                    <p className="text-secondary/50 font-light text-sm uppercase tracking-widest">
                      Enhancing Campus Spaces
                    </p>
                  </div>
                  <ArrowRight className="text-white/30 group-hover:text-accent transition-colors" />
                </div>
              </Link>
            </FadeIn>
            <FadeIn delay={0.3} className="md:mt-24">
              <Link to="/projects/2" className="group block overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="Project 2"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex justify-between items-center pr-4">
                  <div>
                    <h3 className="text-2xl font-serif mb-2 group-hover:text-accent transition-colors">
                      Aura Commercial Plaza
                    </h3>
                    <p className="text-secondary/50 font-light text-sm uppercase tracking-widest">
                      Commercial
                    </p>
                  </div>
                  <ArrowRight className="text-white/30 group-hover:text-accent transition-colors" />
                </div>
              </Link>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
