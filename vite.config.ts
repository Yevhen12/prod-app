import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' }
    ]
  },
  define: {
    __IS_DEV__: JSON.stringify(true),
    __PROJECT__: JSON.stringify('frontend'),
    __API__: JSON.stringify('https://prod-project-server-ten.vercel.app/')
  }
})
