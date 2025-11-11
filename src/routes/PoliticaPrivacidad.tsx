import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { Seo } from '@/components/Seo';
import { getSEOData } from '@/lib/seo';
import fondoImg from '@/assets/fondo.jpg';

export const PoliticaPrivacidad = () => {
  return (
    <>
      <Seo
        seo={getSEOData({
          title: 'Wings Barber Studio — Políticas de reservas y privacidad',
          description:
            'Revisa nuestras políticas de reservas, cancelaciones y tratamiento de datos personales en Wings Barber Studio.',
          canonical: 'https://wingsbarberstudio.cl/politica-privacidad',
        })}
      />
      <Hero title="Políticas de Reservas y Privacidad" />

      <Section background="black" backgroundImage={fondoImg}>
        <div className="max-w-4xl mx-auto space-y-8 font-body text-base md:text-lg leading-relaxed text-white">
          {/* Reservas */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-white mb-4">
              1. <span className="text-neon">Reservas</span>
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Las reservas se pueden realizar a través de nuestro formulario de contacto, redes sociales o directamente en el local.
              </li>
              <li>
                Recomendamos agendar con anticipación para asegurar disponibilidad, especialmente en horarios de alta demanda.
              </li>
              <li>
                Al confirmar tu reserva, recibirás un mensaje de confirmación con los detalles de tu cita.
              </li>
            </ul>
          </div>

          {/* Cancelaciones */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-white mb-4">
              2. <span className="text-neon">Cancelaciones</span>
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Si necesitas cancelar o reprogramar tu cita, te pedimos que nos avises con al menos <strong>2 horas de anticipación</strong>.
              </li>
              <li>
                Las cancelaciones de último momento o inasistencias sin aviso pueden afectar la disponibilidad de otros clientes.
              </li>
              <li>
                En caso de reincidencia, nos reservamos el derecho de solicitar confirmación adicional para futuras reservas.
              </li>
            </ul>
          </div>

          {/* Llegadas tarde */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-white mb-4">
              3. <span className="text-neon">Llegadas Tarde</span>
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Si llegas tarde a tu cita, haremos lo posible por atenderte, pero el tiempo de servicio puede reducirse para no afectar a otros clientes.
              </li>
              <li>
                En caso de retrasos significativos (más de 15 minutos), podremos reprogramar tu cita según disponibilidad.
              </li>
            </ul>
          </div>

          {/* Privacidad y Datos */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-white mb-4">
              4. <span className="text-neon">Tratamiento de Datos Personales</span>
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                En Wings Barber Studio respetamos tu privacidad. Los datos que nos proporcionas (nombre, correo, teléfono) se utilizan exclusivamente para gestionar tu reserva y contacto.
              </li>
              <li>
                No compartimos, vendemos ni cedemos tu información a terceros sin tu consentimiento explícito.
              </li>
              <li>
                Tus datos se almacenan de forma segura y puedes solicitar su eliminación en cualquier momento contactándonos a{' '}
                <a href="mailto:contacto@wingsbarberstudio.cl" className="text-neon hover:underline">
                  contacto@wingsbarberstudio.cl
                </a>
                .
              </li>
              <li>
                Al completar el formulario de contacto, aceptas que utilicemos tu información para los fines descritos.
              </li>
            </ul>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-white mb-4">
              5. <span className="text-neon">Cookies</span>
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Nuestro sitio web puede utilizar cookies para mejorar la experiencia de navegación y analizar el tráfico.
              </li>
              <li>
                Puedes desactivar las cookies desde la configuración de tu navegador, aunque esto puede afectar algunas funcionalidades del sitio.
              </li>
            </ul>
          </div>

          {/* Cambios en las políticas */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-white mb-4">
              6. <span className="text-neon">Cambios en las Políticas</span>
            </h2>
            <p>
              Wings Barber Studio se reserva el derecho de modificar estas políticas en cualquier momento. Las actualizaciones se publicarán en esta página y entrarán en vigor inmediatamente.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-white mb-4">
              7. <span className="text-neon">Contacto</span>
            </h2>
            <p>
              Si tienes dudas o consultas sobre nuestras políticas, puedes contactarnos a través de:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>
                Email:{' '}
                <a href="mailto:contacto@wingsbarberstudio.cl" className="text-neon hover:underline">
                  contacto@wingsbarberstudio.cl
                </a>
              </li>
              <li>Dirección: Dr Giessler #694, Puerto Varas, Los Lagos</li>
              <li>Horarios: Lunes a sábado de 11:00 a 20:00</li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
};
