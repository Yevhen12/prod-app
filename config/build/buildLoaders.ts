import { BuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const { isDev } = options
  return [
    {
      test: /\.m?(js|ts|tsx|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },
    {
      test: /\.(ts|tsx)$/i,
      loader: 'ts-loader',
      exclude: ['/node_modules/']
    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: (path: string) => path.includes('.module.'),
              localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
            }

          }
        },
        'sass-loader'
      ]
    },
    {
      test: /\.svg$/,
      use: ['@svgr/webpack']
    },
    {
      test: /\.(png|jpe?g|gif|woff2|woff)$/i,
      use: [
        {
          loader: 'file-loader'
        }
      ]
    }
  ]
}
