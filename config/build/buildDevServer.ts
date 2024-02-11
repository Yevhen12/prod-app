import { BuildOptions } from './types/config'
import { Configuration as DevServerConfiguration } from 'webpack-dev-server'

export const buildDevServer = (options: BuildOptions): DevServerConfiguration => {
  return {
    host: '0.0.0.0',
    port: options.port,
    open: true,
    hot: true,
    historyApiFallback: true
  }
}
