const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    alias: {
      react: path.join(__dirname, 'node_modules', 'react'),
    },
  },
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000
	},
	optimization: {
		usedExports: true,
	},
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
			'style-loader',
			'css-loader',
        ],
	  },
		{
        test: /\.scss$/,
        use: [
			'style-loader',
			'css-loader',
			'scss-loader',
        ],
      },
	  {
        test: /\.sass$/,
        use: [
			'style-loader',
			'css-loader',
			'sass-loader',
        ],
      },
	  {
        test: /\.less$/,
        use: [
			'style-loader',
			'css-loader',
			'less-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
	new CopyPlugin({
		patterns: [
			{from: "public", to: "."}
		],
	}),
  ],
};
