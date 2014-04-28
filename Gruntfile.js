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
          'themes/bootstrap/js/*.js'
          ]
        },

        // concatenation and minification all in one
        uglify: {
          dist: {
            files: {
              'themes/bootstrap/js/plugins.min.js': [
              'themes/bootstrap/js/affix.js',
              'themes/bootstrap/js/transition.js',
              'themes/bootstrap/js/tab.js',
              'themes/bootstrap/js/button.js',
              'themes/bootstrap/js/collapse.js',
              'themes/bootstrap/js/dropdown.js',
              'themes/bootstrap/js/vendor/ajax-form.js'
              ],
              'themes/bootstrap/js/scripts.min.js': [
              'themes/bootstrap/js/scripts.js'
              ]
            }
          }
        },

        less: {
          development: {
            options: {
              paths: ["less"],
              yuicompress: true,
              cleancss: true
            },
            files: {
              "themes/bootstrap/css/bootstrap.css": "themes/bootstrap/less/bootstrap.less"
            }
          }
        },

        // watch our project for changes
        watch: {
          less: {
            files: ["themes/bootstrap/less/*"],
            tasks: ["less"],
          },
          css: {
            files: ['themes/bootstrap/css/bootstrap.css']
          },
          js: {
            files: [
            'themes/bootstrap/js/scripts.js'
            ],
            tasks: ['uglify']
          },
          php: {
            files: ['*.php']
          },
          livereload: {
            files: [
            'themes/bootstrap/css/*.css',
            'themes/bootstrap/js/scripts.min.js',
            'themes/bootstrap/index.html',
            'content/*.md',
            'content/*/*.md',
            'content/*/*/*.md',
            'content/*.html',
            ],
            options: {
              livereload: true
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
                  cwd: 'themes/bootstrap/img/',
                  src: ['**/*.png'],
                  // Could also match cwd line above. i.e. themes/bootstrap/img/
                  dest: 'themes/bootstrap/img/compressed/',
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
                  cwd: 'themes/bootstrap/img/',
                  src: ['**/*.jpg'],
                  // Could also match cwd. i.e. themes/bootstrap/img/
                  dest: 'themes/bootstrap/img/compressed/',
                  ext: '.jpg'
                }
                ]
              }
            }
          });

    // load tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // register task
    grunt.registerTask('imageopt', ['imagemin']); // execute on both .png and .jpg
    grunt.registerTask('imagepng', ['imagemin:png']); // only .png files
    grunt.registerTask('imagejpg', ['imagemin:jpg']);// only .jpg files
    grunt.registerTask('default', [
        // 'jshint',
        'uglify',
        'watch'
        ]);

};