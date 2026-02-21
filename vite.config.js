import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    process.env.SENTRY_AUTH_TOKEN && sentryVitePlugin({
      org: "kim-bx",
      project: "javascript-react"
    })
  ].filter(Boolean),

  build: {
    sourcemap: true
  }
})