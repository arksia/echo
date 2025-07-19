import { createServer } from 'vite'
import { ensureDirSync } from 'fs-extra'
import { buildSiteEntry } from '../compiler/compileSiteEntry.js'
import { generateApp } from '../compiler/generateApp.js'
import { generateStyle } from '../compiler/generateStyle.js'
import { generateHtml } from '../compiler/generateHtml.js'
import { getDevConfig } from '../../config/vite.config.js'
import { resolve } from 'path'

const CWD = process.cwd()
const SRC = '.echo'
const SRC_DIR = resolve(CWD, SRC)

export async function dev() {
  // set up env
  process.env.NODE_ENV = 'development'
  // ensure src dir exists
  ensureDirSync(SRC_DIR)
  // generate all necessary files
  await buildSiteEntry()
  await generateApp()
  await generateStyle()
  await generateHtml()
  
  // 调试信息
  console.log('📁 生成的文件目录:', SRC_DIR)
  console.log('📄 HTML 文件路径:', resolve(CWD, '.echo/index.html'))
  
  // create vite server instance
  const server = await createServer(getDevConfig())
  // start server
  await server.listen()
  server.printUrls()
}
