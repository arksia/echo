import defineConfig from '@antfu/eslint-config'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default defineConfig({
  typescript: true,
  vue: true,
  eslintPluginPrettierRecommended,
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
