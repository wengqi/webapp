var homeHtml = require('./home.html');
var teachersTmp = require('./_teachers.tpl');
var Services = require('../../core/config.js');
var CONSTANT = require('../../core/service.js');
var U = require('../../core/util.js');

console.log(CONSTANT.SYSTEM_NAME);

function render(){
    Services.getTeachers().done(function(data){
        console.log(U.getData('pcProducts'));
        var teachersHtml = teachersTmp.render({"teachers": data});
        $('#main').html(homeHtml);
        $('#teachers').html(teachersHtml);
    })
}

module.exports = {
    render: render
};