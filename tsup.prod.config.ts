import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm','cjs'],
  target: ['node16'],
  clean: true,
  minify: true,
  dts: true,
  env: {
    NODE_ENV: 'production'
  },
})