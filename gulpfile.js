const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('babel', done => {
    return gulp.src('./*/block.js')
        .pipe(babel())
        .pipe(gulp.dest('./dist'));

    // return gulp.src(['./test-block/block.js'])
    //     .pipe(babel())
    //     .pipe(gulp.dest('./test-block/dist')); 

    // return gulp.src(['./test-block2/block.js'])
    //     .pipe(babel())
    //     .pipe(gulp.dest('./test-block2/dist')); 

    // done();
});

gulp.task('watch', () => {
    gulp.watch(['./*/block.js'], gulp.series(['babel']));
});

gulp.task('default', gulp.series(['babel', 'watch']));
gulp.task('build', gulp.series(['babel']));