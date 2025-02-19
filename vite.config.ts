import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://ec2-3-95-155-9.compute-1.amazonaws.com", // Cambia esto por tu API
        changeOrigin: true,
        secure: true, // Si el backend usa HTTPS con certificado autofirmado, usa false
      },
    },
  },
})
