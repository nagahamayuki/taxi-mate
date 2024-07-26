const gulp = require('gulp');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

// JSファイルを圧縮するタスク
function scriptsLp1() {
    return gulp.src('lp-1/assets/js/script.js') // JSファイルのソースディレクトリ
        .pipe(sourcemaps.init())
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('lp-1/assets/js')); // 圧縮後のファイルの出力ディレクトリ
}

function scriptsLp2() {
    return gulp.src('lp-2/assets/js/script.js') // JSファイルのソースディレクトリ
        .pipe(sourcemaps.init())
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('lp-2/assets/js')); // 圧縮後のファイルの出力ディレクトリ
}

// CSSファイルを圧縮するタスク
function stylesLp1() {
    return gulp.src('lp-1/assets/css/style.css') // CSSファイルのソースディレクトリ
        .pipe(sourcemaps.init())
        .pipe(concat('style.min.css'))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('lp-1/assets/css')); // 圧縮後のファイルの出力ディレクトリ
}

function stylesLp2() {
    return gulp.src('lp-2/assets/css/style.css') // CSSファイルのソースディレクトリ
        .pipe(sourcemaps.init())
        .pipe(concat('style.min.css'))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('lp-2/assets/css')); // 圧縮後のファイルの出力ディレクトリ
}

// 変更を監視するタスク
function watch() {
    gulp.watch('lp-1/assets/js/*.js', scriptsLp1);
    gulp.watch('lp-1/assets/css/*.css', stylesLp1);
    gulp.watch('lp-2/assets/js/*.js', scriptsLp2);
    gulp.watch('lp-2/assets/css/*.css', stylesLp2);
}

// デプロイ専用のタスク
const deploy = gulp.series(scriptsLp1, stylesLp1, scriptsLp2, stylesLp2);

// デフォルトタスク
const defaultTask = gulp.series(scriptsLp1, stylesLp1, scriptsLp2, stylesLp2, watch);

// タスクのエクスポート
exports.scriptsLp1 = scriptsLp1;
exports.stylesLp1 = stylesLp1;
exports.scriptsLp2 = scriptsLp2;
exports.stylesLp2 = stylesLp2;
exports.watch = watch;
exports.deploy = deploy;
exports.default = defaultTask;