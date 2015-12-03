var gulp = require('gulp');
var gulpWebpack = require("gulp-webpack");
var webpackConfig = require("./webpack.config");
var del = require('del');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');

var componentsJS = './src/**/*.js';
var examplesJS = './examples/**/*.js';

var paths = {
  scripts: [componentsJS, examplesJS],
  styles: ['./src/**/*.css', './src/**/*.less', '.src/**/*.scss'],
  html: ['./examples/index.html']
};

gulp.task('clean', function(callback) {
  del(['dist'], callback);
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(paths.scripts, ['build']);
  gulp.watch(paths.styles, ['build']);
  gulp.watch(paths.html, ['build']);
});

gulp.task('scripts', function(){
    gulp.src(examplesJS)//此处随便定义一个值，最终会使用webpack中的entry，另外也可以将webpack.config.js中的entry注释掉，在此指定src文件。
        .pipe(gulpWebpack(webpackConfig))
        .pipe(gulp.dest('./dist/'))
        .pipe(livereload());
});

gulp.task('build', ['clean', 'scripts'],function(callback){
    
});

gulp.task('serve', function(callback){
    connect.server();
});

gulp.task('default',['clean', 'scripts', 'watch', 'serve'], function(){

});
