#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const targetDir = process.argv[2] || 'my-app';
const templateDir = path.join(__dirname, 'template');

if (fs.existsSync(targetDir)) {
  console.error(`❌ 文件夹 "${targetDir}" 已存在！`);
  process.exit(1);
}

fs.mkdirSync(targetDir);
fs.cpSync(templateDir, targetDir, { recursive: true });
console.log(`✅ 项目已创建在 ${targetDir}`);

// 可选：自动安装依赖
process.chdir(targetDir);
execSync('npm install', { stdio: 'inherit' });
