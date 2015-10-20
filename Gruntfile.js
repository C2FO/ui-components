'use strict';

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
            dist: 'dist',
            components: 'src/components',
            core: 'src/core',
            docs: 'docs',
            ghPages: 'gh-pages'

        },
        watch: {
            less: {
                files: ['<%= paths.components/**/*.less'],
                tasks: ['less:dist']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            }
        },

        clean: {
            dist: ["<%= paths.dist %>"]
        },

        copy: {
            dist: {
                options: {
                    timestamp: true
                },
                files: [
                    {
                        expand: true,
                        cwd: '<%= paths.components %>',
                        src: ['**/*.{js,less}'],
                        dest: '<%= paths.dist %>/components'
                    },
                    {
                        expand: true,
                        cwd: '<%= paths.core %>',
                        src: '**/*',
                        dest: '<%= paths.dist %>/core'
                    }
                ]
            }
        },

        less: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= paths.components %>',
                    src: ['**/*.less'],
                    dest: '<%= paths.dist %>/components',
                    ext: '.css'
                }]
            }
        },

        uglify: {
            dist: {
                options: {
                    sourceMap: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= paths.dist %>/components',
                    src: ['**/*.js', '!**/*.min.js'],
                    dest: '<%= paths.dist %>/components',
                    ext: '.min.js'
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
                    cwd: '<%= paths.dist %>/components',
                    src: ['**/*.css', '!**/*.min.css'],
                    dest: '<%= paths.dist %>/components',
                    ext: '.min.css'
                }]
            }
        },
        exec: {
            docs: 'yuidoc .',
            gh_pages: {
                command: 'yuidoc -o <%=paths.ghPages %>/docs/ .'
            },
            publish_gh_pages: {
                cwd: '<%=paths.ghPages %>/',
                command: function () {
                    return [
                        'git add .',
                        'git commit -m \'Creating github pages documentation snapshot\'',
                        'git push origin gh-pages'
                    ].join('; ');
                }
            }
        }
    })
    ;

    grunt.registerTask('docs', [
        'exec:docs'
    ]);

    grunt.registerTask('gh_pages', 'exec:gh_pages');

    grunt.registerTask('publish_gh_pages', [
        'exec:gh_pages',
        'exec:publish_gh_pages'
    ]);

//grunt.registerTask('default');
    grunt.registerTask('build', [
        'clean:dist',
        'copy:dist',
        'less:dist',
        'uglify:dist',
        'cssmin:dist',
        'docs'
    ]);
};