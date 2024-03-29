const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

const dotenv = require('dotenv').config({ path: __dirname + '/.env' });
const activeBookCorePath = path.resolve(__dirname, 'node_modules/activeBook-core');

module.exports = (env = {}, argv) => {
  const webpackMode = argv.mode;
  const { analyze, mobile, demo } = env;
  const isProd = webpackMode === 'production';

  const plugins = [
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
      },
    }),
    new DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed),
      'isDemoMode': JSON.stringify(demo),
    }),
    new HtmlWebpackPlugin({
      template: './public/index.ejs',
      isMobile: !!mobile,
      isProd,
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'assets', to: 'assets' },
        { from: path.resolve(activeBookCorePath, './assets'), to: 'assets' },
      ],
    }),
  ];

  if (analyze) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  const rules = [
    {
      test: /\.m?js/,
      resolve: {
        fullySpecified: false,
      },
    },
    {
      test: /\.tsx?$/,
      use: ['babel-loader', {
        loader: 'ifdef-loader',
        options: {
          env: env,
        },
      }],
      exclude: /node_modules/,
    },
    {
      test: /\.s?css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[name]__[local]__[hash:base64:5]',
              auto: (resourcePath) => !resourcePath.includes('react-toastify'),
            },
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              ident: 'postcss',
              plugins: [
                require('autoprefixer'),
              ],
            },
          },
        },
        { loader: 'sass-loader' },
      ],
    },
    {
      test: /\.svg$/,
      oneOf: [
        {
          resourceQuery: /sprite/,
          use: [
            {
              loader: 'url-loader',
              options: {
                esModule: false,
              },
            },
          ],
        },
        {
          use: ['@svgr/webpack'],
        },
      ],
    },
    {
      test: /\.(jpeg|jpg|png|docx)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            esModule: false,
          },
        },
      ],
    },
    {
      test: /\.(woff|woff2|eot|ttf)$/,
      use: ['url-loader?limit=100000'],
      exclude: [path.join(activeBookCorePath, './assets/fonts')],
    },
  ];

  if (mobile) {
    rules.push({
      test: /\.(tsx?|json)$/,
      loader: 'string-replace-loader',
      options: {
        search: '/assets',
        replace: 'file:///android_asset/www/assets',
        flags: 'g',
      },
    });
  }

  const buildDir = path.join(__dirname, (mobile ? 'cordova/www' : 'dist'));

  return {
    entry: ['core-js/stable', './src/index'],
    mode: webpackMode,
    devtool: !isProd ? 'eval-source-map' : false,
    devServer: {
      static: {
        directory: buildDir,
      },
      port: 3001, // todo
      historyApiFallback: true,
      hot: true,
      liveReload: false,
      // https: true, // доступ к камере работает только через https
    },
    output: {
      // пустой publicPath нужен для кордовы. она не может найти bundle.min.js, если его путь начинается с '/'
      publicPath: mobile ? '' : '/',
      path: buildDir,
      filename: '[name].[contenthash].js',
    },
    target: !isProd ? 'web' : ['web', 'es5'],
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.scss'],
      modules: [
        path.resolve(__dirname, './src'),
        path.resolve(__dirname, './node_modules'),
        path.resolve(__dirname, './assets'),
      ],
      alias: {
        'styles': path.resolve(activeBookCorePath, './styles'),
      },
      fallback: {
        crypto: false,
      },
    },
    module: {
      rules: rules,
    },
    plugins: plugins,
    optimization: {
      minimizer: [new TerserPlugin({ extractComments: false })],
    },
  };
};
