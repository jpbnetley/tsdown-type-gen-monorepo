import { defineConfig } from 'tsdown'

export default defineConfig({
  exports: true,
  entry: {
    log: 'src/log/index.ts',
    cache: 'src/cache/index.ts',
  },
})
