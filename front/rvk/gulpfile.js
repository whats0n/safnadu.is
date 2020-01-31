const gulp        = require('gulp');
const iconfont    = require('gulp-iconfont');
const iconfontCss = require('gulp-iconfont-css');

const fontName = 'Icons';

gulp.task('icon-font', () => gulp.src(['assets/icons/*.svg'])
  .pipe(iconfontCss({
    fontName: fontName,
    path: 'assets/styles/helpers/_icon-font.scss',
    targetPath: '../styles/generated/_icons.scss',
    fontPath: '../fonts/'
  }))
  .pipe(iconfont({
    fontName: fontName,
    formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'],
    normalize: true
   }))
  .pipe(gulp.dest('assets/fonts/')))

gulp.task('build', gulp.parallel('icon-font'))

const watch = () => {
  gulp.watch(['assets/icons/*.svg'], gulp.series('icon-font'))
}

gulp.task('watch', gulp.series('build', watch))
gulp.task('default', gulp.series('build'))
