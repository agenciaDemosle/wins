import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Calendar, User, Phone, Scissors } from 'lucide-react';

const services = [
  'Corte de Cabello',
  'Perfilado & Arreglo de Barba',
  'Limpieza Facial Premium',
  'Revitalización Capilar Premium',
  'Rizos Permanentes',
];

interface FormData {
  nombre: string;
  whatsapp: string;
  servicio: string;
}

export const AgendaWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    whatsapp: '',
    servicio: '',
  });

  const totalSteps = 3;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
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

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.nombre.trim() !== '';
      case 2:
        return formData.whatsapp.trim() !== '';
      case 3:
        return formData.servicio !== '';
      default:
        return false;
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Indicador de pasos */}
      <div className="flex items-center justify-center mb-12">
        {[1, 2, 3].map((step, index) => (
          <div key={step} className="flex items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{
                scale: currentStep >= step ? 1 : 0.8,
                opacity: currentStep >= step ? 1 : 0.5,
              }}
              className={`relative flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                currentStep >= step
                  ? 'bg-neon border-neon text-black'
                  : 'bg-black/50 border-white/30 text-white'
              } font-heading text-lg transition-all duration-300`}
            >
              {step === 1 && <User size={20} />}
              {step === 2 && <Phone size={20} />}
              {step === 3 && <Scissors size={20} />}
            </motion.div>
            {index < 2 && (
              <div
                className={`w-16 md:w-24 h-1 mx-2 transition-all duration-300 ${
                  currentStep > step ? 'bg-neon' : 'bg-white/30'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Contenedor del formulario */}
      <div className="bg-black/90 backdrop-blur-sm rounded-lg shadow-lg border-2 border-neon/30 p-8 md:p-10 min-h-[400px] relative overflow-hidden">
        <AnimatePresence mode="wait">
          {/* Paso 1: Nombre */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <h2 className="font-heading text-3xl md:text-4xl text-white mb-3 uppercase tracking-wider">
                  ¿Cómo te <span className="font-script text-neon text-4xl md:text-5xl">llamas</span>?
                </h2>
                <p className="font-body text-white/70 text-sm md:text-base">
                  Paso 1 de 3
                </p>
              </div>

              <div>
                <label htmlFor="nombre" className="block font-body text-white mb-3 text-lg">
                  Tu nombre completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="w-full px-6 py-4 bg-black/50 border-2 border-neon/30 rounded-lg text-white font-body text-lg focus:outline-none focus:border-neon transition-colors"
                  placeholder="Ej: Juan Pérez"
                  autoComplete="name"
                  autoFocus
                />
              </div>
            </motion.div>
          )}

          {/* Paso 2: WhatsApp */}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <h2 className="font-heading text-3xl md:text-4xl text-white mb-3 uppercase tracking-wider">
                  ¿Cuál es tu <span className="font-script text-neon text-4xl md:text-5xl">WhatsApp</span>?
                </h2>
                <p className="font-body text-white/70 text-sm md:text-base">
                  Paso 2 de 3
                </p>
              </div>

              <div>
                <label htmlFor="whatsapp" className="block font-body text-white mb-3 text-lg">
                  Número de WhatsApp
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="w-full px-6 py-4 bg-black/50 border-2 border-neon/30 rounded-lg text-white font-body text-lg focus:outline-none focus:border-neon transition-colors"
                  placeholder="+56 9 5985 0818"
                  autoComplete="tel"
                  autoFocus
                />
              </div>
            </motion.div>
          )}

          {/* Paso 3: Servicio */}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <h2 className="font-heading text-3xl md:text-4xl text-white mb-3 uppercase tracking-wider">
                  ¿Qué servicio <span className="font-script text-neon text-4xl md:text-5xl">quieres</span>?
                </h2>
                <p className="font-body text-white/70 text-sm md:text-base">
                  Paso 3 de 3
                </p>
              </div>

              <div>
                <label htmlFor="servicio" className="block font-body text-white mb-3 text-lg">
                  Selecciona un servicio
                </label>
                <div className="space-y-3">
                  {services.map((service) => (
                    <motion.button
                      key={service}
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setFormData({ ...formData, servicio: service })}
                      className={`w-full px-6 py-4 rounded-lg font-body text-left transition-all duration-300 ${
                        formData.servicio === service
                          ? 'bg-neon text-black border-2 border-neon'
                          : 'bg-black/50 text-white border-2 border-neon/30 hover:border-neon/60'
                      }`}
                    >
                      {service}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Botones de navegación */}
        <div className="flex justify-between items-center mt-12 pt-6 border-t border-white/10">
          <motion.button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 1}
            whileHover={{ scale: currentStep === 1 ? 1 : 1.05 }}
            whileTap={{ scale: currentStep === 1 ? 1 : 0.95 }}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-heading transition-all duration-300 ${
              currentStep === 1
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed opacity-50'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <ChevronLeft size={20} />
            Anterior
          </motion.button>

          {currentStep < totalSteps ? (
            <motion.button
              type="button"
              onClick={nextStep}
              disabled={!canProceed()}
              whileHover={{ scale: canProceed() ? 1.05 : 1 }}
              whileTap={{ scale: canProceed() ? 0.95 : 1 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-heading transition-all duration-300 ${
                canProceed()
                  ? 'bg-neon text-black hover:bg-neon/90 shadow-lg hover:shadow-neon'
                  : 'bg-gray-700 text-gray-500 cursor-not-allowed opacity-50'
              }`}
            >
              Siguiente
              <ChevronRight size={20} />
            </motion.button>
          ) : (
            <motion.button
              type="button"
              onClick={handleSubmit}
              disabled={!canProceed()}
              whileHover={{ scale: canProceed() ? 1.05 : 1 }}
              whileTap={{ scale: canProceed() ? 0.95 : 1 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-heading transition-all duration-300 ${
                canProceed()
                  ? 'bg-neon text-black hover:bg-neon/90 shadow-lg hover:shadow-neon'
                  : 'bg-gray-700 text-gray-500 cursor-not-allowed opacity-50'
              }`}
            >
              <Calendar size={20} />
              Agendar por WhatsApp
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
};
