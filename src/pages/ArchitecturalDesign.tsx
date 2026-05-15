import { Container } from '../components/Container';
import { FadeIn } from '../components/FadeIn';
import { Link } from 'react-router-dom';
import { Folder } from 'lucide-react';

export function ArchitecturalDesign() {
  return (
    <main className="pt-32 pb-24 min-h-screen">
      <Container>
        <FadeIn>
          <div className="mb-16">
            <h4 className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Portfolio
            </h4>
            <h1 className="text-4xl md:text-6xl font-serif mb-6">Architectural Design</h1>
            <p className="text-secondary/70 font-light max-w-2xl text-lg">
              A glimpse into our architectural design process. Please select a project folder to view the details.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeIn delay={0.2}>
            <Link to="/services/architectural-design/project-1" className="group block border border-white/10 hover:border-accent bg-white/5 hover:bg-white/10 transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dcm8qwji0/image/upload/v1778844481/front1_oac4oz.png" 
                  alt="Design Project 1 Cover" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif mb-2 group-hover:text-accent transition-colors">Design Project 1</h3>
                <p className="text-secondary/50 font-light text-sm uppercase tracking-widest flex items-center gap-2">
                  <Folder size={16} /> Concept & Visualisations
                </p>
              </div>
            </Link>
          </FadeIn>

          <FadeIn delay={0.4}>
            <Link to="/services/architectural-design/project-2" className="group block border border-white/10 hover:border-accent bg-white/5 hover:bg-white/10 transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dcm8qwji0/image/upload/v1778845383/side_view_rmjpbo.png" 
                  alt="Design Project 2 Cover" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif mb-2 group-hover:text-accent transition-colors">Design Project 2</h3>
                <p className="text-secondary/50 font-light text-sm uppercase tracking-widest flex items-center gap-2">
                  <Folder size={16} /> Concept & Visualisations
                </p>
              </div>
            </Link>
          </FadeIn>
        </div>
      </Container>
    </main>
  );
}
