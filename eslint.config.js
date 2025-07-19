import defineConfig from '@antfu/eslint-config'

export default defineConfig({
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
