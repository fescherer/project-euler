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
      background: 'var(--background)',
      'background-accent': 'var(--background-accent)',
      foreground: 'var(--foreground)',
      'foreground-accent': 'var(--foreground-accent)',
      primary: 'var(--primary)',
      'primary-dark': 'var(--primary-dark)',
      'primary-contrast': 'var(--primary-contrast)',
      overlay: 'var(--black-overlay)'
    },
    fontFamily: {
      sans: ["'Darker Grotesque', sans-serif", ...defaultTheme.fontFamily.sans]
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
}
