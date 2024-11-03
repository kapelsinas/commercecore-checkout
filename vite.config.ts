import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { reactClickToComponent } from 'vite-plugin-react-click-to-component';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), reactClickToComponent()],
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
      '@': path.resolve(__dirname, './src'),
    },
  },
});
