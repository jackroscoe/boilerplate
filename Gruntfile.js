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
        "tasks": 'jshint:app',
        "files": 'js/main.js'
      }
    },
    "uglify": {
      "my_target": {
        "files": {
          "js/main.min.js": "js/main.js"
        }
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
          'css/style.tidy.css': ['index.html']
          }
        }
    }
  });

  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt);

  // Tasks
  grunt.registerTask('dev', ['watch']);
  grunt.registerTask('complete', ['uglify', 'cssmin']);


};
