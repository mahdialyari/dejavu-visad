import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        iransans: ['IranSans', 'sans-serif'],   // فارسی
        english: ['EnglishFont', 'sans-serif'], // انگلیسی
      },
    },
  },
  plugins: [],
};
export default config;