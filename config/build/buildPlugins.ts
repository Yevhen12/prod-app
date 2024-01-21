import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import webpack from 'webpack'
import { BuildOptions } from './types/config'
import CircularDependencyPlugin from 'circular-dependency-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'

export const buildPlugins = ({ paths, isDev, project, apiUrl }: BuildOptions): webpack.WebpackPluginInstance[] => {
  const isProd = !isDev
  const plugins = [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __PROJECT__: JSON.stringify(project),
      __API__: JSON.stringify(apiUrl)
    }),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true
        },
        mode: 'write-references'
      }
    })
  ]
  if (isDev) {
    plugins.push(new webpack.HotModuleReplacementPlugin())
    plugins.push(new ReactRefreshWebpackPlugin())
    plugins.push(new BundleAnalyzerPlugin({
      openAnalyzer: false
    }))
  }

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css'
      })
    )
    plugins.push(
      new CopyPlugin({
        patterns: [
          { from: paths.locales, to: paths.buildLocales }
        ]
      })
    )
  }
  return plugins
}
