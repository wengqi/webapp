/* -----------------------业务无关的工具方法------------------------ */

//lodash工具类
require('lodash');
//全局变量 用于组件和模块之间传值
var globalObjName = 'globalObj' + (new Date()).getTime();
window[globalObjName] = {};

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

/**
 * 组件或模块之间传值时使用，设置数据
 * @param {String} key 键
 * @param {任意类型} obj 值
 */
function setData(key, obj){
    window[globalObjName][key] = obj;
}

/**
 * 组件或模块之间传值时使用，根据key获取数据
 * 注意在使用的地方保存获取的值，考虑内存优化，全局对象中的值只能被获取一次，随即删除
 * @param {String} key 键
 * @return key对应的值
 */
function getData(key){
    var obj = _.cloneDeep(window[globalObjName][key]);
    delete window[globalObjName][key];
    return obj;
}

module.exports = {
    doAjax: doAjax,
    setData: setData,
    getData: getData
};