const path = require("path");

module.exports = {
	mode: "development",
	devtool: "hidden-source-map",
	watch: true,
	context: path.join(__dirname, "src"),
	entry: {
		main: "./index.js",
		// sub1: "./sub1.js",
		// sub2: "./sub2.js",
	},
	output: {
		clean: true,
		//  出力ファイルのディレクト名
		path: path.join(__dirname, "dist"), // 出力ディレクト内のこの設定場所に書き出される。
		// 出力ファイル名
		filename: "[name].bundle.js",
	},
	watchOptions: {
		ignored: /node_modules/,
	},
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				parallel: true,
				terserOptions: {
					// オプションは以下のgithubを参照してください
					//https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
				},
			}),
		],
	},
};
