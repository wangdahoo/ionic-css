const del = require('del')
const gulp = require('gulp')
const sass = require('gulp-sass')

gulp.task('default', () => {
  gulp.watch('./scss/*.scss', ['sass'])
})

gulp.task('clean', () => {
  return del([
    './css/*.*'
  ])
})

gulp.task('sass', ['clean'], () => {
  return gulp.src('./scss/ionic.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./css'))
})

