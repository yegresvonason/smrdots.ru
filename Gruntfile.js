module.exports = function(grunt) {

	grunt.initConfig({

		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: {
					'css/style.css': 'sass/style.scss'
				}
			}
		},

		/*concat: {
			options: {
				separator: '\r\n',
			},
			js: {
				src: ['node_modules/jquery/dist/jquery.min.js', 'js/scripts.js'],
				dest: 'js/bundle.js'
			}
		},*/

		watch: {
			sass: {
				files: ['sass/**/*.scss'],
				tasks: ['sass']
			},
			/*js: {
				files: ['js/scripts.js'],
				tasks: ['concat:js']
			}*/
		}


	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['sass', /*'concat',*/ 'watch']);

};