/** @type {import('tailwindcss').Config} */
module.exports = {
     content: [
          "./app/**/*.{js,ts,jsx,tsx,mdx}",
          "./pages/**/*.{js,ts,jsx,tsx,mdx}",
          "./components/**/*.{js,ts,jsx,tsx,mdx}",

          // Or if using `src` directory:
          "./src/**/*.{js,ts,jsx,tsx,mdx}",
     ],
     theme: {
          backgroundImage: {
               mainGradient:
                    "linear-gradient(145deg, #20BE57 -1%, #159851 99%)",
          },

          extend: {
               fontFamily: {
                    montserrat: ["Montserrat", "sans-serif"],
                    manrope: ["Manrope", "sans-serif"],
                    poppins: ["Poppins", "sans-serif"],
                    lato: ["Lato", "sans-serif"],
                    inter: ["Inter", "sans-serif"],
               },
          },
     },
     plugins: [],
};
