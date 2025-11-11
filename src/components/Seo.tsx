import { Helmet } from 'react-helmet-async';
import { SEOData } from '@/lib/seo';
import { organizationSchema, localBusinessSchema } from '@/lib/schema';

interface SeoProps {
  seo: SEOData;
  jsonLd?: object | object[];
}

export const Seo = ({ seo, jsonLd }: SeoProps) => {
  const {
    title,
    description,
    canonical,
    ogImage,
    ogType = 'website',
    twitterCard = 'summary_large_image',
    keywords,
  } = seo;

  const fullOgImage = ogImage?.startsWith('http')
    ? ogImage
    : `https://franciscal48.sg-host.com${ogImage}`;

  // Schemas por defecto + los adicionales
  const schemas = [organizationSchema, localBusinessSchema];
  if (jsonLd) {
    if (Array.isArray(jsonLd)) {
      schemas.push(...jsonLd);
    } else {
      schemas.push(jsonLd);
    }
  }

  return (
    <Helmet>
      {/* Meta básico */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content="Wings Barber Studio" />
      <meta property="og:locale" content="es_CL" />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* JSON-LD */}
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};
