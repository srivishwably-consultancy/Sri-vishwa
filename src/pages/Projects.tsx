import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container } from '../components/Container';
import { FadeIn } from '../components/FadeIn';
import { Card3D } from '../components/Card3D';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const ALL_PROJECTS = [
  {
    id: '1',
    title: 'BITM College Ballari',
    category: 'Education',
    image: 'https://res.cloudinary.com/dcm8qwji0/image/upload/f_auto,q_auto/1_c56eq6'
  },
  {
    id: '2',
    title: 'Aura Commercial Plaza',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: '3',
    title: 'Villa Horizon',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80'
  }
];

const CATEGORIES = ['All', 'Commercial', 'Education', 'Residential'];

export function Projects() {
  const { id } = useParams();
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = ALL_PROJECTS.filter(p => activeCategory === 'All' || p.category === activeCategory);

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
            
            <div className="flex flex-wrap gap-4 mt-12">
              {CATEGORIES.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "px-6 py-2 text-sm tracking-widest uppercase border transition-colors duration-300",
                    activeCategory === category 
                      ? "border-accent text-accent bg-accent/5" 
                      : "border-white/10 text-secondary/50 hover:border-white/30 hover:text-white"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card3D>
                  <Link to={`/projects/${project.id}`} className="group block overflow-hidden bg-white/5 rounded-lg border border-white/10 hover:border-accent/50 transition-colors">
                    <div className="aspect-[4/3] overflow-hidden mb-0">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-serif mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                      <p className="text-secondary/50 font-light text-sm uppercase tracking-widest">{project.category}</p>
                    </div>
                  </Link>
                </Card3D>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </main>
  );
}
