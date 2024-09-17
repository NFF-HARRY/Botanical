/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "340px",
      md: "540px",
      lg: "768px",
      xl: "1180px"
    },
    extend: {},
    keyframes: {
      move: {
        "0%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-1rem)" },
        "100%": { transform: "translateY(0)" }
      },
      rotate: {
        "0%": { transform: "rotate(360deg)" }
      },
      scaleup:{
        "0%": { transform: "scale(0.8)" },
        "50%": { transform: "scale(1.2)" },
        "100%": { transform: "scale(0.8)" }
      }
    },
    animation: {

      movingY: "move 3s ease-in-out infinite",
      rotating: "rotate 15s linear infinite",
      scalingUp: "scaleup 3s linear infinite"
    },
    fontFamily: {
      Jost: ["Jost", "sans-serif"],
      Lobster: ["Lobster", "sans-serif"]
    },
    container: {
      center: true,
      padding: {
        default: "12px",
        md: "32px"
      }
    }
  },
  plugins: [],
}