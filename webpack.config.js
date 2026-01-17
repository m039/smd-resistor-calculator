import path from 'node:path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/browser.js',
  experiments: {
    outputModule: true  // Обязательная опция для ES Modules
  },
  output: {
    filename: 'smd-resistor-calculator.js',
    path: path.resolve(__dirname, 'dist'),
    library: { 
      type: 'module'
    },
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.ts?$/, // Process .ts and .tsx files
        use: 'ts-loader', // Use ts-loader for transpilation
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    port: 8080,
    open: true,
    hot: true,
    compress: true,
  },
  stats: {
    colors: true,
    errorDetails: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // ваш шаблон
      filename: 'index.html'     // имя выходного файла
    })
  ],
  mode: 'production'
};