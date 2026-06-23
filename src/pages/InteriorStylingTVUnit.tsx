import { Container } from '../components/Container';
import { FadeIn } from '../components/FadeIn';

export function InteriorStylingTVUnit() {
  return (
    <main className="pt-32 pb-24 min-h-screen">
      <Container>
        <FadeIn>
          <div className="mb-16">
            <h4 className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Project Details
            </h4>
            <h1 className="text-4xl md:text-6xl font-serif mb-6">TV Unit & Living Area</h1>
            <p className="text-secondary/70 font-light max-w-2xl text-lg">
              Showcasing the design evolution of the TV unit space. Here we highlight our conceptual ideation alongside the highly detailed final visualizations.
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
                  <a href="https://res.cloudinary.com/dcm8qwji0/image/upload/v1782214661/1_lvlxil.png" target="_blank" rel="noopener noreferrer" className="block aspect-[4/3] overflow-hidden bg-white/5 group cursor-pointer">
                    <img src="https://res.cloudinary.com/dcm8qwji0/image/upload/v1782214661/1_lvlxil.png" alt="TV Unit Concept 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </a>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="space-y-4">
                  <h4 className="text-sm tracking-[0.2em] uppercase text-secondary/70">Concept Image 2</h4>
                  <a href="https://res.cloudinary.com/dcm8qwji0/image/upload/v1782214685/2_ksdkjg.png" target="_blank" rel="noopener noreferrer" className="block aspect-[4/3] overflow-hidden bg-white/5 group cursor-pointer">
                    <img src="https://res.cloudinary.com/dcm8qwji0/image/upload/v1782214685/2_ksdkjg.png" alt="TV Unit Concept 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-serif mb-8 text-[#f2f0e9]">Final Visualizations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FadeIn delay={0.2}>
                <div className="space-y-4">
                  <h4 className="text-sm tracking-[0.2em] uppercase text-secondary/70">Final Visualization 1</h4>
                  <a href="https://res.cloudinary.com/dcm8qwji0/image/upload/v1782214687/r1_mwq2by.png" target="_blank" rel="noopener noreferrer" className="block aspect-[4/3] overflow-hidden bg-white/5 group cursor-pointer">
                    <img src="https://res.cloudinary.com/dcm8qwji0/image/upload/v1782214687/r1_mwq2by.png" alt="TV Unit Final 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </a>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="space-y-4">
                  <h4 className="text-sm tracking-[0.2em] uppercase text-secondary/70">Final Visualization 2</h4>
                  <a href="https://res.cloudinary.com/dcm8qwji0/image/upload/v1782214687/r3_jxzku7.png" target="_blank" rel="noopener noreferrer" className="block aspect-[4/3] overflow-hidden bg-white/5 group cursor-pointer">
                    <img src="https://res.cloudinary.com/dcm8qwji0/image/upload/v1782214687/r3_jxzku7.png" alt="TV Unit Final 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
