import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@share': path.resolve(__dirname, './src/share'),
      '@backend': path.resolve(__dirname, '../backend/src'),
    },
  },
})
