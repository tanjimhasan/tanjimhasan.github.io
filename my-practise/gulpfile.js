const gulp = require('gulp');
const imagemin = require ('gulp-imagemin');
const uglify = require ('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();



// copy Bootstrap CSS to src/assets/css
gulp.task('bs', function() {
	return gulp.src('node_modules/bootstrap/dist/css/bootstrap.min.css')
	.pipe(gulp.dest('src/assets/css'))
});

// copy necessary bootstrap scss files 
gulp.task('bsscss', function() {
	return gulp.src(['node_modules/bootstrap/scss/_variables.scss', 'node_modules/bootstrap/scss/_functions.scss', 'node_modules/bootstrap/scss/mixins/_breakpoints.scss'])
	.pipe(gulp.dest('src/assets/scss/bootstrap'))
});

// copy JS Files to src/assets/js
gulp.task('js', function() {
	return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
	.pipe(gulp.dest("src/assets/js"))
	.pipe(browserSync.stream());
});

// copy Fonts to src/assets/webfonts
gulp.task('fonts', function() {
	return gulp.src('node_modules/fontawesome-web/webfonts/*')
	.pipe(gulp.dest('src/assets/webfonts'))
})

// copy Font Awesome CSS to src/assets/css
gulp.task('fa', function() {
	return gulp.src('node_modules/fontawesome-web/css/fontawesome-all.min.css')
	.pipe(gulp.dest('src/assets/css'))
})


// copy html files
gulp.task('copyHTML', function(){
	gulp.src('src/*.html')
	.pipe(gulp.dest('dist'));	
});

// copy font files
gulp.task('copyFont', function(){
	gulp.src('src/assets/fonts/**')
	.pipe(gulp.dest('dist/assets/fonts'));	
});
// copy css files
gulp.task('copyCss', function(){
	gulp.src('src/assets/css/**')
	.pipe(gulp.dest('dist/assets/css'));	
});
// copy js files
gulp.task('copyJs', function(){
	gulp.src('src/assets/js/**')
	.pipe(gulp.dest('dist/assets/js'));	
});

// minify images

gulp.task('minifyImage', function(){
	gulp.src('src/assets/images/*')
	.pipe(imagemin())
	.pipe(gulp.dest('dist/assets/images'));
});


// convert sass to css

gulp.task('sass', function(){
	return gulp.src('src/assets/scss/*.scss')
	.pipe(sass({
		includePaths: ['./assets/scss/**/*.scss']
	}).on('error', sass.logError))
	.pipe(gulp.dest("src/assets/css"))
	.pipe(browserSync.stream());
});


// minify and concat js files

gulp.task('uglifyJs', function(){
	gulp.src('src/assets/js/main.js')
	.pipe(uglify())
	.pipe(gulp.dest('dist/assets/js'));
});



//Watch Sass & Serve
gulp.task('serve', ['sass'], function() {
	browserSync.init({
		server: "./src"  
	});
	gulp.watch(['src/assets/scss/**/*.scss'], ['sass']);
	gulp.watch("src/*.html").on('change', browserSync.reload);
});



//run
gulp.task('default', ['serve', 'fa', 'bs', 'bsscss', 'fonts', 'js']);
gulp.task('copyToDist', ['copyHTML', 'copyFont', 'copyCss', 'copyJs', 'uglifyJs', 'minifyImage']);