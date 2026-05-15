import { Container } from '../components/Container';
import { FadeIn } from '../components/FadeIn';

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
              A glimpse into our transformative interior design process. Here is how we turn everyday spaces into remarkable experiences.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeIn delay={0.2}>
            <div className="space-y-4">
              <h4 className="text-sm tracking-[0.2em] uppercase text-secondary/70">Before</h4>
              <a href="https://res.cloudinary.com/dcm8qwji0/image/upload/v1778843728/bed_before_avklfg.png" target="_blank" rel="noopener noreferrer" className="block aspect-[4/3] overflow-hidden bg-white/5 group cursor-pointer">
                <img src="https://res.cloudinary.com/dcm8qwji0/image/upload/v1778843728/bed_before_avklfg.png" alt="Before Interior Styling" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="space-y-4">
              <h4 className="text-sm tracking-[0.2em] uppercase text-secondary/70">After</h4>
              <a href="https://res.cloudinary.com/dcm8qwji0/image/upload/v1778843935/bed_after_kwxapj.png" target="_blank" rel="noopener noreferrer" className="block aspect-[4/3] overflow-hidden bg-white/5 group cursor-pointer">
                <img src="https://res.cloudinary.com/dcm8qwji0/image/upload/v1778843935/bed_after_kwxapj.png" alt="After Interior Styling" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </a>
            </div>
          </FadeIn>
        </div>
      </Container>
    </main>
  );
}
