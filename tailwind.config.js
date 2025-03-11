

export default{
   darkMode: "class",
   content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
   ],

theme: {
   extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
         'primary': '#ed3849',
         'primary-dark':"#d23141",
         'primary-light': '#f4e5ec',
         'text-dark': '#0f172a',
         'text-light': '#64748b',
         'extra-light': '#f8fafc'
      }
   },
},
plugins: [],
}