import { Container } from '../components/Container';
import { FadeIn } from '../components/FadeIn';

export function Projects() {
  return (
    <main className="pt-32 pb-24 min-h-screen">
      <section className="py-20 relative text-center flex flex-col items-center justify-center min-h-[50vh]">
        <Container>
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-serif leading-none tracking-tight uppercase mb-8 text-secondary/40">
              Projects Page
            </h1>
            <p className="text-xl font-light text-secondary/50 leading-relaxed uppercase tracking-widest">
              Coming Soon
            </p>
          </FadeIn>
        </Container>
      </section>
    </main>
  );
}
