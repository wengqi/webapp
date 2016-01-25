/**
 * 将插件封装在一个闭包里面，防止外部代码污染  冲突
 */
(function () {   
    /**
     * 定义一个插件
     */
    var Plugin;
     
    /**
     * 这里是一个自运行的单例模式。 
     */
    Plugin = (function () {
 
        /**
         * 插件实例化部分，初始化时调用的代码可以放这里
         */
        function Plugin(element, options, params) {
            //将插件的默认参数及用户定义的参数合并到一个新的obj里
            this.settings = $.extend({}, $.fn.emapdatatable.defaults, options);
            //将dom jquery对象赋值给插件，方便后续调用
            this.$element = $(element);
             
        }
 
        /**
         * 插件的公共方法，相当于接口函数，用于给外部调用
         */
        Plugin.prototype.doSomething = function () {
            console.log(1111);
            /**
             * 方法内容
             */
        };
         
        return Plugin;
 
    })();
 
    /**
     * 插件的私有方法
     */
    function _privateMethod () {
     
    };
 
    /**
     * 这里是关键
     * 定义一个插件 plugin
     */
    $.fn.emapdatatable = function (options, params) {
        debugger;
        var instance;
        instance = this.data('emapdatatable');
        /**
         * 判断插件是否已经实例化过，如果已经实例化了则直接返回该实例化对象
         */
        if (!instance) {
            return this.each(function () {
                //将实例化后的插件缓存在dom结构里（内存里）
                return $(this).data('emapdatatable', new Plugin(this, options, params));
            });
        }
        if (options === true) return instance;
        /**
         * 优雅处： 如果插件的参数是一个字符串，则 调用 插件的 字符串方法。
         * 如 $('#id').plugin('doSomething') 则实际调用的是 $('#id).plugin.doSomething();
         * doSomething是刚才定义的接口。
         * 这种方法 在 juqery ui 的插件里 很常见。
         */
        if ($.type(options) === 'string') {
            (typeof params != 'undefined') ? instance[options](params) : instance[options]();
        }
        console.log(this);
        console.log(instance);
        return this;
    };
     
    /**
     * 插件的默认值
     */
    $.fn.emapdatatable.defaults = {
        property1: 'value',
        property2: 'value'
    };
 
    /**
     * 优雅处： 通过data-xxx 的方式 实例化插件。
     * 这样的话 在页面上就不需要显示调用了。
     */
    $(function () {
        //组装options
        var options = {};

        return new Plugin($('[data-emapdatatable]'));
    });   
}).call(this);