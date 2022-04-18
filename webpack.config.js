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
    publicPath: 'dist/',
  },
  module:{
      rules:[
          // css文件处理
          {
              test:/\.css$/,
              use:['style-loader','css-loader']
          },
          // 图片文件处理, 大于8kb 图片正常打包,打包后是一个32位的hash
          {
              test:/\.(jpg|png|svg|gif)$/,
              use:['file-loader']
          },
           // 图片文件处理, 小于8kb图片处理为base64 
        //   {
        //     test:/\.(jpg|png|svg|gif)$/,
        //     use:{ 
        //       loader:'url-loader',
        //       limit: 8192,
        //       name:'img/[name].[hash:8].[ext]' 
        //     }
        //  },
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