module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        google: "#EA4335",
        facebook: "#3B5998",
        twitter: "#00ACEE",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        lg: '24px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
