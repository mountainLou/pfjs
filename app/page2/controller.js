/**
 * Created by kenkozheng on 2015/7/14.
 */
define(['app/page2/model', 'app/page2/view'], function (Model, View) {

    var controller = function (name) {
        var model = new Model();
        name && model.set({
            name:name               //设置默认的属性值
        });
        var view = new View({model:model});
        view.render();      //利用Model定义的默认属性初始化界面
    };

    return controller;
});