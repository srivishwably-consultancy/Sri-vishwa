import { Container } from '../components/Container';
import { FadeIn } from '../components/FadeIn';

export function InteriorStylingModernCeilings() {
  const ceilingImages = [
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1784893616/md_m1gtrs.png', title: 'Master Bedroom Ceiling' },
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1784893616/kids_ytsufh.png', title: 'Kids Room Ceiling' },
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1784893615/hall1_mpognx.png', title: 'Hall Ceiling Concept 1' },
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1784893612/5_dtc3yg.png', title: 'Design Concept 5' },
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1784893612/hall_xq4em7.png', title: 'Hall Ceiling' },
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1784893611/4_vsdcsp.png', title: 'Design Concept 4' },
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1784893611/3_cpuc44.png', title: 'Design Concept 3' },
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1784893611/2_iyaxih.png', title: 'Design Concept 2' },
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1784893611/1_g1ctj2.png', title: 'Design Concept 1' },
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785853692/5_i7hj64.png', title: 'Modern Ceiling Concept 10' },
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785853691/3_wuoyr3.png', title: 'Modern Ceiling Concept 11' },
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785853687/4_mhkgu0.png', title: 'Modern Ceiling Concept 12' },
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785853686/6_xonjfn.png', title: 'Modern Ceiling Concept 13' },
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785853686/1_iqolkd.png', title: 'Modern Ceiling Concept 14' },
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785853676/9_biw9lj.png', title: 'Modern Ceiling Concept 15' },
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785853666/8_sydc2j.png', title: 'Modern Ceiling Concept 16' },
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785853662/2_zmgegb.png', title: 'Modern Ceiling Concept 17' },
  ];

  return (
    <main className="pt-32 pb-24 min-h-screen">
      <Container>
        <FadeIn>
          <div className="mb-16">
            <h4 className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Project Details
            </h4>
            <h1 className="text-4xl md:text-6xl font-serif mb-6">Modern Ceilings</h1>
            <p className="text-secondary/70 font-light max-w-2xl text-lg">
              Explore our collection of modern ceiling designs, featuring concepts and visualizations for various rooms.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ceilingImages.map((image, index) => (
            <FadeIn delay={0.2 + index * 0.1} key={index}>
              <div className="space-y-4">
                <a href={image.src} target="_blank" rel="noopener noreferrer" className="block aspect-[4/3] overflow-hidden bg-white/5 group cursor-pointer">
                  <img src={image.src} alt={image.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </a>
                <h4 className="text-sm tracking-[0.2em] uppercase text-secondary/70">{image.title}</h4>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </main>
  );
}
