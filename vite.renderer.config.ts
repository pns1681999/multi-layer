import { defineConfig } from 'vite';
import { resolve } from 'path';

// https://vitejs.dev/config
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        draw_window: resolve(__dirname, 'drawWindow.html'),
        border_window: resolve(__dirname, 'borderWindow.html'),
      },
    },
  },
});
