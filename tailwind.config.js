module.exports = {
	content: ["./dist/*.html", "./node_modules/tw-elements/dist/js/**/*.js"],
	theme: {
		fontSize: {
			xs: ".75rem",
			sm: ".875rem",
			tiny: ".875rem",
			base: "1rem",
			lg: "1.125rem",
			xl: "1.25rem",
			"2xl": "1.5rem",
			"3xl": "1.875rem",
			"4xl": "2.25rem",
			"5xl": "3rem",
			"6xl": "4rem",
			"7xl": "5rem",
			"1vw": "10vw",
			"2vw": "20vw",
			"3vw": "30vw",
		},
		screens: {
			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }
		},
		extend: {
			backgroundImage: {
				header: "url('img/background.jpg')",
				profile: "url('img/about_pic.jfif')",
			},
			fontFamily: {
				custom: ["Bebas Neue", "mono"],
			},
			keyframes: {
				typewriter: {
					from: { width: "0" },
					to: { width: "100%" },
				},
				blink: {
					from: { borderColor: "transparent" },
					to: { borderColor: "white" },
				},
				nav: {
					"0%": { opacity: "0", marginTop: "-200px" },
					"100%": { opacity: "1", marginTop: "0px" },
				},
			},
			animation: {
				typewriter:
					"typewriter 3s steps(120, end) forwards, blink .5s infinite",
				nav: "nav 1s forwards",
			},
		},
	},
	plugins: [require("tw-elements/dist/plugin")],
};
