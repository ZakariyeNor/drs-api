import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "5173-zakariyenor-drsapi-w33lhccsks5.ws-eu121.gitpod.io"
    ]
  }
})