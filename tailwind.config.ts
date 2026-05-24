import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: { dark: "#0B0F19", light: "#F9FAFB" },
        card: { dark: "#111827", light: "#FFFFFF" },
        border: { dark: "#1F2937", light: "#E5E7EB" },
        accent: { primary: "#3B82F6", success: "#10B981", warning: "#F59E0B", danger: "#EF4444" },
        text: { dark: "#F9FAFB", light: "#111827", muted: "#6B7280" }
      },
      animation: { "fade-in": "fadeIn 0.3s ease-out forwards" },
      keyframes: { fadeIn: { from: { opacity: 0, transform: "translateY(8px)" }, to: { opacity: 1, transform: "translateY(0)" } } }
    }
  }
};
export default config;

