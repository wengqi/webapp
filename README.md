# 概要
基于jquery等常规技术的前端工程架构范例。

# 目录结构
```
webapp
    |-- app  //开发目录
    |    |-- images  //由于实际项目大部分静态资源都放在静态资源服务器，故项目中只会有images
    |    |-- build  //js、css编译输出目录
    |    |-- mock  //模拟后台数据，格式为标准json文件
    |    |-- styles  //公共样式，和每个模块不相关的样式
    |    |-- core  //核心公共函数
    |    |      |-- common.js  //业务相关公共方法
    |    |      |-- config.js  //定义系统配置
    |    |      |-- constant.js  //定义系统常量
    |    |      |-- services.js  //服务类
    |    |      |-- utils.js  //工具类
    |    |      |-- routes.js  //前端路由js
    |    |-- modules  //功能模块
    |    |      |-- page1  //模块1目录（根据业务模块重命名）
    |    |      |      |-- page1.html
    |    |      |      |-- page1.js
    |    |      |      |-- page1.css
    |    |      |      |-- _page1.tpl
    |    |      |-- page2  //模块2目录（根据业务模块重命名）
    |    |      |-- ...    //其他业务模块目录（根据业务模块重命名）
    |    |-- index.js  //入口js
    |    |-- index.html  //入口页面
    |-- node_modules  //nodejs依赖模块
    |-- gulpfiles.js  //gulp配置文件
    |-- package.json //nodejs包管理文件
    |-- README.md  //工程说明文档
    |-- webpack.config.js //webpack配置文件

```
# 环境搭建
* 安装nodejs（官网找对应版本下载安装） 
* 执行命令 npm install

# 可执行的gulp任务
* gulp 或 gulp serve (启服务)
* gulp build（编译）
* gulp deploy (用于生产环境部署，会自动监听zip包的变化，自动解压并重新编译)
