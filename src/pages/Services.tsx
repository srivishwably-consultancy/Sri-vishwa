import { Container } from '../components/Container';
import { FadeIn } from '../components/FadeIn';

export function Services() {
  const services = [
    {
      title: "Architectural Design",
      desc: "Our architectural designs focus on sustainability, spatial fluidity, and striking aesthetics. We translate your vision into precise blueprints that respect both the environment and your lifestyle.",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
    },
    {
      title: "Construction Engineering",
      desc: "We bring designs to reality with rigorous engineering and master craftsmanship. Our build teams are integrated directly with our design teams to ensure impeccable execution.",
      img: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Interior Architecture",
      desc: "The soul of a building lies in its interiors. We select premium materials, bespoke furnishings, and design custom lighting schemes to create immersive environments.",
      img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2067&q=80"
    }
  ];

  return (
    <main className="pt-32 pb-24">
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

      <section className="py-20">
        <Container className="space-y-32">
          {services.map((srv, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <FadeIn className="w-full md:w-1/2" direction={idx % 2 !== 0 ? 'left' : 'right'}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={srv.img} alt={srv.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
                </div>
              </FadeIn>
              <FadeIn className="w-full md:w-1/2" delay={0.2}>
                <span className="text-6xl font-serif text-white/5 block mb-4">0{idx + 1}</span>
                <h2 className="text-3xl font-serif mb-6">{srv.title}</h2>
                <div className="w-12 h-px bg-accent mb-6" />
                <p className="text-secondary/70 font-light leading-relaxed mb-8">{srv.desc}</p>
                <button className="border border-white/30 text-white px-8 py-3 text-xs tracking-[0.2em] uppercase hover:border-accent hover:text-accent transition-colors">
                  Learn More
                </button>
              </FadeIn>
            </div>
          ))}
        </Container>
      </section>
    </main>
  );
}
