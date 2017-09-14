module.exports = {

	entry: "./src/app.jsx",

	output: {
		filename: "./public/bundle.js"
	},

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				include: /src/,
				loader: "babel-loader",
				query: {
					presets: ["react", "es2015"]
				}
			}
		]
	},
	devtool: "eval-source-map",
	watch: true,
};