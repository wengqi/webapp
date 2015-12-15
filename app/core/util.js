/* -----------------------业务无关的工具方法------------------------ */

/**
 * ajax请求公共方法-promise方式调用
 * @param  {String} url    请求URL
 * @param  {Object} params 请求参数
 * @param  {String} method 请求方法
 * @return {Promise} 
 */
function doAjax(url, params, method){
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

function setData(obj){

}

function getData(key){

}

module.exports = {
    doAjax: doAjax,
    setData: setData,
    getData: getData
};