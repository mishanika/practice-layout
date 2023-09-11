/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      smm: { max: "360px" },
      sm: { max: "480px" },
      // => @media (min-width: 640px) { ... }

      md: { max: "768px", min: "481px" },
      // => @media (min-width: 768px) { ... }
      "md-sm": { max: "768px" },
      lg: { max: "1024px", min: "769px" },
      "lg-max": { max: "1024px" },
      // => @media (min-width: 1024px) { ... }

      xl: { max: "1280px", min: "1025px" },
      // => @media (min-width: 1280px) { ... }

      "2xl": { max: "1440px", min: "1281px" },
      "2xl-max": { max: "1440px", min: "481px" },
      "2xl-min": { min: "1441px" },
      "3xl": { max: "1650px", min: "1024px" },
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
