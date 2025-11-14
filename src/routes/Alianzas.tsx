import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { Seo } from '@/components/Seo';
import { getSEOData } from '@/lib/seo';
import { motion } from 'framer-motion';
import { Handshake, Users, Heart, Trophy, Briefcase } from 'lucide-react';
import portada2Bg from '@/assets/portada2.webp';
import fotoalianzaBg from '/images/fotoalianza.jpeg';
import alianza1 from '/images/alianza1.jpeg';
import alianza2 from '/images/alianza2.jpeg';
import alianza3 from '/images/alianza3.jpeg';
import alianza4 from '/images/alianza4.jpeg';
import alianza5 from '/images/alianza5.jpeg';
import alianza6 from '/images/alianza6.jpeg';
import fondo1 from '@/assets/fondo.jpg';
import fondo2 from '@/assets/fondo2.jpg';
import fondo3 from '@/assets/fondo3.jpg';

export const Alianzas = () => {
  // Array de logos de alianzas
  const logos = [
    { id: 1, name: 'Alianza 1', image: alianza1 },
    { id: 2, name: 'Alianza 2', image: alianza2 },
    { id: 3, name: 'Alianza 3', image: alianza3 },
    { id: 4, name: 'Alianza 4', image: alianza4 },
    { id: 5, name: 'Alianza 5', image: alianza5 },
    { id: 6, name: 'Alianza 6', image: alianza6 }
  ];

  return (
    <>
      <Seo
        seo={getSEOData({
          title: 'Alianzas | Wings Barber Studio Puerto Varas',
          description:
            'Conoce nuestras alianzas estratégicas con instituciones y emprendimientos locales. Wings Barber Studio colabora con la comunidad de Puerto Varas en eventos deportivos, culturales y sociales.',
          canonical: 'https://wingsbarberstudio.cl/alianzas',
          keywords: 'alianzas Wings Barber Studio, colaboraciones Puerto Varas, auspicios deportivos, eventos locales Puerto Varas, comunidad Los Lagos',
        })}
      />
      <Hero
        title="Alianzas"
        backgroundImage={fotoalianzaBg}
        overlayOpacity="medium"
        backgroundPosition="center 70%"
        size="small"
      />

      {/* Introducción */}
      <Section background="black" backgroundImage={fondo1}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-8">
              En Wings Barber Studio creemos en el poder de las <span className="font-script text-neon text-4xl md:text-5xl lg:text-6xl">conexiones</span>
            </h2>

            <div className="bg-gray-light/30 backdrop-blur-sm border-2 border-neon/40 p-8 md:p-12 rounded-lg space-y-6">
              <p className="font-body text-base md:text-lg text-white leading-relaxed">
                Formamos parte activa de la comunidad de Puerto Varas, participando en eventos locales, auspiciando equipos deportivos y colaborando con marcas, colegios y proyectos que reflejan nuestros valores.
              </p>

              <p className="font-body text-base md:text-lg text-white leading-relaxed">
                Mantenemos alianzas estratégicas con distintas instituciones y emprendimientos locales, generando beneficios exclusivos y experiencias únicas para nuestros clientes.
              </p>

              <p className="font-body text-base md:text-lg text-neon font-semibold leading-relaxed">
                Cada colaboración representa nuestro compromiso con la comunidad, el deporte, el arte y el bienestar de quienes confían en nosotros día a día.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Áreas de Colaboración */}
      <Section background="black" backgroundImage={fondo2}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              Áreas de <span className="font-script text-neon text-4xl md:text-5xl lg:text-6xl">Colaboración</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Trophy size={40} />,
                title: 'Deporte',
                description: 'Auspicios a equipos y eventos deportivos locales'
              },
              {
                icon: <Users size={40} />,
                title: 'Educación',
                description: 'Colaboraciones con colegios e instituciones educativas'
              },
              {
                icon: <Heart size={40} />,
                title: 'Comunidad',
                description: 'Eventos locales y actividades comunitarias'
              },
              {
                icon: <Briefcase size={40} />,
                title: 'Empresas',
                description: 'Alianzas estratégicas con emprendimientos locales'
              }
            ].map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-light/30 backdrop-blur-sm border-2 border-neon/20 p-6 rounded-lg hover:border-neon/60 transition-all group"
              >
                <div className="text-neon mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {area.icon}
                </div>
                <h3 className="font-heading text-xl text-white mb-3 text-center group-hover:text-neon transition-colors">
                  {area.title}
                </h3>
                <p className="font-body text-sm text-white text-center leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Carrusel de Logos */}
      <Section background="black" backgroundImage={fondo3}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              Nuestros <span className="font-script text-neon text-4xl md:text-5xl lg:text-6xl">Partners</span>
            </h2>
            <p className="font-body text-base md:text-lg text-white">
              Marcas e instituciones que confían en nosotros
            </p>
          </motion.div>

          {/* Contenedor del carrusel con animación infinita */}
          <div className="relative overflow-hidden py-8">
            {/* Gradiente izquierdo */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>

            {/* Gradiente derecho */}
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>

            {/* Carrusel animado */}
            <div className="flex animate-scroll">
              {/* Primera copia de logos */}
              {logos.map((logo) => (
                <div
                  key={`logo-1-${logo.id}`}
                  className="flex-shrink-0 w-[200px] h-[120px] mx-4 flex items-center justify-center"
                >
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
              {/* Segunda copia para loop infinito */}
              {logos.map((logo) => (
                <div
                  key={`logo-2-${logo.id}`}
                  className="flex-shrink-0 w-[200px] h-[120px] mx-4 flex items-center justify-center"
                >
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Llamado a la acción */}
      <Section background="black" backgroundImage={fondo1}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-medium/50 backdrop-blur-sm border-4 border-neon/50 p-12 md:p-16 rounded-lg"
          >
            <Handshake className="text-neon mx-auto mb-6" size={64} />
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
              ¿Quieres ser parte de nuestras <span className="font-script text-neon text-4xl md:text-5xl">alianzas</span>?
            </h2>
            <p className="font-body text-base md:text-lg text-white leading-relaxed mb-8">
              Si representas una institución, marca o proyecto que comparte nuestros valores, nos encantaría conversar sobre posibles colaboraciones.
            </p>
            <a
              href="https://wa.me/56959850818?text=Hola%20Wings%20Barber%20Studio,%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20alianzas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-neon text-white font-heading text-lg px-10 py-4 rounded-lg hover:bg-neon/90 transition-all hover:scale-105 shadow-lg uppercase tracking-wider"
            >
              Contáctanos
            </a>
          </motion.div>
        </div>
      </Section>

      {/* Estilos para la animación del carrusel */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 4s linear infinite;
        }

        @media (min-width: 768px) {
          .animate-scroll {
            animation: scroll 6s linear infinite;
          }
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
};
