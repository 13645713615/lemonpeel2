/*
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-01-04 17:38:24
 * @LastEditTime: 2023-03-02 22:21:06
 */
import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import path from "path";

const outDir = path.resolve(__dirname, './lib')

export default defineConfig({
  plugins: [vue(), {
    ...dts({
      outputDir: outDir,
      insertTypesEntry: true,
      compilerOptions: {
        declaration: true,
        emitDeclarationOnly: true,
      }
    }),
    apply: 'build'
  }],
  resolve: {
    alias: {
      "@lemonpeel2/hooks": path.resolve(__dirname, "./src/index.ts"),
    },
  },
  optimizeDeps: {
    include: ['lodash'],
    exclude: ['vue-demi'],
  },
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'hooks',
      // the proper extensions will be added
      fileName: 'hooks',
    },
    outDir,
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue-demi'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
  },

});
