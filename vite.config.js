import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Wajedo_international_Corporation/', // 👈 set this to your GitHub repo name with slashes
  plugins: [react()],
})
