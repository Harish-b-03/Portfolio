/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		screens: {
			mob: "375px",
			tablet: "768px",
			laptop: "1024px",
			desktop: "1280px",
			laptopl: "1440px",
		},
		extend: {
            fontFamily: {
                handwritten: ["handwritten", "cursive"]
              },
        },
	},
	plugins: [],
};
