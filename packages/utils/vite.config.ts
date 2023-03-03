/*
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-01-12 15:21:50
 * @LastEditTime: 2023-03-02 17:01:48
 */

import { defineConfig } from "vite"
import path from "path";
import dts from 'vite-plugin-dts'

const outDir = path.resolve(__dirname, './lib')

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, './src/index.ts'),
            name: 'utils',
            formats: ['es', 'umd', 'cjs'],
        },
        outDir,
    },
    plugins: [
        {
            ...dts({
                outputDir: outDir,
                insertTypesEntry: true,
                compilerOptions: {
                    declaration: true,
                    emitDeclarationOnly: true,
                }
            }),
            apply: 'build'
        }
    ]
})