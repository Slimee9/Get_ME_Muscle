/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",  // Scan all files in the `pages` directory
      "./components/**/*.{js,ts,jsx,tsx}", // Scan all files in the `components` directory
      "./app/**/*.{js,ts,jsx,tsx}", // Scan all files in the `app` directory (for App Router in Next.js)
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  