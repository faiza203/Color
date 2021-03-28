/*
	TASK LIST
	------------------
	01. fonts
	02. js
	03. plugins
	
	04. default-css
	05. default-css-rtl
	06. default-css-theme
	07. default-css-image
	08. default-watch
	09. default
	
	10. material-css
	11. material-css-rtl
	12. material-css-theme
	13. material-css-image
	14. material-watch
	15. material
	
	16. apple-css
	17. apple-css-rtl
	18. apple-css-theme
	19. apple-css-image
	20. apple-watch
	21. apple
	
	22. transparent-css
	23. transparent-css-rtl
	24. transparent-css-theme
	25. transparent-css-image
	26. transparent-watch
	27. transparent
	
	28. google-css
	29. google-css-rtl
	30. google-css-theme
	31. google-css-image
	32. google-watch
	33. google
	
	34. facebook-css
	35. facebook-css-rtl
	36. facebook-css-theme
	37. facebook-css-image
	38. facebook-watch
	39. facebook
*/
var gulp        = require('gulp');
var sass        = require('gulp-sass');
var minifyCSS   = require('gulp-clean-css');
var concat      = require('gulp-concat');
var sourcemaps  = require('gulp-sourcemaps');
var livereload  = require('gulp-livereload');
var connect     = require('gulp-connect');
var download    = require('gulp-download-stream');
var header      = require('gulp-header');
var uglify      = require('gulp-uglify');
var merge       = require('merge-stream');
var fileinclude = require('gulp-file-include');
var distPath    = 'wwwroot/';

// 01. fonts
gulp.task('fonts', function() {
  return gulp.src(['node_modules/@fortawesome/fontawesome-free/webfonts/*'])
  	.pipe(gulp.dest(distPath + '/css/webfonts/'));
});

// 02. js
gulp.task('js', function(){
	gulp.src([ 'src/js/demo/**' ])
		.pipe(gulp.dest(distPath + '/js/demo'));
	gulp.src([ 'src/js/theme/**' ])
		.pipe(gulp.dest(distPath + '/js/theme'));
  return gulp.src([
  	'node_modules/pace-js/pace.min.js',
  	'node_modules/jquery/dist/jquery.min.js',
  	'node_modules/jquery-ui-dist/jquery-ui.min.js',
  	'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
  	'node_modules/jquery-slimscroll/jquery.slimscroll.min.js',
  	'node_modules/js-cookie/src/js.cookie.js',
  	'src/js/app.js',
  	])
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write())
    .pipe(uglify())
    .pipe(gulp.dest(distPath + '/js/'))
    .pipe(livereload());
});

