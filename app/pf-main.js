'use strict';

(function (win) {
	var baseUrl = document.getElementById('main').getAttribute('data-baseurl');
	var config = {
    	baseUrl: baseUrl,           //依赖相对路径
	    paths: {                    //如果某个前缀的依赖不是按照baseUrl拼接这么简单，就需要在这里指出
	        zepto: 'bower_components/zepto/zepto.min',
	        jquery: 'bower_components/zepto/zepto.min',
	        underscore: 'bower_components/underscore/underscore-min',
	        backbone: 'bower_components/backbone/backbone-min',
	        text: 'bower_components/text/text',             //用于requirejs导入html类型的依赖
	        css: 'bower_components/require-css/css.min',             //用于requirejs导入html类型的依赖
	    	pf: 'app/pf-framwork'
	    },
	    shim: {                     //引入没有使用requirejs模块写法的类库。backbone依赖underscore
	        'underscore': {
	            exports: '_'
	        },
	        'jquery': {
	            exports: '$'
	        },
	        'zepto': {
	            exports: '$'
	        },
	        'backbone': {
	            deps: ['underscore', 'jquery'],
	            exports: 'Backbone'
	        }
	    }
	};

	require.config(config);

	//Backbone会把自己加到全局变量中
	require(['backbone', 'underscore', 'app/pf-router'], function(){
	    Backbone.history.start();   //开始监控url变化
	});
})(window);




