import { Container } from '../components/Container';
import { FadeIn } from '../components/FadeIn';
import { Link } from 'react-router-dom';
import { Folder } from 'lucide-react';

export function InteriorStyling() {
  return (
    <main className="pt-32 pb-24 min-h-screen">
      <Container>
        <FadeIn>
          <div className="mb-16">
            <h4 className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Portfolio
            </h4>
            <h1 className="text-4xl md:text-6xl font-serif mb-6">Interior Styling</h1>
            <p className="text-secondary/70 font-light max-w-2xl text-lg">
              A glimpse into our transformative interior design process. Please select a project folder to view the details.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FadeIn delay={0.2}>
            <Link to="/services/interior-styling/bedroom" className="group block border border-white/10 hover:border-accent bg-white/5 hover:bg-white/10 transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dcm8qwji0/image/upload/v1778843728/bed_before_avklfg.png" 
                  alt="Bedroom Interior Styling" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif mb-2 group-hover:text-accent transition-colors">Bedroom Transformation</h3>
                <p className="text-secondary/50 font-light text-sm uppercase tracking-widest flex items-center gap-2">
                  <Folder size={16} /> Before & After
                </p>
              </div>
            </Link>
          </FadeIn>

          <FadeIn delay={0.4}>
            <Link to="/services/interior-styling/tv-unit" className="group block border border-white/10 hover:border-accent bg-white/5 hover:bg-white/10 transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dcm8qwji0/image/upload/v1782214687/r1_mwq2by.png" 
                  alt="TV Unit Interior Styling" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif mb-2 group-hover:text-accent transition-colors">TV Unit Design</h3>
                <p className="text-secondary/50 font-light text-sm uppercase tracking-widest flex items-center gap-2">
                  <Folder size={16} /> Concepts & Visualisations
                </p>
              </div>
            </Link>
          </FadeIn>

          <FadeIn delay={0.6}>
            <Link to="/services/interior-styling/modern-ceilings" className="group block border border-white/10 hover:border-accent bg-white/5 hover:bg-white/10 transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dcm8qwji0/image/upload/v1784893615/hall1_mpognx.png" 
                  alt="Modern Ceilings" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif mb-2 group-hover:text-accent transition-colors">Modern Ceilings</h3>
                <p className="text-secondary/50 font-light text-sm uppercase tracking-widest flex items-center gap-2">
                  <Folder size={16} /> Concepts & Visualisations
                </p>
              </div>
            </Link>
          </FadeIn>
        </div>
      </Container>
    </main>
  );
}
