import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const outDir = process.env.BUILD_OUT_DIR || 'dist'; // Default Vite output for Vercel; override per host via env

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: './', // This ensures assets are loaded correctly on cPanel
  build: {
    outDir,
    emptyOutDir: true,
  },
  server: {
    host: '127.0.0.1',
    port: 5173,
    strictPort: false,
    open: true,
  },
});
