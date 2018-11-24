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

		watch: {
			sass: {
				files: ['sass/**/*.scss'],
				tasks: ['sass', 'concat:css']
			}
		}


	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['sass', 'watch']);

};