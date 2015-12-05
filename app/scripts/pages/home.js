;(function (MyAppHome, undefined) {  
    var homeHtml = require('../../views/home/home.html');
    var teachersTmp = require('../../views/home/_teachers.tpl');
    
    MyAppHome.route = function(){
        MyAppServices.getTeachers().done(function(data){
            var teachersHtml = teachersTmp.render({"teachers": data});
            $('#main').html(homeHtml);
            $('#teachers').html(teachersHtml);
        })
    }
   
})(window.MyAppHome = window.MyAppHome || {});