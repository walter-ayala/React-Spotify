// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',              
    './src/**/*.{js,ts,jsx,tsx}', 
    './src/**/*.css',             
  ],
  plugins: [],
};

export default config;
