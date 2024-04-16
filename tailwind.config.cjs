/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		container: {
			screens: {
			  sm: '600px',
			  md: '728px',
			  lg: '984px',
			  xl: '1240px',
			  '2xl': '1536px',
			  '3xl': '2500px',
			},
		  },
		extend: {},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
