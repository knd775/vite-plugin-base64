import { defineConfig, Options } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: false,
  sourcemap: false,
  clean: true,
	minify: false,
  target: 'node18',
  format: ['cjs', 'esm'],
} satisfies Options)