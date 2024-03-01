import { BuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import babelRemovePropsPlugin from '../babel/babelRemovePropsPlugin'

const buildBabelLoader = ({ isTsx, isDev }: { isTsx: boolean, isDev: boolean }) => {
  const isProd = !isDev
  return {
    test: isTsx ? /\.m?(tsx|jsx)$/ : /\.m?(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        presets: ['@babel/preset-env'],
        plugins: [
          ['@babel/plugin-transform-typescript', { isTSX: isTsx }],
          '@babel/plugin-transform-runtime',
          isTsx && isProd && [
            babelRemovePropsPlugin,
            {
              props: ['data-testid']
            }
          ]
        ].filter(Boolean)
      }
    }
  }
}

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const { isDev } = options
  const codeBabelLoader = buildBabelLoader({ isTsx: false, isDev })
  const tsxBabelLoader = buildBabelLoader({ isTsx: true, isDev })
  return [
    codeBabelLoader,
    tsxBabelLoader,
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
      use: [{
        loader: '@svgr/webpack',
        options: {
          icon: true,
          svgoConfig: {
            plugins: [
              {
                name: 'preset-default',
                params: {
                  overrides: {
                    removeViewBox: false
                  }
                }
              },
              {
                name: 'convertColors',
                params: {
                  currentColor: true
                }
              }
            ]
          }
        }
      }]
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
