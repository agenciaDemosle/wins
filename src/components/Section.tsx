import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import clsx from 'clsx';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'black' | 'white';
  id?: string;
  backgroundImage?: string;
}

export const Section = ({ children, className, background = 'white', id, backgroundImage }: SectionProps) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={clsx(
        'py-16 md:py-24 relative overflow-hidden',
        background === 'black' ? 'text-neutral-light' : 'text-neutral-dark',
        !backgroundImage && (background === 'black' ? 'bg-black' : 'bg-white'),
        className
      )}
    >
      {/* Imagen de fondo con overlay */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">{children}</div>
    </motion.section>
  );
};
