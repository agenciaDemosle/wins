import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  backgroundImage?: string;
  overlayOpacity?: 'light' | 'medium' | 'dark';
  backgroundPosition?: string;
  size?: 'small' | 'medium' | 'large';
}

export const Hero = ({ title, subtitle, children, backgroundImage, overlayOpacity = 'dark', backgroundPosition = 'center', size = 'large' }: HeroProps) => {
  const overlayClasses = {
    light: 'bg-black/30',
    medium: 'bg-black/50',
    dark: 'bg-black/70'
  };

  const sizeClasses = {
    small: 'min-h-[40vh] md:min-h-[45vh]',
    medium: 'min-h-[50vh] md:min-h-[55vh]',
    large: 'min-h-[60vh] md:min-h-[70vh]'
  };

  return (
    <section className={`relative ${sizeClasses[size]} flex items-center justify-center bg-black overflow-hidden`}>
      {/* Imagen de fondo con overlay */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: backgroundPosition
          }}
        >
          <div className={`absolute inset-0 ${overlayClasses[overlayOpacity]} bg-hero-gradient`} />
        </div>
      )}
      {!backgroundImage && <div className="absolute inset-0 bg-hero-gradient" />}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight mb-6 px-2"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-body text-base sm:text-lg md:text-xl text-white max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {children}
          </motion.div>
        )}
      </div>
      {/* Decoración neón sutil */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-neon to-transparent opacity-50" />
    </section>
  );
};
