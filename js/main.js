(function() {

    'use strict';

    requirejs.config({
        paths: {
            jquery: '../bower_components/jquery/jquery.min'
        }
    });

    require(["jquery", "pages/home"], function($, home) {

        home.init();

    });

})();