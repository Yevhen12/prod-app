import { BuildOptions } from './types/config'
import webpack from 'webpack'

export const buildResolvers = (oprions: BuildOptions): webpack.ResolveOptions => {
  return {
    extensions: ['.js', '.json', '.ts', '.tsx'],
    preferAbsolute: true,
    modules: [oprions.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {}
  }
}
