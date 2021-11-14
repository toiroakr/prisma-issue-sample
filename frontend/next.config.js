const path = require('path')

/** @type {import('next').NextConfig} */
module.exports = {
  // reactStrictMode: true,
  webpack(config, { defaultLoaders }) {
    config.resolve.alias['@model'] = path.join(__dirname, '..', 'model')

    config.resolve.extensions.push('.ts', '.tsx')
    config.module.rules.push({
      test: /\.tsx?$/,
      include: [path.join(__dirname, '..', 'model')],
      exclude: /node_modules/,
      use: [
        defaultLoaders.babel,
        {
          loader: 'ts-loader'
        }
      ]
    })
    return config
  },
}
