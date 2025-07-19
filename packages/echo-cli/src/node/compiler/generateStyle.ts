import { resolve } from 'node:path'
import { writeFileSync, existsSync } from 'node:fs'
import { mkdirSync } from 'node:fs'

const CWD = process.cwd()
const STYLE_PATH = resolve(CWD, '.echo/style.css')

export async function generateStyle() {
  const styleContent = `
/* Echo UI 组件库文档样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.6;
  color: #333;
}

#app {
  min-height: 100vh;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .header h1 {
    font-size: 2rem;
  }
  
  .main {
    padding: 1rem;
  }
  
  .container {
    padding: 0 1rem;
  }
}

/* 代码高亮 */
pre {
  background: #f6f8fa;
  border-radius: 6px;
  padding: 1rem;
  overflow-x: auto;
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
}

code {
  background: #f1f3f4;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-size: 0.9em;
}
`

  if (!existsSync(STYLE_PATH)) {
    writeFileSync(STYLE_PATH, styleContent.trim())
  }
} 