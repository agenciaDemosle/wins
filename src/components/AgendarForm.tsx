import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';

const services = [
  'Corte de Cabello',
  'Perfilado & Arreglo de Barba',
  'Limpieza Facial Premium',
  'Revitalización Capilar Premium',
  'Rizos Permanentes',
];

export const AgendarForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    whatsapp: '',
    servicio: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Validar campos
    if (!formData.nombre || !formData.whatsapp || !formData.servicio) {
      alert('Por favor completa todos los campos');
      return;
    }

    // Crear mensaje de WhatsApp
    const mensaje = `Hola! Me gustaría agendar una cita.%0A%0A*Nombre:* ${formData.nombre}%0A*WhatsApp:* ${formData.whatsapp}%0A*Servicio:* ${formData.servicio}`;

    // Número de WhatsApp de Wings Barber Studio
    const numeroWhatsApp = '56959850818';

    // Abrir WhatsApp
    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensaje}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      <div className="bg-black/90 backdrop-blur-sm rounded-lg shadow-lg border-2 border-neon/30 p-8 md:p-10">
        <h2 className="font-heading text-3xl md:text-4xl text-white mb-6 text-center uppercase tracking-wider">
          Agenda tu <span className="font-script text-neon text-4xl md:text-5xl">cita</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Campo Nombre */}
          <div>
            <label htmlFor="nombre" className="block font-body text-white mb-2">
              Tu Nombre *
            </label>
            <input
              type="text"
              id="nombre"
              value={formData.nombre}
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              className="w-full px-4 py-3 bg-black/50 border-2 border-neon/30 rounded-lg text-white font-body focus:outline-none focus:border-neon transition-colors"
              placeholder="Ingresa tu nombre"
              required
            />
          </div>

          {/* Campo WhatsApp */}
          <div>
            <label htmlFor="whatsapp" className="block font-body text-white mb-2">
              Tu WhatsApp *
            </label>
            <input
              type="tel"
              id="whatsapp"
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              className="w-full px-4 py-3 bg-black/50 border-2 border-neon/30 rounded-lg text-white font-body focus:outline-none focus:border-neon transition-colors"
              placeholder="+56 9 5985 0818"
              required
            />
          </div>

          {/* Campo Servicio */}
          <div>
            <label htmlFor="servicio" className="block font-body text-white mb-2">
              ¿Qué servicio quieres agendar? *
            </label>
            <select
              id="servicio"
              value={formData.servicio}
              onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
              className="w-full px-4 py-3 bg-black/50 border-2 border-neon/30 rounded-lg text-white font-body focus:outline-none focus:border-neon transition-colors cursor-pointer"
              required
            >
              <option value="" className="bg-black">Selecciona un servicio</option>
              {services.map((service) => (
                <option key={service} value={service} className="bg-black">
                  {service}
                </option>
              ))}
            </select>
          </div>

          {/* Botón de envío */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-neon hover:bg-neon/90 text-black font-heading text-lg py-4 rounded-lg uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-neon flex items-center justify-center gap-2"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Enviar por WhatsApp
          </motion.button>
        </form>

        <p className="text-white/60 text-sm text-center mt-4">
          * Campos obligatorios
        </p>
      </div>
    </motion.div>
  );
};
