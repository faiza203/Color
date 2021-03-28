/*
	TASK LIST
	------------------
	01. fonts
	02. js
	03. plugins
	
	04. default-fileinclude
	05. default-startup-fileinclude
	06. default-css
	07. default-css-rtl
	08. default-css-theme
	09. default-css-image
	10. default-watch
	11. default-webserver
	12. default
	
	13. material-fileinclude
	14. material-startup-fileinclude
	15. material-css
	16. material-css-rtl
	17. material-css-theme
	18. material-css-image
	19. material-watch
	20. material-webserver
	21. material
	
	22. apple-fileinclude
	23. apple-startup-fileinclude
	24. apple-css
	25. apple-css-rtl
	26. apple-css-theme
	27. apple-css-image
	28. apple-watch
	29. apple-webserver
	30. apple
	
	31. transparent-fileinclude
	32. transparent-startup-fileinclude
	33. transparent-css
	34. transparent-css-rtl
	35. transparent-css-theme
	36. transparent-css-image
	37. transparent-watch
	38. transparent-webserver
	39. transparent
	
	40. facebook-fileinclude
	41. facebook-startup-fileinclude
	42. facebook-css
	43. facebook-css-rtl
	44. facebook-css-theme
	45. facebook-css-image
	46. facebook-watch
	47. facebook-webserver
	48. facebook
	
	49. google-fileinclude
	50. google-startup-fileinclude
	51. google-css
	52. google-css-rtl
	53. google-css-theme
	54. google-css-image
	55. google-watch
	56. google-webserver
	57. google
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
var distPath    = '../template';

// 01. fonts
gulp.task('fonts', function() {
  return gulp.src(['node_modules/@fortawesome/fontawesome-free/webfonts/*'])
  	.pipe(gulp.dest(distPath + '/assets/css/webfonts/'));
});

// 02. js
gulp.task('js', function(){
	gulp.src([ 'js/demo/**' ])
		.pipe(gulp.dest(distPath + '/assets/js/demo'));
	gulp.src([ 'js/theme/**' ])
		.pipe(gulp.dest(distPath + '/assets/js/theme'));
  return gulp.src([
  	'node_modules/pace-js/pace.min.js',
  	'node_modules/jquery/dist/jquery.min.js',
  	'node_modules/jquery-ui-dist/jquery-ui.min.js',
  	'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
  	'node_modules/jquery-slimscroll/jquery.slimscroll.min.js',
  	'node_modules/js-cookie/src/js.cookie.js',
  	'js/app.js',
  	])
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write())
    .pipe(uglify())
    .pipe(gulp.dest(distPath + '/assets/js/'))
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
	]).pipe(gulp.dest(distPath + '/assets/plugins/highlight.js/'));
	download([
		'https://raw.githubusercontent.com/abpetkov/switchery/master/dist/switchery.min.css',
		'https://raw.githubusercontent.com/abpetkov/switchery/master/dist/switchery.min.js'
	]).pipe(gulp.dest(distPath + '/assets/plugins/switchery/'));
	download([
		'https://raw.githubusercontent.com/kbwood/countdown/master/dist/js/jquery.plugin.min.js',
		'https://raw.githubusercontent.com/kbwood/countdown/master/dist/js/jquery.countdown.min.js',
		'https://raw.githubusercontent.com/kbwood/countdown/master/dist/css/jquery.countdown.css'
	]).pipe(gulp.dest(distPath + '/assets/plugins/countdown/'));
	download([
		'https://raw.githubusercontent.com/seyDoggy/superbox/master/js/jquery.superbox.min.js',
		'https://raw.githubusercontent.com/seyDoggy/superbox/master/css/superbox.min.css'
	]).pipe(gulp.dest(distPath + '/assets/plugins/superbox/'));
	download([
		'https://raw.githubusercontent.com/seyDoggy/superbox/master/css/font/superboxicons.eot',
		'https://raw.githubusercontent.com/seyDoggy/superbox/master/css/font/superboxicons.svg',
		'https://raw.githubusercontent.com/seyDoggy/superbox/master/css/font/superboxicons.ttf',
		'https://raw.githubusercontent.com/seyDoggy/superbox/master/css/font/superboxicons.woff'
	]).pipe(gulp.dest(distPath + '/assets/plugins/superbox/font/'));
	download([
		'http://jvectormap.com/js/jquery-jvectormap-world-mill.js'
	]).pipe(gulp.dest(distPath + '/assets/plugins/jvectormap-next/'));
	download([
		'https://unpkg.com/ionicons@4.2.6/dist/css/ionicons.min.css'
	]).pipe(gulp.dest(distPath + '/assets/plugins/ionicons/css/'));
	download([
		'https://unpkg.com/ionicons@4.2.6/dist/fonts/ionicons.eot',
		'https://unpkg.com/ionicons@4.2.6/dist/fonts/ionicons.woff2',
		'https://unpkg.com/ionicons@4.2.6/dist/fonts/ionicons.woff',
		'https://unpkg.com/ionicons@4.2.6/dist/fonts/ionicons.ttf',
		'https://unpkg.com/ionicons@4.2.6/dist/fonts/ionicons.svg'
	]).pipe(gulp.dest(distPath + '/assets/plugins/ionicons/fonts'));
	download([
		'http://lab.xero.nu/bootstrap_calendar/lib/css/bootstrap_calendar.css'
	]).pipe(gulp.dest(distPath + '/assets/plugins/bootstrap-calendar/css/'));
	download([
		'http://lab.xero.nu/bootstrap_calendar/lib/js/bootstrap_calendar.min.js'
	]).pipe(gulp.dest(distPath + '/assets/plugins/bootstrap-calendar/js/'));
	download([
		'https://raw.githubusercontent.com/extremeFE/bootstrap-colorpalette/master/css/bootstrap-colorpalette.css'
	]).pipe(gulp.dest(distPath + '/assets/plugins/bootstrap-colorpalette/css/'));
	download([
		'https://raw.githubusercontent.com/extremeFE/bootstrap-colorpalette/master/js/bootstrap-colorpalette.js'
	]).pipe(gulp.dest(distPath + '/assets/plugins/bootstrap-colorpalette/js/'));
	download([
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/css/bootstrap-datetimepicker.min.css'
	]).pipe(gulp.dest(distPath + '/assets/plugins/bootstrap-datetimepicker/css/'));
	download([
		'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/bootstrap-datetimepicker.min.js'
	]).pipe(gulp.dest(distPath + '/assets/plugins/bootstrap-datetimepicker/js/'));
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
	]).pipe(gulp.dest(distPath + '/assets/plugins/bootstrap-datetimepicker/js/locales/'));
	return gulp.src(pluginFiles, { base: './node_modules/' })
		.pipe(gulp.dest(distPath + '/assets/plugins'));
});

// 04. default-fileinclude
gulp.task('default-fileinclude', function() {
  return gulp.src(['./html/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file',
      rootPath: './',
      context: {
      	theme: 'default'
      }
    }))
    .pipe(gulp.dest(distPath + '/template_html'))
    .pipe(livereload());
});

// 05. default-startup-fileinclude
gulp.task('default-startup-fileinclude', function() {
  return gulp.src(['./html-startup/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file',
      rootPath: './',
      context: {
      	theme: 'default'
      }
    }))
    .pipe(gulp.dest(distPath + '/template_html_startup'))
    .pipe(livereload());
});

// 06. default-css
gulp.task('default-css', function(){
  return gulp.src([
			'node_modules/animate.css/animate.min.css',
			'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
			'node_modules/jquery-ui-dist/jquery-ui.min.css',
			'node_modules/pace-js/themes/black/pace-theme-flash.css',
			'scss/default/styles.scss'
		])
		.pipe(sass())
		.pipe(concat('app.min.css'))
		.pipe(minifyCSS({debug: true}, (details) => {
      console.log(`${details.name}: ${details.stats.originalSize}`);
      console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
		.pipe(gulp.dest(distPath + '/assets/css/default/'))
		.pipe(livereload());
});

// 07. default-css-rtl
gulp.task('default-css-rtl', function(){
	return gulp.src([
			'node_modules/animate.css/animate.min.css',
			'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
			'node_modules/jquery-ui-dist/jquery-ui.min.css',
			'node_modules/pace-js/themes/black/pace-theme-flash.css',
			'scss/default/styles.scss'
		])
		.pipe(header('$enable-rtl: true;'))
		.pipe(sass())
		.pipe(concat('app-rtl.min.css'))
		.pipe(minifyCSS())
		.pipe(gulp.dest(distPath + '/assets/css/default/'));
});

// 08. default-css-theme
gulp.task('default-css-theme', function(){
	var colorList = ['red','pink','orange','yellow','lime','green','teal','aqua','blue','purple','indigo','black'];
	
	var tasks = colorList.map(function (color) {
		return gulp.src([ 'scss/default/theme.scss' ])
			.pipe(header('$primary-color: \''+ color +'\';'))
			.pipe(sass())
			.pipe(concat(color +'.min.css'))
			.pipe(minifyCSS())
			.pipe(gulp.dest(distPath + '/assets/css/default/theme/'));
  });
	console.log('Generating the css files. Please wait...');
  return merge(tasks);
});

// 09. default-css-image
gulp.task('default-css-image', function(){
	return gulp.src([ 'scss/default/images/**' ])
		.pipe(gulp.dest(distPath + '/assets/css/default/images'));
});

// 10. default-watch
gulp.task('default-watch', function () {
	livereload.listen();
	
  gulp.watch('html/**/**.html', gulp.series(gulp.parallel(['default-fileinclude'])));
  gulp.watch('html-startup/**/**.html', gulp.series(gulp.parallel(['default-startup-fileinclude'])));
  gulp.watch('scss/**/**.scss', gulp.series(gulp.parallel(['default-css', 'default-css-theme'])));
  gulp.watch('js/*.js', gulp.series(gulp.parallel(['js'])));
});

