'use strict';

var browserSync = require('browser-sync');

module.exports = function () {
  browserSync.init({
    files: [
      './app/src/bundle.js',
      './app/styles/main.css',
      './app/index.html'
    ],
    ghostMode: false,
    notify: false,
    server: {
      baseDir: ['./app', './']
    }
  })
};
