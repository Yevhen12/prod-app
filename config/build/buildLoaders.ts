import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'



export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const { isDev } = options
  return [
    {
      test: /\.(ts|tsx)$/i,
      loader: "ts-loader",
      exclude: ["/node_modules/"],
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
              localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]"
            },

          },
        },
        "sass-loader",
      ],
    },
    {
      test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
      type: "asset",
    },
  ]
}