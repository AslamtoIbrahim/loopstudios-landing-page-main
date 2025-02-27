import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        alata: ["Alata", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
      },
      backgroundImage:{
        "hero-mobile": "url('../../public/pictures/images/mobile/image-hero.jpg')",
        "hero-desk": "url('../../public/pictures/images/desktop/image-hero.jpg')",
      }
    },
  },
  plugins: [],
} satisfies Config;
