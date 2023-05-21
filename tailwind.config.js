/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      backgroundPosition : {
        top: '0px -304px',
      },
      backgroundSize : {
        'left' : '38px 570px'
      },

    
  },
  plugins: [require("tailwind-scrollbar-hide")],
}