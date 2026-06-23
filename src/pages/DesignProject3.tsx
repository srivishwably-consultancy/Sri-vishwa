import { Container } from '../components/Container';
import { FadeIn } from '../components/FadeIn';

export function DesignProject3() {
  return (
    <main className="pt-32 pb-24 min-h-screen">
      <Container>
        <FadeIn>
          <div className="mb-16">
            <h4 className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Project Details
            </h4>
            <h1 className="text-4xl md:text-6xl font-serif mb-6">Design Project 3</h1>
            <p className="text-secondary/70 font-light max-w-2xl text-lg">
              A comprehensive view of our architectural design process, showcasing early concept models through to final high-fidelity visualisations.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-16">
          <div>
            <h2 className="text-2xl font-serif mb-8 text-[#f2f0e9]">Concept Designs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FadeIn delay={0.2}>
                <div className="space-y-4">
                  <h4 className="text-sm tracking-[0.2em] uppercase text-secondary/70">Concept Image 1</h4>
                  <a href="https://res.cloudinary.com/dcm8qwji0/image/upload/v1782215779/1_1_ayexza.png" target="_blank" rel="noopener noreferrer" className="block aspect-[4/3] overflow-hidden bg-white/5 group cursor-pointer">
                    <img src="https://res.cloudinary.com/dcm8qwji0/image/upload/v1782215779/1_1_ayexza.png" alt="Concept 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </a>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="space-y-4">
                  <h4 className="text-sm tracking-[0.2em] uppercase text-secondary/70">Concept Image 2</h4>
                  <a href="https://res.cloudinary.com/dcm8qwji0/image/upload/v1782215779/2_1_tn5kk7.png" target="_blank" rel="noopener noreferrer" className="block aspect-[4/3] overflow-hidden bg-white/5 group cursor-pointer">
                    <img src="https://res.cloudinary.com/dcm8qwji0/image/upload/v1782215779/2_1_tn5kk7.png" alt="Concept 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-serif mb-8 text-[#f2f0e9]">Final Visualizations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FadeIn delay={0.2}>
                <div className="space-y-4">
                  <h4 className="text-sm tracking-[0.2em] uppercase text-secondary/70">Final Visualization 1</h4>
                  <a href="https://res.cloudinary.com/dcm8qwji0/image/upload/v1782215780/r3_1_myzzzs.png" target="_blank" rel="noopener noreferrer" className="block aspect-[4/3] overflow-hidden bg-white/5 group cursor-pointer">
                    <img src="https://res.cloudinary.com/dcm8qwji0/image/upload/v1782215780/r3_1_myzzzs.png" alt="Final Visualization 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </a>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="space-y-4">
                  <h4 className="text-sm tracking-[0.2em] uppercase text-secondary/70">Final Visualization 2</h4>
                  <a href="https://res.cloudinary.com/dcm8qwji0/image/upload/v1782215780/r1_1_blkymt.png" target="_blank" rel="noopener noreferrer" className="block aspect-[4/3] overflow-hidden bg-white/5 group cursor-pointer">
                    <img src="https://res.cloudinary.com/dcm8qwji0/image/upload/v1782215780/r1_1_blkymt.png" alt="Final Visualization 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </a>
                </div>
              </FadeIn>
              <FadeIn delay={0.6}>
                <div className="space-y-4">
                  <h4 className="text-sm tracking-[0.2em] uppercase text-secondary/70">Final Visualization 3</h4>
                  <a href="https://res.cloudinary.com/dcm8qwji0/image/upload/v1782215785/r4_lcnxru.png" target="_blank" rel="noopener noreferrer" className="block aspect-[4/3] overflow-hidden bg-white/5 group cursor-pointer">
                    <img src="https://res.cloudinary.com/dcm8qwji0/image/upload/v1782215785/r4_lcnxru.png" alt="Final Visualization 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
