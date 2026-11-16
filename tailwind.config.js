/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,html}"],
  theme: {
    extend: {
      colors: {
        indigo: "#4A4FA6",
        ink: "#272654",
        cream: "#FBF4E6",
        lilac: "#DCD3F5",
        mint: "#7EDDB0",
        sun: "#FFC93C",
        coral: "#EE3F4A",
        sky: "#9CDcff",
        muted: "#5B5A88",
      },
      fontFamily: {
        body: ["Anuphan", "sans-serif"],
        display: ["Mitr", "sans-serif"],
      },
      keyframes: {
        illustrationFloat: {
          "0%,100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-22px)",
          },
        },
        float: {
          "0%,100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-13px)",
          },
        },
        profileFloat: {
          "0%,100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-6px)",
          },
        },
        buttonPulse: {
          "0%,100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-3px) rotate(-.4deg)",
          },
        },
      },
      animation: {
        "illustration-float": "illustrationFloat 3.2s ease-in-out infinite",
        float: "float 5s ease-in-out infinite",
        "profile-float": "profileFloat 5.5s ease-in-out infinite",
        "button-pulse": "buttonPulse 3.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
