/**
 * 
 * @param  {[type]} View) {               var controller [description]
 * @return {[type]}       [description]
 */
define(['app/page1/view'], function (View) {

    var controller = function (router) {
        var view = new View();
        view.render('kenko');
    };
    return controller;
});