import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/cd2cb6a9-9855-42ab-a278-205358ab1816/preview',
  plugins: [react()],
  server: {
    port: 5211,
    host: true,
    strictPort: true,
    hmr: {
      // HMR will be proxied through our backend
      port: 5211,
    },
  },
})
