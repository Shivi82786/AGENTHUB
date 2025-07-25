import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Needed for proper WebContainer connectivity
    port: 5173,
    strictPort: true, // Ensure we only use the specified port
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});