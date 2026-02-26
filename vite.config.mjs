import path from 'path';
import { fileURLToPath } from 'url';
// import { reactRouter } from '@react-router/dev/vite';
import vike from 'vike/plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  base: '/',
  build: {
    outDir: 'build/client/',
    // Ensure CSS is properly handled in build
    cssCodeSplit: true,
    rollupOptions: {
      // assetFileNames config removed for Vike compatibility
    }
    // ssr property removed for Vike compatibility
  },
  plugins: [
    vike(),
  ],
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, './src/styles'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Tells Sass to look in src/styles/ for partials
        includePaths: [path.resolve(__dirname, 'src/styles')],
        // Optional: silence deprecation warnings during dev
        quietDeps: true,
        additionalData: `
       //   @use "@styles/_variables" as *;
     //     @use "@styles/_fonts" as *;
       //   @use "@styles/_mixins" as *;
       //   @use "@styles/_animations" as *;
       //   @use "@styles/_globals" as *;
        `,
      },
    },
  },
};
