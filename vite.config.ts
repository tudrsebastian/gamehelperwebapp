import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

const env = process.env

export default defineConfig({
  define: {
    "process.env": env,
  },
  base: "/",
  plugins: [react()],
  preview: {
    port: 8080,
    strictPort: true,
  },
  server: {
    watch: {
      usePolling: true,
    },
    port: 8080,
    strictPort: true,
    host: true,
    origin: env.VITE_HOST,
  },
})
