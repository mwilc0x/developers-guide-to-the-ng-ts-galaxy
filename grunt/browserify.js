module.exports = {
  proto: {
    files: {
      'dist/bundle.js': ['src/app.ts', 'typings/tsd.d.ts']
    },
    options: {
      plugin: ['tsify']
    }
  }
};
