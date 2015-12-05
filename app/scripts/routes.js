/**
 * 定义前端路由
 */
var routes = {
    '/Home': MyAppHome.route,
    '/PCProducts': MyAppPcProducts.route,
    '/(\\w+)': function(){$('#main').html('<h1>Other Page!</h1>')}
};

var router = Router(routes);
router.init();