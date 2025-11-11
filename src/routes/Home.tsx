import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { CTAButtons } from '@/components/CTAButtons';
import { ServiceCard } from '@/components/ServiceCard';
import { Seo } from '@/components/Seo';
import { getSEOData } from '@/lib/seo';
import { motion } from 'framer-motion';
import { Coffee, Gamepad2, Sparkles, Scissors, MapPin, Phone, MessageCircle, Clock, Feather, Star, Quote } from 'lucide-react';
import alanImg from '@/assets/alan.jpg';

const AGENDAPRO_URL = 'https://wingsbarberstudio.site.agendapro.com/cl/sucursal/366908';
import felipeImg from '@/assets/felipe.jpg';
import agustinImg from '@/assets/agustin.jpg';
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
import portadaBg from '@/assets/portada.webp';
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
  },
  {
    numberIcon: num2,
    title: 'Perfilado & Arreglo de Barba',
    description: 'Barba impecable, contornos definidos y un toque de estilo incomparable.',
    image: perfiladoImg,
  },
  {
    numberIcon: num3,
    title: 'Limpieza Facial Premium',
    description: 'Revive tu piel con una limpieza facial profunda y sensación de frescura total.',
    image: limpiezaImg,
  },
  {
    numberIcon: num4,
    title: 'Revitalización Capilar Premium',
    description: 'Tratamiento capilar que hidrata, fortalece y estimula el crecimiento natural.',
    image: revitalizacionImg,
  },
  {
    numberIcon: num5,
    title: 'Rizos Permanentes',
    description: 'Da volumen, forma y estilo con nuestros rizos permanentes personalizados.',
    image: rizosImg,
  },
  {
    numberIcon: num5,
    title: 'Tinturas y Visos',
    description: 'Transforma tu look con tinturas y visos personalizados, desde tonos naturales hasta colores vibrantes.',
    image: visosImg,
  },
];

const team = [
  { name: 'Alan Vargas', role: 'Fundador & Barber Master', image: alanImg },
  { name: 'Felipe Aguilar', role: 'Barber & Colorista', image: felipeImg },
  { name: 'Agustín Moreira', role: 'Barber & Stylist', image: agustinImg },
];

const stats = [
  { value: '778', label: 'Clientes' },
  { value: '1540', label: 'Servicios Realizados' },
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
                  className="w-full h-full object-cover"
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

        {/* Scroll horizontal para todos los dispositivos */}
        <div className="overflow-x-auto pb-4 -mx-4 px-4 md:-mx-6 md:px-6 lg:-mx-8 lg:px-8 scrollbar-hide">
          <div className="flex gap-6" style={{ width: 'max-content' }}>
            {services.map((service, index) => (
              <div key={service.title} className="w-[280px] md:w-[320px] lg:w-[360px] flex-shrink-0">
                <ServiceCard {...service} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="text-center mt-8 text-white/60 text-sm">
          ← Desliza para ver más servicios →
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
                    Tu experiencia termina como debe ser: con el cabello limpio, perfumado y un toque de confianza extra.
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
