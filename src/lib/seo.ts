export interface SEOData {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  keywords?: string;
}

export const defaultSEO: SEOData = {
  title: 'Wings Barber Studio — Barbería Nº1 de Puerto Varas | Cortes Premium',
  description:
    'La mejor barbería de Puerto Varas. Cortes de cabello profesionales, arreglo de barba, limpieza facial premium y tratamientos capilares. Ambiente moderno con PS5 y café de cortesía. Agenda tu hora online.',
  canonical: 'https://wingsbarberstudio.cl/',
  ogImage: 'https://wingsbarberstudio.cl/assets/portada.webp',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  keywords: 'barbería Puerto Varas, barber shop Puerto Varas, mejor barbería Puerto Varas, corte de cabello hombre, arreglo barba, limpieza facial masculina, tratamiento capilar premium, rizos permanentes, tinturas hombre, coloración cabello, Wings Barber Studio, barbería moderna, barbería con PS5, agendar barbería online, barberos profesionales Puerto Varas, barbería Los Lagos, estilista hombre Puerto Varas',
};

export const getSEOData = (overrides?: Partial<SEOData>): SEOData => ({
  ...defaultSEO,
  ...overrides,
});
