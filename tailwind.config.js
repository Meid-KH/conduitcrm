module.exports = {
	// mode: "jit",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				helvatica: "Halvatica Neue, ui-sans-serif, system-ui",
			},
			colors: {
				transparent: "transparent",
				current: "currentColor",
				primary: {
					500: "#18C4FF",
					600: "#031160",
					700: "#020B33",
				},
				faded: "#CAEBFA",
			},
		},
	},
	plugins: [],
};
