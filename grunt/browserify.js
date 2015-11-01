module.exports = {
  proto: {
    files: {
      'dist/bundle.js': ['app.ts', 'typings/tsd.d.ts']
    },
    options: {
      plugin: ['tsify']
    }
  }
};
