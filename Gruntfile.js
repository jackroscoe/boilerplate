/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    "compass": {
      "compile": {
        "options": {
          "config": 'config.rb'
        }
      }
    },
    "jshint": {
      "options": {
          "reporter": require('jshint-stylish')
      },
      "app": [
        'js/**/*.js'
      ]
    },
    /**
     * Whilst developing, compiles our Sass to CSS and lint our JS
     */
    "watch": {
      "compass": {
        "tasks": "compass:compile",
        "files": ["sass/**.scss", "sass/*/**.scss"]
      },
      "jshint": {
        "options": {
            "reporter": require('jshint-stylish')
        },
        "tasks": 'jshint:app'
      }
    },
    /**
     * uncss removes unused CSS. We do this before minification.
     *
     * See https://github.com/addyosmani/grunt-uncss
     */
    "uncss": {
      "dist": {
        "files": {
          'css/style.tidy.css': [
            'index.html'
          ]
        }
      }
    },
    /**
     * cssmin will fail if run before uncss has compiled css/style.tidy.css
     */
    "cssmin": {
      "uncss": {
        "files": {
          "dist/css/style.tidy.min.css": "css/style.tidy.css"
        }
      }
    },
    "requirejs": {
        "compile": {
            "options": {
                // path to your base js directory
                baseUrl: 'js',
                // this is going to be the path to the page where you include your libraries. This file includes stuff like:
                //      require.config({}) - your require config
                //      require['pages/page1', 'pages/page2', etc]
                mainConfigFile: 'js/main.js',
                name: 'main',
                // this is the file your javascript is compiling into
                out: 'dist/js/main.min.js',
                useStrict: true,
                preserveLicenseComments: true,
                optimize: 'uglify2',
                // uglify configuration here -- lots you can do with this
                uglify2: { }
            }
        }
    }
  });

  /**
   * LOAD PLUGINS
   *
   * We're using load-grunt-tasks which reads package.json and auto loads everything for us
   */
  require('load-grunt-tasks')(grunt);

  /**
   * TASKS
   *
   * Use `grunt watch` to listen for and compile your Sass, as well as jshinting
   */
  grunt.registerTask('deploy', ['uncss', 'cssmin', 'requirejs']);

};
