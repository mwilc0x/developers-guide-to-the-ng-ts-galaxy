module.exports = function(grunt) {
  return {
    options: {
      configuration: grunt.file.readJSON("tslint.json")
    },
    files: {
      src: ['app.ts', 'components/**/*.ts']
    }
  }
}
