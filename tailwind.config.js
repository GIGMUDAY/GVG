/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#DAAD29',
          green: '#113E21',
          light: '#EAE9E7',
          white: '#FEFEFE',
          // New color palette from image
          'dark-green': '#3E350E',
          'golden-yellow': '#DAAD29',
          'light-gray': '#EAE9E7',
          'brown': '#794515',
          'olive-green': '#79792E',
          'pale-yellow': '#F2DD6C'
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-down': 'slideDown 0.8s ease-out forwards',
        'scale': 'scale 0.5s ease-out forwards',
        'rotate-3d': 'rotate3d 15s linear infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        scale: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        rotate3d: {
          '0%': { transform: 'rotate3d(1, 1, 1, 0deg)' },
          '100%': { transform: 'rotate3d(1, 1, 1, 360deg)' }
        }
      },
      fontFamily: {
        'pacifico': ['Pacifico', 'cursive'],
        'playfair': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
};