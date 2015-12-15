var homeHtml = require('./home.html');
var teachersTmp = require('./_teachers.tpl');
var Services = require('../../core/service.js');
var CONSTANT = require('../../core/constant.js');

console.log(CONSTANT.SYSTEM_NAME);
function route(){
    Services.getTeachers().done(function(data){
        var teachersHtml = teachersTmp.render({"teachers": data});
        $('#main').html(homeHtml);
        $('#teachers').html(teachersHtml);
    })
}

module.exports = {
    route: route
};