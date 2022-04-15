const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
      app:'./index.js',
      print:'./src/js/unit.js'},
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // 每次构建之前先清空dist文件npm info webpack
    publicPath: '/',
  },
  module:{
      rules:[
          // css文件处理
          {
              test:/\.css$/,
              use:['style-loader','css-loader']
          },
          // 图片文件处理
          {
              test:/\.(jpg|png|svg|gif)$/,
              use:['file-loader']
          },
          // 字体处理
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
              'file-loader'
            ]
          }
      ]
  },
  // 插件是依赖模块
  plugins:[
    new HtmlWebpackPlugin({
        template:'src/index.html',
        filename:'home.html'
    })
  ]
};