/**
 * app 入口文件
 */
require('./common/config.js');
require('./common/constant.js');
require('./common/services.js');
require('./common/utils.js');
require('./pages/header.js');
require('./pages/footer.js');
require('./pages/home.js');
require('./pages/pcProducts.js');

//路由文件放在最后
require('./routes.js');