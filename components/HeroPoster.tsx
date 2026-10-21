import React from 'react';

interface HeroPosterProps {
  className?: string;
}

/**
 * Hero Corporate Background Poster Component
 * Utilizes the custom 1920x1080 SVG vector architecture with high-contrast filters
 */
export const HeroPoster: React.FC<HeroPosterProps> = ({ className = '' }) => {
  return (
    <div
      className={`absolute inset-0 bg-cover bg-center opacity-30 filter brightness-90 contrast-125 pointer-events-none ${className}`}
      style={{ backgroundImage: "url('/images/hero-corporate-poster.svg')" }}
      aria-hidden="true"
    />
  );
};

export default HeroPoster;
