/**
 * Created by kenkozheng on 2015/7/10.
 */
define(['text!app/page1/tpl.html', 'pf'], function (tpl, pf) {

    var View1 = Backbone.View.extend({
        el: '#page1',

        initialize: function () {
        },

        render: function (name) {
        	this.$el.html(_.template(tpl)({name: name}));   
        	pf.openPage(this.el);   
        }
    });

    return View1;
});