import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { Seo } from '@/components/Seo';
import { getSEOData } from '@/lib/seo';
import { Target, Eye, Award, Heart, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import fondoblanco1 from '@/assets/fondoblanco1.jpg';
import fondoblanco4 from '@/assets/fondoblanco4.jpg';

export const MisionVision = () => {
  return (
    <>
      <Seo
        seo={getSEOData({
          title: 'Wings Barber Studio — Misión y visión',
          description:
            'Conoce el propósito que guía a Wings Barber Studio: una barbería moderna, cercana y comprometida con la comunidad de Puerto Varas.',
          canonical: 'https://wingsbarberstudio.cl/mision-vision',
        })}
      />
      <Hero
        title="Nuestro Propósito"
        subtitle="Estilo, confianza y experiencia en cada visita"
      />

      {/* Intro Section */}
      <Section background="black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-xl md:text-2xl text-white leading-relaxed mb-4">
              En <span className="font-script text-neon text-2xl md:text-3xl">Wings Barber Studio</span>, cada corte es una declaración.
            </p>
            <p className="font-body text-base md:text-lg text-white">
              Nuestro propósito va más allá de la barbería tradicional: creamos experiencias que elevan tu confianza y reflejan tu estilo único.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Misión y Visión */}
      <Section background="black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Misión */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-light/30 backdrop-blur-sm border-2 border-neon/50 p-8 md:p-10 rounded-lg hover:border-neon transition-all group"
            >
              <div className="flex items-center justify-center w-20 h-20 bg-neon/20 border border-neon rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform">
                <Target className="text-neon" size={40} />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl text-white mb-6 text-center">
                Nuestra <span className="font-script text-neon text-4xl md:text-5xl">Misión</span>
              </h2>
              <p className="font-body text-base md:text-lg leading-relaxed text-white text-center">
                Entregar una experiencia de barbería moderna, profesional y cercana en Puerto Varas, donde cada detalle —desde el servicio hasta el ambiente— esté pensado para que nuestros clientes se sientan seguros, cómodos y fieles a su estilo.
              </p>
            </motion.div>

            {/* Visión */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-light/30 backdrop-blur-sm border-2 border-neon/50 p-8 md:p-10 rounded-lg hover:border-neon transition-all group"
            >
              <div className="flex items-center justify-center w-20 h-20 bg-neon/20 border border-neon rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform">
                <Eye className="text-neon" size={40} />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl text-white mb-6 text-center">
                Nuestra <span className="font-script text-neon text-4xl md:text-5xl">Visión</span>
              </h2>
              <p className="font-body text-base md:text-lg leading-relaxed text-white text-center">
                Convertirnos en la barbería de referencia en el sur de Chile, reconocida por su excelencia técnica, su ambiente único y su compromiso con la comunidad, inspirando confianza y estilo en cada persona que nos visita.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Valores */}
      <Section background="black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              Nuestros <span className="font-script text-neon text-4xl md:text-5xl lg:text-6xl">Valores</span>
            </h2>
            <p className="font-body text-base md:text-lg text-white max-w-3xl mx-auto">
              Los principios que guían cada decisión, cada corte, cada experiencia en Wings.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award size={48} />,
                title: 'Excelencia',
                description:
                  'Nos esforzamos por ofrecer servicios de la más alta calidad, con técnicas actualizadas y productos profesionales.',
              },
              {
                icon: <Heart size={48} />,
                title: 'Cercanía',
                description:
                  'Cada cliente es único. Escuchamos, asesoramos y entregamos un servicio personalizado que refleja su estilo.',
              },
              {
                icon: <TrendingUp size={48} />,
                title: 'Compromiso',
                description:
                  'Estamos comprometidos con nuestra comunidad, con el crecimiento profesional y con la satisfacción de quienes nos eligen.',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-neutral-dark/50 backdrop-blur-sm border border-neon/20 p-8 rounded-lg hover:border-neon/50 transition-all group"
              >
                <div className="text-neon mb-6 flex justify-center group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="font-heading text-xl md:text-2xl text-white mb-4 text-center">
                  {value.title}
                </h3>
                <p className="font-body text-sm md:text-base text-white leading-relaxed text-center">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Call to Action Final */}
      <Section background="black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-medium/50 backdrop-blur-sm border-4 border-neon/50 p-12 md:p-16 rounded-lg">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-6">
                ¿Listo para vivir la <span className="font-script text-neon text-4xl md:text-5xl lg:text-6xl">experiencia</span>?
              </h2>
              <p className="font-body text-base md:text-lg text-white leading-relaxed mb-8">
                En Wings Barber Studio, tu confianza y estilo son nuestra prioridad. Ven y descubre por qué somos la barbería Nº1 de Puerto Varas.
              </p>
              <div className="inline-block">
                <a
                  href="/contacto"
                  className="inline-block bg-neon text-black font-heading text-lg md:text-xl px-8 md:px-12 py-4 md:py-5 rounded-lg hover:bg-neon/90 transition-all hover:scale-105 shadow-lg hover:shadow-neon uppercase tracking-wider"
                >
                  Reservar Hora
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
};
