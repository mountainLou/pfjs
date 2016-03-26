/**
 * Created by kenkozheng on 2015/7/14.
 */
define(['app/mainPage/view'], function (View) {
    var controller = function (router) {
        var view = new View();
        view.render();
    };
    return controller;
});