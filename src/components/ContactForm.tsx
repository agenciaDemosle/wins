import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, ContactFormData } from '@/lib/validation';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const servicios = [
  'Corte de Cabello',
  'Perfilado & Arreglo de Barba',
  'Limpieza Facial Premium',
  'Revitalización Capilar Premium',
  'Rizos Permanentes',
  'Tinturas y Visos',
];

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulación de envío (reemplazar con API real)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Formulario enviado:', data);
      toast.success('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.', {
        duration: 5000,
      });
      reset();
    } catch (error) {
      console.error(error);
      toast.error('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 md:p-10 rounded-lg shadow-lg border border-neutral-light/20 max-w-2xl mx-auto"
    >
      {/* Nombre */}
      <div className="mb-5">
        <label htmlFor="nombre" className="block font-body font-semibold text-neutral-dark mb-2">
          Nombre y Apellido <span className="text-neon">*</span>
        </label>
        <input
          {...register('nombre')}
          type="text"
          id="nombre"
          className="w-full px-4 py-3 border border-neutral-light/40 rounded focus:outline-none focus:ring-2 focus:ring-neon transition-all"
          placeholder="Ej: Juan Pérez"
        />
        {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre.message}</p>}
      </div>

      {/* Correo */}
      <div className="mb-5">
        <label htmlFor="correo" className="block font-body font-semibold text-neutral-dark mb-2">
          Correo Electrónico <span className="text-neon">*</span>
        </label>
        <input
          {...register('correo')}
          type="email"
          id="correo"
          className="w-full px-4 py-3 border border-neutral-light/40 rounded focus:outline-none focus:ring-2 focus:ring-neon transition-all"
          placeholder="correo@ejemplo.com"
        />
        {errors.correo && <p className="text-red-500 text-sm mt-1">{errors.correo.message}</p>}
      </div>

      {/* Teléfono */}
      <div className="mb-5">
        <label htmlFor="telefono" className="block font-body font-semibold text-neutral-dark mb-2">
          Teléfono (opcional)
        </label>
        <input
          {...register('telefono')}
          type="tel"
          id="telefono"
          className="w-full px-4 py-3 border border-neutral-light/40 rounded focus:outline-none focus:ring-2 focus:ring-neon transition-all"
          placeholder="+56 9 5985 0818"
        />
        {errors.telefono && <p className="text-red-500 text-sm mt-1">{errors.telefono.message}</p>}
      </div>

      {/* Servicio */}
      <div className="mb-5">
        <label htmlFor="servicio" className="block font-body font-semibold text-neutral-dark mb-2">
          Servicio de Interés (opcional)
        </label>
        <select
          {...register('servicio')}
          id="servicio"
          className="w-full px-4 py-3 border border-neutral-light/40 rounded focus:outline-none focus:ring-2 focus:ring-neon transition-all bg-white"
        >
          <option value="">-- Selecciona un servicio --</option>
          {servicios.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Mensaje */}
      <div className="mb-6">
        <label htmlFor="mensaje" className="block font-body font-semibold text-neutral-dark mb-2">
          Mensaje <span className="text-neon">*</span>
        </label>
        <textarea
          {...register('mensaje')}
          id="mensaje"
          rows={5}
          className="w-full px-4 py-3 border border-neutral-light/40 rounded focus:outline-none focus:ring-2 focus:ring-neon transition-all resize-none"
          placeholder="Escribe tu mensaje aquí..."
        />
        {errors.mensaje && <p className="text-red-500 text-sm mt-1">{errors.mensaje.message}</p>}
      </div>

      {/* Botón */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-neon text-white font-body font-semibold py-3 rounded hover:bg-neon-dark transition-all duration-300 shadow-neon hover:shadow-neon-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
      >
        {isSubmitting ? (
          <span>Enviando...</span>
        ) : (
          <>
            <Send size={20} />
            <span>Enviar Mensaje</span>
          </>
        )}
      </button>
    </motion.form>
  );
};
