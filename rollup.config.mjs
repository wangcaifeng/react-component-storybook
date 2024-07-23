import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import json from '@rollup/plugin-json'
import postcss from 'rollup-plugin-postcss'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default {
  input: 'src/index.ts', // 入口文件
  output: [
    {
      file: 'dist/cjs/index.js', // CommonJS 输出
      format: 'cjs',
      sourcemap: true
    },
    {
      file: 'dist/esm/index.js', // ESModule 输出
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(), // 处理 peerDependencies
    postcss({
      extract: true,
      minimize: true,
      sourceMap: true,
      // modules: true,
      plugins: [tailwindcss(), autoprefixer()]
    }), // 处理 CSS 文件
    resolve({ extensions: ['.js', '.ts', '.tsx'] }), // 解析 node_modules 中的依赖
    commonjs(), // 转换 CommonJS 模块
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: './dist/types',
      rootDir: 'src'
    }), // 编译 TypeScript
    json() // 处理 JSON 文件
  ],
  external: ['react', 'react-dom']
}
