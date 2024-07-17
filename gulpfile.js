const gulp = require('gulp');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

// JSファイルを圧縮するタスク
function scripts() {
    return gulp.src('lp-1/assets/js/script.js') // JSファイルのソースディレクトリ
        .pipe(sourcemaps.init())
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('lp-1/assets/js')); // 圧縮後のファイルの出力ディレクトリ
}

// CSSファイルを圧縮するタスク
function styles() {
    return gulp.src('lp-1/assets/css/style.css') // CSSファイルのソースディレクトリ
        .pipe(sourcemaps.init())
        .pipe(concat('style.min.css'))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('lp-1/assets/css')); // 圧縮後のファイルの出力ディレクトリ
}

// 変更を監視するタスク
function watch() {
    gulp.watch('lp-1/assets/js/*.js', scripts);
    gulp.watch('lp-1/assets/css/*.css', styles);
}

// デプロイ専用のタスク
const deploy = gulp.series(scripts, styles);

// デフォルトタスク
const defaultTask = gulp.series(scripts, styles, watch);

// タスクのエクスポート
exports.scripts = scripts;
exports.styles = styles;
exports.watch = watch;
exports.deploy = deploy;
exports.default = defaultTask;