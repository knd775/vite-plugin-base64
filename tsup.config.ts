import { defineConfig, Options } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: false,
  sourcemap: true,
  clean: true,
	minify: true,
  target: 'node18',
  format: ['cjs', 'esm'],
} satisfies Options)