const { Configuration } = require('webpack')
const path = require('path')
/**
 * @type {Configuration} //配置智能提示
 */
const config = {
  entry: "./src/index.ts", //入口
  mode: "none",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, 'lib'),
    library: 'wujievue', // 全局变量名
    libraryTarget: 'umd', // 统一UMD规范 只有在开发库中使用 
    umdNamedDefine: true
  }, // 出口文件 
  externals: {
    vue: "vue",
    wujie: "wujie"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "swc-loader"
      }
    ]
  }
}

module.exports = config