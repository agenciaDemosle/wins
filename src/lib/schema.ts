// JSON-LD Schema para SEO

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Wings Barber Studio',
  url: 'https://franciscal48.sg-host.com',
  logo: 'https://franciscal48.sg-host.com/assets/logo2.jpeg',
  description: 'Barbería moderna en Puerto Varas. Cortes de cabello, arreglos de barba, limpieza facial y tratamientos capilares.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+56-9-5985-0818',
    contactType: 'customer service',
    email: 'contacto@wingsbarberstudio.cl',
    availableLanguage: ['es'],
  },
  sameAs: [
    // Redes sociales (agregar cuando estén disponibles)
  ],
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'BarberShop',
  name: 'Wings Barber Studio',
  image: 'https://franciscal48.sg-host.com/assets/logo2.jpeg',
  url: 'https://franciscal48.sg-host.com',
  telephone: '+56-9-5985-0818',
  email: 'contacto@wingsbarberstudio.cl',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Dr Giessler #694',
    addressLocality: 'Puerto Varas',
    addressRegion: 'Los Lagos',
    addressCountry: 'CL',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -41.3217,
    longitude: -72.9843,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '11:00',
      closes: '20:00',
    },
  ],
  priceRange: '$$',
  servesCuisine: null,
  acceptsReservations: 'True',
};

export const productSchema = (product: {
  name: string;
  description: string;
  price?: string;
  image?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: product.name,
  description: product.description,
  image: product.image || 'https://franciscal48.sg-host.com/assets/og-default.jpg',
  offers: {
    '@type': 'Offer',
    price: product.price || '0',
    priceCurrency: 'CLP',
    availability: 'https://schema.org/InStock',
  },
});
