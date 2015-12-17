var browserSync = require('browser-sync');
var proxyMiddleware = require('http-proxy-middleware');
var gulp = require('gulp');
var proxy = proxyMiddleware('/api', {target: 'http://localhost:8000'});

gulp.task('default', function () {
    browserSync({
        server: {
            baseDir: "UIApp/",
            directory: true,
            port: 3000
        }
    });
});