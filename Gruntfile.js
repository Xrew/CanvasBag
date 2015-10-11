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
            }
        },

        jade: {
            dev: {
                expand: true,
                src: "**/*.jade",
                dest: "dist/",
                cwd: "src",
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

    grunt.registerTask("compile", ["concat:basic", "ts:dev", "jade:dev"]);
    grunt.registerTask("compile-minified", ["concat:minified", "ts:dev", "jade:dev"]);
};