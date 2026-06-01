import { Link } from 'react-router-dom';
import { Container } from './Container';
import { Instagram, Linkedin } from 'lucide-react';

const WhatsAppIcon = ({ size = 18 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] pt-24 pb-8 border-t border-white/5">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="block mb-6 hover:opacity-80 transition-opacity">
              <img src="https://res.cloudinary.com/dcm8qwji0/image/upload/f_auto,q_auto/SVC_LOGO_web_2_qduowt" alt="Sri Vishwa Logo" className="h-12 w-auto object-contain" />
            </Link>
            <p className="text-secondary/60 max-w-sm text-sm leading-relaxed mb-8">
              Premier design-build contractor creating visionary spaces that blend architectural excellence with structural integrity.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/srivishwaballari" target="_blank" rel="noopener noreferrer" className="p-2 border border-white/10 rounded-full text-secondary/60 hover:text-accent hover:border-accent transition-colors"><Instagram size={18} /></a>
              <a href="https://www.linkedin.com/in/kshreyas-civil" target="_blank" rel="noopener noreferrer" className="p-2 border border-white/10 rounded-full text-secondary/60 hover:text-accent hover:border-accent transition-colors"><Linkedin size={18} /></a>
              <a href="https://wa.me/918105561005" target="_blank" rel="noopener noreferrer" className="p-2 border border-white/10 rounded-full text-secondary/60 hover:text-accent hover:border-accent transition-colors"><WhatsAppIcon size={18} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-secondary/40 font-semibold mb-6">Navigation</h4>
            <div className="flex flex-col gap-4 text-sm text-secondary/80">
              <Link to="/" onClick={() => window.scrollTo(0, 0)} className="hover:text-accent transition-colors">Home</Link>
              <Link to="/#about-us" onClick={() => {
                setTimeout(() => {
                  document.getElementById('about-us')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }} className="hover:text-accent transition-colors">About Us</Link>
              <Link to="/services" className="hover:text-accent transition-colors">Services</Link>
              <Link to="/projects" className="hover:text-accent transition-colors">Projects</Link>
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
            <Link to="/privacy-policy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-secondary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
