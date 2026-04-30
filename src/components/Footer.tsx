import { Link } from 'react-router-dom';
import { Container } from './Container';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] pt-24 pb-8 border-t border-white/5">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link to="/" className="block mb-6 hover:opacity-80 transition-opacity">
              <h2 className="text-3xl font-serif uppercase tracking-widest">
                Sri Vishwa<span className="text-[var(--color-accent)]">.</span>
              </h2>
            </Link>
            <p className="text-secondary/60 max-w-sm text-sm leading-relaxed mb-8">
              Premier design-build contractor creating visionary spaces that blend architectural excellence with structural integrity.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 border border-white/10 rounded-full text-secondary/60 hover:text-accent hover:border-accent transition-colors"><Instagram size={18} /></a>
              <a href="#" className="p-2 border border-white/10 rounded-full text-secondary/60 hover:text-accent hover:border-accent transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="p-2 border border-white/10 rounded-full text-secondary/60 hover:text-accent hover:border-accent transition-colors"><Twitter size={18} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-secondary/40 font-semibold mb-6">Navigation</h4>
            <div className="flex flex-col gap-4 text-sm text-secondary/80">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <Link to="/about" className="hover:text-accent transition-colors">About Us</Link>
              <Link to="/services" className="hover:text-accent transition-colors">Services</Link>
              <Link to="/projects" className="hover:text-accent transition-colors">Projects</Link>
              <Link to="/blog" className="hover:text-accent transition-colors">Blog</Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-secondary/40 font-semibold mb-6">Contact</h4>
            <div className="flex flex-col gap-4 text-sm text-secondary/80">
              <p>srivishwably@gmail.com</p>
              <p>+91 81055 61005<br/>+91 80500 43880</p>
              <p className="mt-4">Kalika Kamateshwara Complex, Beside Deepak Store,<br/>Kalamma Street, Bellary-583101, Karnataka</p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-secondary/40">
          <p>&copy; {new Date().getFullYear()} Sri Vishwa Consultancy. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
