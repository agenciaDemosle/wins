import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { CTAButtons } from '@/components/CTAButtons';
import { ServiceCard } from '@/components/ServiceCard';
import { Seo } from '@/components/Seo';
import { getSEOData } from '@/lib/seo';
import { motion } from 'framer-motion';
import { Coffee, Gamepad2, Sparkles, Scissors, MapPin, Phone, MessageCircle, Clock, Feather, Star, Quote } from 'lucide-react';
import alanImg from '@/assets/alan.jpg';

// Componente de ícono Instagram personalizado
const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" fill="currentColor"/>
  </svg>
);

const AGENDAPRO_URL = 'https://wingsbarberstudio.site.agendapro.com/cl/sucursal/366908';
import felipeImg from '@/assets/felipe.jpg';
import agustinImg from '@/assets/agustin.jpg';
import vicenteImg from '/images/vicente.jpeg';
import fondo1 from '@/assets/fondo.jpg';
import fondo2 from '@/assets/fondo2.jpg';
import fondo3 from '@/assets/fondo3.jpg';
import fondoblanco1 from '@/assets/fondoblanco1.jpg';
import fondoblanco2 from '@/assets/fondoblanco2.jpg';
import fondoblanco3 from '@/assets/fondoblanco3.jpg';
import fondoblanco4 from '@/assets/fondoblanco4.jpg';
import num1 from '@/assets/1.png';
import num2 from '@/assets/2.png';
import num3 from '@/assets/3.png';
import num4 from '@/assets/4.png';
import num5 from '@/assets/5.png';
import portadaBg from '/images/hero1.jpeg';
import somoswingsBg from '@/assets/somoswings2.jpg';
import corteImg from '@/assets/corte.jpg';
import perfiladoImg from '@/assets/perfilado.jpg';
import limpiezaImg from '@/assets/limpieza.jpg';
import revitalizacionImg from '@/assets/revitalizacion.jpeg';
import rizosImg from '@/assets/rizos.jpeg';
import visosImg from '@/assets/vizos.jpeg';
import gratisImg from '@/assets/gratis.jpeg';

const services = [
  {
    numberIcon: num1,
    title: 'Corte de Cabello',
    description: 'Corte de cabello con asesoría personalizada y un acabado limpio y elegante.',
    image: corteImg,
    price: '$12.990',
  },
  {
    numberIcon: num2,
    title: 'Perfilado & Arreglo de Barba',
    description: 'Barba impecable, contornos definidos y un toque de estilo incomparable.',
    image: perfiladoImg,
    price: '$11.990',
  },
  {
    numberIcon: num3,
    title: 'Limpieza Facial Premium',
    description: 'Revive tu piel con una limpieza facial profunda y sensación de frescura total.',
    image: limpiezaImg,
    price: '$11.990',
  },
  {
    numberIcon: num4,
    title: 'Revitalización Capilar Premium',
    description: 'Tratamiento capilar que hidrata, fortalece y estimula el crecimiento natural.',
    image: revitalizacionImg,
    price: '$11.990',
  },
  {
    numberIcon: num5,
    title: 'Rizos Permanentes',
    description: 'Da volumen, forma y estilo con nuestros rizos permanentes personalizados.',
    image: rizosImg,
    price: '$64.990',
  },
  {
    numberIcon: num5,
    title: 'Tinturas y Visos',
    description: 'Transforma tu look con tinturas y visos personalizados, desde tonos naturales hasta colores vibrantes.',
    image: visosImg,
    price: '$64.990',
  },
];

const team = [
  { name: 'Alan Vargas', role: 'Fundador & Barber Master', image: alanImg, agendaUrl: 'https://wingsbarberstudio.site.agendapro.com/cl/sucursal/366908/profesional/414048', instagram: 'https://www.instagram.com/wingsbarber?igsh=YnUzdXFqNW93aHVq' },
  { name: 'Felipe Aguilar', role: 'Barber & Colorista', image: felipeImg, agendaUrl: 'https://wingsbarberstudio.site.agendapro.com/cl/sucursal/366908/profesional/705062', instagram: 'https://www.instagram.com/felipe.baarber?igsh=c2liOW5zbjUyeGph' },
  { name: 'Agustín Moreira', role: 'Barber & Stylist', image: agustinImg, agendaUrl: 'https://wingsbarberstudio.site.agendapro.com/cl/sucursal/366908/profesional/705075', instagram: 'https://www.instagram.com/moreira.bvrber?igsh=dW93OTNjYmtpYjB4' },
  { name: 'Vicente', role: 'Barber & Stylist', image: vicenteImg, agendaUrl: 'https://wingsbarberstudio.site.agendapro.com/cl/sucursal/366908/profesional/705216', instagram: 'https://www.instagram.com/vvs_bvrber?igsh=MXN6OTZ5M3Qyd2Rneg==' },
];

