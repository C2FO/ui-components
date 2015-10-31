'use strict';

//var path = require("paths");
var webpack = require("webpack");

module.exports = function (grunt) {
    // Load grunt tasks automatically, when needed
    require('jit-grunt')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        pkg: grunt.file.readJSON('package.json'),
        paths: {
            // configurable paths
            dist: {
                root: './dist',
                core: '<%= paths.dist.root %>/core',
                modules: '<%= paths.dist.root %>/modules'
            },
            src: {
                root: './src',
                core: '<%= paths.src.root %>/core',
                modules: '<%= paths.src.root %>/modules'
            }
        },
        watch: {
            less: {
                files: ['<%= paths.src.modules/**/*.less'],
                tasks: ['less:dist']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            }
        },

        clean: {
            dist: ["<%= paths.dist.root %>"]
        },

        copy: {
            dist: {
                options: {
                    timestamp: true
                },
                files: [
                    {
                        expand: true,
                        cwd: '<%= paths.src.root %>',
                        src: ['**/*.{js,less}'],
                        dest: '<%= paths.dist.root %>'
                    }
                ]
            }
        },

        uglify: {
            dist: {
                options: {
                    sourceMap: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= paths.dist.root %>',
                    src: ['**/*.js', '!**/*.min.js', '!**/index.js'],
                    dest: '<%= paths.dist.root %>',
                    ext: '.min.js'
                }]
            }
        },

        less: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= paths.dist.root %>',
                    src: ['**/*.less'],
                    dest: '<%= paths.dist.root %>',
                    ext: '.css'
                }]
            }
        },

        cssmin: {
            dist: {
                options: {
                    sourceMap: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= paths.dist.root %>',
                    src: ['**/*.css', '!**/*.min.css'],
                    dest: '<%= paths.dist.root %>',
                    ext: '.min.css'
                }]
            }
        },
        webpack: {
            options: {
                // Can't use <%= paths.src.root %> for some reason
                entry: "./src/index.js",
                output: {
                    path: "./dist",
                    filename: "c2fo-ui-components.js",
                    sourceMapFilename: "c2fo-ui-components.map.js"
                },
                resolve: {
                    extensions: ["", ".js"]
                },
                stats: false
            },
            dev: {
                stats: true,
                progress: true,
                watch: true,
                keepalive: true
            },

            dist: {
                progress: false,
                watch: false,
                keepalive: false
            }
        },
        karma: {
            dev: {
                configFile: './karma.conf.js',
                autoWatch: true,
                singleRun: false
            },
            dist: {
                configFile: './karma.conf.js',
                autoWatch: false,
                singleRun: true
            }
        }
    });

    grunt.registerTask('build', [
        'clean:dist',
        'copy:dist',
        'less:dist',
        'webpack:dist',
        'uglify:dist',
        'cssmin:dist',
        'karma:dist'
    ]);

    grunt.registerTask('default', ['build']);
};