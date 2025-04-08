const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.js', // ponto de entrada
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/', // necessário para roteamento com React Router
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // transpilar JS e JSX
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // suporte a CSS
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/, // imagens
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // permite importar sem escrever extensão
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 8080,
    hot: true,
    open: true,
    historyApiFallback: true, // necessário para SPA com React Router
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // usa seu HTML como base
    }),
    new webpack.HotModuleReplacementPlugin(), // atualizações em tempo real
  ],
};
