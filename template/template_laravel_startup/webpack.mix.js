const mix = require('laravel-mix');
require('laravel-mix-dload');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
 
// core css
const theme = 'default';

mix.sass('resources/scss/'+ theme +'/styles.scss', 'public/assets/css/app.min.css').styles([
    'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
  	'node_modules/jquery-ui-dist/jquery-ui.min.css',
  	'node_modules/animate.css/animate.min.css',
  	'node_modules/pace-js/themes/black/pace-theme-flash.css',
  	'public/assets/css/app.min.css'
  ], 'public/assets/css/app.min.css');
mix.copy('resources/scss/'+ theme +'/images/', 'public/assets/css/images/');
mix.copy('node_modules/@fortawesome/fontawesome-free/webfonts/', 'public/assets/webfonts/');


// core js
mix.combine([
    'node_modules/pace-js/pace.min.js',
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/jquery-ui-dist/jquery-ui.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
    'node_modules/jquery-slimscroll/jquery.slimscroll.min.js',
    'node_modules/js-cookie/src/js.cookie.js',
    'resources/js/app.js'
], 'public/assets/js/app.min.js');


// plugins
mix.copy('node_modules/jquery-migrate/dist/', 'public/assets/plugins/jquery-migrate/dist/');
mix.copy('node_modules/apexcharts/dist/', 'public/assets/plugins/apexcharts/dist/');
mix.copy('node_modules/flot/', 'public/assets/plugins/flot/');
mix.copy('node_modules/d3/d3.min.js', 'public/assets/plugins/d3/d3.min.js');
mix.copy('node_modules/nvd3/build/', 'public/assets/plugins/nvd3/build/');
mix.copy('node_modules/jvectormap-next/jquery-jvectormap.css', 'public/assets/plugins/jvectormap-next/jquery-jvectormap.css');
mix.copy('node_modules/jvectormap-next/jquery-jvectormap.min.js', 'public/assets/plugins/jvectormap-next/jquery-jvectormap.min.js');
mix.copy('node_modules/gritter/', 'public/assets/plugins/gritter/');
mix.copy('node_modules/bootstrap-datepicker/dist/', 'public/assets/plugins/bootstrap-datepicker/dist/');
mix.copy('node_modules/jquery-sparkline/jquery.sparkline.min.js', 'public/assets/plugins/jquery-sparkline/jquery.sparkline.min.js');
mix.copy('node_modules/tag-it/css/', 'public/assets/plugins/tag-it/css/');
mix.copy('node_modules/tag-it/js/', 'public/assets/plugins/tag-it/js/');
mix.copy('node_modules/bootstrap3-wysihtml5-bower/dist/', 'public/assets/plugins/bootstrap3-wysihtml5-bower/dist/');
mix.copy('node_modules/flag-icon-css/', 'public/assets/plugins/flag-icon-css/');
mix.copy('node_modules/sweetalert/dist/', 'public/assets/plugins/sweetalert/dist/');
mix.copy('node_modules/simple-line-icons/', 'public/assets/plugins/simple-line-icons/');
mix.copy('node_modules/bootstrap-social/bootstrap-social.css', 'public/assets/plugins/bootstrap-social/bootstrap-social.css');
mix.copy('node_modules/intro.js/minified/', 'public/assets/plugins/intro.js/minified/');
mix.copy('node_modules/jstree/dist/', 'public/assets/plugins/jstree/dist/');
mix.copy('node_modules/jquery-knob/', 'public/assets/plugins/jquery-knob/');
mix.copy('node_modules/raphael/raphael.min.js', 'public/assets/plugins/raphael/raphael.min.js');
mix.copy('node_modules/raphael/raphael.js', 'public/assets/plugins/raphael/raphael.js');
mix.copy('node_modules/chart.js/dist/', 'public/assets/plugins/chart.js/dist/');
mix.copy('node_modules/@fullcalendar/', 'public/assets/plugins/@fullcalendar/');
mix.copy('node_modules/moment/', 'public/assets/plugins/moment/');
mix.copy('node_modules/lity/dist/', 'public/assets/plugins/lity/dist/');
mix.copy('node_modules/lightbox2/dist/', 'public/assets/plugins/lightbox2/dist/');
mix.copy('node_modules/ckeditor/', 'public/assets/plugins/ckeditor/');
mix.copy('node_modules/x-editable-bs4/dist/', 'public/assets/plugins/x-editable-bs4/dist/');
mix.copy('node_modules/parsleyjs/', 'public/assets/plugins/parsleyjs/');
mix.copy('node_modules/abpetkov-powerange/dist/', 'public/assets/plugins/abpetkov-powerange/dist/');
mix.copy('node_modules/summernote/dist/', 'public/assets/plugins/summernote/dist/');
mix.copy('node_modules/jquery-mockjax/dist/', 'public/assets/plugins/jquery-mockjax/dist/');
mix.copy('node_modules/select2/dist/', 'public/assets/plugins/select2/dist/');
mix.copy('node_modules/dropzone/dist/', 'public/assets/plugins/dropzone/dist/');
mix.copy('node_modules/blueimp-file-upload/', 'public/assets/plugins/blueimp-file-upload/');
mix.copy('node_modules/blueimp-load-image/', 'public/assets/plugins/blueimp-load-image/');
mix.copy('node_modules/blueimp-tmpl/', 'public/assets/plugins/blueimp-tmpl/');
mix.copy('node_modules/blueimp-gallery/', 'public/assets/plugins/blueimp-gallery/');
mix.copy('node_modules/blueimp-canvas-to-blob/', 'public/assets/plugins/blueimp-canvas-to-blob/');
mix.copy('node_modules/ion-rangeslider/', 'public/assets/plugins/ion-rangeslider/');
mix.copy('node_modules/jquery.maskedinput/', 'public/assets/plugins/jquery.maskedinput/');
mix.copy('node_modules/bootstrap-colorpicker/', 'public/assets/plugins/bootstrap-colorpicker/');
mix.copy('node_modules/bootstrap-timepicker/', 'public/assets/plugins/bootstrap-timepicker/');
mix.copy('node_modules/pwstrength-bootstrap/dist/', 'public/assets/plugins/pwstrength-bootstrap/dist/');
mix.copy('node_modules/isotope-layout/dist/', 'public/assets/plugins/isotope-layout/dist/');
mix.copy('node_modules/@danielfarrell/bootstrap-combobox/', 'public/assets/plugins/@danielfarrell/bootstrap-combobox/');
mix.copy('node_modules/bootstrap-select/', 'public/assets/plugins/bootstrap-select/');
mix.copy('node_modules/bootstrap-daterangepicker/', 'public/assets/plugins/bootstrap-daterangepicker/');
mix.copy('node_modules/eonasdan-bootstrap-datetimepicker/', 'public/assets/plugins/eonasdan-bootstrap-datetimepicker/');
mix.copy('node_modules/jquery-simplecolorpicker/', 'public/assets/plugins/jquery-simplecolorpicker/');
mix.copy('node_modules/bootstrap-show-password/', 'public/assets/plugins/bootstrap-show-password/');
mix.copy('node_modules/clipboard/', 'public/assets/plugins/clipboard/');
mix.copy('node_modules/datatables.net/js/', 'public/assets/plugins/datatables.net/js/');
mix.copy('node_modules/datatables.net-bs4/css/', 'public/assets/plugins/datatables.net-bs4/css/');
mix.copy('node_modules/datatables.net-bs4/js/', 'public/assets/plugins/datatables.net-bs4/js/');
mix.copy('node_modules/datatables.net-autofill/js/', 'public/assets/plugins/datatables.net-autofill/js/');
mix.copy('node_modules/datatables.net-autofill-bs4/css/', 'public/assets/plugins/datatables.net-autofill-bs4/css/');
mix.copy('node_modules/datatables.net-autofill-bs4/js/', 'public/assets/plugins/datatables.net-autofill-bs4/js/');
mix.copy('node_modules/datatables.net-responsive/js/', 'public/assets/plugins/datatables.net-responsive/js/');
mix.copy('node_modules/datatables.net-responsive-bs4/css/', 'public/assets/plugins/datatables.net-responsive-bs4/css/');
mix.copy('node_modules/datatables.net-responsive-bs4/js/', 'public/assets/plugins/datatables.net-responsive-bs4/js/');
mix.copy('node_modules/datatables.net-buttons/js/', 'public/assets/plugins/datatables.net-buttons/js/');
mix.copy('node_modules/datatables.net-buttons-bs4/css/', 'public/assets/plugins/datatables.net-buttons-bs4/css/');
mix.copy('node_modules/datatables.net-buttons-bs4/js/', 'public/assets/plugins/datatables.net-buttons-bs4/js/');
mix.copy('node_modules/datatables.net-colreorder/js/', 'public/assets/plugins/datatables.net-colreorder/js/');
mix.copy('node_modules/datatables.net-colreorder-bs4/css/', 'public/assets/plugins/datatables.net-colreorder-bs4/css/');
mix.copy('node_modules/datatables.net-colreorder-bs4/js/', 'public/assets/plugins/datatables.net-colreorder-bs4/js/');
mix.copy('node_modules/datatables.net-fixedcolumns/js/', 'public/assets/plugins/datatables.net-fixedcolumns/js/');
mix.copy('node_modules/datatables.net-fixedcolumns-bs4/css/', 'public/assets/plugins/datatables.net-fixedcolumns-bs4/css/');
mix.copy('node_modules/datatables.net-fixedcolumns-bs4/js/', 'public/assets/plugins/datatables.net-fixedcolumns-bs4/js/');
mix.copy('node_modules/datatables.net-fixedheader/js/', 'public/assets/plugins/datatables.net-fixedheader/js/');
mix.copy('node_modules/datatables.net-fixedheader-bs4/css/', 'public/assets/plugins/datatables.net-fixedheader-bs4/css/');
mix.copy('node_modules/datatables.net-fixedheader-bs4/js/', 'public/assets/plugins/datatables.net-fixedheader-bs4/js/');
mix.copy('node_modules/datatables.net-keytable/js/', 'public/assets/plugins/datatables.net-keytable/js/');
mix.copy('node_modules/datatables.net-keytable-bs4/css/', 'public/assets/plugins/datatables.net-keytable-bs4/css/');
mix.copy('node_modules/datatables.net-keytable-bs4/js/', 'public/assets/plugins/datatables.net-keytable-bs4/js/');
mix.copy('node_modules/datatables.net-rowreorder/js/', 'public/assets/plugins/datatables.net-rowreorder/js/');
mix.copy('node_modules/datatables.net-rowreorder-bs4/css/', 'public/assets/plugins/datatables.net-rowreorder-bs4/css/');
mix.copy('node_modules/datatables.net-rowreorder-bs4/js/', 'public/assets/plugins/datatables.net-rowreorder-bs4/js/');
mix.copy('node_modules/datatables.net-scroller/js/', 'public/assets/plugins/datatables.net-scroller/js/');
mix.copy('node_modules/datatables.net-scroller-bs4/css/', 'public/assets/plugins/datatables.net-scroller-bs4/css/');
mix.copy('node_modules/datatables.net-scroller-bs4/js/', 'public/assets/plugins/datatables.net-scroller-bs4/js/');
mix.copy('node_modules/datatables.net-select/js/', 'public/assets/plugins/datatables.net-select/js/');
mix.copy('node_modules/datatables.net-select-bs4/css/', 'public/assets/plugins/datatables.net-select-bs4/css/');
mix.copy('node_modules/datatables.net-select-bs4/js/', 'public/assets/plugins/datatables.net-select-bs4/js/');
mix.copy('node_modules/pdfmake/build/', 'public/assets/plugins/pdfmake/build/');
mix.copy('node_modules/jszip/dist/', 'public/assets/plugins/jszip/dist/');

