// Vite settings — Vite is the tool that runs the dev server (npm run dev)
// and builds the final website files (npm run build → the "dist" folder).
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()] // lets Vite understand React's JSX syntax
});
