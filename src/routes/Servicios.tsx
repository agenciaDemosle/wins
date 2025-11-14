import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { ServiceCard } from '@/components/ServiceCard';
import { Seo } from '@/components/Seo';
import { getSEOData } from '@/lib/seo';
import num1 from '@/assets/1.png';

const AGENDAPRO_URL = 'https://wingsbarberstudio.site.agendapro.com/cl/sucursal/366908';
import num2 from '@/assets/2.png';
import num3 from '@/assets/3.png';
import num4 from '@/assets/4.png';
import num5 from '@/assets/5.png';
import corteImg from '@/assets/corte.jpg';
import perfiladoImg from '@/assets/perfilado.jpg';
import limpiezaImg from '@/assets/limpieza.jpg';
import revitalizacionImg from '@/assets/revitalizacion.jpeg';
import rizosImg from '@/assets/rizos.jpeg';
import visosImg from '@/assets/vizos.jpeg';
import fondoImg from '@/assets/fondo.jpg';
import serviciosHeroImg from '/images/servicios.jpg';

const services = [
  {
    numberIcon: num1,
    title: 'Corte de Cabello',
    description:
      'Corte de cabello con asesoría personalizada y un acabado limpio y elegante. Nuestro equipo analiza tu estilo, tipo de cabello y preferencias para entregarte un resultado impecable que refleje tu personalidad.',
    image: corteImg,
    price: '$12.990',
  },
  {
    numberIcon: num2,
    title: 'Perfilado & Arreglo de Barba',
    description:
      'Barba impecable, contornos definidos y un toque de estilo incomparable. Desde un perfilado básico hasta un arreglo completo con diseño personalizado, cuidamos cada detalle para resaltar tu mejor versión.',
    image: perfiladoImg,
    price: '$11.990',
  },
  {
    numberIcon: num3,
    title: 'Limpieza Facial Premium',
    description:
      'Revive tu piel con una limpieza facial profunda y sensación de frescura total. Utilizamos productos profesionales que eliminan impurezas, hidratan y revitalizan tu rostro, dejándote con una piel sana y radiante.',
    image: limpiezaImg,
    price: '$11.990',
  },
  {
    numberIcon: num4,
    title: 'Revitalización Capilar Premium',
    description:
      'Tratamiento capilar que hidrata, fortalece y estimula el crecimiento natural. Ideal para cabello maltratado, seco o con pérdida de vitalidad. Recupera la salud de tu cabello con ingredientes de alta calidad.',
    image: revitalizacionImg,
    price: '$11.990',
  },
  {
    numberIcon: num5,
    title: 'Rizos Permanentes',
    description:
      'Da volumen, forma y estilo con nuestros rizos permanentes personalizados. Asesoramos sobre el tipo de rizo ideal para tu estilo y estructura capilar, logrando un look natural y con movimiento.',
    image: rizosImg,
    price: '$64.990',
  },
  {
    numberIcon: num5,
    title: 'Tinturas y Visos',
    description:
      'Transforma tu look con tinturas y visos personalizados. Desde tonos naturales y discretos hasta colores vibrantes y atrevidos, nuestro equipo experto te asesora para lograr el color perfecto que realce tu estilo y personalidad.',
    image: visosImg,
    price: '$64.990',
  },
];

export const Servicios = () => {
  return (
    <>
      <Seo
        seo={getSEOData({
          title: 'Servicios de Barbería en Puerto Varas | Wings Barber Studio',
          description:
            'Servicios profesionales de barbería: cortes de cabello modernos, perfilado y arreglo de barba, limpieza facial premium, revitalización capilar, rizos permanentes y tinturas. Agenda tu cita online.',
          canonical: 'https://wingsbarberstudio.cl/servicios',
          keywords: 'servicios barbería Puerto Varas, corte cabello hombre, arreglo barba profesional, limpieza facial masculina, tratamiento capilar hombre, rizos permanentes, tinturas hombre, servicios peluquería masculina',
        })}
      />
      <Hero
        title="Servicios Wings Barber Studio"
        subtitle="Soluciones completas para tu estilo: cabello, barba, piel y más."
        backgroundImage={serviciosHeroImg}
        overlayOpacity="medium"
        backgroundPosition="center"
        size="small"
      />

      <Section background="black" backgroundImage={fondoImg}>
        {/* Grilla de servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </Section>

      <Section background="black" backgroundImage={fondoImg}>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            ¿Listo para tu transformación en <span className="font-script text-neon text-4xl md:text-5xl lg:text-6xl">Wings</span>?
          </h2>
          <p className="font-body text-base md:text-lg text-white mb-8">
            Agenda tu cita ahora y descubre por qué somos la barbería Nº 1 en Puerto Varas.
          </p>
          <div className="flex justify-center">
            <a
              href={AGENDAPRO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-neon text-white font-body font-semibold rounded hover:bg-neon-dark transition-all duration-300 shadow-neon hover:shadow-neon-lg text-center"
            >
              Agendar Cita
            </a>
          </div>
        </div>
      </Section>
    </>
  );
};
