import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'ttexs7',

  e2e: {
    setupNodeEvents (on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:4001/'
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack'
    }
  }
})
