module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      css: {
        files: ['app/styles/**.scss'],
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
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('develop', ['watch']);
};