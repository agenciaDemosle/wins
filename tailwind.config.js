/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#000000',
          deep: '#050505',
        },
        white: {
          DEFAULT: '#FFFFFF',
        },
        neon: {
          DEFAULT: '#11b7df',
          dark: '#0d8db3',
        },
        neutral: {
          dark: '#FFFFFF',
          light: '#F5F5F5',
        },
        gray: {
          dark: '#1A1A1A',
          medium: '#2A2A2A',
          light: '#3A3A3A',
        },
      },
      fontFamily: {
        heading: ['Anton', 'sans-serif'],
        script: ['Permanent Marker', 'cursive'], // Estilo street/urbano
        body: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 30px rgba(17, 183, 223, 0.5)',
        'neon-lg': '0 0 50px rgba(17, 183, 223, 0.7)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(17,183,223,0.3) 0%, transparent 55%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      })
    }
  ],
}
