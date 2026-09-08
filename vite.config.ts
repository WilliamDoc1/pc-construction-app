import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  define: {
    __SERVER_FORWARD_CONSOLE__: false,
  },
  plugins: [react(), tailwindcss()],
  server: {
    port: 3010,
    host: '127.0.0.1'
  }
})
