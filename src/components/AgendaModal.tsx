import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { AgendaWizard } from './AgendaWizard';

interface AgendaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AgendaModal = ({ isOpen, onClose }: AgendaModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, type: 'spring', damping: 20 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-4xl my-8">
              {/* Botón cerrar */}
              <button
                onClick={onClose}
                className="absolute -top-4 -right-4 z-10 w-12 h-12 bg-neon rounded-full flex items-center justify-center text-black hover:bg-neon/90 transition-all hover:rotate-90 duration-300 shadow-lg"
                aria-label="Cerrar modal"
              >
                <X size={24} strokeWidth={3} />
              </button>

              {/* Contenido del modal */}
              <div className="bg-black/95 backdrop-blur-sm rounded-lg border-4 border-neon/50 p-6 md:p-8 lg:p-10">
                <div className="text-center mb-8">
                  <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-4">
                    Agenda tu cita en <span className="font-script text-neon text-4xl md:text-5xl lg:text-6xl">Wings</span>
                  </h2>
                  <p className="font-body text-base md:text-lg text-white/80">
                    Reserva tu hora en solo 3 simples pasos. Te contactaremos por WhatsApp para confirmar tu cita.
                  </p>
                </div>
                <AgendaWizard />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
