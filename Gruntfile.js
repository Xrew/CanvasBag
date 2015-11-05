module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        ts: {
            dev: {
                src: ["src/**/*.ts"],
                out: 'dist/bundle.js',
                options: {
                    target: 'es5',
                    module: 'commonjs',
                    sourceMap: true,
                    declaration: false,
                    removeComments: true
                }
            },
        },

        copy: {
            main: {
                files: [
                    {expand: true, src: ['**/*.js'], cwd: "src-samples", dest: 'dist-samples'},
                    {src: ['dist/bundle.js'], dest: 'dist-samples/bundle.js'}
                ]
            }
        },

        jade: {
            dev: {
                expand: true,
                src: "**/*.jade",
                dest: "dist-samples/",
                cwd: "src-samples",
                ext: '.html'
            }
        },



        concat: {
            basic: {
                src: ['external-libs/**/*.js'],
                dest: 'dist/bundle-lib.js'
            },

            minified: {
                src: ['external-libs/**/*.min.js'],
                dest: 'dist/bundle-lib.js'
            }
        },

        watch: {
            scripts: {
                files: ['src/**/*.ts'],
                tasks: ['ts:dev'],
                options: {
                    spawn: false
                }
            },
            templates: {
                files: ['src/**/*.jade'],
                tasks: ['jade:dev'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask("compile", ["concat:basic", "ts:dev", "copy:main", "jade:dev"]);
    grunt.registerTask("compile-minified", ["concat:minified", "ts:dev", "copy:main", "jade:dev"]);
};