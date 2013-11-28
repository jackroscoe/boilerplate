(function() {

    "use strict";

    requirejs.config({
        paths: {
            /* Third Parrty Libs */
            jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min',
            /* Custom Components e.g.: */
            // forms: 'components/forms'
            /* Custom Page Modules */
            home: 'pages/home'
        }
    });

    /**
     * As this is our entry point, we will only be requiring page modules here
     *
     * DO NOT include any libraries at this point. Libraries should be included
     * from within he module of an individual page.
     */
    require(["home"], function(home) {

        home.init();

    });

}());