// vite.config.mjs
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vike from 'vike/plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: '/',

  server: {
    port: 5173,
  },

  build: {
    cssCodeSplit: true,
    sourcemap: true,
    rollupOptions: {
      external: ['vike/usePageContext', 'vike-react/usePageContext'], // prevents virtual module errors
    }
  },

  plugins: [
    react(),
    vike({
      // prerender: true, // optional
    }),
  ],

  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, './src/styles'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },

//  css: {
  //  preprocessorOptions: {
    //  scss: {
      //  includePaths: [path.resolve(__dirname, 'src/styles')],
        //quietDeps: true,
        // additionalData: '' // disabled to avoid injection issues
        // If you want globals back, use relative or namespaced:
        // additionalData: `
        //   @use "../src/styles/_variables" as v;
        //   @use "../src/styles/_mixins" as m;
        // `
     // },
   // },
 // },
});