// 03. plugins
gulp.task('plugins', function() {
	var pluginFiles = [
		'node_modules/apexcharts/dist/**',
		'node_modules/lity/dist/**',
		'node_modules/x-editable-bs4/dist/**',
		'node_modules/dropzone/dist/**',
  	'node_modules/@fullcalendar/**',
		'node_modules/chart.js/dist/**',
		'node_modules/raphael/raphael.min.js',
		'node_modules/tag-it/css/**',
		'node_modules/tag-it/js/**',
		'node_modules/jquery-migrate/dist/**',
		'node_modules/jquery-mockjax/dist/**',
		'node_modules/x-editable-bs4/dist/**',
		'node_modules/blueimp-file-upload/**',
		'node_modules/blueimp-canvas-to-blob/**',
		'node_modules/blueimp-gallery/**',
		'node_modules/blueimp-load-image/**',
		'node_modules/blueimp-tmpl/**',
		'node_modules/abpetkov-powerange/dist/**',
		'node_modules/bootstrap3-wysihtml5-bower/dist/**',
		'node_modules/summernote/dist/**',
		'node_modules/parsleyjs/dist/**',
		'node_modules/smartwizard/dist/**',
		'node_modules/flot/**',
		'node_modules/ckeditor/**',
		'node_modules/jvectormap-next/jquery-jvectormap.css',
		'node_modules/jvectormap-next/jquery-jvectormap.min.js',
		'node_modules/moment/**',
		'node_modules/d3/d3.min.js',
		'node_modules/nvd3/build/**',
		'node_modules/simple-line-icons/css/**',
		'node_modules/simple-line-icons/fonts/**',
		'node_modules/jquery-knob/dist/**',
		'node_modules/sweetalert/dist/**',
		'node_modules/clipboard/dist/**',
		'node_modules/jstree/dist/**',
		'node_modules/gritter/css/**',
		'node_modules/gritter/images/**',
		'node_modules/gritter/js/**',
		'node_modules/datatables.net/js/**',
		'node_modules/datatables.net-bs4/css/**',
		'node_modules/datatables.net-bs4/js/**',
		'node_modules/datatables.net-responsive/js/**',
		'node_modules/datatables.net-responsive-bs4/css/**',
		'node_modules/datatables.net-responsive-bs4/js/**',
		'node_modules/datatables.net-autofill/js/**',
		'node_modules/datatables.net-autofill-bs4/css/**',
		'node_modules/datatables.net-autofill-bs4/js/**',
		'node_modules/datatables.net-buttons/js/**',
		'node_modules/datatables.net-buttons-bs4/css/**',
		'node_modules/datatables.net-buttons-bs4/js/**',
		'node_modules/datatables.net-colreorder/js/**',
		'node_modules/datatables.net-colreorder-bs4/css/**',
		'node_modules/datatables.net-colreorder-bs4/js/**',
		'node_modules/datatables.net-fixedcolumns/js/**',
		'node_modules/datatables.net-fixedcolumns-bs4/css/**',
		'node_modules/datatables.net-fixedcolumns-bs4/js/**',
		'node_modules/datatables.net-fixedheader/js/**',
		'node_modules/datatables.net-fixedheader-bs4/css/**',
		'node_modules/datatables.net-fixedheader-bs4/js/**',
		'node_modules/datatables.net-keytable/js/**',
		'node_modules/datatables.net-keytable-bs4/css/**',
		'node_modules/datatables.net-keytable-bs4/js/**',
		'node_modules/datatables.net-rowreorder/js/**',
		'node_modules/datatables.net-rowreorder-bs4/css/**',
		'node_modules/datatables.net-rowreorder-bs4/js/**',
		'node_modules/datatables.net-scroller/js/**',
		'node_modules/datatables.net-scroller-bs4/css/**',
		'node_modules/datatables.net-scroller-bs4/js/**',
		'node_modules/datatables.net-select/js/**',
		'node_modules/datatables.net-select-bs4/css/**',
		'node_modules/datatables.net-select-bs4/js/**',
		'node_modules/pdfmake/build/**',
		'node_modules/jszip/dist/**',
		'node_modules/bootstrap-datepicker/dist/**',
		'node_modules/bootstrap-colorpicker/dist/**',
		'node_modules/bootstrap-select/dist/**',
		'node_modules/bootstrap-show-password/dist/**',
		'node_modules/bootstrap-timepicker/css/**',
		'node_modules/bootstrap-timepicker/js/**',
		'node_modules/@danielfarrell/bootstrap-combobox/**',
		'node_modules/pwstrength-bootstrap/dist/**',
		'node_modules/isotope-layout/dist/**',
		'node_modules/lightbox2/dist/**',
		'node_modules/jquery-simplecolorpicker/**',
		'node_modules/eonasdan-bootstrap-datetimepicker/build/**',
		'node_modules/select2/dist/**',
		'node_modules/jquery.maskedinput/src/**',
		'node_modules/ion-rangeslider/css/**',
		'node_modules/ion-rangeslider/js/**',
		'node_modules/bootstrap-daterangepicker/daterangepicker.css',
		'node_modules/bootstrap-daterangepicker/daterangepicker.js',
		'node_modules/flag-icon-css/css/**',
		'node_modules/flag-icon-css/flags/**',
		'node_modules/jquery-sparkline/jquery.sparkline.min.js',
		'node_modules/bootstrap-social/bootstrap-social.css',
		'node_modules/intro.js/minified/**',
		'node_modules/angular/**',
		'node_modules/angular-ui-router/release/**',
		'node_modules/angular-ui-bootstrap/dist/**',
		'node_modules/oclazyload/dist/**',
		'node_modules/swiper/*'
	];
	
	download([
		'https://raw.githubusercontent.com/highlightjs/cdn-release/master/build/highlight.min.js'
	]).pipe(gulp.dest(distPath + '/lib/highlight.js/'));
	download([
		'https://raw.githubusercontent.com/abpetkov/switchery/master/dist/switchery.min.css',
		'https://raw.githubusercontent.com/abpetkov/switchery/master/dist/switchery.min.js'
	]).pipe(gulp.dest(distPath + '/lib/switchery/'));
	download([
		'https://raw.githubusercontent.com/kbwood/countdown/master/dist/js/jquery.plugin.min.js',
		'https://raw.githubusercontent.com/kbwood/countdown/master/dist/js/jquery.countdown.min.js',
		'https://raw.githubusercontent.com/kbwood/countdown/master/dist/css/jquery.countdown.css'
	]).pipe(gulp.dest(distPath + '/lib/countdown/'));
	download([
		'https://raw.githubusercontent.com/seyDoggy/superbox/master/js/jquery.superbox.min.js',
		'https://raw.githubusercontent.com/seyDoggy/superbox/master/css/superbox.min.css'
	]).pipe(gulp.dest(distPath + '/lib/superbox/'));
	download([
		'https://raw.githubusercontent.com/seyDoggy/superbox/master/css/font/superboxicons.eot',
		'https://raw.githubusercontent.com/seyDoggy/superbox/master/css/font/superboxicons.svg',
		'https://raw.githubusercontent.com/seyDoggy/superbox/master/css/font/superboxicons.ttf',
		'https://raw.githubusercontent.com/seyDoggy/superbox/master/css/font/superboxicons.woff'
	]).pipe(gulp.dest(distPath + '/lib/superbox/font/'));
	download([
		'http://jvectormap.com/js/jquery-jvectormap-world-mill.js'
	]).pipe(gulp.dest(distPath + '/lib/jvectormap-next/'));
	download([
		'https://unpkg.com/ionicons@4.2.6/dist/css/ionicons.min.css'
	]).pipe(gulp.dest(distPath + '/lib/ionicons/css/'));
	download([
		'https://unpkg.com/ionicons@4.2.6/dist/fonts/ionicons.eot',
		'https://unpkg.com/ionicons@4.2.6/dist/fonts/ionicons.woff2',
		'https://unpkg.com/ionicons@4.2.6/dist/fonts/ionicons.woff',
		'https://unpkg.com/ionicons@4.2.6/dist/fonts/ionicons.ttf',
		'https://unpkg.com/ionicons@4.2.6/dist/fonts/ionicons.svg'
	]).pipe(gulp.dest(distPath + '/lib/ionicons/fonts'));
	download([
		'http://lab.xero.nu/bootstrap_calendar/lib/css/bootstrap_calendar.css'
	]).pipe(gulp.dest(distPath + '/lib/bootstrap-calendar/css/'));
	download([
		'http://lab.xero.nu/bootstrap_calendar/lib/js/bootstrap_calendar.min.js'
	]).pipe(gulp.dest(distPath + '/lib/bootstrap-calendar/js/'));
	download([
		'https://raw.githubusercontent.com/extremeFE/bootstrap-colorpalette/master/css/bootstrap-colorpalette.css'
	]).pipe(gulp.dest(distPath + '/lib/bootstrap-colorpalette/css/'));
	download([
		'https://raw.githubusercontent.com/extremeFE/bootstrap-colorpalette/master/js/bootstrap-colorpalette.js'
	]).pipe(gulp.dest(distPath + '/lib/bootstrap-colorpalette/js/'));
	download([
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/css/bootstrap-datetimepicker.min.css'
	]).pipe(gulp.dest(distPath + '/lib/bootstrap-datetimepicker/css/'));
	download([
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/bootstrap-datetimepicker.min.js'
	]).pipe(gulp.dest(distPath + '/lib/bootstrap-datetimepicker/js/'));
	download([
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.ar.js',
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.az.js',
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.bg.js',
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.bn.js',
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.ca.js',
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.cs.js',
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.da.js',
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.de.js',
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.ee.js',
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.el.js',
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.es.js',
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.fi.js',
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.fr.js',
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.he.js',
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.hr.js',
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.hu.js',
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.hy.js',
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.id.js',
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.is.js',
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.it.js',
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.ja.js',
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.ka.js',
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.ko.js',
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.lt.js',
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.lv.js',
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.ms.js',
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.nb.js',
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.nl.js',
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.no.js',
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.pl.js',
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.pt-BR.js',
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.pt.js',
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.ro.js',
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.rs-latin.js',
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.rs.js',
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.ru.js',
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.sk.js',
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.sl.js',
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.sv.js',
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.sw.js',
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.th.js',
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.tr.js',
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.ua.js',
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.uk.js',
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.zh-CN.js',
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.zh-TW.js',
	]).pipe(gulp.dest(distPath + '/lib/bootstrap-datetimepicker/js/locales/'));
	return gulp.src(pluginFiles, { base: './node_modules/' })
		.pipe(gulp.dest(distPath + '/lib'));
});

