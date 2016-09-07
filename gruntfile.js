module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      css: {
        files: ['app/styles/**/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false
        }
      }
    },

    sass: {
      build: {
        files: [
          {
            expand: true,
            cwd: 'app/styles',
            src: ['mallum.scss'],
            ext: '.css',
            dest: 'app/styles'
          }
        ]
      }
    },

    bower: {
      install: {
        options: {
          targetDir: './app/vendor',
          cleanTargetDir: true,
          layout: 'byComponent'
        }
      }
    },

    clean: {
      bower: ['bower_components'],
      vendor: ['app/vendor']
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('update', ['clean', 'bower']);
  grunt.registerTask('develop', ['watch']);
};