/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx}', // include all files using Tailwind classes
	],
	theme: {
		extend: {
			colors: {
				// Add your custom colors here
				brand: {
					light: '#f3e8ff',
					DEFAULT: '#9333ea',
					dark: '#6b21a8',
				},
				gold: '#FFD700',
				midnight: '#121063',
			},
			animation: {
				'bounce-slow': 'bounce 10s infinite',
			},
			perspective: {
				'1000px': '1000px',
			},
			transformOrigin: {
				center: 'center',
			},
		}, // add custom styles here
	},
	plugins: [require('tailwind-scrollbar')],
};
