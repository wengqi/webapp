# 概要
基于jquery等常规技术的前端工程架构范例（单页应用）
# 目录结构
```
webapp
    |-- app  //开发目录
    |    |-- assets  //存放非代码性静态资源，如字体、图片、视频、音频等等
    |    |-- components  //自定义组件, 组件相关html、js、css、img全部放在此目录下的某组件文件夹，便于统一管理
    |    |-- lib  //第三方类库
    |    |-- mock  //模拟后台数据，格式为标准json文件
    |    |-- scripts  //js代码
    |    |      |-- common  //公共js
    |    |      |      |-- config.js  //定义系统配置
    |    |      |      |-- constant.js  //定义系统常量
    |    |      |      |-- services.js  //服务类
    |    |      |      |-- utils.js  //工具类
    |    |      |-- page1  //模块1目录（根据业务模块重命名）
    |    |      |-- page2  //模块2目录（根据业务模块重命名）
    |    |      |-- ...    //其他业务模块目录（根据业务模块重命名）
    |    |      |-- index.js  //入口文件
    |    |      |-- routes.js  //前端路由
    |    |-- styles  //样式
    |    |-- views  //模块页面/模板
    |    |      |-- common  //公共页面
    |    |      |-- page1  //页面1
    |    |-- index.html  //入口首页
    |-- dist  //编译输出目录
    |-- test  //单元测试
    |-- node_modules  //nodejs依赖模块
    |-- gulpfiles.js  //gulp配置文件
    |-- package.json //nodejs包管理文件
    |-- README.md  //工程说明文档
    |-- webpack.config.js //webpack配置文件

```
# 环境搭建
* 安装nodejs（官网找对应版本下载安装） 
* 执行命令 npm install 
* 编译 gulp build
* 启动服务 gulp或gulp serve
