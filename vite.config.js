import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Split rarely-changing vendor code into its own long-cached chunk so
        // app edits don't force users to re-download React + framer-motion.
        manualChunks(id) {
          if (id.includes('node_modules/framer-motion')) return 'motion-vendor';
          if (id.includes('node_modules/react') || id.includes('node_modules/scheduler')) {
            return 'react-vendor';
          }
          return undefined;
        },
      },
    },
  },
})
