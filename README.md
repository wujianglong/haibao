# 融云 RongCloud Web IM v2.0

## Environment Setup

### 初始化开发工具

```
npm install -g typescript@1.6.0beta tsd coffee-script grunt-cli karma-cli
```

如有必要，使用 `sudo npm`

### 安装依赖库

在项目根目录下执行：

```
npm install
bower install
tsd install
```

### 启动测试用例

```
grunt karma
```

### 编译开发代码

```
grunt build
```

### 发布正式代码

```
grunt release
```

### 启动本地服务器

```
grunt connect
```

### 在浏览器中打开

[http://localhost:8181](http://localhost:8181)  
执行grunt build前将app.config文件中的serverUrl和appkey改为自己应用的值

## Coding Guidelines

https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines


## 站点部署说明

```
1.修改/src/assets/app.config 中serverUrl和appkey的值（ServerUrl为后台Server地址，AppKey为从融云注册的应用key）
2.项目根目录执行命令 grunt release
3.将dist目录下的文件以静态文件形式部署在服务器上。程序入口页面index.html。
```
