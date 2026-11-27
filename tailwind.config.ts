import type { Config } from "tailwindcss";
const config: Config = { content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"], theme: { extend: { colors: { bamboo: { 50: "#f6f7ef", 100: "#e9eddc", 700: "#53633b", 800: "#3e4d2e", 900: "#29351f" } } } }, plugins: [] };
export default config;
