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
        'float-delay-2': 'float 3s ease-in-out 1.0s infinite',
        'float-delay-3': 'float 3s ease-in-out 1.5s infinite',
        'float-slow': 'float 5s ease-in-out infinite',
        'float-slow-delay': 'float 5s ease-in-out 0.5s infinite',
        'float-slow-delay-2': 'float 5s ease-in-out 1.0s infinite',
        'float-slow-delay-3': 'float 5s ease-in-out 1.5s infinite',
        'rotate': 'rotate 60s linear infinite',
        'rotate-slow': 'rotate 240s linear infinite',
        'rotate-very-slow': 'rotate 480s linear infinite',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['var(--font-lexend-deca)'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      transformOrigin: {
        'center-right': '100% 50%',
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
