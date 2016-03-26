
define(['jquery'], function ($) {

    var Pf = function(){
        var isBack = false;
    };

    /**
     * 加载新页面
     * @param  {[type]} selector [当前激活的页面]
     * @return {[type]}          [Pf]
     */
    Pf.openPage = function(selector){
        $('.pf-page').removeClass('pf-active');
        $(selector).addClass('pf-active');

        $('.pf-content .pf-active').css({ '-webkit-transition':'-webkit-transform 1s',
                 '-webkit-transform-origin': '0% 0%',
                 '-webkit-transform':'translate(100%,0%) scale(1) translateZ(0)'
        });
    }

    /**
     * 激活actionSheet
     * @param  {[type]} selector [actionSheet选择器]
     * @return {[type]}          [description]
     */
    Pf.actionSheet = function (selector){

    }

    /**
     * 后退事件
     * @return {[type]} [description]
     */
    Pf.back = function (backSelector){
        // 清除历史队列
        console.log(backSelector.id + " is back!");
    }

    return Pf;
});