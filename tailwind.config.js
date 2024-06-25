// tailwind.config.js
const plugin = require("tailwindcss/plugin");

module.exports = {
	content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				Karla: ["Karla", "sans-serif"],
			},
			colors: {
				"light-coffee": "#C89F94",
			},
		},
		animation: {
			slideDown: "slideDown .4s ease-in-out",
		},
		keyframes: {
			slideDown: {
				"0%": { transform: "translateY(-100%)" },
				"100%": { transform: "translateY(0)" },
			},
		},
	},
	plugins: [],
};
