import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { cwd } from 'node:process'

const CWD = cwd()
const SITE_ENTRY_PATH = resolve(CWD, '.echo/site-entry.ts')

// create .echo directory if it doesn't exist
const dir = resolve(CWD, '.echo')
if (!existsSync(dir)) {
  mkdirSync(dir, { recursive: true })
}

export async function buildSiteEntry() {
  const entryContent = `
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

createApp(App).mount('#app')
`

  if (!existsSync(SITE_ENTRY_PATH)) {
    writeFileSync(SITE_ENTRY_PATH, entryContent.trim())
  }
}
