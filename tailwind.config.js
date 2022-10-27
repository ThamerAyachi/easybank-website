/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				lmb: "#fafafa",
				tc: "#9698a6",
				limeG: "#31d35c",
				cyan: "#2bb7da",
			},
		},
	},
	plugins: [],
};
