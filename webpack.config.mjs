import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import process from 'process';

export default {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(import.meta.dirname, 'dist'),
    publicPath: '/',
    filename: 'output.js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }],
              '@babel/preset-typescript',
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      process: { env: {} },
    }),
    new webpack.EnvironmentPlugin({
      API_URL: 'nowheresville',
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    port: 9001,
    open: true,
    hot: true,
  },
};
