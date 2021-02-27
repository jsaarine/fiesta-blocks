const path = require("path");
const glob = require("glob");

module.exports = {
	entry: glob.sync("./src/**/*.js").reduce((acc, path) => {
		const entry = path.replace("/src", "");
		acc[entry] = path;
		return acc;
	}, {}),
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "./[name]",
	},
	module: {
		rules: [{
			test: /\.m?js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: "babel-loader",
				options: {
					presets: ["@babel/preset-react", "@babel/preset-env"]
				}
			}
		}]
	},
	mode: "production",
};
