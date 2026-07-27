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
    title: 'Lokur Multi - Specialty Hospital',
    category: 'Commercial',
    image: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1784895186/1_cbcvnx.png'
  },
  {
    id: '3',
    title: 'Buildings',
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
        url: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1784897014/0f646268-ed51-4aa5-9ad2-f0701e07cf29_mfmnfk.png'
      },
      {
        name: 'View 2',
        url: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1784897015/IMG_20260527_113940626_HDR_AE_ztvuet.jpg'
      },
      {
        name: 'View 3',
        url: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1784897014/IMG_20260527_113756139_HDR_AE_pb8vra.jpg'
      },
      {
        name: 'View 4',
        url: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1784897014/IMG_20260527_113037836_HDR_AE_towju0.jpg'
      },
      {
        name: 'Concept Image',
        url: 'https://res.cloudinary.com/dcm8qwji0/image/upload/f_auto,q_auto/Screenshot_2026-05-14_175729_ipik2d'
      }
    ]
  };

  const lokurProject = {
    title: 'Lokur Multi - Specialty Hospital',
    category: 'Commercial',
    images: [
      { name: 'View 1', url: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1784897270/20260628_113015AMByGPSMapCamera_mhzciv.jpg' },
      { name: 'View 2', url: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1784897269/20260628_112953AMByGPSMapCamera_bc31ws.jpg' },
      { name: 'View 3', url: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1784894628/IMG_20260531_110054_182_g0zus8.jpg' },
      { name: 'View 4', url: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1784894627/IMG_20260530_185940_981_eeif4t.jpg' },
      { name: 'View 5', url: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1784894626/IMG_20260531_121023_3_h1zyw5.jpg' },
      { name: 'View 6', url: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1784894625/IMG_20260531_110049_453_wexy0v.jpg' },
      { name: 'View 7', url: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1784894623/IMG_20260530_175716_6_xdvwnj.jpg' },
      { name: 'View 8', url: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1784894622/IMG_20260530_153935_628_uvyhuj.jpg' },
      { name: 'View 9', url: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1784894622/IMG_20260530_161127_8_othhnx.jpg' },
      { name: 'View 10', url: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1784894621/IMG_20260530_153227_0_yjwrkq.jpg' },
      { name: 'View 11', url: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1779197341/20260401_102513AMByGPSMapCamera_efy5nh.jpg' },
      { name: 'View 12', url: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1779197331/20260330_105319AMByGPSMapCamera_tg4fyq.jpg' },
      { name: 'View 13', url: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1779197330/20260330_101818AMByGPSMapCamera_k5aprd.jpg' },
      { name: 'View 14', url: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1779197342/20260401_102442AMByGPSMapCamera_boeyyc.jpg' }
    ]
  };

  const buildingsProject = {
    title: 'Buildings',
    category: 'Residential',
    images: [
      { name: 'View 1', url: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785134669/con_ngecwt.png' },
      { name: 'View 2', url: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785134668/side_con_r7mff1.png' },
      { name: 'View 3', url: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785134667/con1_zbdjxo.png' },
      { name: 'View 4', url: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785134667/pop_work_dps2ek.png' }
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

  if (id === '2') {
    return (
      <main className="pt-32 pb-24 min-h-screen">
        <Container>
          <div className="mb-12">
            <FadeIn>
              <Link to="/projects" className="text-secondary/50 hover:text-accent transition-colors text-xs uppercase tracking-widest mb-6 inline-block">
                ← Back to Projects
              </Link>
              <h1 className="text-4xl md:text-6xl font-serif mb-4">{lokurProject.title}</h1>
              <p className="text-accent text-sm uppercase tracking-widest">{lokurProject.category}</p>
            </FadeIn>
          </div>
          
          <div className="space-y-24">
            {lokurProject.images.map((image, index) => (
              <FadeIn key={image.name} delay={index * 0.1}>
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

  if (id === '3') {
    return (
      <main className="pt-32 pb-24 min-h-screen">
        <Container>
          <div className="mb-12">
            <FadeIn>
              <Link to="/projects" className="text-secondary/50 hover:text-accent transition-colors text-xs uppercase tracking-widest mb-6 inline-block">
                ← Back to Projects
              </Link>
              <h1 className="text-4xl md:text-6xl font-serif mb-4">{buildingsProject.title}</h1>
              <p className="text-accent text-sm uppercase tracking-widest">{buildingsProject.category}</p>
            </FadeIn>
          </div>
          
          <div className="space-y-24">
            {buildingsProject.images.map((image, index) => (
              <FadeIn key={image.name} delay={index * 0.1}>
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
