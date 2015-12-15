;(function (MyAppHome, undefined) {  
    var homeHtml = require('./home.html');
    var teachersTmp = require('../../views/home/_teachers.tpl');
    var pcp = require('./pcProducts.js');
    var header = require('./header.js');
    var CONSTANT = require('../common/constant.js');

    MyAppHome.route = function(){
        MyAppServices.getTeachers().done(function(data){
            var teachersHtml = teachersTmp.render({"teachers": data});
            $('#main').html(homeHtml);
            $('#teachers').html(teachersHtml);
        })
    }

    MyAppPcProducts.sayHello();
    pcp.sayName();
    header.sayName();
    header.sayName2();
    console.log(CONSTANT);

})(window.MyAppHome = window.MyAppHome || {});