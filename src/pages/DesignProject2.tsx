import { Container } from '../components/Container';
import { FadeIn } from '../components/FadeIn';
import { Link } from 'react-router-dom';

export function DesignProject2() {
  return (
    <main className="pt-32 pb-24 min-h-screen">
      <Container>
        <div className="mb-12">
          <FadeIn>
            <Link to="/services/architectural-design" className="text-secondary/50 hover:text-accent transition-colors text-xs uppercase tracking-widest mb-6 inline-block">
              ← Back to Architectural Design
            </Link>
            <h1 className="text-4xl md:text-6xl font-serif mb-6">Design Project 2</h1>
          </FadeIn>
        </div>

        <div className="space-y-16 animate-in fade-in duration-700">
          <FadeIn delay={0.2}>
            <h3 className="text-2xl font-serif mb-8 border-b border-white/10 pb-4">Concept Images</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-sm tracking-[0.2em] uppercase text-secondary/70">Concept Idea 1</h4>
                <a href="https://res.cloudinary.com/dcm8qwji0/image/upload/v1778845378/s_raw_2_r8vrsp.jpg" target="_blank" rel="noopener noreferrer" className="block aspect-[4/3] overflow-hidden bg-white/5 group cursor-pointer">
                  <img src="https://res.cloudinary.com/dcm8qwji0/image/upload/v1778845378/s_raw_2_r8vrsp.jpg" alt="Project 2 Concept Image 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </a>
              </div>
              <div className="space-y-4">
                <h4 className="text-sm tracking-[0.2em] uppercase text-secondary/70">Concept Idea 2</h4>
                <a href="https://res.cloudinary.com/dcm8qwji0/image/upload/v1778845379/s_raw1_o4y3vd.jpg" target="_blank" rel="noopener noreferrer" className="block aspect-[4/3] overflow-hidden bg-white/5 group cursor-pointer">
                  <img src="https://res.cloudinary.com/dcm8qwji0/image/upload/v1778845379/s_raw1_o4y3vd.jpg" alt="Project 2 Concept Image 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <h3 className="text-2xl font-serif mb-8 border-b border-white/10 pb-4">Final Visualizations</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-sm tracking-[0.2em] uppercase text-secondary/70">Visualization 1</h4>
                <a href="https://res.cloudinary.com/dcm8qwji0/image/upload/v1778845384/day_view_front_nzeuur.png" target="_blank" rel="noopener noreferrer" className="block aspect-[4/3] overflow-hidden bg-white/5 group cursor-pointer">
                  <img src="https://res.cloudinary.com/dcm8qwji0/image/upload/v1778845384/day_view_front_nzeuur.png" alt="Project 2 Final Visualization 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </a>
              </div>
              <div className="space-y-4">
                <h4 className="text-sm tracking-[0.2em] uppercase text-secondary/70">Visualization 2</h4>
                <a href="https://res.cloudinary.com/dcm8qwji0/image/upload/v1778845383/side_view_rmjpbo.png" target="_blank" rel="noopener noreferrer" className="block aspect-[4/3] overflow-hidden bg-white/5 group cursor-pointer">
                  <img src="https://res.cloudinary.com/dcm8qwji0/image/upload/v1778845383/side_view_rmjpbo.png" alt="Project 2 Final Visualization 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </a>
              </div>
              <div className="space-y-4">
                <h4 className="text-sm tracking-[0.2em] uppercase text-secondary/70">Visualization 3</h4>
                <a href="https://res.cloudinary.com/dcm8qwji0/image/upload/v1778845382/front_dark_od95f3.png" target="_blank" rel="noopener noreferrer" className="block aspect-[4/3] overflow-hidden bg-white/5 group cursor-pointer">
                  <img src="https://res.cloudinary.com/dcm8qwji0/image/upload/v1778845382/front_dark_od95f3.png" alt="Project 2 Final Visualization 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </a>
              </div>
              <div className="space-y-4">
                <h4 className="text-sm tracking-[0.2em] uppercase text-secondary/70">Visualization 4</h4>
                <a href="https://res.cloudinary.com/dcm8qwji0/image/upload/v1778845382/side_night_view_kde4oc.png" target="_blank" rel="noopener noreferrer" className="block aspect-[4/3] overflow-hidden bg-white/5 group cursor-pointer">
                  <img src="https://res.cloudinary.com/dcm8qwji0/image/upload/v1778845382/side_night_view_kde4oc.png" alt="Project 2 Final Visualization 4" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </main>
  );
}
