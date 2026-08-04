import { Container } from '../components/Container';
import { FadeIn } from '../components/FadeIn';

export function InteriorStylingLEDStripCeilings() {
  const ledCeilingImages = [
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785854513/44_n6v6sm.png', title: 'LED Strip Design 44' },
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785854508/43_ssrmsk.png', title: 'LED Strip Design 43' },
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785854504/42_fvhhgk.png', title: 'LED Strip Design 42' },
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785854497/39_ck1g2h.png', title: 'LED Strip Design 39' },
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785854493/41_blvwhu.png', title: 'LED Strip Design 41' },
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785854487/36_vkwuey.png', title: 'LED Strip Design 36' },
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785854486/35_y8g1kn.png', title: 'LED Strip Design 35' },
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785854471/38_dpifxr.png', title: 'LED Strip Design 38' },
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785854471/40_b3vywv.png', title: 'LED Strip Design 40' },
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785854453/37_nbcsw6.png', title: 'LED Strip Design 37' },
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785854440/34_iicwfk.png', title: 'LED Strip Design 34' },
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785854424/29_vo3z9i.png', title: 'LED Strip Design 29' },
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785854394/22_sbpbku.png', title: 'LED Strip Design 22' },
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785854393/25_hcd9rg.png', title: 'LED Strip Design 25' },
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785854388/26_de9gca.png', title: 'LED Strip Design 26' },
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785854383/23_s1bbxn.png', title: 'LED Strip Design 23' },
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785854383/27_qto0y9.png', title: 'LED Strip Design 27' },
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785854374/21_c67klj.png', title: 'LED Strip Design 21' },
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785854359/24_jzrsnp.png', title: 'LED Strip Design 24' },
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785854352/19_fhkvv2.png', title: 'LED Strip Design 19' },
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785854345/18_csu7wq.png', title: 'LED Strip Design 18' },
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785854343/15_zn1ubr.png', title: 'LED Strip Design 15' },
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785854330/7_rqh7qw.png', title: 'LED Strip Design 7' },
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785854329/13_u3upld.png', title: 'LED Strip Design 13' },
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785854322/14_qacoyg.png', title: 'LED Strip Design 14' },
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785854315/10_xjveb4.png', title: 'LED Strip Design 10' },
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785854306/5_irrzdu.png', title: 'LED Strip Design 5' },
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785854298/8_xnyty7.png', title: 'LED Strip Design 8' },
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785854296/9_a9s2qf.png', title: 'LED Strip Design 9' },
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785854286/6_uadhmd.png', title: 'LED Strip Design 6' },
    { src: 'https://res.cloudinary.com/dcm8qwji0/image/upload/v1785854286/4_npbigv.png', title: 'LED Strip Design 4' },
  ];

  return (
    <main className="pt-32 pb-24 min-h-screen">
      <Container>
        <FadeIn>
          <div className="mb-16">
            <h4 className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Project Details
            </h4>
            <h1 className="text-4xl md:text-6xl font-serif mb-6">LED Strip Ceiling Designs</h1>
            <p className="text-secondary/70 font-light max-w-2xl text-lg">
              Explore our architectural linear lighting concepts and ambient LED strip ceiling installations.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ledCeilingImages.map((image, index) => (
            <FadeIn delay={0.1 + (index % 6) * 0.05} key={index}>
              <div className="space-y-4">
                <a href={image.src} target="_blank" rel="noopener noreferrer" className="block aspect-[4/3] overflow-hidden bg-white/5 group cursor-pointer border border-white/10 hover:border-accent transition-colors duration-300">
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
