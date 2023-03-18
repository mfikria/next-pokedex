const path = require('path')

module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-next',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: false,
    reactDocgenTypescriptOptions: {
       shouldExtractLiteralValuesFromEnum: true,
       propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
 },
 webpackFinal: async (config) => {
    const rules = config.module.rules
    const pathToInlineSvg = path.resolve(__dirname, '../src/components/svg')

    // modify storybook's file-loader rule to avoid conflicts with svgr
    const fileLoaderRule = rules.find((rule) => rule.test.test('.svg'))
    fileLoaderRule.exclude = pathToInlineSvg

  return {
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '@emotion/core': '@emotion/react',
        '@emotion/styled': '@emotion/styled',
        '@emotion/css': '@emotion/css',
        '@emotion/babel-preset-css-prop': '@emotion/babel-preset-css-prop',
        "~": path.join(__dirname, "../src"),
      },
    },
    module: {
      ...config.module,
      rules: [
        ...(config.module.rules || []),
        {
          test: /\.(ts|tsx)$/,
          loader: require.resolve('babel-loader'),
          options: {
            presets: [require.resolve('@emotion/babel-preset-css-prop')],
          },
        },
        {
          test: /\.svg$/,
          include: pathToInlineSvg,
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                icon: true,
                ref: true,
              },
            },
          ],
        },
      ],
    },
  }},
}