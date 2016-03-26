/**
 * pf框架路由器
 */
define(['backbone', 'jquery', 'pf'], function (Backbone, $, Pf) {

    var Router = Backbone.Router.extend({
        routes: {
            'page1': 'page1',
            'page2(/:name)': 'page2',
            'mainPage(/:name)': 'mainPage',
            '*actions': 'defaultAction'
        },
        initialize: function () {
            var thizRouter = this;
            $('.pf-page').each(function(){
                var id = this.id;
                var ctr = this.attributes.ctr.value;
                thizRouter.pagePool[id] = ctr;
            });  
        },

        histroyStack: new Array(),
        pagePool:     new Object(),
        pageActive:   new Object()    
    });

    var router = new Router();
    //彻底用on route接管路由的逻辑，这里route是路由对应的value
    router.on('route', function (routeName, params) {
        if (routeName == "defaultAction") {
            location.hash = 'mainPage';
            return;
        }

        var routePath = "app/"+routeName+"/controller";
        require([routePath], function (controller) {

            if (router.pageActive.controller && (controller == router.pageActive.controller)){
                // 浏览页面重复
                return;
            }

            // 页面回退
            if((router.histroyStack.length>0) 
            && (routeName == router.histroyStack[router.histroyStack.length - 1].id)){
                var backPage = router.histroyStack.pop();
                router.trigger("page:change",backPage);
            }
            else{
                router.pageActive.controller && router.histroyStack.push(router.pageActive);
            }

            // 修改当前激活页面
            router.pageActive = {
                id: routeName,
                controller: controller
            };

            // console.log(router);
            var paramsApply = new Array();
            paramsApply[0] = router;
            paramsApply.concat(params)
            controller.apply(null, paramsApply);
        });
    });

    //监听页面后退事件
    router.on("page:change", function(msg) {
        Pf.back(msg);
    });

    // 设置router为全局变量，全局共享一个router
    window.router = router;
    return router;
});