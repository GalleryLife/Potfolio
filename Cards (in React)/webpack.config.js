const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const reactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');


let mode = 'development';
let target = 'web'
if (process.env.NODE_ENV === 'production') {// Режим production, если 
		// при запуске вебпака было указано --mode=production
		mode = 'production'
		target = 'browserslist'
}

const plugins = [
		new htmlWebpackPlugin({
				template: './src/index.html',
		}),
		new miniCssExtractPlugin({
				filename: '[name].[contenthash].css'
		})
]

if (process.env.SERVE) {// Используем плагин только если запускаем devServer
		plugins.push(new reactRefreshWebpackPlugin())
}// Данный код должен быть размещен после объявления массива plugins

module.exports = {
		mode,
		target,
		plugins,
		entry: {
				main: './src/index.js'
		},
		output: {
				path: path.resolve(__dirname, 'dist'),// Директория, в которой будет
				// размещаться итоговый бандл, папка dist в корне приложения
				assetModuleFilename: 'assets/[hash][text][query]',// Все ассеты будут
				// складываться в dist/assets
				clean: true,// Очищает директорию dist перед обновлением бандла
				// Свойство стало доступно с версии 5.20.0, до этого использовался
				// CleanWebpackPlugin
				publicPath: '/',
		},
		module: {
				rules: [
						{
								test: /\.(html)$/,
								use: ['html-loader']
						},
						{
								test: /\.(scss|css)$/i,
								use: [
										miniCssExtractPlugin.loader,
										'css-loader',
										'postcss-loader',
										'sass-loader',
								]
						},
						{
								test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
								type: mode === 'production' ? 'asset' : 'asset/resource'// В продакшен режиме
								// изображения размером до 8кб будут инлайнится в код
								// В режиме разработки все изображения будут помещаться в dist/assets
						},
						{
								test: /\.(woff2?|eot|ttf|otf)$/i,
								type: 'asset/resource'
						},
						{
								test: /\.jsx?$/,
								exclude: /node_modules/,
								use: {
										loader: 'babel-loader',
										options: {
												cacheDirectory: true,
										}
								}
						},
				],
		},
		devtool: 'source-map',
		devServer: {
				historyApiFallback: true,
				hot: false, // Включает автоматическую перезагрузку страницы при изменениях
		}
}