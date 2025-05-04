import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vitest/config"
import svgr from 'vite-plugin-svgr';
import {visualizer} from "rollup-plugin-visualizer";

export default defineConfig({
  assetsInclude: [
      '**/*.png',
      '**/*.jpg',
      '**/*.svg'
  ],
  plugins: [
      react(),
      svgr(),
      visualizer({
        filename: './dist/stats.html',
        open: true,
        gzipSize: true,
        brotliSize: true
      }),
  ],
  build: {
    emptyOutDir: true,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          mobx: ['mobx', 'mobx-react-lite'],
          radix: [
            '@radix-ui/react-accordion',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-icons',
            '@radix-ui/react-label',
            '@radix-ui/react-popover',
            '@radix-ui/react-select',
            '@radix-ui/react-slider',
            '@radix-ui/react-slot',
            '@radix-ui/react-switch',
            '@radix-ui/react-toast',
          ],
          ui: [
            'clsx',
            'lucide-react',
            'tailwind-merge',
            'tailwindcss-animate',
            'class-variance-authority',
            'cmdk',
            'vaul'
          ],
          forms: [
            'react-hook-form',
            '@hookform/resolvers',
            'zod',
            '@react-input/mask',
            'react-input-mask',
          ],
          maps: ['@pbe/react-yandex-maps'],
          network: ['axios', '@tanstack/react-query'],
          date: ['date-fns'],
          router: ['react-router-dom'],
          carousel: ['embla-carousel-react'],
        }
      }
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/app/setupTests.ts',
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})