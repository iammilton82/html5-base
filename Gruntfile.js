module.exports = function(grunt) {

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

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
    watch: {
	    files: "assets/less/**/*.less",
        tasks: ["less", "cssmin"]
    }
  });
  
  // Default task(s).
  grunt.registerTask('default', ['less', "cssmin", 'watch']);

};