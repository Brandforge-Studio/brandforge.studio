/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-delay': 'float 3s ease-in-out 0.5s infinite',
        'float-slow': 'float 5s ease-in-out infinite',
        'float-slow-delay': 'float 5s ease-in-out 0.5s infinite',
        'float-fast': 'float 2s ease-in-out infinite',
        'float-fast-delay': 'float 2s ease-in-out 0.5s infinite',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.astronautMask': {
          'mask-image': 'url(\'/astronautHolo.webp\')',
          'mask-size': 'cover',
          'mask-repeat': 'no-repeat',
          'mask-position': 'center',
          '-webkit-mask-image': 'url(\'/astronautHolo.webp\')',
          '-webkit-mask-size': 'cover',
          '-webkit-mask-repeat': 'no-repeat',
          '-webkit-mask-position': 'center',
        },
        '.asteroidMask': {
          'mask-image': 'url(\'/asteroidHolo.webp\')',
          'mask-size': 'cover',
          'mask-repeat': 'no-repeat',
          'mask-position': 'center',
          '-webkit-mask-image': 'url(\'/asteroidHolo.webp\')',
          '-webkit-mask-size': 'cover',
          '-webkit-mask-repeat': 'no-repeat',
          '-webkit-mask-position': 'center',
        }
      }
      addUtilities(newUtilities)
    }
  ],
}
