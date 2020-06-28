module.exports = {
  transpileDependencies: ['vuetify'],
  pages: {
    index: {
      // 最初に実行されるファイル名
      entry: 'src/main.js',
      // タイトルの設定
      // <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Salty lychee'
    }
  }
}
