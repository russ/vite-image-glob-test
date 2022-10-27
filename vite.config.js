import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ command }) => ({
  build: {
    outDir: 'public',
    emptyOutDir: false, // If true, all public/* including images folder will be deleted every build
    manifest: true,
    rollupOptions: {
      input: ['src/js/index.ts'],
      output: {
        entryFileNames: 'js/[name].js',
        assetFileNames: ({name}) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')){
            return 'images/[name].[hash][extname]';
          }
          return '[name].[hash][extname]';
        },
      },
    }
  }
}));
