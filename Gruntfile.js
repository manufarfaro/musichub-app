module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    concat: {
      js: {
        src: [
          'app/vendor/jquery/dist/jquery.js',
          'app/vendor/bootstrap-sass-official/assets/javascripts/bootstrap.min.js',
          'app/vendor/angular/angular.js',
          'app/vendor/angular-route/angular-route.js',
          'app/js/app.js'
        ],
        dest: 'app/js/app.min.js'
      }
    },
    copy: {
      main: {
        files: [
      {expand: true, flatten: true, src: ['app/vendor/font-awesome-sass/assets/fonts/font-awesome/*'], dest: 'app/fonts/font-awesome/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['app/vendor/bootstrap-sass-official/assets/fonts/bootstrap/*'], dest: 'app/fonts/', filter: 'isFile'}
        ]
      }
    },
    watch: {
      files: ['<%= jshint.files %>', 'app/sass/*', 'app/js/**.js'],
      tasks: ['jshint', 'concat', 'sass']
    },
    sass: {
      dist: {
        files: {
          'app/css/app.min.css': 'app/sass/main.scss'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['jshint', 'sass', 'concat', 'copy:main']);
  grunt.registerTask('default', ['build', 'watch']);

};
