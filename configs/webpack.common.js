const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const entryPath = path.resolve(__dirname, '../src/index.js')
const outputPath = path.resolve(__dirname, '../dist')

module.exports = {
  entry: entryPath,
  output: {
    path: outputPath,
    filename: 'app[hash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,

        dependency: { not: ['url'] },
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      // {
      //   test: /\.(png|svg|jpg|gif)$/,
      //   use: [
      //     'file-loader'
      //   ]
      // }
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      inject: true,
      template: './public/index.html',
    }),
  ],
}
