module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/prettier',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    // タグの最後で改行しないで
    'vue/html-closing-bracket-newline': [2, { multiline: 'always' }],

    // 無駄なスペースは削除
    'no-multi-spaces': 2,
    // 不要な空白行は削除。2行開けてたらエラー
    'no-multiple-empty-lines': [2, { max: 1 }],
    // 関数とカッコはあけない(function hoge() {/** */})
    'func-call-spacing': [2, 'never'],
    // true/falseを無駄に使うな
    'no-unneeded-ternary': 2,
    // セミコロンは禁止
    semi: [2, 'never'],
    // 文字列はシングルクオートのみ
    quotes: [2, 'single'],
    // varは禁止
    'no-var': 2,
    // jsのインデントは２
    indent: [2, 2],
    // かっこの中はスペースなし！違和感
    'space-in-parens': [2, 'never'],
    // コンソールは許可
    'no-console': 0,
    // カンマの前後にスペース入れる？
    'comma-spacing': 2,
    // 配列のindexには空白入れるな(hogehoge[ x ])
    'computed-property-spacing': 2,
    // キー
    'key-spacing': 2,
    // キーワードの前後には適切なスペースを
    'keyword-spacing': 2,
    'vue/multiline-html-element-content-newline': [
      'error',
      {
        ignoreWhenEmpty: true
      }
    ]
    // 'vue/html-closing-bracket-newline': [
    //   'error',
    //   {
    //     singleline: 'never'
    //     // multiline: 'always'
    //   }
    // ]
  }
}
