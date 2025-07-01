import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // Untuk Netlify, base harus "/"
  plugins: [react()],
});
