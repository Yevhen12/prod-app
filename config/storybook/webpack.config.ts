import { BuildPaths } from './../build/types/config';
import webpack, { RuleSetRule, ModuleOptions, DefinePlugin } from "webpack"
import path from 'path';


export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    entry: '',
    html: '',
    src: path.resolve(__dirname, '../', '../', 'src')
  }

  config.resolve?.modules?.push(paths.src)
  config.resolve?.extensions?.push('.ts', '.tsx')

  config?.module?.rules?.push(
    {
      test: /\.s[ac]ss$/i,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: (resPath: string) => Boolean(resPath.includes('.module.')),
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            },
          },
        },
        'sass-loader',
      ],
    }
  );

  // modify storybook's file-loader rule to avoid conflicts with your inline svg
  // config?.module?.rules?.forEach((rule: RuleSetRule) => {
  //   if (rule?.oneOf) {
  //     // Iterate over the oneOf array and look for the file loader
  //     rule.oneOf.forEach((oneOfRule: any) => {
  //       if (oneOfRule.loader && oneOfRule?.loader?.test('file-loader')) {
  //         // Exclude the inline SVGs from the file loader
  //         oneOfRule?.exclude?.push(/\.inline\.svg$/);
  //       }
  //     });
  //     // Push your SVG loader onto the end of the oneOf array
  //     rule.oneOf.push({
  //       test: /\.svg$/,
  //       use: '@svgr/webpack', // use whatever SVG loader you need
  //     });
  //   }
  // });

  // modify storybook's file-loader rule to avoid conflicts with your inline svg
  // const fileLoaderRule = config?.module?.rules?.find((rule: any) => rule.test.test('.svg')) as RuleSetRule;
  // fileLoaderRule.exclude = /\.inline.svg$/;

  // config?.module?.rules?.push({
  //   test: /\.inline.svg$/,
  // })

  // eslint-disable-next-line no-param-reassign
  if(config?.module?.rules) {
    config.module.rules = config?.module?.rules?.map((rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }
  
      return rule;
    });
  
    config?.module?.rules?.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
  }

  config.plugins?.push(new DefinePlugin({
    __IS_DEV__: true
  }))


  return config
}