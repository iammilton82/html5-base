module.exports = function(grunt) {

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
	    development: {
		    files: {
			    "assets/css/styles.css" : "assets/less/styles.less"
		    }
	    }
    },
    cssmin: {  
        sitecss: {  
            files: {  
                'assets/css/styles.min.css': ['assets/css/styles.css']  
            }  
        }  
    },  
	uglify: {
		build: {
	  		options: {
				beautify: false,
				sourceMap: true,
				preserveComments: false,
				screwIE8: true,
				sourceMapName: 'assets/source/main.map',
				htmlmin: {
					removeComments: true,
					removeEmptyAttributes: true
				},
				mangle: false
			},
			files: {
				'assets/js/main.min.js': ['assets/source/main.js']
			}
		}
	},
    watch: {
	    less: {
		    files: "assets/less/**/*.less",
	        tasks: ["less", "cssmin"]
        },
        js: {
		    files: "assets/source/**/*.js",
	        tasks: ["uglify:build"]
        }
    }
  });
  
  // Default task(s).
  grunt.registerTask('default', ['less', 'cssmin', 'uglify:build', 'watch']);

};