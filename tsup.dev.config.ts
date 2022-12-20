import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm','cjs'],
  target: ['node16'],
  clean: true,
  sourcemap: true,
  watch: true,
  env: {
    NODE_ENV: 'development',
  }
})