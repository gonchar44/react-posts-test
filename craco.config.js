const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@pages': path.resolve(__dirname, './src/pages/index.ts'),
      '@components': path.resolve(__dirname, './src/components/index.ts'),
      '@common': path.resolve(__dirname, './src/components/common/index.ts'),
      '@slices': path.resolve(__dirname, './src/slices/index.ts'),
      '@routes': path.resolve(__dirname, './src/routes/index.ts'),
      '@types': path.resolve(__dirname, './src/types/index.ts')
    }
  }
}
