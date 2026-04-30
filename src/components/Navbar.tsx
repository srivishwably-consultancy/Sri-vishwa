import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Container } from './Container';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' }, // Add a projects section/page later or link
  { name: 'Blog', path: '/blog' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-500',
          isScrolled ? 'py-4 bg-[#111111]/90 backdrop-blur-md border-b border-white/5' : 'py-6 bg-transparent'
        )}
      >
        <Container className="flex items-center justify-between">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-xl md:text-2xl font-serif text-secondary tracking-widest uppercase relative z-50">
            Sri Vishwa<span className="text-[var(--color-accent)]">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  cn('nav-link text-xs tracking-[0.15em] uppercase font-medium', isActive ? 'text-accent active' : 'text-secondary/70 hover:text-secondary')
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="ml-4 border border-[var(--color-accent)] text-[var(--color-accent)] px-6 py-2.5 text-xs tracking-[0.15em] uppercase hover:bg-[var(--color-accent)] hover:text-black transition-colors duration-300"
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50 text-secondary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </Container>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#111111] flex flex-col items-center justify-center pt-20"
          >
            <nav className="flex flex-col items-center gap-8 text-center">
              {LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    cn('text-2xl font-serif uppercase tracking-widest', isActive ? 'text-[var(--color-accent)]' : 'text-secondary')
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 border border-[var(--color-accent)] text-[var(--color-accent)] px-8 py-3 text-sm tracking-[0.15em] uppercase hover:bg-[var(--color-accent)] hover:text-black transition-colors"
              >
                Get in Touch
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
