module.exports = {
  scripts: {
    files: ['app.ts', 'components/**/*.ts'],
    tasks: ['browserify'],
    options: {
      spawn: false,
      livereload: true
    }
  },
  html: {
    files: ['index.html', 'components/**/*.html'],
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
