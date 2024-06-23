/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
  "./pages/**/*.{ts,tsx,jsx,js}",
  "./components/**/*.{ts,tsx,jsx,js}",
  "./app/**/*.{ts,tsx,jsx,js}",
  "./src/**/*.{ts,tsx,jsx,js}",
];
export const prefix = "";
export const theme = {
  container: {
    center: true,
    padding: "2rem",
    screens: {
      xs: "300px",
      "2xl": "1400px",
    },
  },
  extend: {}
};
