module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'), // the package file to use

    uglify: {
      files: {
        expand: true,
        flatten: true,
        src: 'src/*.js',
        dest: 'dist',
        ext: '.min.js'
      }
    },
  });

  // load up your plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // register one or more task lists (you should ALWAYS have a "default" task list)
  grunt.registerTask('default', ['uglify']);
};
