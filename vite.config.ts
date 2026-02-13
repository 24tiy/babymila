import { defineConfig } from 'vite'
import path from 'path'
import fs from 'fs'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

/**
 * Vite plugin to resolve `figma:asset/...` imports.
 * Maps `figma:asset/<hash>.<ext>` → `src/assets/<hash>.<ext>`
 * so the project builds outside of Figma's environment.
 */
function figmaAssetPlugin() {
  const assetsDir = path.resolve(__dirname, 'src/assets')

  return {
    name: 'vite-plugin-figma-asset',
    enforce: 'pre' as const,

    resolveId(source: string) {
      if (source.startsWith('figma:asset/')) {
        const filename = source.replace('figma:asset/', '')
        const filePath = path.join(assetsDir, filename)

        // If the actual asset file exists, use it
        if (fs.existsSync(filePath)) {
          return filePath
        }

        // Return a virtual module ID for missing assets (generates a placeholder)
        return `\0figma-asset-placeholder:${filename}`
      }
      return null
    },

    load(id: string) {
      if (id.startsWith('\0figma-asset-placeholder:')) {
        const filename = id.replace('\0figma-asset-placeholder:', '')
        const ext = path.extname(filename).toLowerCase()

        // For image files, export a 1x1 transparent pixel as placeholder
        if (['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg'].includes(ext)) {
          // 1x1 transparent PNG
          const placeholderDataUri =
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPj/HwADBwIAMCbHYQAAAABJRU5ErkJggg=='
          return `export default "${placeholderDataUri}";`
        }

        return `export default "";`
      }
      return null
    },
  }
}

// For GitHub Pages: repo name becomes the base path
// Set BASE_URL env var in CI, or defaults to '/' for local dev
const base = process.env.BASE_URL || '/'

export default defineConfig({
  base,
  plugins: [
    figmaAssetPlugin(),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  assetsInclude: ['**/*.svg', '**/*.csv'],
})
