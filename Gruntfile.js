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
        'js/main.js'
      ]
    },
    "watch": {
      "compass": {
        "tasks": "compass:compile",
        "files": ["sass/**.scss", "sass/*/**.scss"]
      },
      "jshint": {
        "options": {
            "reporter": require('jshint-stylish')
        },
        "tasks": 'jshint:app',
        "files": 'js/main.js'
      }
    },
    "cssmin": {
      "regular": {
        "files": {
          "css/style.min.css": "css/style.css"
        }
      },
      "uncss": {
        "files": {
          "css/style.tidy.min.css": "css/style.tidy.css"
        }
      }
    },
    "uncss": {
      "dist": {
        "files": {
          'css/style.tidy.css': [
              'index.html'
            ]
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
                out: 'js/dist/main.min.js',
                useStrict: true,
                preserveLicenseComments: true,
                optimize: 'uglify2',
                // uglify configuration here -- lots you can do with this
                uglify2: { }
            }
        }
    }
  });

  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt);

  // Tasks
  grunt.registerTask('dev', ['watch']);
  grunt.registerTask('complete', [ 'cssmin', 'requirejs']);

};
