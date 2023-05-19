// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx}',
    './src/icons/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      neutral: 'var(--neutral)',
      black: 'var(--black)',
      white: 'var(--white)',
      background: 'var(--background)',
      'background-2': 'var(--background-2)',
      'background-3': 'var(--background-3)',
      foreground: 'var(--foreground)',
      disabled: 'var(--disabled)',
      enabled: 'var(--enabled)',
      text: 'var(--text)',
      primary: 'var(--primary)'
    },
    fontFamily: {
      sans: ["'Darker Grotesque', sans-serif", ...defaultTheme.fontFamily.sans]
    },
    extend: {}
  },
  plugins: []
}

