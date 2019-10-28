# 融云 RongCloud Web IM v2.0

## Environment Setup

### 初始化开发工具

```
npm install -g typescript coffee-script grunt-cli
```

如果无权限, 请使用 `sudo npm`

### 修改配置

配置文件: **src/app.config.js**

```js
window.__sealtalk_config = {
  serverUrl: "http://localhost:8585", // 此处填写您部署的 App Server 地址
  appkey: "appkey" // 此处填写您的融云 AppKey
};
```

### 安装依赖库

在项目根目录下执行：

```
npm install
bower install
```

### 编译开发代码

执行成功后, 将在项目根目录生成 build 文件夹, 直接运行 build/index.html 即可打开页面

build 内为只合并不压缩的代码, 适用于开发者调试

```
grunt build
```

### 发布正式代码

执行成功后, 将在项目根目录生成 dist 文件夹, 直接运行 build/index.html 即可打开页面

dist 内为压缩合并后的代码, 占空间更小, 资源加载更快, 适用于生产环境

```
grunt release
```

### 启动本地服务器

```
grunt connect
```

### 在浏览器中打开

[http://localhost:8181](http://localhost:8181)  

执行 grunt build 前需将 `app.config` 文件中的 serverUrl 和 appkey 改为自己应用的值

## Coding Guidelines

https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines

## 注意事项

1. 必须修改 `src/assets/app.config` 中 serverUrl 和 appkey 的值
2. 一般开发模式使用 grunt build 生成的项目文件(仅合并, 不压缩)调试
3. 一般生产环境使用 grunt release 生成的项目文件(压缩合并后的文件)
4. 此开源项目为融云提供给开发者的体验 Demo, 开发者需了解源码后再进行二次开发, 否则二次开发过程中遇到问题将难以解决
5. SealTalk Server 开源项目参考: [https://github.com/sealtalk/sealtalk-server](https://github.com/sealtalk/sealtalk-server)