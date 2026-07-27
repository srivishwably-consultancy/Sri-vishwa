import { Container } from '../components/Container';
import { FadeIn } from '../components/FadeIn';
import { Link } from 'react-router-dom';
import { FloatingParticles } from '../components/FloatingParticles';
import { MagneticButton } from '../components/MagneticButton';

export function Services() {
  const services = [
    {
      title: "Architectural Design",
      desc: "Our architectural designs focus on sustainability, spatial fluidity, and striking aesthetics. We translate your vision into precise blueprints that respect both the environment and your lifestyle.",
      img: "https://res.cloudinary.com/dcm8qwji0/image/upload/f_auto,q_auto/front1_p9vwzj"
    },
    {
      title: "Construction Engineering",
      desc: "We bring designs to reality with rigorous engineering and master craftsmanship. Our build teams are integrated directly with our design teams to ensure impeccable execution.",
      img: "https://res.cloudinary.com/dcm8qwji0/image/upload/f_auto,q_auto/Untitled_design_4_l9gays"
    },
    {
      title: "Interior Styling",
      desc: "The soul of a building lies in its interiors. We select premium materials, bespoke furnishings, and design custom lighting schemes to create immersive environments.",
      img: "https://res.cloudinary.com/dcm8qwji0/image/upload/f_auto,q_auto/Untitled_design_3_wpeeme"
    }
  ];

  return (
    <main className="pt-32 pb-24 relative overflow-hidden bg-[#0a0a0a]">
      {/* Cohesive anti-gravity subtle background particles */}
      <FloatingParticles count={25} color="rgba(196, 169, 98, 0.2)" />
      
      <section className="py-20 relative">
        <Container>
          <FadeIn>
            <h1 className="text-6xl md:text-8xl font-serif leading-none tracking-tight uppercase mb-8">
              Our <span className="text-outline">Services</span>
            </h1>
            <p className="text-xl font-light text-secondary/80 max-w-2xl leading-relaxed">
              A comprehensive design-build methodology tailored to extraordinary spaces.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="py-20 relative z-10">
        <Container className="space-y-32">
          {services.map((srv, idx) => (
            <div key={idx} className="space-y-16">
              <div className={`flex flex-col md:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <FadeIn className="w-full md:w-1/2" direction={idx % 2 !== 0 ? 'left' : 'right'}>
                  <div className="aspect-[4/3] overflow-hidden rounded-lg border border-white/5 shadow-2xl relative group">
                    <img src={srv.img} alt={srv.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </FadeIn>
                <FadeIn className="w-full md:w-1/2" delay={0.2}>
                  <span className="text-6xl font-serif text-white/5 block mb-4">0{idx + 1}</span>
                  <h2 className="text-3xl font-serif mb-6">{srv.title}</h2>
                  <div className="w-12 h-px bg-accent mb-6" />
                  <p className="text-secondary/70 font-light leading-relaxed mb-8">{srv.desc}</p>
                  
                  <MagneticButton glowColor="rgba(196, 169, 98, 0.3)">
                    {srv.title === "Interior Styling" ? (
                      <Link 
                        to="/services/interior-styling"
                        className="inline-block border border-white/30 text-white px-8 py-3 text-xs tracking-[0.2em] uppercase hover:border-accent hover:text-accent transition-colors bg-[#111111]/60 backdrop-blur"
                      >
                        View Our Work
                      </Link>
                    ) : srv.title === "Architectural Design" ? (
                      <Link 
                        to="/services/architectural-design"
                        className="inline-block border border-white/30 text-white px-8 py-3 text-xs tracking-[0.2em] uppercase hover:border-accent hover:text-accent transition-colors bg-[#111111]/60 backdrop-blur"
                      >
                        View Our Work
                      </Link>
                    ) : srv.title === "Construction Engineering" ? (
                      <Link 
                        to="/projects"
                        className="inline-block border border-white/30 text-white px-8 py-3 text-xs tracking-[0.2em] uppercase hover:border-accent hover:text-accent transition-colors bg-[#111111]/60 backdrop-blur"
                      >
                        View Our Work
                      </Link>
                    ) : (
                      <button className="border border-white/30 text-white px-8 py-3 text-xs tracking-[0.2em] uppercase hover:border-accent hover:text-accent transition-colors bg-[#111111]/60 backdrop-blur">
                        View Our Work
                      </button>
                    )}
                  </MagneticButton>
                </FadeIn>
              </div>
            </div>
          ))}
        </Container>
      </section>
    </main>
  );
}
