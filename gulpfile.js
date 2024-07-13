const gulp = require('gulp');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

// JSファイルを圧縮するタスク
gulp.task('scripts', function() {
    return gulp.src('lp-1/assets/js/script.js') // JSファイルのソースディレクトリ
        .pipe(sourcemaps.init())
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('lp-1/assets/js')); // 圧縮後のファイルの出力ディレクトリ
});

// CSSファイルを圧縮するタスク
gulp.task('styles', function() {
    return gulp.src('lp-1/assets/css/style.css') // CSSファイルのソースディレクトリ
        .pipe(sourcemaps.init())
        .pipe(concat('style.min.css'))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('lp-1/assets/css')); // 圧縮後のファイルの出力ディレクトリ
});

// デフォルトタスク
gulp.task('default', gulp.series('scripts', 'styles'));