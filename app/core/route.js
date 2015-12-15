/**
 * 定义前端路由
 */
var M = require('./module.js');

var routes = {
    '/': M.home.route,
    '/Home': M.home.route,
    '/PCProducts': M.pcProducts.route,
    '/(\\w+)': function(){$('#main').html('<h1>Other Page!</h1>')}
};

var router = Router(routes);
router.init('/');//设置初始跳转路由，比如：init('/')初始会跳转至'/#/', init('foo')初始会跳转至'/#foo'