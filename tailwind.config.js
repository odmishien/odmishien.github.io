// Tailwind CSS v3 設定
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Cyber Observatory パレット
        ink: {
          950: "#06060a",
          900: "#0a0a0f",
          800: "#101018",
          700: "#16161f",
          600: "#1d1d28",
        },
        bone: {
          50: "#f7f7fb",
          100: "#ececf2",
          300: "#b9b9c6",
          500: "#7a7a8c",
          600: "#5b5b6b",
          700: "#3a3a48",
        },
        neon: {
          cyan: "#00f5d4",
          magenta: "#ff2d92",
          violet: "#b18cff",
          amber: "#ffd166",
        },
      },
      fontFamily: {
        // Google Fonts は layout.tsx から読み込む
        display: ['"Instrument Serif"', "Georgia", "serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "Menlo", "monospace"],
        sans: ['"JetBrains Mono"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.32em",
      },
      boxShadow: {
        "neon-cyan":
          "0 0 0 1px rgba(0,245,212,0.4), 0 0 24px rgba(0,245,212,0.25)",
        "neon-magenta":
          "0 0 0 1px rgba(255,45,146,0.4), 0 0 24px rgba(255,45,146,0.25)",
        "neon-violet":
          "0 0 0 1px rgba(177,140,255,0.4), 0 0 24px rgba(177,140,255,0.25)",
        glass:
          "inset 0 1px 0 rgba(255,255,255,0.05), 0 30px 60px -30px rgba(0,0,0,0.8)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        "fade-in": "fade-in 0.8s ease-out both",
        "pulse-slow": "pulse-soft 3s ease-in-out infinite",
        blink: "blink 1.1s steps(1) infinite",
      },
    },
  },
  plugins: [],
}
