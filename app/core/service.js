var U = require('./util.js');
module.exports = {
    //获取老师列表数据
    getTeachers: function(){
        var url = '/app/mock/teachers.json';
        return U.doAjax(url);
    },
    //获取pc列表
    getPcList: function(){
        var url = '/app/mock/pcList.json';
        return U.doAjax(url);
    }
};