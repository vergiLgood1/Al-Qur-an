/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        skin:{
          bgDark: 'var(--body-background-dark)',
          bgDarkSecondary: 'var(--body-background-secondary-dark)',
          bgLight: 'var(--body-background-light)',
          bgLinkSecondary: 'var(--link-color-secondary)',
          bgLinkSecondaryDark: 'var(--link-color-secondary-dark)'
        }
      },
      textColor: {
        skin: {
          textDark: 'var(--body-text-color-dark)',
          textLight: 'var(--body-text-color-light)',
          linkColorPimary: 'var(--link-color-primary)',
          linkColorSecondary: 'var(--link-color-secondary)',
        }
      }
      
    },
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

