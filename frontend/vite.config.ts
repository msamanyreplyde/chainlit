import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(), // resolves tsconfig paths automatically
  ],
  resolve: {
    alias: {
      // fallback in case tsconfigPaths fails
      '@chainlit/react-client': path.resolve(__dirname, '../libs/react-client/dist'),
    },
  },
  build: {
    target: 'esnext', // modern JS output
    sourcemap: true,
  },
});
