const gulp = require("gulp");
const uglify = require("gulp-uglify");
const cleanCSS = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");
const concat = require("gulp-concat");

// lp-1用のJS圧縮
function scriptsLp1() {
  return gulp
    .src("lp-1/assets/js/script.js")
    .pipe(sourcemaps.init())
    .pipe(concat("script.min.js"))
    .pipe(uglify())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("lp-1/assets/js"));
}

// lp-1用のCSS圧縮
function stylesLp1() {
  return gulp
    .src("lp-1/assets/css/style.css")
    .pipe(sourcemaps.init())
    .pipe(concat("style.min.css"))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("lp-1/assets/css"));
}

// lp-2用のJS圧縮
function scriptsLp2() {
  return gulp
    .src("lp-2/assets/js/script.js")
    .pipe(sourcemaps.init())
    .pipe(concat("script.min.js"))
    .pipe(uglify())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("lp-2/assets/js"));
}

// lp-2用のCSS圧縮
function stylesLp2() {
  return gulp
    .src("lp-2/assets/css/style.css")
    .pipe(sourcemaps.init())
    .pipe(concat("style.min.css"))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("lp-2/assets/css"));
}

// 変更監視
function watch() {
  gulp.watch(["lp-1/assets/js/*.js", "!lp-1/assets/js/*.min.js"], scriptsLp1);
  gulp.watch(
    ["lp-1/assets/css/*.css", "!lp-1/assets/css/*.min.css"],
    stylesLp1
  );
  gulp.watch(["lp-2/assets/js/*.js", "!lp-2/assets/js/*.min.js"], scriptsLp2);
  gulp.watch(
    ["lp-2/assets/css/*.css", "!lp-2/assets/css/*.min.css"],
    stylesLp2
  );
}

// デプロイ用一括実行
const deploy = gulp.series(scriptsLp1, stylesLp1, scriptsLp2, stylesLp2);
const defaultTask = gulp.series(deploy, watch);

// エクスポート
exports.scriptsLp1 = scriptsLp1;
exports.stylesLp1 = stylesLp1;
exports.scriptsLp2 = scriptsLp2;
exports.stylesLp2 = stylesLp2;
exports.watch = watch;
exports.deploy = deploy;
exports.default = defaultTask;
