;(function (MyAppUtils, undefined) {
    /**
     * ajax请求公共方法-promise方式调用
     */
    MyAppUtils.doAjax = function(url, params, method){
        var deferred = $.Deferred();
        $.ajax({
            type: method || 'GET',
            url: url,
            traditional: true,
            data: params || {},
            dataType: 'json',
            success: function (resp) {
                deferred.resolve(resp);
            },
            error: function (resp) {
                deferred.reject(resp);
            }
        });
        return deferred.promise();
    }
   
})(window.MyAppUtils = window.MyAppUtils || {});
