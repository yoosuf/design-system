import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@use "${path.resolve(__dirname, 'src/assets/styles/index.scss')}";`,
        additionalData: `@use "/src/assets/styles/variables.scss" as *;`, // ✅ Use a single file, NOT index.scss

      },
    },
  },
})
