import { Container } from '../components/Container';
import { FadeIn } from '../components/FadeIn';

export function About() {
  return (
    <main className="pt-32 pb-24">
      {/* Header */}
      <section className="py-20 md:py-32 relative">
        <Container>
          <FadeIn>
            <h1 className="text-6xl md:text-8xl font-serif leading-none tracking-tight uppercase mb-8">
              Our <span className="text-outline">Story</span>
            </h1>
            <div className="max-w-2xl bg-accent h-px mb-12"></div>
            <p className="text-xl md:text-2xl font-light text-secondary/80 max-w-3xl leading-relaxed">
              We are a collective of visionaries, architects, and master builders dedicated to creating spaces that transcend the ordinary.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Main Image */}
      <section className="mb-32">
        <Container>
          <FadeIn delay={0.2}>
            <div className="w-full h-[50vh] md:h-[70vh] relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" 
                alt="Architects in office" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-[#0a0a0a]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <FadeIn>
              <h2 className="text-3xl font-serif mb-6 uppercase tracking-widest text-accent">Philosophy</h2>
              <p className="text-secondary/70 font-light leading-relaxed mb-6">
                At Sri Vishwa Consultancy, we believe that architecture is more than just erecting walls; it is about sculpting the void. Our design-build approach ensures that there is no disconnect between the drafted plan and the final physical form.
              </p>
              <p className="text-secondary/70 font-light leading-relaxed">
                By integrating design and construction under one roof, we eliminate miscommunication, control project costs meticulously, and deliver unparalleled quality in every detail.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-2xl font-serif mb-2 text-white">Commitment</h4>
                  <p className="text-xs uppercase tracking-widest text-accent">to Excellence</p>
                </div>
                <div>
                  <h4 className="text-2xl font-serif mb-2 text-white">Personalized</h4>
                  <p className="text-xs uppercase tracking-widest text-accent">Project Management</p>
                </div>
                <div>
                  <h4 className="text-2xl font-serif mb-2 text-white">On-Time</h4>
                  <p className="text-xs uppercase tracking-widest text-accent">Delivery Guarantee</p>
                </div>
                <div>
                  <h4 className="text-4xl font-serif mb-2 text-white">100%</h4>
                  <p className="text-xs uppercase tracking-widest text-accent">Client Satisfaction</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </main>
  );
}