const stats = [
  { value: '917', label: 'Clientes' },
  { value: '1852', label: 'Servicios Realizados' },
];

const reviews = [
  {
    name: 'Jordán Rojas Reuter',
    time: 'Hace 3 meses',
    text: 'Excelente servicio! Atento, personalizado y muy profesional. La atención 10/10, recomendadísimo',
    response: '¡Tus palabras nos llenan de energía positiva! ✨',
  },
  {
    name: 'Agustin Riquero Gallardo',
    time: 'Hace un mes',
    text: 'Excelente servicio, personal capacitado y servicial',
    response: '¡Muchas gracias por tu valoración! ✂️💈 Nos alegra saber que tu experiencia fue excelente. ¡Te esperamos pronto en Wings Barber Studio para seguir cuidando tu estilo! 🔥',
  },
  {
    name: 'Santiago Jesús Porma H',
    time: 'Hace un mes',
    text: 'La mejor barbería de Puerto Varas sin duda. El servicio desde que llegas es 10/10 y se recomienda para cualquier edad.',
    response: 'Tu confianza vale oro! Gracias por tus 5 estrellas en Wings Barber Studio Puerto Varas',
  },
  {
    name: 'Cristian Aguilar Delgado',
    time: 'Hace un mes',
    text: 'Una atención increíble, un lugar limpio todo muy bien dispuesto, así que genial , totalmente recomendado',
    response: '¡Muchas gracias por tu valoración! ✂️💈 Nos alegra saber que tu experiencia fue excelente. ¡Te esperamos pronto en Wings Barber Studio para seguir cuidando tu estilo! 🔥',
  },
  {
    name: 'Joaquin Sánchez',
    time: '3 semanas atrás',
    text: 'Excelente atención y ambiente, recomendado 100% kbros',
    response: '⭐️ ¡Muchas gracias por tus 5 estrellas! Nos alegra saber que disfrutaste tu experiencia en Wings Barber Studio. ¡Te esperamos pronto para seguir cuidando tu estilo!',
  },
  {
    name: 'Eduardo Torres',
    time: '2 semanas atrás',
    text: 'Muy buena la atención, acogedor ambiente y bien detallado!',
    response: '⭐️ ¡Muchas gracias por tus 5 estrellas! Nos alegra saber que disfrutaste tu experiencia en Wings Barber Studio. ¡Te esperamos pronto para seguir cuidando tu estilo!',
  },
  {
    name: 'Felipe Zerpa',
    time: 'Hace 4 meses',
    text: 'Muy buen servicio, lo mejor de puerto varas 🔥🔥',
    response: '¡Gracias por elegirnos siempre!',
  },
  {
    name: 'Matias Catalan',
    time: '2 semanas atrás',
    text: 'Cortan muy bien y espectacular, y los barberos te tratan entero bien y bacán Fixa el wings barber',
    response: 'Nos alegra saber que disfrutaste la experiencia en Wings Barber Studio. ¡Te esperamos pronto para seguir cuidando tu estilo como mereces! 💈✂️',
  },
  {
    name: 'Franco Castro',
    time: 'Hace un mes',
    text: 'Muy buena experiencia, atentos, amables y muy buena onda, recomendado 100%',
    response: 'Nos alegra saber que disfrutaste la experiencia en Wings Barber Studio. ¡Te esperamos pronto para seguir cuidando tu estilo como mereces! 💈✂️',
  },
  {
    name: 'Felipe Iniguez',
    time: 'Hace 4 meses',
    text: 'Muy buen servicio, los chicos muy amable, y tiene estacionamiento q me pareció buenisimo, el servicio bien personalizado igual.',
    response: '¡Gracias por tus 5 estrellas! 🌟',
  },
  {
    name: 'Maximo Rocha',
    time: 'Una semana atrás',
    text: 'Muy buena experiencia cortan de pana y la experiencia es muy buena el ambiente perfecto',
    response: '¡Muchas gracias por tu reseña, Maximo! 💈✨ Nos alegra saber que disfrutaste tu experiencia en Wings Barber Studio. Cada detalle está pensado para que te sientas cómodo, escuchado y con el mejor estilo posible. ¡Te esperamos pronto para seguir cuidando tu look! 😎🪽',
  },
  {
    name: 'Gax0511',
    time: '2 semanas atrás',
    text: 'Muy buen servicio,la comodidad 10/10',
    response: 'Nos alegra saber que disfrutaste la experiencia en Wings Barber Studio. ¡Te esperamos pronto para seguir cuidando tu estilo como mereces! 💈✂️',
  },
];

