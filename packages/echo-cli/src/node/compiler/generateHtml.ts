import { resolve } from 'node:path'
import { writeFileSync, existsSync } from 'node:fs'
import { mkdirSync } from 'node:fs'

const CWD = process.cwd()
const HTML_PATH = resolve(CWD, '.echo/index.html')

export async function generateHtml() {
  const htmlContent = `<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Echo UI 组件库</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="./site-entry.ts"></script>
  </body>
</html>`

  if (!existsSync(HTML_PATH)) {
    writeFileSync(HTML_PATH, htmlContent.trim())
  }
} 