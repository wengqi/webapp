;(function (MyAppServices, undefined) {
    //获取老师列表数据
    MyAppServices.getTeachers = function(){
        var url = '/app/mock/teachers.json';
        return MyAppUtils.doAjax(url);
    }

    //获取pc列表
    MyAppServices.getPcList = function(){
        var url = '/app/mock/pcList.json';
        return MyAppUtils.doAjax(url);
    }
   
})(window.MyAppServices = window.MyAppServices || {});