export const Home = () => {
  return (
    <>
      <Seo seo={getSEOData()} />
      <Hero
        title="BIENVENIDOS A LA BARBERÍA Nº1 DE PUERTO VARAS"
        subtitle="En Wings Barber Studio creemos que un corte va más allá de la apariencia: es una experiencia de estilo, cuidado y confianza."
        backgroundImage={portadaBg}
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={AGENDAPRO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-neon text-white font-body font-semibold rounded hover:bg-neon-dark transition-all duration-300 shadow-neon hover:shadow-neon-lg text-center"
          >
            Reservar hora
          </a>
          <a
            href="/servicios"
            className="inline-block px-8 py-3 bg-black border-2 border-neon text-neon font-body font-semibold rounded hover:bg-neon hover:text-white transition-all duration-300 text-center"
          >
            Ver servicios
          </a>
        </div>
      </Hero>

      {/* Sobre Wings */}
      <Section background="black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Imagen */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative border-4 border-neon/50 rounded-lg overflow-hidden shadow-neon">
                <img
                  src={somoswingsBg}
                  alt="Wings Barber Studio Team"
                  className="w-full h-[400px] md:h-[500px] object-cover object-center"
                />
              </div>
            </motion.div>

            {/* Contenido */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-6">
                Sobre <span className="font-script text-neon text-4xl md:text-5xl lg:text-6xl">Wings</span>
              </h2>
              <div className="space-y-4 font-body text-base md:text-lg leading-relaxed text-white">
                <p>
                  Nacimos en Puerto Varas con el propósito de elevar la barbería, combinando técnica profesional, ambiente premium y atención cercana.
                </p>
                <p>
                  Cada detalle está pensado para que disfrutes —desde un café o té de bienvenida hasta una asesoría personalizada que resalta tu mejor versión.
                </p>
                <p className="font-semibold text-neon text-xl md:text-2xl font-script border-t border-neon/30 pt-6 flex items-center gap-3">
                  <Scissors className="text-neon" size={28} />
                  En Wings, tu estilo comienza aquí… y se eleva contigo.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Servicios destacados */}
      <Section background="black" backgroundImage={fondo1}>
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Nuestros <span className="font-script text-neon text-4xl md:text-5xl lg:text-6xl">Servicios</span>
          </h2>
          <p className="font-body text-base md:text-lg text-white max-w-2xl mx-auto">
            Soluciones completas para tu estilo: cabello, barba, piel y más.
          </p>
        </div>

        {/* Grilla de servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <CTAButtons secondary={{ label: 'Ver todos los servicios', to: '/servicios' }} />
        </div>
      </Section>

      {/* Experiencia Wings */}
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
                    Tu experiencia termina como debe ser: con el cabello limpio, perfumado y un toque de confianza extra.
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

      {/* Nuestro Equipo */}
      <Section background="black" backgroundImage={fondo2} id="equipo">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-4">
              Nuestro <span className="font-script text-neon text-4xl md:text-5xl lg:text-6xl">Equipo</span>
            </h2>
            <p className="font-body text-base md:text-lg text-white max-w-2xl mx-auto">
              Los maestros detrás de cada corte perfecto
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
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
                  className="w-full h-72 md:h-80 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-heading text-xl md:text-2xl text-white mb-2 group-hover:text-neon transition-colors">
                {member.name}
              </h3>
              <p className="font-body text-sm md:text-base text-neon mb-4">{member.role}</p>
              <a
                href={member.agendaUrl}
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
                <span>@{member.instagram.split('.com/')[1].split('?')[0]}</span>
              </a>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Estadísticas */}
      <Section background="black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-4">
              Números que <span className="font-script text-neon text-4xl md:text-5xl lg:text-6xl">hablan</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-light/30 backdrop-blur-sm border-2 border-neon/40 p-8 md:p-10 rounded-lg hover:border-neon transition-all group"
              >
                <div className="font-heading text-5xl md:text-6xl text-neon mb-4 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="font-body text-lg md:text-xl text-white">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Reseñas de Clientes */}
      <Section background="black" backgroundImage={fondo3} id="resenas">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-4">
              Lo que dicen nuestros <span className="font-script text-neon text-4xl md:text-5xl lg:text-6xl">clientes</span>
            </h2>
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} className="text-neon fill-neon" />
                ))}
              </div>
              <span className="font-body text-lg md:text-xl text-white font-semibold">
                5.0 • Más de 165 opiniones
              </span>
            </div>
            <p className="font-body text-base md:text-lg text-white">
              Reseñas reales de clientes satisfechos
            </p>
          </motion.div>

          {/* Scroll horizontal para reseñas */}
          <div className="overflow-x-auto pb-4 -mx-4 px-4 md:-mx-6 md:px-6 lg:-mx-8 lg:px-8 scrollbar-hide">
            <div className="flex gap-6" style={{ width: 'max-content' }}>
              {reviews.map((review, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-[320px] md:w-[380px] flex-shrink-0 bg-black/90 backdrop-blur-sm border-2 border-neon/20 p-6 rounded-lg hover:border-neon/60 transition-all"
                >
                  {/* Estrellas */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="text-neon fill-neon" />
                    ))}
                  </div>

                  {/* Reseña */}
                  <div className="mb-4">
                    <Quote className="text-neon/40 mb-2" size={24} />
                    <p className="font-body text-sm md:text-base text-white leading-relaxed">
                      {review.text}
                    </p>
                  </div>

                  {/* Nombre y tiempo */}
                  <div className="mb-4 pb-4 border-b border-neon/20">
                    <p className="font-heading text-base text-neon font-semibold">{review.name}</p>
                    <p className="font-body text-xs text-white/60">{review.time}</p>
                  </div>

                  {/* Respuesta del propietario */}
                  <div className="bg-neon/10 border-l-2 border-neon p-3 rounded">
                    <p className="font-body text-xs text-white/80 mb-1 font-semibold">Wings Barber Studio</p>
                    <p className="font-body text-xs text-white/90 leading-relaxed">{review.response}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Indicador de scroll */}
          <div className="text-center mt-8 text-white/60 text-sm">
            ← Desliza para ver más reseñas →
          </div>

          {/* Botón ver más reseñas */}
          <div className="text-center mt-8">
            <a
              href="https://share.google/oJWguMHm7aaqkedvi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-neon/20 border-2 border-neon text-neon font-body font-semibold px-8 py-3 rounded-lg hover:bg-neon hover:text-white transition-all duration-300 shadow-lg hover:shadow-neon"
            >
              Ver más reseñas en Google
            </a>
          </div>
        </div>
      </Section>

      {/* Información de Contacto */}
      <Section background="black" id="contacto">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-4">
              Información de <span className="font-script text-neon text-4xl md:text-5xl lg:text-6xl">Contacto</span>
            </h2>
            <p className="font-body text-base md:text-lg text-white">
              Visítanos o comunícate con nosotros
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Dirección */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-light/30 backdrop-blur-sm border-2 border-neon/40 p-6 rounded-lg hover:border-neon transition-all group"
            >
              <a
                href="https://maps.google.com/?q=Dr+Giessler+694,+Puerto+Varas,+Los+Lagos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-neon/20 border-2 border-neon rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="text-neon" size={32} />
                </div>
                <h3 className="font-heading text-xl text-white mb-3">Dirección</h3>
                <p className="font-body text-base text-white group-hover:text-neon transition-colors">
                  Dr Giessler #694<br />Puerto Varas, Los Lagos
                </p>
              </a>
            </motion.div>

            {/* WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-light/30 backdrop-blur-sm border-2 border-neon/40 p-6 rounded-lg hover:border-neon transition-all group"
            >
              <a
                href="https://wa.me/56959850818?text=Hola%20Wings%20Barber%20Studio,%20quisiera%20agendar%20una%20hora"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-neon/20 border-2 border-neon rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MessageCircle className="text-neon" size={32} />
                </div>
                <h3 className="font-heading text-xl text-white mb-3">WhatsApp</h3>
                <p className="font-body text-base text-neon group-hover:text-white transition-colors">
                  +56 9 5985 0818
                </p>
              </a>
            </motion.div>

            {/* Horario */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-light/30 backdrop-blur-sm border-2 border-neon/40 p-6 rounded-lg hover:border-neon transition-all group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-neon/20 border-2 border-neon rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="text-neon" size={32} />
                </div>
                <h3 className="font-heading text-xl text-white mb-3">Horario</h3>
                <p className="font-body text-base text-white">
                  Lunes a sábado<br />de 11:00 a 20:00
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* CTA Final */}
      <Section background="black">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-medium/50 backdrop-blur-sm border-4 border-neon/50 p-12 md:p-16 rounded-lg"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              ¿Listo para tu próxima <span className="font-script text-neon text-4xl md:text-5xl lg:text-6xl">transformación</span>?
            </h2>
            <p className="font-body text-base md:text-lg text-white leading-relaxed mb-10">
              Agenda tu hora y vive la experiencia Wings Barber Studio en Puerto Varas.
            </p>
            <div className="inline-block">
              <a
                href={AGENDAPRO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-neon text-white font-heading text-lg md:text-xl px-8 md:px-12 py-4 md:py-5 rounded-lg hover:bg-neon/90 transition-all hover:scale-105 shadow-lg uppercase tracking-wider border-2 border-black"
              >
                Reservar Ahora
              </a>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
};