// 04. default-css
gulp.task('default-css', function(){
  return gulp.src([
			'node_modules/animate.css/animate.min.css',
			'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
			'node_modules/jquery-ui-dist/jquery-ui.min.css',
			'node_modules/pace-js/themes/black/pace-theme-flash.css',
			'src/scss/default/styles.scss'
		])
		.pipe(sass())
		.pipe(concat('app.min.css'))
		.pipe(minifyCSS({debug: true}, (details) => {
      console.log(`${details.name}: ${details.stats.originalSize}`);
      console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
		.pipe(gulp.dest(distPath + '/css/default/'))
		.pipe(livereload());
});

// 05. default-css-rtl
gulp.task('default-css-rtl', function(){
	return gulp.src([
			'node_modules/animate.css/animate.min.css',
			'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
			'node_modules/jquery-ui-dist/jquery-ui.min.css',
			'node_modules/pace-js/themes/black/pace-theme-flash.css',
			'src/scss/default/styles.scss'
		])
		.pipe(header('$enable-rtl: true;'))
		.pipe(sass())
		.pipe(concat('app-rtl.min.css'))
		.pipe(minifyCSS())
		.pipe(gulp.dest(distPath + '/css/default/'));
});

// 06. default-css-theme
gulp.task('default-css-theme', function(){
	var colorList = ['red','pink','orange','yellow','lime','green','teal','aqua','blue','purple','indigo','black'];
	
	var tasks = colorList.map(function (color) {
		return gulp.src([ 'src/scss/default/theme.scss' ])
			.pipe(header('$primary-color: \''+ color +'\';'))
			.pipe(sass())
			.pipe(concat(color +'.min.css'))
			.pipe(minifyCSS())
			.pipe(gulp.dest(distPath + '/css/default/theme/'));
  });
	console.log('Generating the css files. Please wait...');
  return merge(tasks);
});

// 07. default-css-image
gulp.task('default-css-image', function(){
	return gulp.src([ 'src/scss/default/images/**' ])
		.pipe(gulp.dest(distPath + '/css/default/images'));
});

// 08. default-watch
gulp.task('default-watch', function () {
	livereload.listen();
	
  gulp.watch('src/scss/**/**.scss', gulp.series(gulp.parallel(['default-css', 'default-css-theme'])));
  gulp.watch('src/js/*.js', gulp.series(gulp.parallel(['js'])));
});

// 09. default
gulp.task('default', gulp.series(gulp.parallel(['fonts', 'js', 'default-css', 'default-css-theme', 'default-css-image', 'default-watch'])));


// 10. material-css
gulp.task('material-css', function(){
  return gulp.src([
			'node_modules/animate.css/animate.min.css',
			'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
			'node_modules/jquery-ui-dist/jquery-ui.min.css',
			'node_modules/pace-js/themes/black/pace-theme-flash.css',
			'src/scss/material/styles.scss'
		])
		.pipe(sass())
		.pipe(concat('app.min.css'))
		.pipe(minifyCSS({debug: true}, (details) => {
      console.log(`${details.name}: ${details.stats.originalSize}`);
      console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
		.pipe(gulp.dest(distPath + '/css/material/'))
		.pipe(livereload());
});

// 11. material-css-rtl
gulp.task('material-css-rtl', function(){
	return gulp.src([
			'node_modules/animate.css/animate.min.css',
			'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
			'node_modules/jquery-ui-dist/jquery-ui.min.css',
			'node_modules/pace-js/themes/black/pace-theme-flash.css',
			'src/scss/material/styles.scss'
		])
		.pipe(header('$enable-rtl: true;'))
		.pipe(sass())
		.pipe(concat('app-rtl.min.css'))
		.pipe(minifyCSS())
		.pipe(gulp.dest(distPath + '/css/material/'));
});

// 12. material-css-theme
gulp.task('material-css-theme', function(){
	var colorList = ['red','pink','orange','yellow','lime','green','teal','aqua','blue','purple','indigo','black'];
	
	var tasks = colorList.map(function (color) {
		return gulp.src([ 'src/scss/material/theme.scss' ])
			.pipe(header('$primary-color: \''+ color +'\';'))
			.pipe(sass())
			.pipe(concat(color +'.min.css'))
			.pipe(minifyCSS())
			.pipe(gulp.dest(distPath + '/css/material/theme/'));
  });
	console.log('Generating the css files. Please wait...');
  return merge(tasks);
});

// 13. material-css-image
gulp.task('material-css-image', function(){
	return gulp.src([ 'src/scss/material/images/**' ])
		.pipe(gulp.dest(distPath + '/css/material/images'));
});

// 14. material-watch
gulp.task('material-watch', function () {
	livereload.listen();
	
  gulp.watch('src/scss/**/**.scss', gulp.series(gulp.parallel(['material-css', 'material-css-theme'])));
  gulp.watch('src/js/*.js', gulp.series(gulp.parallel(['js'])));
});

// 15. material
gulp.task('material', gulp.series(gulp.parallel(['fonts', 'js', 'material-css', 'material-css-theme', 'material-css-image', 'material-watch'])));


// 16. apple-css
gulp.task('apple-css', function(){
  return gulp.src([
			'node_modules/animate.css/animate.min.css',
			'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
			'node_modules/jquery-ui-dist/jquery-ui.min.css',
			'node_modules/pace-js/themes/black/pace-theme-flash.css',
			'src/scss/apple/styles.scss'
		])
		.pipe(sass())
		.pipe(concat('app.min.css'))
		.pipe(minifyCSS({debug: true}, (details) => {
      console.log(`${details.name}: ${details.stats.originalSize}`);
      console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
		.pipe(gulp.dest(distPath + '/css/apple/'))
		.pipe(livereload());
});

// 17. apple-css-rtl
gulp.task('apple-css-rtl', function(){
	return gulp.src([
			'node_modules/animate.css/animate.min.css',
			'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
			'node_modules/jquery-ui-dist/jquery-ui.min.css',
			'node_modules/pace-js/themes/black/pace-theme-flash.css',
			'src/scss/apple/styles.scss'
		])
		.pipe(header('$enable-rtl: true;'))
		.pipe(sass())
		.pipe(concat('app-rtl.min.css'))
		.pipe(minifyCSS())
		.pipe(gulp.dest(distPath + '/css/apple/'));
});

// 18. apple-css-theme
gulp.task('apple-css-theme', function(){
	var colorList = ['red','pink','orange','yellow','lime','green','teal','aqua','blue','purple','indigo','black'];
	
	var tasks = colorList.map(function (color) {
		return gulp.src([ 'src/scss/apple/theme.scss' ])
			.pipe(header('$primary-color: \''+ color +'\';'))
			.pipe(sass())
			.pipe(concat(color +'.min.css'))
			.pipe(minifyCSS())
			.pipe(gulp.dest(distPath + '/css/apple/theme/'));
  });
	console.log('Generating the css files. Please wait...');
  return merge(tasks);
});

// 19. apple-css-image
gulp.task('apple-css-image', function(){
	return gulp.src([ 'src/scss/apple/images/**' ])
		.pipe(gulp.dest(distPath + '/css/apple/images'));
});

// 20. apple-watch
gulp.task('apple-watch', function () {
	livereload.listen();
	
  gulp.watch('src/scss/**/**.scss', gulp.series(gulp.parallel(['apple-css', 'apple-css-theme'])));
  gulp.watch('src/js/*.js', gulp.series(gulp.parallel(['js'])));
});

// 21. apple
gulp.task('apple', gulp.series(gulp.parallel(['fonts', 'js', 'apple-css', 'apple-css-theme', 'apple-css-image', 'apple-watch'])));


// 22. transparent-css
gulp.task('transparent-css', function(){
  return gulp.src([
			'node_modules/animate.css/animate.min.css',
			'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
			'node_modules/jquery-ui-dist/jquery-ui.min.css',
			'node_modules/pace-js/themes/black/pace-theme-flash.css',
			'src/scss/transparent/styles.scss'
		])
		.pipe(sass())
		.pipe(concat('app.min.css'))
		.pipe(minifyCSS({debug: true}, (details) => {
      console.log(`${details.name}: ${details.stats.originalSize}`);
      console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
		.pipe(gulp.dest(distPath + '/css/transparent/'))
		.pipe(livereload());
});

// 23. transparent-css-rtl
gulp.task('transparent-css-rtl', function(){
	return gulp.src([
			'node_modules/animate.css/animate.min.css',
			'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
			'node_modules/jquery-ui-dist/jquery-ui.min.css',
			'node_modules/pace-js/themes/black/pace-theme-flash.css',
			'src/scss/transparent/styles.scss'
		])
		.pipe(header('$enable-rtl: true;'))
		.pipe(sass())
		.pipe(concat('app-rtl.min.css'))
		.pipe(minifyCSS())
		.pipe(gulp.dest(distPath + '/css/transparent/'));
});

// 24. transparent-css-theme
gulp.task('transparent-css-theme', function(){
	var colorList = ['red','pink','orange','yellow','lime','green','teal','aqua','blue','purple','indigo','black'];
	
	var tasks = colorList.map(function (color) {
		return gulp.src([ 'src/scss/transparent/theme.scss' ])
			.pipe(header('$primary-color: \''+ color +'\';'))
			.pipe(sass())
			.pipe(concat(color +'.min.css'))
			.pipe(minifyCSS())
			.pipe(gulp.dest(distPath + '/css/transparent/theme/'));
  });
	console.log('Generating the css files. Please wait...');
  return merge(tasks);
});

// 25. transparent-css-image
gulp.task('transparent-css-image', function(){
	return gulp.src([ 'src/scss/transparent/images/**' ])
		.pipe(gulp.dest(distPath + '/css/transparent/images'));
});

// 26. transparent-watch
gulp.task('transparent-watch', function () {
	livereload.listen();
	
  gulp.watch('src/scss/**/**.scss', gulp.series(gulp.parallel(['transparent-css', 'transparent-css-theme'])));
  gulp.watch('src/js/*.js', gulp.series(gulp.parallel(['js'])));
});

// 27. transparent
gulp.task('transparent', gulp.series(gulp.parallel(['fonts', 'js', 'transparent-css', 'transparent-css-theme', 'transparent-css-image', 'transparent-watch'])));


// 28. google-css
gulp.task('google-css', function(){
  return gulp.src([
			'node_modules/animate.css/animate.min.css',
			'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
			'node_modules/jquery-ui-dist/jquery-ui.min.css',
			'node_modules/pace-js/themes/black/pace-theme-flash.css',
			'src/scss/google/styles.scss'
		])
		.pipe(sass())
		.pipe(concat('app.min.css'))
		.pipe(minifyCSS({debug: true}, (details) => {
      console.log(`${details.name}: ${details.stats.originalSize}`);
      console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
		.pipe(gulp.dest(distPath + '/css/google/'))
		.pipe(livereload());
});

// 29. google-css-rtl
gulp.task('google-css-rtl', function(){
	return gulp.src([
			'node_modules/animate.css/animate.min.css',
			'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
			'node_modules/jquery-ui-dist/jquery-ui.min.css',
			'node_modules/pace-js/themes/black/pace-theme-flash.css',
			'src/scss/google/styles.scss'
		])
		.pipe(header('$enable-rtl: true;'))
		.pipe(sass())
		.pipe(concat('app-rtl.min.css'))
		.pipe(minifyCSS())
		.pipe(gulp.dest(distPath + '/css/google/'));
});

// 30. google-css-theme
gulp.task('google-css-theme', function(){
	var colorList = ['red','pink','orange','yellow','lime','green','teal','aqua','blue','purple','indigo','black'];
	
	var tasks = colorList.map(function (color) {
		return gulp.src([ 'src/scss/google/theme.scss' ])
			.pipe(header('$primary-color: \''+ color +'\';'))
			.pipe(sass())
			.pipe(concat(color +'.min.css'))
			.pipe(minifyCSS())
			.pipe(gulp.dest(distPath + '/css/google/theme/'));
  });
	console.log('Generating the css files. Please wait...');
  return merge(tasks);
});

// 31. google-css-image
gulp.task('google-css-image', function(){
	return gulp.src([ 'src/scss/google/images/**' ])
		.pipe(gulp.dest(distPath + '/css/google/images'));
});

// 32. google-watch
gulp.task('google-watch', function () {
	livereload.listen();
	
  gulp.watch('src/scss/**/**.scss', gulp.series(gulp.parallel(['google-css', 'google-css-theme'])));
  gulp.watch('src/js/*.js', gulp.series(gulp.parallel(['js'])));
});

// 33. google
gulp.task('google', gulp.series(gulp.parallel(['fonts', 'js', 'google-css', 'google-css-theme', 'google-css-image', 'google-watch'])));


// 34. facebook-css
gulp.task('facebook-css', function(){
  return gulp.src([
			'node_modules/animate.css/animate.min.css',
			'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
			'node_modules/jquery-ui-dist/jquery-ui.min.css',
			'node_modules/pace-js/themes/black/pace-theme-flash.css',
			'src/scss/facebook/styles.scss'
		])
		.pipe(sass())
		.pipe(concat('app.min.css'))
		.pipe(minifyCSS({debug: true}, (details) => {
      console.log(`${details.name}: ${details.stats.originalSize}`);
      console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
		.pipe(gulp.dest(distPath + '/css/facebook/'))
		.pipe(livereload());
});

// 35. facebook-css-rtl
gulp.task('facebook-css-rtl', function(){
	return gulp.src([
			'node_modules/animate.css/animate.min.css',
			'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
			'node_modules/jquery-ui-dist/jquery-ui.min.css',
			'node_modules/pace-js/themes/black/pace-theme-flash.css',
			'src/scss/facebook/styles.scss'
		])
		.pipe(header('$enable-rtl: true;'))
		.pipe(sass())
		.pipe(concat('app-rtl.min.css'))
		.pipe(minifyCSS())
		.pipe(gulp.dest(distPath + '/css/facebook/'));
});

// 36. facebook-css-theme
gulp.task('facebook-css-theme', function(){
	var colorList = ['red','pink','orange','yellow','lime','green','teal','aqua','blue','purple','indigo','black'];
	
	var tasks = colorList.map(function (color) {
		return gulp.src([ 'src/scss/facebook/theme.scss' ])
			.pipe(header('$primary-color: \''+ color +'\';'))
			.pipe(sass())
			.pipe(concat(color +'.min.css'))
			.pipe(minifyCSS())
			.pipe(gulp.dest(distPath + '/css/facebook/theme/'));
  });
	console.log('Generating the css files. Please wait...');
  return merge(tasks);
});

// 37. facebook-css-image
gulp.task('facebook-css-image', function(){
	return gulp.src([ 'src/scss/facebook/images/**' ])
		.pipe(gulp.dest(distPath + '/css/facebook/images'));
});

// 38. facebook-watch
gulp.task('facebook-watch', function () {
	livereload.listen();
	
  gulp.watch('src/scss/**/**.scss', gulp.series(gulp.parallel(['facebook-css', 'facebook-css-theme'])));
  gulp.watch('src/js/*.js', gulp.series(gulp.parallel(['js'])));
});

// 39. facebook
gulp.task('facebook', gulp.series(gulp.parallel(['fonts', 'js', 'facebook-css', 'facebook-css-theme', 'facebook-css-image', 'facebook-watch'])));
