'use strict';

var gulp = require('gulp');

gulp.task('serve', ['sass', 'bundle'], require('./tasks/serve'));
gulp.task('sass', require('./tasks/sass'));
gulp.task('bundle', require('./tasks/bundle'));

gulp.watch('app/styles/**/*.scss', ['sass']);

gulp.task('default', ['serve']);
