import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export function getDevConfig() {
  const projectRoot = require('node:process').cwd()
  const echoDir = resolve(projectRoot, '.echo')
  console.log('projectRoot', projectRoot)
  console.log('echoDir', echoDir)
  return defineConfig({
    plugins: [vue()],
    root: echoDir,
    server: {
      port: 3000,
      open: true,
    },
    build: {
      outDir: 'lib',
      rollupOptions: {
        input: {
          main: resolve(echoDir, 'index.html'),
        },
      },
    },
  })
}
