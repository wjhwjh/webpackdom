const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
  // 图片文件处理, 小于8kb图片处理为base64 
      //   {
      //     test:/\.(jpg|png|svg|gif)$/,
      //     use:[{ 
      //       loader:'url-loader',
      //       limit: 8192,
      //       name:'img/[name].[hash:8].[ext]' 
      //     }]
      //  },
      // 字体处理
module.exports = {
  entry: {
    app: './index.js',
   // print: './src/js/unit.js'
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // 每次构建之前先清空dist文件npm info webpack
    publicPath: '/dist',
  },
  module: {
    rules: [
      // css文件处理
      {
        test: /\.css$/,
        use:['style-loader', 'css-loader']
      },
      // 图片文件处理, 大于8kb 图片正常打包,打包后是一个32位的hash
      { test: /\.(png|svg|jpg|gif)$/,
        use:{ 
          loader:'file-loader' ,
          options:{
            name:'image/[name].[hash:8].[ext]'
          }
        } 
      },
       {
          test:/\.(jpg|png|svg|gif)$/,
          use: { 
            loader:'url-loader',
            options:{
              limit: 8192,
              name:'image/[name].[hash:8].[ext]'
            } 
          }
       },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ['file-loader']
       },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      }
    ]
  },
  // 插件是依赖模块
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'home.html'
    })
  ]
};