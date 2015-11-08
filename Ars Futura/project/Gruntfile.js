module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        cssbeautifier: {
            files: ["css/*.css", '!css/bootstrap.css'],
            options: {
                indent: '  ',
                openbrace: 'end-of-line',
                autosemicolon: false
            }
        },
        autoprefixer: {
            options: {
                safe: true
            },
            single_file: {
                src: 'css/*.css',
                expand: true,
                flatten: true,
                src: 'css/*.css',
                dest: 'css/'
            }
        },
        "jsbeautifier": {
            files: ["js/*.js", "Gruntfile.js"],
            options: {}
        },
        'html-prettyprinter': {
            single: {
                // HTML file to beauty 
                src: 'index.html',

                // Destination of HTML file 
                dest: 'index.html'
            }
        },
        csscomb: {
            options: {
                // Task-specific options go here.
            },

            dynamic_mappings: {
                expand: true,
                cwd: '/css/',
                src: ['*.css', '!bootstrap.css'],
                dest: '/css/',
                ext: '.resorted.css'
            }


        },
        prettysass: {
            options: {
                alphabetize: true
            },
            app: {
                src: ['scss/*.scss']
            },
        }
    });

    grunt.loadNpmTasks('grunt-cssbeautifier');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks("grunt-jsbeautifier");
    grunt.loadNpmTasks('grunt-html-prettyprinter');
    grunt.loadNpmTasks('grunt-csscomb');
    grunt.loadNpmTasks('grunt-prettysass');

    grunt.registerTask('clean', ['cssbeautifier', 'csscomb', 'autoprefixer', 'jsbeautifier', 'prettysass']);
    grunt.registerTask('html', ['html-prettyprinter']);

};
