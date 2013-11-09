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
    }
  });

  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt);

  // Default task.
  grunt.registerTask('dev', ['watch']);


};
