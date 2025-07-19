import defineConfig from '@antfu/eslint-config'

export default defineConfig({
  typescript: true,
  vue: true,
  formatters: {
    css: true,
    html: true,
    markdown: 'prettier',
  },
  ignores: [
    'node_modules',
    'dist',
    '.vscode',
    '.idea',
    '.git',
    '.DS_Store',
    '*.log',
    '*.md',
    'packages/echo-cli/lib/**',
    'packages/echo-ui/.echo/**',
  ],
})
