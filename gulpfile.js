var gulp = require('gulp');
var gulpWebpack = require("gulp-webpack");
var webpackConfig = require("./webpack.config");
var del = require('del');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var jsPath = './app/scripts/**/*.js';
var libPath = './app/lib/**/*.js';
gulp.task('clean', function(callback) {
  del(['dist'], callback);
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch([jsPath, libPath], ['build']);
});

gulp.task('scripts', function(){
    gulp.src(jsPath)
        .pipe(gulpWebpack(webpackConfig))
        .pipe(gulp.dest('./dist/scripts/'))
        .pipe(livereload());
    gulp.src(libPath)
        .pipe(concat('lib.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts/')) 
        .pipe(livereload());
});

gulp.task('build', ['clean', 'scripts'],function(callback){
    
});

gulp.task('serve', function(callback){
    connect.server();
});

gulp.task('default',['clean', 'scripts', 'watch', 'serve'], function(){

});
