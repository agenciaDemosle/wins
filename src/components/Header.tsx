import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Users, Scissors, Calendar, MessageCircle, Instagram, Facebook, Music2, Star, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUIStore } from '@/store/uiStore';
import logoImg from '@/assets/logo2.jpeg';
import fondoImg from '@/assets/fondo.jpg';

const AGENDAPRO_URL = 'https://wingsbarberstudio.site.agendapro.com/cl/sucursal/366908';
const WHATSAPP_NUMBER = '+56959850818';

const navLinks = [
  { to: '/', label: 'Inicio', icon: Home, type: 'link' },
  { to: '/servicios', label: 'Servicios', icon: Scissors, type: 'link' },
  { to: '/quienes-somos', label: 'Quiénes Somos', icon: Users, type: 'link' },
  { to: '/alianzas', label: 'Alianzas', icon: Users, type: 'link' },
];

export const Header = () => {
  const location = useLocation();
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUIStore();

  const handleNavClick = (to: string) => {
    closeMobileMenu();

    // Si es un enlace con hash, hacer scroll suave
    if (to.includes('#')) {
      const [path, hash] = to.split('#');

      // Si estamos en la misma página, hacer scroll directo
      if (path === '' || path === location.pathname) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const headerOffset = 120; // Altura del header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-neon/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 md:h-32">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
            <img src={logoImg} alt="Wings Barber Studio" className="h-40 w-40 md:h-56 md:w-56 object-contain rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => handleNavClick(link.to)}
                className={`font-body text-sm lg:text-base transition-colors duration-200 ${
                  location.pathname === link.to.split('#')[0] || (link.to === '/' && location.pathname === '/')
                    ? 'text-neon font-semibold'
                    : 'text-neutral-light hover:text-neon'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={AGENDAPRO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-neon text-white font-heading text-sm lg:text-base px-6 py-2.5 rounded-lg hover:bg-neon/90 transition-all hover:scale-105 shadow-lg hover:shadow-neon uppercase tracking-wider font-semibold"
            >
              <Calendar size={18} />
              Agendar
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white hover:text-neon transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Lateral Visible */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay más oscuro */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[60] md:hidden"
              onClick={closeMobileMenu}
            />

            {/* Menú lateral con fondo.jpg */}
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
              className="fixed top-0 right-0 h-screen w-[85vw] max-w-sm border-l-4 border-neon z-[70] flex flex-col md:hidden overflow-hidden"
            >
              {/* Fondo con imagen */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${fondoImg})` }}
              >
                <div className="absolute inset-0 bg-black/85"></div>
              </div>
              {/* Header del menú */}
              <div className="relative p-6 border-b-2 border-neon/40 bg-black/60 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-col items-center flex-1">
                    <img
                      src={logoImg}
                      alt="Wings Barber Studio"
                      className="h-48 w-48 object-contain rounded-xl"
                    />
                    <p className="text-neon/90 text-xs uppercase tracking-wide font-semibold text-center -mt-14">
                      La barbería #1 de Puerto Varas
                    </p>
                  </div>
                  <button
                    onClick={closeMobileMenu}
                    className="text-neon hover:text-white transition-all p-2 hover:bg-neon/20 rounded-xl hover:rotate-90 duration-300 absolute top-6 right-6"
                    aria-label="Cerrar menú"
                  >
                    <X size={28} strokeWidth={3} />
                  </button>
                </div>
              </div>

              {/* Links del menú */}
              <div className="relative flex-1 py-8 px-6 overflow-y-auto">
                <ul className="flex flex-col space-y-3">
                  {navLinks.map((link, index) => {
                    const Icon = link.icon;
                    const isActive = location.pathname === link.to;

                    return (
                      <motion.li
                        key={link.label}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08, type: 'spring', stiffness: 100 }}
                      >
                        <Link
                          to={link.to}
                          onClick={() => handleNavClick(link.to)}
                          className={`group flex items-center gap-2 py-2.5 px-4 rounded-lg transition-all duration-300 relative overflow-hidden ${
                            isActive
                              ? 'bg-neon text-black font-bold'
                              : 'text-white hover:text-neon bg-black/40 hover:bg-black/60 border border-transparent hover:border-neon/50'
                          }`}
                        >
                          {/* Efecto de brillo hover */}
                          {!isActive && (
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                          )}

                          <Icon
                            size={18}
                            strokeWidth={2.5}
                            className={`relative z-10 ${isActive ? 'text-black' : 'text-neon group-hover:scale-110 transition-transform'}`}
                          />
                          <span className="relative z-10 font-body text-sm font-medium">
                            {link.label}
                          </span>

                          {isActive && (
                            <motion.div
                              layoutId="activeTab"
                              className="absolute right-3 w-2 h-2 rounded-full bg-black"
                            />
                          )}
                        </Link>
                      </motion.li>
                    );
                  })}

                  {/* Botón de Agendar */}
                  <motion.li
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.08, type: 'spring', stiffness: 100 }}
                  >
                    <a
                      href={AGENDAPRO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMobileMenu}
                      className="group flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all duration-300 relative overflow-hidden bg-neon text-white font-bold hover:bg-neon/90 border-2 border-neon"
                    >
                      <Calendar
                        size={18}
                        strokeWidth={2.5}
                        className="relative z-10"
                      />
                      <span className="relative z-10 font-body text-sm font-bold uppercase tracking-wider">
                        Agendar
                      </span>
                    </a>
                  </motion.li>

                  {/* Botón de WhatsApp */}
                  <motion.li
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (navLinks.length + 1) * 0.08, type: 'spring', stiffness: 100 }}
                  >
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMobileMenu}
                      className="group flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all duration-300 relative overflow-hidden bg-green-500 text-white font-bold hover:bg-green-600 border-2 border-green-500"
                    >
                      <MessageCircle
                        size={18}
                        strokeWidth={2.5}
                        className="relative z-10"
                      />
                      <span className="relative z-10 font-body text-sm font-bold uppercase tracking-wider">
                        WhatsApp
                      </span>
                    </a>
                  </motion.li>
                </ul>
              </div>

              {/* Footer del menú */}
              <div className="relative p-6 border-t-2 border-neon/40 bg-black/60 backdrop-blur-sm">
                <p className="text-white/50 text-xs text-center mb-3 uppercase tracking-wider font-semibold">Síguenos</p>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://instagram.com/wingsbarberstudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-black/60 border-2 border-neon/60 flex items-center justify-center text-neon hover:bg-neon hover:text-black transition-all hover:scale-110 hover:rotate-12 duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://facebook.com/wingsbarberstudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-black/60 border-2 border-neon/60 flex items-center justify-center text-neon hover:bg-neon hover:text-black transition-all hover:scale-110 hover:rotate-12 duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@wingsbarberstudio?_r=1&_t=ZM-91Hinz5gC5o"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-black/60 border-2 border-neon/60 flex items-center justify-center text-neon hover:bg-neon hover:text-black transition-all hover:scale-110 hover:rotate-12 duration-300"
                    aria-label="TikTok"
                  >
                    <Music2 size={24} />
                  </a>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
