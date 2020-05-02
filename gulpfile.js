const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('babel', () => {
    return gulp.src('./*/block.js')
        .pipe(babel())
        .pipe(gulp.dest('./dist'));

    
});

gulp.task('watch', () => {
    gulp.watch(['./*/block.js'], gulp.series(['babel']));
});

gulp.task('default', gulp.series(['babel', 'watch']));
gulp.task('build', gulp.series(['babel']));