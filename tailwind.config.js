/** @type {import('tailwindcss').Config} */

const { color } = require('framer-motion');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        skin:{
          bgDark: 'var(--body-background-dark)',
          bgDark2: 'var(--body-background-secondary-dark)',
          bgLight: 'var(--body-background-light)',
          bgLink: 'var(--link-color-primary)',
          bgLink2: 'var(--link-color-secondary)',
          
        }
      },
        textColor: {
          skin: {
            tPrimary: 'var(--body-text-color-primary)',
            tDark: 'var(--body-text-color-dark)',
            tLight: 'var(--body-text-color-light)',
            tlink: 'var(--link-color-primary)',
            tlink2: 'var(--link-color-secondary)',
          }
        },

        backgroundImage: {
          frameNumber: '/public/svg/FrameNumber.svg'
        }
      
      
    },
  },

  variants: {
    extend: {
      backgroundColor : ['active'],
    
    }
  },

  plugins: [
    require('tailwind-scrollbar'),
    require("daisyui"),

  ],
darkMode: 'class',

daisyui: {
  themes: ["light", "dark", "cupcake"],
},

}

