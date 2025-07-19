import { resolve } from 'node:path'
import process from 'node:process'
import { ensureDirSync } from 'fs-extra'
import { createServer } from 'vite'
import { getDevConfig } from '../../config/vite.config.js'
import { buildSiteEntry } from '../compiler/compileSiteEntry.js'
import { generateApp } from '../compiler/generateApp.js'
import { generateHtml } from '../compiler/generateHtml.js'
import { generateStyle } from '../compiler/generateStyle.js'

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

  // create vite server instance
  const server = await createServer(getDevConfig())
  // start server
  await server.listen()
  server.printUrls()
}
