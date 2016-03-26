'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Metadata.
        meta: {
          sassPath: 'sass/',
          cssPath: 'css/'
        },
        clean: {
          all: ['<%= meta.cssPath %>'],
          sourceMap: ['<%= meta.cssPath %>/*.map']
        },
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            dist: {
                src: ['bower_components/requirejs/require.js', '<%= concat.dist.dest %>'],
                dest: 'dist/require.js'
            },
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: '<%= concat.dist.dest %>',
                dest: 'dist/require.min.js'
            },
        },
        jshint: {
            gruntfile: {
                options: {
                    jshintrc: '.jshintrc'
                },
                src: 'Gruntfile.js'
            },
            app: {
                options: {
                    jshintrc: 'app/.jshintrc'
                },
                src: ['app/*.js','app/**/*.js']
            },
        },
        sass: {
          options: {
            banner: '<%= banner %>',
            style: 'expanded',
            unixNewlines: true
          },
          dist: {
            files: {
              '<%= meta.cssPath %>/pf.css': '<%= meta.sassPath %>pf.scss',
            }
          }
        },
        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            app: {
                files: '<%= jshint.app.src %>',
                tasks: ['jshint:app', 'qunit']
            }
        },
        connect: {
            development: {
                options: {
                    keepalive: true,
                }
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Default task.
    grunt.registerTask('clean', ['clean']);
    grunt.registerTask('hint', ['jshint']);
    grunt.registerTask('default', ['concat', 'uglify']);
    grunt.registerTask('sassmake', ['sass']);
    grunt.registerTask('preview', ['connect:development']);
};
