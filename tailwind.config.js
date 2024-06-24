// tailwind.config.js
const plugin = require("tailwindcss/plugin");

module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				"light-coffee": "#C89F94",
			},
		},
	},
	plugins: [],
};
