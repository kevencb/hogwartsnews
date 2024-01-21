/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		backgroundImage: {
			"open-menu": "url('../../images/open-menu.svg')",
			"close-menu": "url('../../images/close-menu.svg')"
		}
	},
	plugins: [],
}
