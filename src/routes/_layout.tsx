import { Outlet, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { queryClient } from '@/lib/queryClient';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useEffect } from 'react';
import { useUIStore } from '@/store/uiStore';

export const Layout = () => {
  const location = useLocation();
  const closeMobileMenu = useUIStore((state) => state.closeMobileMenu);

  // Cerrar menú mobile y scroll top al cambiar de ruta
  useEffect(() => {
    closeMobileMenu();
    window.scrollTo(0, 0);
  }, [location.pathname, closeMobileMenu]);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-20 md:pt-24">
            <Outlet />
          </main>
          <Footer />
        </div>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#000',
              color: '#F5F5F5',
              border: '1px solid #11b7df',
            },
            success: {
              iconTheme: {
                primary: '#11b7df',
                secondary: '#FFF',
              },
            },
            error: {
              iconTheme: {
                primary: '#EF4444',
                secondary: '#FFF',
              },
            },
          }}
        />
      </QueryClientProvider>
    </HelmetProvider>
  );
};
