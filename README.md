# eslint-config-light


## 1. 如何使用

`.eslintrc.js`文件：

```js
module.exports = {
  extends: ['eslint-config-light'],
};
```


## 2. FAQ


### 2.1. Eslint版本不能太低（比如7.30.0），否则不支持import等插件。

报错信息大致如下：

```
AssertionError: ImportDeclaration should appear when the mode is ES6 and in the module context.
```

参考：https://github.com/eslint/eslint/issues/4344



### 2.2. @typescript-eslint版本不能低于5，否则不能与eslint@8一起使用

报错信息大致如下：

```
TypeError: Failed to load plugin '@typescript-eslint' declared in '.eslintrc.json': Class extends value undefined is not a constructor or null
```

解决方法：

```ts
"@typescript-eslint/eslint-plugin": "^5.0.0",
"@typescript-eslint/parser": "^5.0.0",
```

参考：

1. https://github.com/eslint/eslint/issues/15149
2. https://github.com/typescript-eslint/typescript-eslint/issues/3738
3. https://stackoverflow.com/questions/69513869/eslint-8-0-0-failed-to-load-plugin-typescript-eslint


### 2.3. 与业务库的冲突

下面是用本插件的经验。

业务库可以删除以下依赖，以及`package-lock.json`，然后重新`npm install`。

```
eslint
eslint-plugin-*
eslint-config-*
babel-eslint
@typescript-eslint/eslint-plugin
@typescript-eslint/parser
```

### 2.4. 搭配 eslint-plugin-light

如果想同时使用 `eslint-plugin-light` 插件，需要这样配置：

```js
module.exports = {
  root: true,
  extends: ['plugin:@tencent/light/recommended', 'eslint-config-light'],
}
```

注意顺序，`eslint-plugin-light` 插件在前，`eslint-config-light` 扩展在后。否则会报错：

```
Error: Error while loading rule '@typescript-eslint/dot-notation': 
You have used a rule which requires parserServices to be generated. 
You must therefore provide a value for the "parserOptions.project" 
property for @typescript-eslint/parser.
```


## 3. 发布

不需要手动升版本，执行以下命令：

```bash
npx standard-version --release-as patch

npm publish
```
