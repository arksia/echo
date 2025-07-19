import { resolve } from 'node:path'
import { writeFileSync, existsSync } from 'node:fs'
import { mkdirSync } from 'node:fs'

const CWD = process.cwd()
const APP_PATH = resolve(CWD, '.echo/App.vue')

export async function generateApp() {
  const appContent = `
<template>
  <div id="app">
    <header class="header">
      <h1>Echo UI 组件库</h1>
      <p>一个现代化的 Vue 3 组件库</p>
    </header>
    
    <main class="main">
      <div class="container">
        <h2>欢迎使用 Echo UI</h2>
        <p>这是一个组件库文档系统的起点</p>
        <div class="demo-section">
          <h3>示例组件</h3>
          <div class="demo-card">
            <p>这里将展示组件示例</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
// 组件库文档逻辑将在这里实现
</script>

<style scoped>
.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  text-align: center;
}

.header h1 {
  margin: 0;
  font-size: 2.5rem;
  font-weight: 300;
}

.header p {
  margin: 0.5rem 0 0;
  opacity: 0.9;
}

.main {
  padding: 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.demo-section {
  margin: 2rem 0;
}

.demo-card {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1rem 0;
}

h2 {
  color: #333;
  margin-bottom: 1rem;
}

h3 {
  color: #555;
  margin-bottom: 0.5rem;
}
</style>
`

  if (!existsSync(APP_PATH)) {
    writeFileSync(APP_PATH, appContent.trim())
  }
} 