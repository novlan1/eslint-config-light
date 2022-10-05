module.exports = {
  // 解决路径引用ts文件报错的问题
  'import/resolver': {
    node: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
    },
    // 解决tsconfig下的path别名导致eslint插件无法解决的bug
    typescript: {
      alwaysTryTypes: true,
    },
  },
  'import/ignore': ['node_modules'],
};
