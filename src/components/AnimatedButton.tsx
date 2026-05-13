import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './AnimatedButton.css';

interface AnimatedButtonProps {
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
}

export function AnimatedButton({ to, onClick, children, className = '', showArrow = true }: AnimatedButtonProps) {
  const content = (
    <>
      <i className="verd-cta-shimmer"></i>
      <span className="verd-cta-text">
        {children}
        {showArrow && (
          <ArrowRight size={14} className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
        )}
      </span>
    </>
  );

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={`verd-cta-btn ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`verd-cta-btn ${className}`}>
      {content}
    </button>
  );
}
