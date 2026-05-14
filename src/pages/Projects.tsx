import { useParams, Link } from 'react-router-dom';
import { Container } from '../components/Container';
import { FadeIn } from '../components/FadeIn';

export function Projects() {
  const { id } = useParams();

  const bitmProject = {
    title: 'BITM College Ballari',
    category: 'Enhancing Campus Spaces',
    images: [
      {
        name: 'View 1',
        url: 'https://res.cloudinary.com/dcm8qwji0/image/upload/f_auto,q_auto/1_c56eq6'
      },
      {
        name: 'View 2',
        url: 'https://res.cloudinary.com/dcm8qwji0/image/upload/f_auto,q_auto/2_domasn'
      },
      {
        name: 'Raw Sketch',
        url: 'https://res.cloudinary.com/dcm8qwji0/image/upload/f_auto,q_auto/Screenshot_2026-05-14_175729_ipik2d'
      }
    ]
  };

  if (id === '1') {
    return (
      <main className="pt-32 pb-24 min-h-screen">
        <Container>
          <div className="mb-12">
            <FadeIn>
              <Link to="/projects" className="text-secondary/50 hover:text-accent transition-colors text-xs uppercase tracking-widest mb-6 inline-block">
                ← Back to Projects
              </Link>
              <h1 className="text-4xl md:text-6xl font-serif mb-4">{bitmProject.title}</h1>
              <p className="text-accent text-sm uppercase tracking-widest">{bitmProject.category}</p>
            </FadeIn>
          </div>
          
          <div className="space-y-24">
            {bitmProject.images.map((image, index) => (
              <FadeIn key={image.name} delay={index * 0.2}>
                <div className="flex flex-col gap-6">
                  <div className="aspect-video w-full overflow-hidden bg-black/50">
                    <img 
                      src={image.url} 
                      alt={image.name} 
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h3 className="text-xl font-serif text-center text-secondary/80">{image.name}</h3>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </main>
    );
  }

  // Fallback /projects list
  return (
    <main className="pt-32 pb-24 min-h-screen">
      <Container>
        <div className="mb-16">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-serif mb-6">Our Projects</h1>
            <div className="w-16 h-px bg-accent mb-8" />
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <FadeIn>
            <Link to="/projects/1" className="group block overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden mb-6">
                <img 
                  src="https://res.cloudinary.com/dcm8qwji0/image/upload/f_auto,q_auto/1_c56eq6" 
                  alt="BITM College Ballari" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="text-2xl font-serif mb-2 group-hover:text-accent transition-colors">BITM College Ballari</h3>
                <p className="text-secondary/50 font-light text-sm uppercase tracking-widest">Enhancing Campus Spaces</p>
              </div>
            </Link>
          </FadeIn>
        </div>
      </Container>
    </main>
  );
}