// 11. default-webserver
gulp.task('default-webserver', function() {
	connect.server({
		name: 'Color Admin',
		root: [distPath, distPath + '/template_html/'],
		port: 8000,
		livereload: true,
		fallback: 'index.html'
	});
});

// 12. default
gulp.task('default', gulp.series(gulp.parallel(['fonts', 'js', 'default-css', 'default-css-theme', 'default-css-image', 'default-fileinclude', 'default-startup-fileinclude', 'default-webserver', 'default-watch'])));



// 13. material-fileinclude
gulp.task('material-fileinclude', function() {
  return gulp.src(['./html/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file',
      rootPath: './',
      context: {
      	theme: 'material'
      }
    }))
    .pipe(gulp.dest(distPath + '/template_material'))
    .pipe(livereload());
});

// 14. material-startup-fileinclude
gulp.task('material-startup-fileinclude', function() {
  return gulp.src(['./html-startup/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file',
      rootPath: './',
      context: {
      	theme: 'material'
      }
    }))
    .pipe(gulp.dest(distPath + '/template_material_startup'))
    .pipe(livereload());
});

// 15. material-css
gulp.task('material-css', function(){
  return gulp.src([
			'node_modules/animate.css/animate.min.css',
			'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
			'node_modules/jquery-ui-dist/jquery-ui.min.css',
			'node_modules/pace-js/themes/black/pace-theme-flash.css',
			'scss/material/styles.scss'
		])
		.pipe(sass())
		.pipe(concat('app.min.css'))
		.pipe(minifyCSS({debug: true}, (details) => {
      console.log(`${details.name}: ${details.stats.originalSize}`);
      console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
		.pipe(gulp.dest(distPath + '/assets/css/material/'))
		.pipe(livereload());
});

// 16. material-css-rtl
gulp.task('material-css-rtl', function(){
	return gulp.src([
			'node_modules/animate.css/animate.min.css',
			'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
			'node_modules/jquery-ui-dist/jquery-ui.min.css',
			'node_modules/pace-js/themes/black/pace-theme-flash.css',
			'scss/material/styles.scss'
		])
		.pipe(header('$enable-rtl: true;'))
		.pipe(sass())
		.pipe(concat('app-rtl.min.css'))
		.pipe(minifyCSS())
		.pipe(gulp.dest(distPath + '/assets/css/material/'));
});

// 17. material-css-theme
gulp.task('material-css-theme', function(){
	var colorList = ['red','pink','orange','yellow','lime','green','teal','aqua','blue','purple','indigo','black'];
	
	var tasks = colorList.map(function (color) {
		return gulp.src([ 'scss/material/theme.scss' ])
			.pipe(header('$primary-color: \''+ color +'\';'))
			.pipe(sass())
			.pipe(concat(color +'.min.css'))
			.pipe(minifyCSS())
			.pipe(gulp.dest(distPath + '/assets/css/material/theme/'));
  });
	console.log('Generating the css files. Please wait...');
  return merge(tasks);
});

// 18. material-css-image
gulp.task('material-css-image', function(){
	return gulp.src([ 'scss/material/images/**' ])
		.pipe(gulp.dest(distPath + '/assets/css/material/images'));
});

// 19. material-watch
gulp.task('material-watch', function () {
	livereload.listen();
  gulp.watch('html/**/**.html', gulp.series(gulp.parallel(['material-fileinclude'])));
  gulp.watch('html-startup/**/**.html', gulp.series(gulp.parallel(['material-startup-fileinclude'])));
  gulp.watch('scss/**/**.scss', gulp.series(gulp.parallel(['material-css', 'material-css-theme'])));
  gulp.watch('js/*.js', gulp.series(gulp.parallel(['js'])));
});

// 20. material-webserver
gulp.task('material-webserver', function() {
	connect.server({
		name: 'Color Admin Material',
		root: [distPath, distPath + '/template_material/'],
		port: 8000,
		livereload: true,
		fallback: 'index.html'
	});
});

// 21. material
gulp.task('material', gulp.series(gulp.parallel(['fonts', 'js', 'material-css', 'material-css-theme', 'material-css-image', 'material-fileinclude', 'material-startup-fileinclude', 'material-webserver', 'material-watch'])));



// 22. apple-fileinclude
gulp.task('apple-fileinclude', function() {
  return gulp.src(['./html/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file',
      rootPath: './',
      context: {
      	theme: 'apple'
      }
    }))
    .pipe(gulp.dest(distPath + '/template_apple'))
    .pipe(livereload());
});

// 23. apple-startup-fileinclude
gulp.task('apple-startup-fileinclude', function(){
  return gulp.src(['./html-startup/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file',
      rootPath: './',
      context: {
      	theme: 'apple'
      }
    }))
    .pipe(gulp.dest(distPath + '/template_apple_startup'))
    .pipe(livereload());
});

// 24. apple-css
gulp.task('apple-css', function(){
  return gulp.src([
			'node_modules/animate.css/animate.min.css',
			'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
			'node_modules/jquery-ui-dist/jquery-ui.min.css',
			'node_modules/pace-js/themes/black/pace-theme-flash.css',
			'scss/apple/styles.scss'
		])
		.pipe(sass())
		.pipe(concat('app.min.css'))
		.pipe(minifyCSS({debug: true}, (details) => {
      console.log(`${details.name}: ${details.stats.originalSize}`);
      console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
		.pipe(gulp.dest(distPath + '/assets/css/apple/'))
		.pipe(livereload());
});

// 25. apple-css-rtl
gulp.task('apple-css-rtl', function(){
	return gulp.src([
			'node_modules/animate.css/animate.min.css',
			'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
			'node_modules/jquery-ui-dist/jquery-ui.min.css',
			'node_modules/pace-js/themes/black/pace-theme-flash.css',
			'scss/apple/styles.scss'
		])
		.pipe(header('$enable-rtl: true;'))
		.pipe(sass())
		.pipe(concat('app-rtl.min.css'))
		.pipe(minifyCSS())
		.pipe(gulp.dest(distPath + '/assets/css/apple/'));
});

// 26. apple-css-theme
gulp.task('apple-css-theme', function(){
	var colorList = ['red','pink','orange','yellow','lime','green','teal','aqua','blue','purple','indigo','black'];
	
	var tasks = colorList.map(function (color) {
		return gulp.src([ 'scss/apple/theme.scss' ])
			.pipe(header('$primary-color: \''+ color +'\';'))
			.pipe(sass())
			.pipe(concat(color +'.min.css'))
			.pipe(minifyCSS())
			.pipe(gulp.dest(distPath + '/assets/css/apple/theme/'));
  });
	console.log('Generating the css files. Please wait...');
  return merge(tasks);
});

// 27. apple-css-image
gulp.task('apple-css-image', function(){
	return gulp.src([ 'scss/apple/images/**' ])
		.pipe(gulp.dest(distPath + '/assets/css/apple/images'));
});

// 28. apple-watch
gulp.task('apple-watch', function () {
	livereload.listen();
  gulp.watch('html/**/**.html', gulp.series(gulp.parallel(['apple-fileinclude'])));
  gulp.watch('html-startup/**/**.html', gulp.series(gulp.parallel(['apple-startup-fileinclude'])));
  gulp.watch('scss/**/**.scss', gulp.series(gulp.parallel(['apple-css', 'apple-css-theme'])));
  gulp.watch('js/*.js', gulp.series(gulp.parallel(['js'])));
});

// 29. apple-webserver
gulp.task('apple-webserver', function() {
	connect.server({
		name: 'Color Admin Apple',
		root: [distPath, distPath + '/template_apple/'],
		port: 8000,
		livereload: true,
		fallback: 'index.html'
	});
});

// 30. apple
gulp.task('apple', gulp.series(gulp.parallel(['fonts', 'js', 'apple-css', 'apple-css-theme', 'apple-css-image', 'apple-fileinclude', 'apple-startup-fileinclude', 'apple-webserver', 'apple-watch'])));



// 31. transparent-fileinclude
gulp.task('transparent-fileinclude', function() {
  return gulp.src(['./html/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file',
      rootPath: './',
      context: {
      	theme: 'transparent'
      }
    }))
    .pipe(gulp.dest(distPath + '/template_transparent'))
    .pipe(livereload());
});

// 32. transparent-startup-fileinclude
gulp.task('transparent-startup-fileinclude', function() {
  return gulp.src(['./html-startup/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file',
      rootPath: './',
      context: {
      	theme: 'transparent'
      }
    }))
    .pipe(gulp.dest(distPath + '/template_transparent_startup'))
    .pipe(livereload());
});

// 33. transparent-css
gulp.task('transparent-css', function(){
  return gulp.src([
			'node_modules/animate.css/animate.min.css',
			'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
			'node_modules/jquery-ui-dist/jquery-ui.min.css',
			'node_modules/pace-js/themes/black/pace-theme-flash.css',
			'scss/transparent/styles.scss'
		])
		.pipe(sass())
		.pipe(concat('app.min.css'))
		.pipe(minifyCSS({debug: true}, (details) => {
      console.log(`${details.name}: ${details.stats.originalSize}`);
      console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
		.pipe(gulp.dest(distPath + '/assets/css/transparent/'))
		.pipe(livereload());
});

// 34. transparent-css-rtl
gulp.task('transparent-css-rtl', function(){
	return gulp.src([
			'node_modules/animate.css/animate.min.css',
			'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
			'node_modules/jquery-ui-dist/jquery-ui.min.css',
			'node_modules/pace-js/themes/black/pace-theme-flash.css',
			'scss/transparent/styles.scss'
		])
		.pipe(header('$enable-rtl: true;'))
		.pipe(sass())
		.pipe(concat('app-rtl.min.css'))
		.pipe(minifyCSS())
		.pipe(gulp.dest(distPath + '/assets/css/transparent/'));
});

// 35. transparent-css-theme
gulp.task('transparent-css-theme', function(){
	var colorList = ['red','pink','orange','yellow','lime','green','teal','aqua','blue','purple','indigo','black'];
	
	var tasks = colorList.map(function (color) {
		return gulp.src([ 'scss/transparent/theme.scss' ])
			.pipe(header('$primary-color: \''+ color +'\';'))
			.pipe(sass())
			.pipe(concat(color +'.min.css'))
			.pipe(minifyCSS())
			.pipe(gulp.dest(distPath + '/assets/css/transparent/theme/'));
  });
	console.log('Generating the css files. Please wait...');
  return merge(tasks);
});

// 36. transparent-css-image
gulp.task('transparent-css-image', function(){
	return gulp.src([ 'scss/transparent/images/**' ])
		.pipe(gulp.dest(distPath + '/assets/css/transparent/images'));
});

// 37. transparent-watch
gulp.task('transparent-watch', function () {
	livereload.listen();
  gulp.watch('html/**/**.html', gulp.series(gulp.parallel(['transparent-fileinclude'])));
  gulp.watch('html-startup/**/**.html', gulp.series(gulp.parallel(['transparent-startup-fileinclude'])));
  gulp.watch('scss/**/**.scss', gulp.series(gulp.parallel(['transparent-css', 'transparent-css-theme'])));
  gulp.watch('js/*.js', gulp.series(gulp.parallel(['js'])));
});

// 38. transparent-webserver
gulp.task('transparent-webserver', function() {
	connect.server({
		name: 'Color Admin Transparent',
		root: [distPath, distPath + '/template_transparent/'],
		port: 8000,
		livereload: true,
		fallback: 'index.html'
	});
});

// 39. transparent
gulp.task('transparent', gulp.series(gulp.parallel(['fonts', 'js', 'transparent-css', 'transparent-css-theme', 'transparent-css-image', 'transparent-fileinclude', 'transparent-startup-fileinclude', 'transparent-webserver', 'transparent-watch'])));



// 40. facebook-fileinclude
gulp.task('facebook-fileinclude', function() {
  return gulp.src(['./html/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file',
      rootPath: './',
      context: {
      	theme: 'facebook'
      }
    }))
    .pipe(gulp.dest(distPath + '/template_facebook'))
    .pipe(livereload());
});

// 41. facebook-startup-fileinclude
gulp.task('facebook-startup-fileinclude', function() {
  return gulp.src(['./html-startup/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file',
      rootPath: './',
      context: {
      	theme: 'facebook'
      }
    }))
    .pipe(gulp.dest(distPath + '/template_facebook_startup'))
    .pipe(livereload());
});

// 42. facebook-css
gulp.task('facebook-css', function(){
  return gulp.src([
			'node_modules/animate.css/animate.min.css',
			'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
			'node_modules/jquery-ui-dist/jquery-ui.min.css',
			'node_modules/pace-js/themes/black/pace-theme-flash.css',
			'scss/facebook/styles.scss'
		])
		.pipe(sass())
		.pipe(concat('app.min.css'))
		.pipe(minifyCSS({debug: true}, (details) => {
      console.log(`${details.name}: ${details.stats.originalSize}`);
      console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
		.pipe(gulp.dest(distPath + '/assets/css/facebook/'))
		.pipe(livereload());
});

// 43. facebook-css-rtl
gulp.task('facebook-css-rtl', function(){
	return gulp.src([
			'node_modules/animate.css/animate.min.css',
			'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
			'node_modules/jquery-ui-dist/jquery-ui.min.css',
			'node_modules/pace-js/themes/black/pace-theme-flash.css',
			'scss/facebook/styles.scss'
		])
		.pipe(header('$enable-rtl: true;'))
		.pipe(sass())
		.pipe(concat('app-rtl.min.css'))
		.pipe(minifyCSS())
		.pipe(gulp.dest(distPath + '/assets/css/facebook/'));
});

// 44. facebook-css-theme
gulp.task('facebook-css-theme', function(){
	var colorList = ['red','pink','orange','yellow','lime','green','teal','aqua','blue','purple','indigo','black'];
	
	var tasks = colorList.map(function (color) {
		return gulp.src([ 'scss/facebook/theme.scss' ])
			.pipe(header('$primary-color: \''+ color +'\';'))
			.pipe(sass())
			.pipe(concat(color +'.min.css'))
			.pipe(minifyCSS())
			.pipe(gulp.dest(distPath + '/assets/css/facebook/theme/'));
  });
	console.log('Generating the css files. Please wait...');
  return merge(tasks);
});

// 45. facebook-css-image
gulp.task('facebook-css-image', function(){
	return gulp.src([ 'scss/facebook/images/**' ])
		.pipe(gulp.dest(distPath + '/assets/css/facebook/images'));
});

// 46. facebook-watch
gulp.task('facebook-watch', function () {
	livereload.listen();
  gulp.watch('html/**/**.html', gulp.series(gulp.parallel(['facebook-fileinclude'])));
  gulp.watch('html-startup/**/**.html', gulp.series(gulp.parallel(['facebook-startup-fileinclude'])));
  gulp.watch('scss/**/**.scss', gulp.series(gulp.parallel(['facebook-css', 'facebook-css-theme'])));
  gulp.watch('js/*.js', gulp.series(gulp.parallel(['js'])));
});

// 47. facebook-webserver
gulp.task('facebook-webserver', function() {
	connect.server({
		name: 'Color Admin Facebook',
		root: [distPath, distPath + '/template_facebook/'],
		port: 8000,
		livereload: true,
		fallback: 'index.html'
	});
});

// 48. facebook
gulp.task('facebook', gulp.series(gulp.parallel(['fonts', 'js', 'facebook-css', 'facebook-css-theme', 'facebook-css-image', 'facebook-fileinclude', 'facebook-startup-fileinclude', 'facebook-webserver', 'facebook-watch'])));



// 49. google-fileinclude
gulp.task('google-fileinclude', function() {
  return gulp.src(['./html/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file',
      rootPath: './',
      context: {
      	theme: 'google'
      }
    }))
    .pipe(gulp.dest(distPath + '/template_google'))
    .pipe(livereload());
});

// 50. google-startup-html
gulp.task('google-startup-fileinclude', function() {
  return gulp.src(['./html-startup/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file',
      rootPath: './',
      context: {
      	theme: 'google'
      }
    }))
    .pipe(gulp.dest(distPath + '/template_google_startup'))
    .pipe(livereload());
});

// 51. google-css
gulp.task('google-css', function(){
  return gulp.src([
			'node_modules/animate.css/animate.min.css',
			'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
			'node_modules/jquery-ui-dist/jquery-ui.min.css',
			'node_modules/pace-js/themes/black/pace-theme-flash.css',
			'scss/google/styles.scss'
		])
		.pipe(sass())
		.pipe(concat('app.min.css'))
		.pipe(minifyCSS({debug: true}, (details) => {
      console.log(`${details.name}: ${details.stats.originalSize}`);
      console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
		.pipe(gulp.dest(distPath + '/assets/css/google/'))
		.pipe(livereload());
});

// 52. google-css-rtl
gulp.task('google-css-rtl', function(){
	return gulp.src([
			'node_modules/animate.css/animate.min.css',
			'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
			'node_modules/jquery-ui-dist/jquery-ui.min.css',
			'node_modules/pace-js/themes/black/pace-theme-flash.css',
			'scss/google/styles.scss'
		])
		.pipe(header('$enable-rtl: true;'))
		.pipe(sass())
		.pipe(concat('app-rtl.min.css'))
		.pipe(minifyCSS())
		.pipe(gulp.dest(distPath + '/assets/css/google/'));
});

// 53. google-css-theme
gulp.task('google-css-theme', function(){
	var colorList = ['red','pink','orange','yellow','lime','green','teal','aqua','blue','purple','indigo','black'];
	
	var tasks = colorList.map(function (color) {
		return gulp.src([ 'scss/google/theme.scss' ])
			.pipe(header('$primary-color: \''+ color +'\';'))
			.pipe(sass())
			.pipe(concat(color +'.min.css'))
			.pipe(minifyCSS())
			.pipe(gulp.dest(distPath + '/assets/css/google/theme/'));
  });
	console.log('Generating the css files. Please wait...');
  return merge(tasks);
});

// 54. google-css-image
gulp.task('google-css-image', function(){
	return gulp.src([ 'scss/google/images/**' ])
		.pipe(gulp.dest(distPath + '/assets/css/google/images'));
});

// 55. google-watch
gulp.task('google-watch', function () {
	livereload.listen();
  gulp.watch('html/**/**.html', gulp.series(gulp.parallel(['google-fileinclude'])));
  gulp.watch('html-startup/**/**.html', gulp.series(gulp.parallel(['google-startup-fileinclude'])));
  gulp.watch('scss/**/**.scss', gulp.series(gulp.parallel(['google-css', 'google-css-theme'])));
  gulp.watch('js/*.js', gulp.series(gulp.parallel(['js'])));
});

// 56. google-webserver
gulp.task('google-webserver', function() {
	connect.server({
		name: 'Color Admin Google',
		root: [distPath, distPath + '/template_google/'],
		port: 8000,
		livereload: true,
		fallback: 'index.html'
	});
});

// 57. google
gulp.task('google', gulp.series(gulp.parallel(['fonts', 'js', 'google-css', 'google-css-theme', 'google-css-image', 'google-fileinclude', 'google-startup-fileinclude', 'google-webserver', 'google-watch'])));
