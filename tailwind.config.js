/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					100: '#e5f2f0',
					200: '#bfded7',
					300: '#99cabe',
					400: '#4da392',
					500: '#226759', // Base primary color
					600: '#1e5d50',
					700: '#194d43',
					800: '#133d36',
					900: '#0f312c',
				},
				secondary: {
					100: '#f3f8fb',
					200: '#dbe9f3',
					300: '#c3daea',
					400: '#94bcd9',
					500: '#a2c3db', // Base secondary color
					600: '#8eb0c7',
					700: '#7892a8',
					800: '#617489',
					900: '#4e5f70',
				},
			},
		},
	},
	plugins: [require('tailwindcss-rtl')],
};
