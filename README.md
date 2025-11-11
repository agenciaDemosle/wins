# Wings Barber Studio

Sitio web oficial de **Wings Barber Studio** — Barbería Nº1 de Puerto Varas.

## Stack Tecnológico

- **React 18.3** con **TypeScript**
- **Vite 5.4** (build tool)
- **Tailwind CSS 3.4** (estilos)
- **React Router DOM 7.8** (routing)
- **Framer Motion 12** (animaciones)
- **React Hook Form 7** + **Zod 4** (formularios y validación)
- **Zustand 5** (estado global UI)
- **TanStack Query 5** (data fetching)
- **React Helmet Async 2** (SEO)
- **React Hot Toast 2** (notificaciones)
- **Lucide React** (iconos)

## Estructura del Proyecto

```
wings/
├── index.html              # HTML principal con fuentes Google
├── .htaccess               # Configuración Apache para SPA
├── robots.txt              # SEO
├── sitemap.xml             # SEO
├── vite.config.ts          # Configuración Vite
├── tsconfig.json           # TypeScript config
├── tailwind.config.js      # Tailwind config (paleta Wings)
├── postcss.config.js       # PostCSS
├── package.json            # Dependencias
├── deployServer/
│   └── .htaccess           # .htaccess para servidor producción
└── src/
    ├── main.tsx            # Entry point
    ├── App.tsx             # Router principal
    ├── index.css           # Tailwind imports
    ├── routes/
    │   ├── _layout.tsx     # Layout con providers
    │   ├── Home.tsx
    │   ├── QuienesSomos.tsx
    │   ├── MisionVision.tsx
    │   ├── Servicios.tsx
    │   ├── Contacto.tsx
    │   ├── PoliticaPrivacidad.tsx
    │   └── NotFound.tsx
    ├── components/
    │   ├── Header.tsx      # Header con menú mobile lateral
    │   ├── Footer.tsx
    │   ├── Hero.tsx
    │   ├── Section.tsx     # Wrapper con animaciones
    │   ├── CTAButtons.tsx
    │   ├── ServiceCard.tsx
    │   ├── ContactForm.tsx # Formulario con RHF + Zod
    │   └── Seo.tsx         # SEO con Helmet + JSON-LD
    ├── store/
    │   └── uiStore.ts      # Zustand (menú mobile)
    ├── lib/
    │   ├── queryClient.ts  # TanStack Query config
    │   ├── validation.ts   # Schemas Zod
    │   ├── schema.ts       # JSON-LD schemas
    │   └── seo.ts          # Helpers SEO
    └── assets/
        ├── logo.jpeg       # Logo Wings (copiado desde images/)
        └── og-default.jpg  # Placeholder para Open Graph
```

## Comandos

### Instalación

```bash
cd ~/Desktop/wings
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre `http://localhost:3000`

### Build de Producción

```bash
npm run build
```

Los archivos compilados estarán en `dist/`

### Preview Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Paleta de Colores

- **Negro profundo**: `#000000` / `#050505`
- **Blanco**: `#FFFFFF`
- **Neón (azul)**: `#2F94CF`
- **Neón oscuro**: `#1E638A`
- **Neutro oscuro**: `#FFFFFF`
- **Neutro claro**: `#F5F5F5`

## Tipografías

- **Títulos (H1/H2)**: Anton
- **Script (palabras destacadas)**: Great Vibes (en producción usar **Brittany**)
- **Texto general**: Poppins

## SEO

- **Canonical URL**: `https://franciscal48.sg-host.com/`
- **JSON-LD**: Organization + LocalBusiness (Barbershop)
- **OpenGraph / Twitter**: Configurado por ruta
- **Sitemap**: `/sitemap.xml`
- **Robots**: `/robots.txt`

## Despliegue

1. Hacer build: `npm run build`
2. Subir carpeta `dist/` a `https://franciscal48.sg-host.com/`
3. Asegúrate de que el `.htaccess` en la raíz esté configurado para SPA (incluido en el proyecto)
4. Verificar que `robots.txt` y `sitemap.xml` estén en la raíz pública

## Notas Importantes

- **Logo**: Se usa `src/assets/logo.jpeg` (copiado desde `images/logo.jpeg` original)
- **OG Image**: Reemplazar `src/assets/og-default.jpg` con una imagen optimizada para redes sociales (1200x630px)
- **Fuente Script**: En producción, reemplazar Great Vibes por **Brittany** si está disponible
- **Formulario de Contacto**: Actualmente simula envío. Conectar con backend real o servicio de email

## Licencia

&copy; 2025 Wings Barber Studio. Todos los derechos reservados.
