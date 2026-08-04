import { Container } from '../components/Container';
import { FadeIn } from '../components/FadeIn';
import { Link } from 'react-router-dom';

export function DesignProject4() {
  const projectImages = [
    {
      src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785855722/construction_elevation_erplzt.jpg',
      title: 'Construction & Elevation View'
    },
    {
      src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785855799/ele_1_xoiwjf.png',
      title: 'Elevation Visualisation 1'
    },
    {
      src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785855803/ele_2_pquckg.png',
      title: 'Elevation Visualisation 2'
    },
    {
      src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785855806/ele_4_alpgzw.png',
      title: 'Elevation Visualisation 3'
    }
  ];

  return (
    <main className="pt-32 pb-24 min-h-screen">
      <Container>
        <div className="mb-12">
          <FadeIn>
            <Link to="/services/architectural-design" className="text-secondary/50 hover:text-accent transition-colors text-xs uppercase tracking-widest mb-6 inline-block">
              ← Back to Architectural Design
            </Link>
            <h1 className="text-4xl md:text-6xl font-serif mb-6">Design Project 4</h1>
            <p className="text-secondary/70 font-light max-w-2xl text-lg">
              Architectural elevation designs, structural concepts, and high-precision visualisations.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectImages.map((img, index) => (
            <FadeIn delay={0.1 + index * 0.1} key={index}>
              <div className="space-y-4">
                <a href={img.src} target="_blank" rel="noopener noreferrer" className="block aspect-[4/3] overflow-hidden bg-white/5 group cursor-pointer border border-white/10 hover:border-accent transition-colors duration-300">
                  <img src={img.src} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </a>
                <h4 className="text-sm tracking-[0.2em] uppercase text-secondary/70">{img.title}</h4>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </main>
  );
}
