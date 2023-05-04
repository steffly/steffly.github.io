const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const appDirectory = __dirname;

const babelLoaderConfiguration = {
  test: /\.(ts|tsx|js|jsx)?$/,
  include: [
    path.resolve(appDirectory, './src'),
    path.resolve(appDirectory, './node_modules'),
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: false,
      presets: [
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-flow",
        "module:metro-react-native-babel-preset",
      ],
      plugins: [["@babel/plugin-proposal-private-methods", { "loose": true }]]
    }
  }
};

const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png|svg)$/,
  use: {
    loader: 'url-loader',
    options: {
      name: '[name].[ext]',
      esModule: false,
    }
  }
};

const htmlLoader = {
  test: /\.html$/i,
  loader: "html-loader",
};

module.exports = (env) => {
  return {
    mode: "development",
    devtool: "source-map",

    devServer: {
      hot: true,
      static: {
        directory: path.resolve(appDirectory, "dist"),
      }
    },
    
    entry: [
      path.resolve(__dirname, 'src/index.web.js'),
      path.resolve(__dirname, 'callback.html'),
    ],

    output: {
      path: path.join(appDirectory, "dist"),
      publicPath: '/',
    },

    module: {
      rules: [
        babelLoaderConfiguration,
        imageLoaderConfiguration,
        htmlLoader,
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(appDirectory, 'templates/hostTemplate.html'),
        filename: 'index.html',
        title: 'example'
      }),
      new webpack.EnvironmentPlugin(env),
    ],

    resolve: {
      alias: {
        'react-native$': 'react-native-web',
      },
      extensions: [ '.jsx', '.js', '.ts', '.tsx' ],
      modules: ['node_modules'],
    },
  }
}
