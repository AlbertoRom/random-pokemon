import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'
  

export default defineConfig({
    plugins: [
        react()
    ],
    server: {
        allowedHosts: ['74bc-31-4-134-243.ngrok-free.app']
    }
})
