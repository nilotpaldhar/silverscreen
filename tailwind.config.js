const defaultTheme = require('tailwindcss/defaultTheme');
const tailwindBoottrapGrid = require('tailwind-bootstrap-grid');

/**
 * Tailwind config object.
 */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/templates/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/pages/**/*.{css,scss}',
		'./src/templates/**/*.{css,scss}',
		'./src/components/**/*.{css,scss}',
		'./src/styles/**/*.{css,scss}',
	],
	theme: {
		extend: {
			screens: {
				sm: '576px',
				md: '768px',
				lg: '992px',
				xl: '1200px',
				xxl: '1400px',
			},
			colors: {
				primary: {
					50: '#DCEDFF',
					100: '#AECDFF',
					200: '#7DB0FF',
					300: '#4A97FF',
					400: '#1A80FF',
					500: '#006FE6',
					600: '#004AB4',
					700: '#002C82',
					800: '#001551',
					900: '#000421',
				},
				'dark-gray': {
					50: '#ECF1FB',
					100: '#CFD5E3',
					200: '#B0B9CD',
					300: '#919DB9',
					400: '#7281A5',
					500: '#59678B',
					600: '#45506D',
					700: '#31394E',
					800: '#131720',
					900: '#090B15',
				},
				social: {
					facebook: '#1877F2',
					google: '#EA4335',
					instagram: '#405DE6',
					twitter: '#1DA1F2',
					youtube: '#FF0000',
				},
			},
			fontFamily: {
				sans: ['Rubik', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	variants: {
		extend: {},
	},
	corePlugins: {
		container: false,
	},
	plugins: [tailwindBoottrapGrid()],
};
