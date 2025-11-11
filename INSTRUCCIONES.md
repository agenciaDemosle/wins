# Instrucciones de Instalación y Ejecución - Wings Barber Studio

## Paso 1: Instalar Dependencias

Abre tu terminal y navega a la carpeta del proyecto:

```bash
cd ~/Desktop/wings
npm install
```

Este proceso puede tomar unos minutos. Instalará todas las dependencias especificadas en `package.json`.

## Paso 2: Ejecutar en Modo Desarrollo

Una vez instaladas las dependencias, ejecuta:

```bash
npm run dev
```

El servidor de desarrollo se iniciará en `http://localhost:3000`. El navegador debería abrirse automáticamente.

## Paso 3: Build para Producción

Cuando estés listo para desplegar, ejecuta:

```bash
npm run build
```

Esto generará la carpeta `dist/` con todos los archivos optimizados.

## Paso 4: Desplegar en SiteGround

1. Sube el contenido de la carpeta `dist/` al servidor en `https://franciscal48.sg-host.com/`
2. Asegúrate de que el archivo `.htaccess` esté en la raíz para que React Router funcione correctamente
3. Verifica que `robots.txt` y `sitemap.xml` estén accesibles en la raíz pública

## Estructura del Proyecto

```
wings/
├── src/                    # Código fuente
│   ├── routes/            # Páginas (Home, Servicios, etc.)
│   ├── components/        # Componentes reutilizables
│   ├── lib/              # Utilidades (SEO, validación, etc.)
│   ├── store/            # Estado global (Zustand)
│   └── assets/           # Imágenes (logo, og-default)
├── index.html            # HTML principal
├── .htaccess            # Configuración Apache
├── robots.txt           # SEO
├── sitemap.xml          # SEO
└── package.json         # Dependencias

```

## Comandos Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run preview` - Preview del build
- `npm run lint` - Linter ESLint

## Notas Importantes

### Fuentes Tipográficas

Las fuentes se cargan desde Google Fonts (configurado en `index.html`):
- **Anton** para títulos
- **Poppins** para texto general
- **Great Vibes** para palabras destacadas (en producción usar Brittany)

### Paleta de Colores Wings

Configurada en `tailwind.config.js`:
- Negro: `#000000`
- Azul neón: `#2F94CF`
- Blanco: `#FFFFFF`
- Ver README.md para paleta completa

### SEO

- Canonical configurado para `https://franciscal48.sg-host.com/`
- JSON-LD para Organization y LocalBusiness
- OpenGraph y Twitter Cards por ruta
- Sitemap en `/sitemap.xml`

### Formulario de Contacto

El formulario actualmente **simula** el envío (ver `src/components/ContactForm.tsx`).
Para producción, debes:
1. Conectar con un backend o servicio de email
2. Reemplazar la función `onSubmit` con tu lógica de envío real

### Imagen OpenGraph

El archivo `src/assets/og-default.jpg` es actualmente el logo.
Para mejores resultados en redes sociales:
- Reemplázalo con una imagen optimizada de 1200x630px
- Usa herramientas como Canva para diseñar la imagen OG

## Soporte

Para cualquier consulta técnica o modificación, revisa:
- `README.md` - Documentación completa
- Archivos de configuración (vite.config.ts, tailwind.config.js)
- Código fuente comentado

---

**Wings Barber Studio** - Tu estilo comienza aquí… y se eleva contigo. 💈
