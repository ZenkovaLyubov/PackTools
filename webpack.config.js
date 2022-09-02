const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './js/index.js',
       
    output: {
        filename: 'index.[contenthash].js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'img-optimize-loader',
                options: {
                    name: '[path][name].[ext]',
                    compress:{
                        mode: 'high',
                        webp: true,
                        gifsicle: true,
                        disableOnDevelopment: false
                    }
                    
                }
            },
            {
                test: /\.(mp[3|4])$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                }
            },
           
            {
                    test: /\.s[ac]ss$/i,
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
                }
        ]
    },
      plugins: [
       new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'index.html') }),
        new MiniCssExtractPlugin({  
            filename: 'style.[contenthash].css'
            }),
           
    ],
    devServer: {
        hot: true,
       
      },

}