import { Container } from '../components/Container';
import { FadeIn } from '../components/FadeIn';

export function Blog() {
  const posts = [
    {
      title: "The Future of Sustainable Design-Build",
      category: "Architecture",
      date: "Oct 12, 2026",
      img: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Minimalism in Modern Commercial Spaces",
      category: "Interior Design",
      date: "Sep 28, 2026",
      img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Material Selection: The Importance of Concrete",
      category: "Materials",
      date: "Sep 15, 2026",
      img: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <main className="pt-32 pb-24 min-h-screen">
      <section className="py-20 relative">
        <Container>
          <FadeIn>
            <h1 className="text-6xl md:text-8xl font-serif leading-none tracking-tight uppercase mb-8">
              Journal / <span className="text-outline">Insights</span>
            </h1>
            <p className="text-xl font-light text-secondary/80 max-w-2xl leading-relaxed">
              Thoughts on architecture, design, and the built environment.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="group cursor-pointer">
                  <div className="aspect-[4/3] overflow-hidden mb-6">
                    <img 
                      src={post.img} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex justify-between items-center mb-4 text-xs uppercase tracking-widest">
                    <span className="text-accent">{post.category}</span>
                    <span className="text-secondary/40">{post.date}</span>
                  </div>
                  <h3 className="text-2xl font-serif group-hover:text-accent transition-colors leading-tight">
                    {post.title}
                  </h3>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
