/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true, 
      padding: "24px", 
      screens: {
        DEFAULT: "100%",
        desktop: "1240px",
      },
      maxWidth: {
        DEFAULT: "571px",
        desktop: "1240px",
      },
    },
    screens: {
      desktop: "1240px",
    },
  },
  plugins: [],
};
