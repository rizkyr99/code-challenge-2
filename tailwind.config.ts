import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-green': '#64CCC5',
        'dark-green': '#246158',
      },
      fontFamily: {
        'roboto-serif': ['var(--font-roboto-serif)'],
      },
    },
  },
  plugins: [],
};
export default config;
