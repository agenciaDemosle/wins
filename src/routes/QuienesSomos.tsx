import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { Seo } from '@/components/Seo';
import { getSEOData } from '@/lib/seo';
import { motion } from 'framer-motion';
import { Scissors, Users, Sparkles, MapPin, Coffee, Gamepad2, Target, Eye, Award, Heart, TrendingUp } from 'lucide-react';
import fondoblanco1 from '@/assets/fondoblanco1.jpg';
import fondoblanco2 from '@/assets/fondoblanco2.jpg';
import fondoblanco3 from '@/assets/fondoblanco3.jpg';
import portada2Bg from '@/assets/portada2.webp';
import alanImg from '@/assets/alan.jpg';
import felipeImg from '@/assets/felipe.jpg';
import agustinImg from '@/assets/agustin.jpg';
import gratisImg from '@/assets/gratis.jpeg';

export const QuienesSomos = () => {
  return (
    <>
      <Seo
        seo={getSEOData({
          title: 'Sobre Nosotros | Wings Barber Studio Puerto Varas',
          description:
            'Conoce Wings Barber Studio, la barbería #1 de Puerto Varas. Nuestra historia, misión, visión, valores y equipo profesional de barberos especializados. Experiencia premium en barbería moderna.',
          canonical: 'https://wingsbarberstudio.cl/quienes-somos',
          keywords: 'barbería Puerto Varas, equipo barberos profesionales, historia Wings Barber Studio, barbería premium Los Lagos, mejor barbería sur Chile, barberos especializados Puerto Varas',
        })}
      />
      <Hero title="Sobre Wings Barber Studio" backgroundImage={portada2Bg} overlayOpacity="medium" backgroundPosition="center 35%" size="small" />

      {/* Tu estilo comienza aquí */}
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
              Tu estilo comienza <span className="font-script text-neon text-4xl md:text-5xl lg:text-6xl">aquí</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Scissors size={40} />,
                title: 'Estilo & Técnica',
                text: 'Un espacio donde el estilo, la técnica y la experiencia se encuentran para elevar tu confianza.'
              },
              {
                icon: <Sparkles size={40} />,
                title: 'Experiencia Premium',
                text: 'Más que un corte: una experiencia memorable, cuidada en cada detalle.'
              },
              {
                icon: <MapPin size={40} />,
                title: 'Ambiente Único',
                text: 'Premium, cálido y profesional. Diseñado para que te sientas cómodo y relajado.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-black/90 backdrop-blur-sm border-2 border-neon/20 p-8 rounded-lg hover:border-neon/50 transition-all"
              >
                <div className="text-neon mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="font-heading text-xl md:text-2xl text-white mb-3 text-center">
                  {item.title}
                </h3>
                <p className="font-body text-white text-center leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Nuestra Historia */}
      <Section background="black">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-8 text-center">
              Nuestra <span className="font-script text-neon text-4xl md:text-5xl lg:text-6xl">Historia</span>
            </h2>
            <div className="bg-gray-light/30 backdrop-blur-sm border-2 border-neon/40 p-8 md:p-12 rounded-lg">
              <div className="font-body text-base md:text-lg leading-relaxed text-white space-y-4">
                <p className="text-neon font-semibold">
                  Todo comenzó con una visión clara:
                </p>
                <p>
                  Transformar la barbería tradicional en un espacio moderno, donde el servicio profesional se combina con un ambiente único.
                </p>
                <p>
                  De una pequeña estación inicial, hemos crecido hasta convertirnos en un referente en Puerto Varas, reconocidos por nuestra calidad, atención al detalle y compromiso con cada cliente.
                </p>
                <p className="text-neon font-semibold">
                  Hoy, Wings Barber Studio es el resultado de pasión, dedicación y un equipo de profesionales que aman lo que hacen.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Nuestro Equipo */}
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
              Nuestro <span className="font-script text-neon text-4xl md:text-5xl lg:text-6xl">Equipo</span>
            </h2>
            <p className="font-body text-base md:text-lg text-white max-w-3xl mx-auto">
              El corazón de Wings Barber Studio: barberos profesionales con estilo, experiencia y pasión.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Alan Vargas',
                role: 'Fundador & Barber Master',
                description: 'Lidera con su visión de excelencia y atención personalizada.',
                image: alanImg
              },
              {
                name: 'Felipe Aguilar',
                role: 'Especialista en Color',
                description: 'Creatividad y precisión en técnicas modernas.',
                image: felipeImg
              },
              {
                name: 'Agustín Moreira',
                role: 'Barber & Stylist',
                description: 'Talento para cortes de tendencia y estilo único.',
                image: agustinImg
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-black/90 backdrop-blur-sm border-2 border-neon/20 p-6 rounded-lg text-center hover:border-neon/60 transition-all group"
              >
                <div className="mb-4 overflow-hidden rounded-lg border-2 border-neon/30 group-hover:border-neon/70 transition-all bg-black">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-72 md:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-heading text-xl md:text-2xl text-white mb-2 group-hover:text-neon transition-colors">
                  {member.name}
                </h3>
                <p className="font-body text-sm md:text-base text-neon">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* La Experiencia Wings */}
      <Section background="black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-8 text-center">
              La <span className="font-script text-neon text-4xl md:text-5xl lg:text-6xl">Experiencia</span> Wings
            </h2>

            {/* Dos módulos lado a lado */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Módulo izquierdo: Servicios */}
              <div className="bg-gray-light/30 backdrop-blur-sm border-2 border-neon/40 p-6 md:p-8 rounded-lg">
                <div className="space-y-5 mb-6">
                  <div className="flex items-start gap-4">
                    <Coffee className="text-neon flex-shrink-0" size={28} />
                    <p className="font-body text-sm md:text-base text-white pt-1">Café o té de cortesía al llegar</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <Gamepad2 className="text-neon flex-shrink-0" size={28} />
                    <p className="font-body text-sm md:text-base text-white pt-1">Sala de juegos con PS5</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <Sparkles className="text-neon flex-shrink-0" size={28} />
                    <p className="font-body text-sm md:text-base text-white pt-1">Fragancias exclusivas para finalizar</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <Scissors className="text-neon flex-shrink-0" size={28} />
                    <p className="font-body text-sm md:text-base text-white pt-1">Productos profesionales <strong className="text-neon">Nishman</strong></p>
                  </div>
                </div>
                <div className="border-t border-neon/30 pt-5">
                  <p className="font-body text-sm md:text-base text-neon font-semibold text-center">
                    Sales renovado, con confianza y listo para conquistar el día.
                  </p>
                </div>
              </div>

              {/* Módulo derecho: Servicio gratis */}
              <div className="bg-gray-light/30 backdrop-blur-sm border-2 border-neon/40 p-6 md:p-8 rounded-lg flex flex-col">
                <div className="mb-5 overflow-hidden rounded-lg border-2 border-neon/50 flex-shrink-0 max-h-48">
                  <img
                    src={gratisImg}
                    alt="Servicio Gratis"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="font-heading text-xl md:text-2xl text-white mb-3 text-center">
                    ¡Participa y Gana!
                  </h3>
                  <p className="font-body text-sm md:text-base text-white text-center leading-relaxed">
                    Puedes obtener el servicio <span className="text-neon font-bold">GRATIS</span> participando en nuestras promociones. ¡Síguenos en redes sociales y no te pierdas nuestras oportunidades!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Misión y Visión */}
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
              Nuestro <span className="font-script text-neon text-4xl md:text-5xl lg:text-6xl">Propósito</span>
            </h2>
            <p className="font-body text-base md:text-lg text-white max-w-3xl mx-auto">
              Estilo, confianza y experiencia en cada visita.
            </p>
          </motion.div>

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

      {/* Alianzas y Comunidad */}
      <Section background="black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-8">
              Alianzas y <span className="font-script text-neon text-4xl md:text-5xl lg:text-6xl">Comunidad</span>
            </h2>
            <div className="bg-neutral-dark/50 backdrop-blur-sm border border-neon/20 p-8 md:p-12 rounded-lg">
              <p className="font-body text-base md:text-lg text-white leading-relaxed mb-6">
                Creemos en el poder de la comunidad. Colaboramos con eventos locales, auspicios y actividades que conectan a Puerto Varas con el estilo, la cultura y el cuidado personal.
              </p>
              <p className="font-script text-2xl md:text-3xl text-neon">
                Wings es más que una barbería: es un punto de encuentro donde el estilo y la confianza se elevan juntos.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Quote Final */}
      <Section background="black">
        <div className="text-center max-w-3xl mx-auto">
          <div className="bg-gray-medium/50 backdrop-blur-sm border-4 border-neon/50 p-12 rounded-lg">
            <blockquote className="font-script text-3xl md:text-4xl lg:text-5xl text-neon mb-6">
              "En Wings, tu estilo comienza aquí… y se eleva contigo."
            </blockquote>
            <p className="font-heading text-lg md:text-xl text-white tracking-wider">
              — WINGS BARBER STUDIO
            </p>
          </div>
        </div>
      </Section>
    </>
  );
};
