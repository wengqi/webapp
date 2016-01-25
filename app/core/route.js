/* -----------------------前端路由定义------------------------ */

var M = require('./module.js');

var routes = {
    '/': M.home.render,
    '/Home': M.home.render,
    '/PCProducts': M.pcProducts.render,
    '/Education': M.education.render,
    '/(\\w+)': function(){$('#main').html('<h1>Other Page!</h1>')}
};

var router = Router(routes);
router.init('/');//设置初始跳转路由，比如：init('/')初始会跳转至'/#/', init('foo')初始会跳转至'/#foo'