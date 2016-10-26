var browserSync = require('browser-sync').create()
var reload = browserSync.reload
var gulp = require('gulp')
var gulpsync = require('gulp-sync')(gulp)
var gitbook = require('gitbook')
var path = require('path')
var del = require('del')

// path of your *.md book files
var rootPath = path.join(__dirname, 'docs')

// output path where generated *.html will be stored
var outputPath = path.join(rootPath, '_book')

// clean folder, create doc and start server
gulp.task('build-doc', function (done) {
  reCreateBook(function () {
    browserSync.init({
      server: {
        baseDir: outputPath
      }
    })
    done();
  })
})

// watch for *.md files changes
gulp.task('watch', function () {
  gulp.watch(path.join(rootPath, '/**/*.md'), function () {
    reCreateBook(reload)
  })
})

// main task
gulp.task('default', gulpsync.sync(['build-doc', 'watch']))

function getBook () {
  var fs = gitbook.createNodeFS(rootPath)
  return gitbook.Book.createForFS(fs)
}

function createBook () {
  var book = getBook()
  var Parse = gitbook.Parse
  var Output = gitbook.Output
  var Generator = Output.getGenerator('website')

  return Parse.parseBook(book)
    .then(function (resultBook) {
      return Output.generate(Generator, resultBook, {
        root: outputPath
      })
    })
}

function reCreateBook (done) {
  // ensure output path is not exists otherwise book won't generated
  return del(path.join(outputPath)).then(paths => {    
    createBook().then(done);
  })
}
