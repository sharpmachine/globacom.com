'use strict';
module.exports = function(grunt) {

  grunt.initConfig({

        // let us know if our JS is sound
        jshint: {
          options: {
            "bitwise": true,
            "browser": true,
            "curly": true,
            "eqeqeq": true,
            "eqnull": true,
            "es5": true,
            "esnext": true,
            "immed": true,
            "jquery": true,
            "latedef": true,
            "newcap": true,
            "noarg": true,
            "node": true,
            "strict": false,
            "trailing": true,
            "undef": true,
            "globals": {
              "jQuery": true,
              "alert": true
            }
          },
          all: [
          'Gruntfile.js',
          'assets/javascripts/*.js',
          'assets/javascripts/vendor/*.js'
          ]
        },

        // concatenation and minification all in one
        uglify: {
          dist: {
            files: {
              'assets/javascripts/plugins.min.js': [
              'assets/javascripts/bootstrap/affix.js',
              'assets/javascripts/bootstrap/transition.js',
              'assets/javascripts/bootstrap/tab.js',
              'assets/javascripts/bootstrap/button.js',
              'assets/javascripts/bootstrap/collapse.js',
              'assets/javascripts/bootstrap/dropdown.js',
              'assets/javascripts/vendor/ajax-form.js'
              ]
            }
          }
        },

        // watch our project for changes
        watch: {
          grunt: {
            files: ['Gruntfile.js']
          },
          less: {
            files: ["themes/bootstrap/less/*"],
            tasks: ["less"],
          },
          css: {
            files: ['themes/bootstrap/css/bootstrap.css']
          },
          js: {
            files: [
            'assets/javascripts/scripts.js',
            'assets/javascripts/vendor/*.js'
            ],
            tasks: ['uglify']
          },
          php: {
            files: ['*.php']
          },
          livereload: {
            files: [
            // 'themes/bootstrap/css/*.css',
            // 'assets/javascripts/scripts.min.js',
            // 'assets/javascripts/vendor/*.js',
            // 'themes/bootstrap/index.html',
            // 'content/*.md',
            // 'content/*/*.md',
            // 'content/*/*/*.md',
            // 'content/*.html'
            ],
            options: {
              livereload: false
            }
          }
        },

        imagemin: {
          png: {
            options: {
              optimizationLevel: 7
            },
            files: [
            {
                  // Set to true to enable the following options…
                  expand: true,
                  // cwd is 'current working directory'
                  cwd: 'assets/img/',
                  src: ['**/*.png'],
                  // Could also match cwd line above. i.e. themes/bootstrap/img/
                  dest: 'assets/img/',
                  ext: '.png'
                }
                ]
              },
              jpg: {
                options: {
                  progressive: true
                },
                files: [
                {
                  // Set to true to enable the following options…
                  expand: true,
                  // cwd is 'current working directory'
                  cwd: 'assets/img/',
                  src: ['**/*.jpg'],
                  // Could also match cwd. i.e. themes/bootstrap/img/
                  dest: 'assets/img/',
                  ext: '.jpg'
                }
                ]
              }
            }
          });

    // load tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // register task
    grunt.registerTask('imageopt', ['imagemin']); // execute on both .png and .jpg
    grunt.registerTask('imagepng', ['imagemin:png']); // only .png files
    grunt.registerTask('imagejpg', ['imagemin:jpg']);// only .jpg files
    grunt.registerTask('build', ['uglify']);
    grunt.registerTask('default', [
        // 'jshint',
        'uglify',
        'watch'
        ]);

};