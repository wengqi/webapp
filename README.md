# 概要
基于jquery等常规技术的前端工程架构范例
# 目录结构（第一版）
```
webapp
    |-- app  //开发目录
    |    |-- assets  //存放非代码性静态资源，如字体、图片、视频、音频等等
    |    |-- build  //js编译输出目录
    |    |-- components  //自定义组件, 组件相关html、js、css、img全部放在此目录下的某组件文件夹，便于统一管理,  实际项目中由于多个app会存在组件共享，会讲此文件夹提升至和app平级
    |    |-- lib  //第三方类库 删除， 所有第三方类库都从资源服务器上获取
    |    |-- mock  //模拟后台数据，格式为标准json文件
    |    |-- scripts  //js代码
    |    |      |-- base  //基础js
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
    |-- dist  //编译输出目录，删除，为简化项目，将css和js全部编译至app/build/下面，html不压缩。
    |-- test  //单元测试 删除，由于采用jquery方式，js和html耦合比较大，不方便进行js单元测试
    |-- node_modules  //nodejs依赖模块
    |-- gulpfiles.js  //gulp配置文件
    |-- package.json //nodejs包管理文件
    |-- README.md  //工程说明文档
    |-- webpack.config.js //webpack配置文件

```

# 目录结构（第二版，按照功能划分，便于工程组件化，推荐使用）
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
* 编译 gulp build 
* 启动服务 gulp或gulp serve

# TODO LIST
* 区分开发环境和编译发布生产不同配置 
* 优化入口文件
* 支持多页面入口
* 自动化工具其他优化配置：如打包压缩html，css等等资源 
* 详细使用文档 
