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
			colors: {},
		},
	},
	variants: {
		extend: {},
	},
	corePlugins: {
		container: false,
	},
};
