const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');
const path = require('node:path');

module.exports = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Make example imports like 'react-scroll-reveal' resolve to local src during dev
      'react-scroll-reveal': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 5173,
    strictPort: true,
    open: true,
  },
});
