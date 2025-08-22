import path from "path";
const __dirname = import.meta.dirname;

export default {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            loader:  'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader'  
            ]
        }]
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        port: 8080,
        open: true, // Optional: opens browser automatically
        hot: true,  // Optional: enables hot module replacement
    },
    mode: 'development'
};