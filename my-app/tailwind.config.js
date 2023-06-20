module.exports = {
  content: ['./src/renderer/**/*.{js,jsx,ts,tsx,ejs}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        text: '#ffffff',
        background: '#191919',
        background2: '#111111',
        primary: '#f3a0f0',
        secondary: '#050406',
        accent: '#d8cede',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
