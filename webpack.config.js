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
        }]
    },
    mode: 'development'
};