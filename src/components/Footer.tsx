import { Link } from 'react-router-dom';
import { MapPin, Phone, Instagram, Facebook, Clock } from 'lucide-react';
import { Music2 } from 'lucide-react';
import logoImg from '@/assets/logo2.jpeg';

export const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-neon/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Columna 1: Logo + Redes Sociales */}
          <div>
            {/* Logo */}
            <div className="mb-0 -mt-6 md:mt-0">
              <img src={logoImg} alt="Wings Barber Studio" className="h-28 w-auto object-contain rounded-lg" />
            </div>
            <p className="text-sm leading-relaxed mb-0 mt-2">
              La barbería Nº 1 de Puerto Varas.
              <br />
              Tu estilo comienza aquí… y se eleva contigo.
            </p>
            {/* Redes Sociales */}
            <div className="flex items-center gap-4 mb-1 mt-3">
              <a
                href="https://instagram.com/wingsbarberstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neon transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={28} />
              </a>
              <a
                href="https://facebook.com/wingsbarberstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neon transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={28} />
              </a>
              <a
                href="https://www.tiktok.com/@wingsbarberstudio?_r=1&_t=ZM-91Hinz5gC5o"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neon transition-colors"
                aria-label="TikTok"
              >
                <Music2 size={28} />
              </a>
            </div>
            {/* Copyright en desktop solamente */}
            <p className="hidden md:block text-xs text-white mb-0 mt-3">
              &copy; {new Date().getFullYear()} Wings Barber Studio. Todos los derechos reservados.
            </p>
            <p className="hidden md:block text-xs text-white/60">
              Creado por{' '}
              <a
                href="https://demosle.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon hover:text-neon/80 transition-colors"
              >
                Demosle.cl
              </a>
            </p>
          </div>

          {/* Columna 2: Enlaces */}
          <div>
            <h4 className="text-white font-body font-semibold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-neon transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="hover:text-neon transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/quienes-somos" className="hover:text-neon transition-colors">
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link to="/alianzas" className="hover:text-neon transition-colors">
                  Alianzas
                </Link>
              </li>
              <li>
                <Link to="/politica-privacidad" className="hover:text-neon transition-colors">
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h4 className="text-white font-body font-semibold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-neon" />
                <span>Dr Giessler #694, Puerto Varas, Los Lagos</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-neon" />
                <a href="tel:+56959850818" className="hover:text-neon transition-colors">
                  +56 9 5985 0818
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0 text-neon" />
                <span>Lunes a sábado de 11:00 a 20:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright en mobile después de todo */}
        <div className="md:hidden mt-8 text-center">
          <p className="text-xs text-white mb-1">
            &copy; {new Date().getFullYear()} Wings Barber Studio. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/60">
            Creado por{' '}
            <a
              href="https://demosle.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon hover:text-neon/80 transition-colors"
            >
              Demosle.cl
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
