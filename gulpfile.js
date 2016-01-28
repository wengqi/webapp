var SYS_CONFIG = require('./system.config.js');
var gulp = require('gulp');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var gulpWebpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config');
var webpackDevConfig = require('./webpack.dev.config');
var del = require('del');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');
var less = require('gulp-less');
var cssmin = require('gulp-minify-css');
var runSequence = require('run-sequence');
var unzip = require('gulp-unzip');
var replace = require('gulp-replace');
var argv = require('yargs').argv;

// 定义需要操作的文件
var zipFile = 'app.zip';
var replaceFiles = [SYS_CONFIG.SRC_PATH + '/index.html'];
var imageFiles = [SYS_CONFIG.SRC_PATH + '/images/**/*.*'];
var scriptFiles = [SYS_CONFIG.SRC_PATH + '/index.js', SYS_CONFIG.SRC_PATH + '/core/**/*.js', SYS_CONFIG.SRC_PATH + '/modules/**/*.js'];
var viewFiles = [SYS_CONFIG.SRC_PATH + '/modules/**/*.html', SYS_CONFIG.SRC_PATH + '/modules/**/*.tpl'];
var styleFiles = [SYS_CONFIG.SRC_PATH + '/styles/**/*.css', SYS_CONFIG.SRC_PATH + '/modules/**/*.css'];


gulp.task('clean:src', function() {
    return del(SYS_CONFIG.SRC_PATH);
});

gulp.task('clean:dist', function() {
    return del(SYS_CONFIG.DEPLOY_PATH);
});

gulp.task('copy:images', function() {
    return gulp.src(imageFiles)
        .pipe(gulp.dest(SYS_CONFIG.DEPLOY_PATH + '/images'));
});

gulp.task('watch:src', function() {
    livereload.listen();
    gulp.watch(scriptFiles, ['build:js']);
    gulp.watch(viewFiles, ['build:js']);
    gulp.watch(replaceFiles, ['replace']);
});

gulp.task('unzip', function() {
    return gulp.src(zipFile)
        .pipe(unzip())
        .pipe(gulp.dest('./'));
});

gulp.task('replace', function() {
    return gulp.src(replaceFiles)
        .pipe(replace(/\$\{SERVER_PATH\}/g, SYS_CONFIG.SERVER_PATH))
        .pipe(gulp.dest(SYS_CONFIG.DEPLOY_PATH));  
});

gulp.task('build:js', function() {
    return gulp.src(scriptFiles)
        .pipe(gulpif(argv.env != 'prod', gulpWebpack(webpackDevConfig)))
        .pipe(gulpif(argv.env == 'prod', gulpWebpack(webpackConfig)))
        .pipe(gulp.dest(SYS_CONFIG.DEPLOY_PATH))
        .pipe(gulpif(argv.env != 'prod', livereload()));
});

gulp.task('build:css', function(){
    return gulp.src(styleFiles)
        .pipe(concat('main.css'))
        .pipe(gulpif(argv.env == 'prod', cssmin()))
        .pipe(gulp.dest(SYS_CONFIG.DEPLOY_PATH))
        .pipe(gulpif(argv.env != 'prod', livereload()));
});


gulp.task('build', function(cb) {
    runSequence('clean:dist', 'copy:images', ['build:js', 'build:css', 'replace'], cb);
});

gulp.task('serve', function(cb) {
    connect.server({
        port: 9001
    });
});

gulp.task('default', function(cb) {
    runSequence('build', 'serve', 'watch:src', cb);
});

gulp.task('deploy', function(cb) {
    watch(zipFile, function () {
        runSequence('clean:src', 'unzip', 'build');
    });
});

