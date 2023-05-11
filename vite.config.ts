import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), tsconfigPaths()],
  resolve: {
    alias: { './runtimeConfig': './runtimeConfig.browser' }
  },
  server: {
    hmr: { overlay: false },
    port: 7000
  }
})
