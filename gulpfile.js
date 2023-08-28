const gulp = require('gulp');
const copy = require('gulp-copy');
const rename = require('gulp-rename');

// Task to copy index.html to dist folder
gulp.task('copy-html', () => {
    return gulp.src('index.html')
        .pipe(gulp.dest('dist'));
});

// Task to copy the assets folder to dist folder
gulp.task('copy-assets', () => {
    return gulp.src('assets/**/*')
        .pipe(gulp.dest('dist/assets'));
});

// Task to copy both HTML and assets
gulp.task('copy', gulp.parallel('copy-html', 'copy-assets'));

// Default task
gulp.task('default', gulp.series('copy'));

