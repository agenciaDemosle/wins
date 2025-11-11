import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { motion } from 'framer-motion';
import { Seo } from '@/components/Seo';
import { getSEOData } from '@/lib/seo';

export const NotFound = () => {
  return (
    <>
      <Seo
        seo={getSEOData({
          title: 'Wings Barber Studio — Página no encontrada',
          description: 'La página que buscas no existe.',
        })}
      />
      <section className="min-h-screen bg-black bg-hero-gradient flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="font-heading text-8xl md:text-9xl text-neon mb-4">404</h1>
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
            Página no <span className="font-script text-neon text-4xl md:text-5xl">encontrada</span>
          </h2>
          <p className="font-body text-base md:text-lg text-neutral-light mb-8 max-w-md mx-auto">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-neon text-white font-body font-semibold rounded hover:bg-neon-dark transition-all duration-300 shadow-neon hover:shadow-neon-lg"
          >
            <Home size={20} />
            <span>Volver al inicio</span>
          </Link>
        </motion.div>
      </section>
    </>
  );
};
