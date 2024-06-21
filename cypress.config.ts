import { defineConfig } from "cypress"
import { config } from "dotenv"

config({ path: ".env.development" })

const env = process.env

export default defineConfig({
  env,
  e2e: {
    baseUrl: env.VITE_HOST,
  },
})

