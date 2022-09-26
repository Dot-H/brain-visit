/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
	darkMode: "class",
  theme: {
    extend: {
			backgroundImage: {
				'light': 'linear-gradient(180deg, #fcc1a8 0%, #ffeae0 43.23%)',
				'dark': 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)',
			},
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
				primary: 'var(--text-primary)',
				secondary: 'var(--text-secondary)',
				light: 'var(--light-background)',
				dark: 'var(--dark-background)',
				'section-engineering-bg': 'rgb(var(--section-engineering-bg) / var(--alpha))',
				'section-excursions-bg': 'rgb(var(--section-excursions-bg) / var(--alpha))',
				'section-thoughts-bg': 'rgb(var(--section-thoughts-bg) / var(--alpha))',
      },
			scale: {
        '103': '1.03',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}
