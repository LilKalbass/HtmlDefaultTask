/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        ph: '320px',
        sm: '640px',
        md: '768px',
        lg: '960px',
        xl: '1140px'
      },
      fontFamily: {
        roboto: ['var(--font-roboto)', 'sans-serif'],
      },
      backgroundImage: {
        logo: 'url(/assets/HeaderImages/CloudLogo.webp)',
        nav: 'url(/assets/HeaderImages/CloudNav.webp)',
        order: 'url(/assets/ProductImages/ProductBg.webp)',
        about: 'url(/assets/AboutImages/AboutBg.webp)',
        result: 'url(/assets/ResultImages/ResultBg.webp)',

      },
      colors: {
        grey: 'rgba(113, 93, 0, 1)',
        greyOrder: 'rgba(119, 119, 119, 1)',
        yellow: 'rgba(249, 233, 148, 1)',
        blue: 'rgba(127, 179, 225, 1)',
        whiteProduct: 'rgba(246, 247, 228, 1)',
        whiteProductBox: 'rgba(223, 228, 222, 1)',
        orderForm: 'rgba(253, 252, 252, 1)',
        orderInputBg: 'rgba(243, 239, 239, 1)',
        orderButton: 'rgba(161, 211, 55, 1)',
        timerText: 'rgba(72, 60, 8, 1)',
        timerCount: 'rgba(246, 231, 145, 1)',
        priceOld: 'rgba(107, 107, 107, 1)',

        aboutGr1: 'rgba(249, 233, 148, 1)',
        aboutGr2: 'rgba(83, 125, 19, 1)',
        aboutGr3: 'rgba(72, 60, 8, 1)',
        aboutCardBg: 'rgba(246, 231, 145, 1)',
        aboutCardTextBg: 'rgba(161, 211, 55, 0.4)',

        resultHeader: 'rgba(83, 125, 19, 1)'
      },
    },
  },
  plugins: [],
};
