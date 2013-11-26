(function() {

    "use strict";

    requirejs.config({
        paths: {
            jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min'
        }
    });

    require(["jquery", "pages/home"], function($, home) {

        home.init();

    });

}());