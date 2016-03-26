/**
 * Created by kenkozheng on 2015/7/10.
 */
define(['text!app/mainPage/tpl.html', 'pf'], function (tpl, pf) {

    var View = Backbone.View.extend({
        el: '#mainPage',
        initialize: function () {
        },
        render: function (name) {
        	this.$el.html(_.template(tpl)());
            pf.openPage(this.el);   
        }
    });
    return View;
});