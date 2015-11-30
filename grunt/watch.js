module.exports = {
  scripts: {
    files: ['app.ts', 'src/components/**/*.ts'],
    tasks: ['browserify'],
    options: {
      spawn: false,
      livereload: true
    }
  },
  html: {
    files: ['index.html', 'src/components/**/*.html'],
    options: {
      spawn: false,
      livereload: true
    }
  },
  css: {
    files: ['assets/css/app.css'],
    options: {
      spawn: false,
      livereload: true
    }
  }
};
