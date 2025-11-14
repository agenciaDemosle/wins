import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { Seo } from '@/components/Seo';
import { getSEOData } from '@/lib/seo';
import { motion } from 'framer-motion';
import { Scissors, Users, Sparkles, MapPin, Coffee, Gamepad2, Target, Eye, Award, Heart, TrendingUp, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

// Componente de ícono Instagram personalizado
const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" fill="currentColor"/>
  </svg>
);
import fondoblanco1 from '@/assets/fondoblanco1.jpg';
import fondoblanco2 from '@/assets/fondoblanco2.jpg';
import fondoblanco3 from '@/assets/fondoblanco3.jpg';
import portada2Bg from '@/assets/portada2.webp';
import sobreImg from '/images/sobre.jpg';
import alanImg from '@/assets/alan.jpg';
import felipeImg from '@/assets/felipe.jpg';
import agustinImg from '@/assets/agustin.jpg';
import vicenteImg from '/images/vicente.jpeg';
import gratisImg from '@/assets/gratis.jpeg';

export const QuienesSomos = () => {
  return (
    <>
      <Seo
        seo={getSEOData({
          title: 'Sobre Nosotros | Wings Barber Studio Puerto Varas',
          description:
            'Conoce Wings Barber Studio, la barbería Nº 1 de Puerto Varas. Nuestra historia, misión, visión, valores y equipo profesional de barberos especializados. Experiencia premium en barbería moderna.',
          canonical: 'https://wingsbarberstudio.cl/quienes-somos',
          keywords: 'barbería Puerto Varas, equipo barberos profesionales, historia Wings Barber Studio, barbería premium Los Lagos, mejor barbería sur Chile, barberos especializados Puerto Varas',
        })}
      />
      <Hero title="Sobre Wings Barber Studio" backgroundImage={sobreImg} overlayOpacity="medium" backgroundPosition="center 35%" size="small" />

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Alan Vargas',
                role: 'Fundador & Barber Master',
                description: 'Lidera con su visión de excelencia y atención personalizada.',
                image: alanImg,
                agendaLink: 'https://wingsbarberstudio.site.agendapro.com/cl/sucursal/366908/profesional/414048',
                instagram: 'https://www.instagram.com/wingsbarber?igsh=YnUzdXFqNW93aHVq'
              },
              {
                name: 'Felipe Aguilar',
                role: 'Especialista en Color',
                description: 'Creatividad y precisión en técnicas modernas.',
                image: felipeImg,
                agendaLink: 'https://wingsbarberstudio.site.agendapro.com/cl/sucursal/366908/profesional/705062',
                instagram: 'https://www.instagram.com/felipe.baarber?igsh=c2liOW5zbjUyeGph'
              },
              {
                name: 'Agustín Moreira',
                role: 'Barber & Stylist',
                description: 'Talento para cortes de tendencia y estilo único.',
                image: agustinImg,
                agendaLink: 'https://wingsbarberstudio.site.agendapro.com/cl/sucursal/366908/profesional/705075',
                instagram: 'https://www.instagram.com/moreira.bvrber?igsh=dW93OTNjYmtpYjB4'
              },
              {
                name: 'Vicente',
                role: 'Barber & Stylist',
                description: 'Estilo con identidad y precisión en cada trazo.',
                image: vicenteImg,
                agendaLink: 'https://wingsbarberstudio.site.agendapro.com/cl/sucursal/366908/profesional/705216',
                instagram: 'https://www.instagram.com/vvs_bvrber?igsh=MXN6OTZ5M3Qyd2Rneg%3D%3D'
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
                <p className="font-body text-sm md:text-base text-neon mb-4">{member.role}</p>
                <a
                  href={member.agendaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-neon/20 border-2 border-neon text-neon font-body font-semibold text-sm px-6 py-2 rounded-lg hover:bg-neon hover:text-white transition-all duration-300 mb-3"
                >
                  Agendar con {member.name.split(' ')[0]}
                </a>
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-white/70 hover:text-neon transition-colors text-sm"
                >
                  <InstagramIcon size={18} />
                  <span>{member.instagram.split('.com/')[1].split('?')[0]}</span>
                </a>
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
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="text-neon flex-shrink-0 text-xl">•</span>
                    <p className="font-body text-sm md:text-base text-white">Asesoría de estilo personalizada para tu look</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-neon flex-shrink-0 text-xl">•</span>
                    <p className="font-body text-sm md:text-base text-white">Perfume final para cerrar con broche de oro</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-neon flex-shrink-0 text-xl">•</span>
                    <p className="font-body text-sm md:text-base text-white">Ambiente relajante con música seleccionada</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-neon flex-shrink-0 text-xl">•</span>
                    <p className="font-body text-sm md:text-base text-white">Sillones ergonómicos ultra cómodos</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-neon flex-shrink-0 text-xl">•</span>
                    <p className="font-body text-sm md:text-base text-white">Atención puntual y dedicada solo a ti</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-neon flex-shrink-0 text-xl">•</span>
                    <p className="font-body text-sm md:text-base text-white">Espacio climatizado para tu comodidad</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-neon flex-shrink-0 text-xl">•</span>
                    <p className="font-body text-sm md:text-base text-white">Detalles premium en cada estación de trabajo</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-neon flex-shrink-0 text-xl">•</span>
                    <p className="font-body text-sm md:text-base text-white">Estación de autoservicio: café, té y agua</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-neon flex-shrink-0 text-xl">•</span>
                    <p className="font-body text-sm md:text-base text-white">Experiencia completa en un solo lugar: cabello, barba, piel y estilo</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-neon flex-shrink-0 text-xl">•</span>
                    <p className="font-body text-sm md:text-base text-white">Corte diseñado según tu tipo de rostro y estilo de vida</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-neon flex-shrink-0 text-xl">•</span>
                    <p className="font-body text-sm md:text-base text-white">Peinados y productos aplicados para que salgas listo</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-neon flex-shrink-0 text-xl">•</span>
                    <p className="font-body text-sm md:text-base text-white">Consejos para cuidar tu estilo en casa</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-neon flex-shrink-0 text-xl">•</span>
                    <p className="font-body text-sm md:text-base text-white">Ambiente limpio y desinfectado en cada rotación</p>
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
                <div className="mb-5 overflow-hidden rounded-lg border-2 border-neon/50 flex-shrink-0">
                  <img
                    src={gratisImg}
                    alt="Servicio Gratis"
                    className="w-full h-auto object-cover object-center"
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
                className="bg-black/90 backdrop-blur-sm border-2 border-neon/40 p-8 rounded-lg hover:border-neon transition-all group"
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
            <div className="bg-black/90 backdrop-blur-sm border-2 border-neon/40 p-8 md:p-12 rounded-lg">
              <p className="font-body text-base md:text-lg text-white leading-relaxed mb-6">
                Creemos en el poder de la comunidad. Colaboramos con eventos locales, auspicios y actividades que conectan a Puerto Varas con el estilo, la cultura y el cuidado personal.
              </p>
              <p className="font-script text-2xl md:text-3xl text-neon mb-8">
                Wings es más que una barbería: es un punto de encuentro donde el estilo y la confianza se elevan juntos.
              </p>
              <Link
                to="/alianzas"
                className="inline-flex items-center gap-2 bg-neon/20 border-2 border-neon text-neon font-body font-semibold px-8 py-3 rounded-lg hover:bg-neon hover:text-white transition-all duration-300 shadow-lg hover:shadow-neon"
              >
                Ver nuestras Alianzas
                <ExternalLink size={20} />
              </Link>
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