// plugins download from url
mix.download({
	enabled: true,
	urls: [{
		'url': 'https://raw.githubusercontent.com/highlightjs/cdn-release/master/build/highlight.min.js', 
		'dest': 'public/assets/plugins/highlight.js/'
	},{
		'url': 'https://raw.githubusercontent.com/abpetkov/switchery/master/dist/switchery.min.css', 
		'dest': 'public/assets/plugins/switchery/'
	}, {
		'url': 'https://raw.githubusercontent.com/abpetkov/switchery/master/dist/switchery.min.js', 
		'dest': 'public/assets/plugins/switchery/'
	}, {
		'url': 'https://raw.githubusercontent.com/kbwood/countdown/master/dist/js/jquery.plugin.min.js', 
		'dest': 'public/assets/plugins/countdown/'
	}, {
		'url': 'https://raw.githubusercontent.com/kbwood/countdown/master/dist/js/jquery.countdown.min.js', 
		'dest': 'public/assets/plugins/countdown/'
	}, {
		'url': 'https://raw.githubusercontent.com/kbwood/countdown/master/dist/css/jquery.countdown.css', 
		'dest': 'public/assets/plugins/countdown/'
	}, {
		'url': 'https://raw.githubusercontent.com/seyDoggy/superbox/master/js/jquery.superbox.min.js', 
		'dest': 'public/assets/plugins/superbox/'
	}, {
		'url': 'https://raw.githubusercontent.com/seyDoggy/superbox/master/css/superbox.min.css', 
		'dest': 'public/assets/plugins/superbox/'
	}, {
		'url': 'https://raw.githubusercontent.com/seyDoggy/superbox/master/css/font/superboxicons.eot', 
		'dest': 'public/assets/plugins/superbox/font/'
	}, {
		'url': 'https://raw.githubusercontent.com/seyDoggy/superbox/master/css/font/superboxicons.svg', 
		'dest': 'public/assets/plugins/superbox/font/'
	}, {
		'url': 'https://raw.githubusercontent.com/seyDoggy/superbox/master/css/font/superboxicons.ttf', 
		'dest': 'public/assets/plugins/superbox/font/'
	}, {
		'url': 'https://raw.githubusercontent.com/seyDoggy/superbox/master/css/font/superboxicons.woff', 
		'dest': 'public/assets/plugins/superbox/font/'
	}, {
		'url': 'http://jvectormap.com/js/jquery-jvectormap-world-mill.js', 
		'dest': 'public/assets/plugins/jvectormap-next/'
	}, {
		'url': 'https://unpkg.com/ionicons@4.2.6/dist/css/ionicons.min.css', 
		'dest': 'public/assets/plugins/ionicons/css/'
	}, {
		'url': 'https://unpkg.com/ionicons@4.2.6/dist/fonts/ionicons.eot', 
		'dest': 'public/assets/plugins/ionicons/fonts/'
	}, {
		'url': 'https://unpkg.com/ionicons@4.2.6/dist/fonts/ionicons.woff2', 
		'dest': 'public/assets/plugins/ionicons/fonts/'
	}, {
		'url': 'https://unpkg.com/ionicons@4.2.6/dist/fonts/ionicons.woff', 
		'dest': 'public/assets/plugins/ionicons/fonts/'
	}, {
		'url': 'https://unpkg.com/ionicons@4.2.6/dist/fonts/ionicons.ttf', 
		'dest': 'public/assets/plugins/ionicons/fonts/'
	}, {
		'url': 'https://unpkg.com/ionicons@4.2.6/dist/fonts/ionicons.svg', 
		'dest': 'public/assets/plugins/ionicons/fonts/'
	}, {
		'url': 'http://lab.xero.nu/bootstrap_calendar/lib/css/bootstrap_calendar.css', 
		'dest': 'public/assets/plugins/bootstrap-calendar/css/'
	}, {
		'url': 'http://lab.xero.nu/bootstrap_calendar/lib/js/bootstrap_calendar.min.js', 
		'dest': 'public/assets/plugins/bootstrap-calendar/js/'
	}, {
		'url': 'https://raw.githubusercontent.com/extremeFE/bootstrap-colorpalette/master/css/bootstrap-colorpalette.css', 
		'dest': 'public/assets/plugins/bootstrap-colorpalette/css/'
	}, {
		'url': 'https://raw.githubusercontent.com/extremeFE/bootstrap-colorpalette/master/js/bootstrap-colorpalette.js', 
		'dest': 'public/assets/plugins/bootstrap-colorpalette/js/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/css/bootstrap-datetimepicker.min.css', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/css/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/bootstrap-datetimepicker.min.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.ar.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/locales/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.az.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/locales/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.bg.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/locales/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.bn.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/locales/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.ca.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/locales/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.cs.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/locales/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.da.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/locales/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.de.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/locales/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.ee.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/locales/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.el.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/locales/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.es.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/locales/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.fi.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/locales/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.fr.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/locales/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.he.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/locales/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.hr.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/locales/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.hu.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/locales/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.hy.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/locales/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.id.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/locales/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.is.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/locales/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.it.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/locales/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.ja.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/locales/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.ka.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/locales/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.ko.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/locales/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.lt.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/locales/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.lv.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/locales/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.ms.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/locales/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.nb.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/locales/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.nl.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/locales/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.no.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/locales/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.pl.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/locales/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.pt-BR.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/locales/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.pt.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/locales/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.ro.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/locales/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.rs-latin.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/locales/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.rs.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/locales/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.ru.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/locales/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.sk.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/locales/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.sl.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/locales/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.sv.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/locales/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.sw.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/locales/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.th.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/locales/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.tr.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/locales/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.ua.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/locales/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.uk.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/locales/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.zh-CN.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/locales/'
	}, {
		'url': 'https://raw.githubusercontent.com/smalot/bootstrap-datetimepicker/master/js/locales/bootstrap-datetimepicker.zh-TW.js', 
		'dest': 'public/assets/plugins/bootstrap-datetimepicker/js/locales/'
	}]
});