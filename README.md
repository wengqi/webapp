# webapp
基于jquery等常规技术的前端工程架构范例
# 项目目录结构说明
```
webapp
    |-- app  //开发目录
    |    |-- assets  //存放非代码性静态资源，如字体、图片、视频、音频等等
    |    |-- lib  //第三方类库
    |    |-- mock  //模拟后台数据，格式为标准json文件
    |    |-- scripts  //js代码
    |    |      |-- common  //公共js
    |    |      |      |-- config.js  //定义系统配置
    |    |      |      |-- constant.js  //定义系统常量
    |    |      |      |-- services.js  //服务类
    |    |      |      |-- utils.js  //工具类
    |    |      |-- components  //自定义组件
    |    |      |-- page1  //模块1目录（根据业务模块重命名）
    |    |      |-- page2  //模块2目录（根据业务模块重命名）
    |    |      |-- ...    //其他业务模块目录（根据业务模块重命名）
    |    |      |-- index.js  //入口文件
    |    |      |-- routes.js  //前端路由
    |    |-- styles  //样式
    |    |-- views  //模块页面/模版
    |    |-- index.html  //入口首页
    |-- dist  //编译输出目录
    |-- test  //单元测试
    |-- node_modules  //nodejs依赖模块
    |-- gulpfiles.js  //gulp配置文件
    |-- package.json //nodejs包管理文件
    |-- README.md
    |-- webpack.config.js //webpack配置文件

```
