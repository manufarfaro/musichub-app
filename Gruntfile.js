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
          'app/vendor/html5-boilerplate/js/vendor/modernizr-2.6.2.min.js',
          'app/vendor/jquery/dist/jquery.js',
          'app/vendor/bootstrap-sass-official/assets/javascripts/bootstrap.min.js',
          'app/vendor/angular/angular.js',
          'app/vendor/angular-cookies/angular-cookies.js',
          'app/vendor/angular-local-storage/dist/angular-local-storage.js',
          'app/vendor/angular-route/angular-route.js',
          'app/vendor/angular-ui-router/release/angular-ui-router.js',
          'app/vendor/angular-ui-router.stateHelper/statehelper.js',
          'app/vendor/angular-sanitize/angular-sanitize.js',
          'app/vendor/angular-resource/angular-resource.js',
          'app/vendor/angular-media-player/dist/angular-media-player.js',
          'app/vendor/at-table/dist/angular-table.js',
          'app/vendor/owl.carousel/dist/owl.carousel.js',
          'app/vendor/typeahead.js/dist/typeahead.bundle.js',
          'app/vendor/angular-bootstrap/ui-bootstrap.js',
          'app/vendor/angular-bootstrap/ui-bootstrap-tpls.js',
          'app/vendor/angular-flash-messages/angular-flash.js',
          'app/vendor/angular-utils-disqus/dirDisqus.js',
          'app/vendor/angular-gravatar/build/angular-gravatar.js',
          'app/js/app.js',
          'app/js/constants.js',
          'app/js/globals.js',
          'app/js/app.config.js',
          'app/js/musichub.routes.js',
          'app/js/controllers/**/*.js',
          'app/js/directives/*.js',
          'app/js/providers/*.js',
          'app/js/services/*.js',
          'app/js/filters/*.js'
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
      options: {
        livereload: {
          port: 4000
        }
      },
      css: {
        files: ['app/sass/*'],
        tasks: ['jshint', 'concat', 'sass']
      },
      js: {
        files: ['<%= jshint.files %>', 'app/js/**', '!app/js/app.min.js'],
        tasks: ['jshint', 'concat']
      },
      html: {
        files: ['app/index.html', 'app/templates/**']
      }
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
