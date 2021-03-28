<?php

return [

    /*
    |--------------------------------------------------------------------------
    | View Storage Paths
    |--------------------------------------------------------------------------
    |
    | Most templating systems load templates from disk. Here you may specify
    | an array of paths that should be checked for your views. Of course
    | the usual Laravel view path has already been registered for you.
    |
    */
  'menu' => [[
		'icon' => 'fa fa-th-large',
		'title' => 'Dashboard',
		'url' => 'javascript:;',
		'caret' => true,
		'sub_menu' => [[
			'url' => '/dashboard/v1',
			'title' => 'Dashboard v1',
			'route-name' => 'dashboard-v1'
		],[
			'url' => '/dashboard/v2',
			'title' => 'Dashboard v2',
			'route-name' => 'dashboard-v2'
		],[
			'url' => '/dashboard/v3',
			'title' => 'Dashboard v3',
			'route-name' => 'dashboard-v3'
		]]
	],[
		'icon' => 'fa fa-hdd',
		'title' => 'Email',
		'url' => 'javascript:;',
		'badge' => '10',
		'sub_menu' => [[
			'url' => '/email/inbox',
			'title' => 'Inbox',
			'route-name' => 'email-inbox'
		],[
			'url' => '/email/compose',
			'title' => 'Compose',
			'route-name' => 'email-compose'
		],[
			'url' => '/email/detail',
			'title' => 'Detail',
			'route-name' => 'email-detail'
		]]
	],[
		'icon' => 'fab fa-simplybuilt',
		'title' => 'Widgets',
		'label' => 'NEW',
		'url' => '/widget',
		'route-name' => 'widget'
	],[
		'icon' => 'fa fa-gem',
		'title' => 'UI Elements',
		'url' => 'javascript:;',
		'label' => 'NEW',
		'caret' => true,
		'sub_menu' => [[
			'url' => '/ui/general',
			'title' => 'General',
			'highlight' => true,
			'route-name' => 'ui-general'
		],[
			'url' => '/ui/typography',
			'title' => 'Typography',
			'route-name' => 'ui-typography'
		],[
			'url' => '/ui/tabs-accordions',
			'title' => 'Tabs & Accordions',
			'route-name' => 'ui-tabs-accordions'
		],[
			'url' => '/ui/unlimited-nav-tabs',
			'title' => 'Unlimited Nav Tabs',
			'route-name' => 'ui-unlimited-nav-tabs'
		],[
			'url' => '/ui/modal-notification',
			'title' => 'Modal & Notification',
			'highlight' => true,
			'route-name' => 'ui-modal-notification'
		],[
			'url' => '/ui/widget-boxes',
			'title' => 'Widget Boxes',
			'route-name' => 'ui-widget-boxes'
		],[
			'url' => '/ui/media-object',
			'title' => 'Media Object',
			'route-name' => 'ui-media-object'
		],[
			'url' => '/ui/buttons',
			'title' => 'Buttons',
			'highlight' => true,
			'route-name' => 'ui-buttons'
		],[
			'url' => '/ui/icons',
			'title' => 'Icons',
			'route-name' => 'ui-icons'
		],[
			'url' => '/ui/simple-line-icons',
			'title' => 'Simple Line Icons',
			'route-name' => 'ui-simple-line-icons'
		],[
			'url' => '/ui/ionicons',
			'title' => 'Ionicons',
			'route-name' => 'ui-ionicons'
		],[
			'url' => '/ui/tree-view',
			'title' => 'Tree View',
			'route-name' => 'ui-tree-view'
		],[
			'url' => '/ui/language-bar-icon',
			'title' => 'Language Bar & Icon',
			'route-name' => 'ui-language-bar-icon'
		],[
			'url' => '/ui/social-buttons',
			'title' => 'Social Buttons',
			'route-name' => 'ui-social-buttons'
		],[
			'url' => '/ui/intro-js',
			'title' => 'Intro JS',
			'route-name' => 'ui-intro-js'
		]]
	],[
		'img' => '/assets/img/logo/logo-bs4.png',
		'title' => 'Bootstrap 4',
		'url' => '/bootstrap-4',
		'label' => 'NEW',
		'route-name' => 'bootstrap-4'
	],[
		'icon' => 'fa fa-list-ol',
		'title' => 'Form Stuff',
		'url' => 'javascript:;',
		'label' => 'NEW',
		'caret' => true,
		'sub_menu' => [[
			'url' => '/form/elements',
			'title' => 'Form Elements',
			'highlight' => true,
			'route-name' => 'form-elements'
		],[
			'url' => '/form/plugins',
			'title' => 'Form Plugins',
			'highlight' => true,
			'route-name' => 'form-plugins'
		],[
			'url' => '/form/slider-switcher',
			'title' => 'Form Slider + Switcher',
			'route-name' => 'form-slider-switcher'
		],[
			'url' => '/form/validation',
			'title' => 'Form Validation',
			'route-name' => 'form-validation'
		],[
			'url' => '/form/wizards',
			'title' => 'Wizards',
			'highlight' => true,
			'route-name' => 'form-wizards'
		],[
			'url' => '/form/wysiwyg',
			'title' => 'WYSIWYG',
			'route-name' => 'form-wysiwyg'
		],[
			'url' => '/form/x-editable',
			'title' => 'X-Editable',
			'route-name' => 'form-x-editable'
		],[
			'url' => '/form/multiple-file-upload',
			'title' => 'Multiple File Upload',
			'route-name' => 'form-multiple-file-upload'
		],[
			'url' => '/form/summernote',
			'title' => 'Summernote',
			'route-name' => 'form-summernote'
		],[
			'url' => '/form/dropzone',
			'title' => 'Dropzone',
			'route-name' => 'form-dropzone'
		]]
	],[
		'icon' => 'fa fa-table',
		'title' => 'Tables',
		'url' => 'javascript:;',
		'caret' => true,
		'sub_menu' => [[
			'url' => '/table/basic',
			'title' => 'Basic',
			'route-name' => 'table-basic'
		],[
			'url' => 'javascript:;',
			'title' => 'Managed Tables',
			'sub_menu' => [[
				'url' => '/table/manage/default',
				'title' => 'Default',
				'route-name' => 'table-manage-default'
			],[
				'url' => '/table/manage/autofill',
				'title' => 'Autofill',
				'route-name' => 'table-manage-autofill'
			],[
				'url' => '/table/manage/buttons',
				'title' => 'Buttons',
				'route-name' => 'table-manage-buttons'
			],[
				'url' => '/table/manage/colreorder',
				'title' => 'ColReorder',
				'route-name' => 'table-manage-colreorder'
			],[
				'url' => '/table/manage/fixed-column',
				'title' => 'Fixed Column',
				'route-name' => 'table-manage-fixed-column'
			],[
				'url' => '/table/manage/fixed-header',
				'title' => 'Fixed Header',
				'route-name' => 'table-manage-fixed-header'
			],[
				'url' => '/table/manage/keytable',
				'title' => 'KeyTable',
				'route-name' => 'table-manage-keytable'
			],[
				'url' => '/table/manage/responsive',
				'title' => 'Responsive',
				'route-name' => 'table-manage-responsive'
			],[
				'url' => '/table/manage/rowreorder',
				'title' => 'RowReorder',
				'route-name' => 'table-manage-rowreorder'
			],[
				'url' => '/table/manage/scroller',
				'title' => 'Scroller',
				'route-name' => 'table-manage-scroller'
			],[
				'url' => '/table/manage/select',
				'title' => 'Select',
				'route-name' => 'table-manage-select'
			],[
				'url' => '/table/manage/combine',
				'title' => 'Extension Combination',
				'route-name' => 'table-manage-combine'
			]]
		]]
	],[
		'icon' => 'fa fa-cash-register',
		'title' => 'POS System',
		'url' => 'javascript:;',
		'caret' => true,
		'label' => 'NEW',
		'sub_menu' => [[
			'url' => '/pos/customer-order',
			'title' => 'Customer Order',
			'route-name' => 'pos-customer-order'
		],[
			'url' => '/pos/kitchen-order',
			'title' => 'Kitchen Order',
			'route-name' => 'pos-kitchen-order'
		],[
			'url' => '/pos/counter-checkout',
			'title' => 'Counter Checkout',
			'route-name' => 'pos-counter-checkout'
		],[
			'url' => '/pos/table-booking',
			'title' => 'Table Booking',
			'route-name' => 'pos-table-booking'
		],[
			'url' => '/pos/menu-stock',
			'title' => 'Menu Stock',
			'route-name' => 'pos-menu-stock'
		]]
	],[
		'icon' => 'fa fa-star',
		'title' => 'Frontend',
		'url' => 'javascript:;',
		'caret' => true,
		'sub_menu' => [[
			'url' => 'javascript:;',
			'title' => 'One Page Parallax'
		],[
			'url' => 'javascript:;',
			'title' => 'Blog'
		],[
			'url' => 'javascript:;',
			'title' => 'Forum'
		],[
			'url' => 'javascript:;',
			'title' => 'E-Commerce'
		]]
	],[
		'icon' => 'fa fa-envelope',
		'title' => 'Email Template',
		'url' => 'javascript:;',
		'caret' => true,
		'sub_menu' => [[
			'url' => '/email-template/system',
			'title' => 'System Template',
			'route-name' => 'email-template-system'
		],[
			'url' => '/email-template/newsletter',
			'title' => 'Newsletter Template',
			'route-name' => 'email-template-newsletter'
		]]
	],[
		'icon' => 'fa fa-chart-pie',
		'title' => 'Chart',
		'url' => 'javascript:;',
		'label' => 'NEW',
		'caret' => true,
		'sub_menu' => [[
			'url' => '/chart/flot',
			'title' => 'Flot Chart',
			'route-name' => 'chart-flot'
		],[
			'url' => '/chart/js',
			'title' => 'Chart JS',
			'route-name' => 'chart-js'
		],[
			'url' => '/chart/d3',
			'title' => 'd3 Chart',
			'route-name' => 'chart-d3'
		],[
			'url' => '/chart/apex',
			'title' => 'Apex Chart',
			'highlight' => true,
			'route-name' => 'chart-apex'
		]]
	],[
		'icon' => 'fa fa-calendar',
		'title' => 'Calendar',
		'url' => '/calendar',
		'route-name' => 'calendar'
	],[
		'icon' => 'fa fa-map',
		'title' => 'Map',
		'url' => 'javascript:;',
		'caret' => true,
		'sub_menu' => [[
			'url' => '/map/vector',
			'title' => 'Vector Map',
			'route-name' => 'map-vector'
		],[
			'url' => '/map/google',
			'title' => 'Google Map',
			'route-name' => 'map-google'
		]]
	],[
		'icon' => 'fa fa-image',
		'title' => 'Gallery',
		'url' => 'javascript:;',
		'caret' => true,
		'sub_menu' => [[
			'url' => '/gallery/v1',
			'title' => 'Gallery v1',
			'route-name' => 'gallery-v1'
		],[
			'url' => '/gallery/v2',
			'title' => 'Gallery v2',
			'route-name' => 'gallery-v2'
		]]
	],[
		'icon' => 'fa fa-cogs',
		'title' => 'Page Options',
		'url' => 'javascript:;',
		'label' => 'NEW',
		'caret' => true,
		'sub_menu' => [[
			'url' => '/page-option/page-blank',
			'title' => 'Blank Page',
			'route-name' => 'page-blank'
		],[
			'url' => '/page-option/page-with-footer',
			'title' => 'Page with Footer',
			'route-name' => 'page-with-footer'
		],[
			'url' => '/page-option/page-without-sidebar',
			'title' => 'Page without Sidebar',
			'route-name' => 'page-without-sidebar'
		],[
			'url' => '/page-option/page-with-right-sidebar',
			'title' => 'Page with Right Sidebar',
			'route-name' => 'page-with-right-sidebar'
		],[
			'url' => '/page-option/page-with-minified-sidebar',
			'title' => 'Page with Minified Sidebar',
			'route-name' => 'page-with-minified-sidebar'
		],[
			'url' => '/page-option/page-with-two-sidebar',
			'title' => 'Page with Two Sidebar',
			'route-name' => 'page-with-two-sidebar'
		],[
			'url' => '/page-option/page-full-height',
			'title' => 'Full Height Content',
			'route-name' => 'page-full-height'
		],[
			'url' => '/page-option/page-with-wide-sidebar',
			'title' => 'Page with Wide Sidebar',
			'route-name' => 'page-with-wide-sidebar'
		],[
			'url' => '/page-option/page-with-light-sidebar',
			'title' => 'Page with Light Sidebar',
			'route-name' => 'page-with-light-sidebar'
		],[
			'url' => '/page-option/page-with-mega-menu',
			'title' => 'Page with Mega Menu',
			'route-name' => 'page-with-mega-menu'
		],[
			'url' => '/page-option/page-with-top-menu',
			'title' => 'Page with Top Menu',
			'route-name' => 'page-with-top-menu'
		],[
			'url' => '/page-option/page-with-boxed-layout',
			'title' => 'Page with Boxed Layout',
			'route-name' => 'page-with-boxed-layout'
		],[
			'url' => '/page-option/page-with-mixed-menu',
			'title' => 'Page with Mixed Menu',
			'route-name' => 'page-with-mixed-menu'
		],[
			'url' => '/page-option/boxed-layout-with-mixed-menu',
			'title' => 'Boxed Layout with Mixed Menu',
			'route-name' => 'boxed-layout-with-mixed-menu'
		],[
			'url' => '/page-option/page-with-transparent-sidebar',
			'title' => 'Page with Transparent Sidebar',
			'route-name' => 'page-with-transparent-sidebar'
		],[
			'url' => '/page-option/page-with-search-sidebar',
			'title' => 'Page with Search Sidebar',
			'highlight' => true,
			'route-name' => 'page-with-search-sidebar'
		]]
	],[
		'icon' => 'fa fa-gift',
		'title' => 'Extra',
		'url' => 'javascript:;',
		'label' => 'NEW',
		'caret' => true,
		'sub_menu' => [[
			'url' => '/extra/timeline',
			'title' => 'Timeline',
			'route-name' => 'extra-timeline'
		],[
			'url' => '/extra/coming-soon',
			'title' => 'Coming Soon Page',
			'route-name' => 'extra-coming-soon'
		],[
			'url' => '/extra/search-result',
			'title' => 'Search Results',
			'route-name' => 'extra-search-result'
		],[
			'url' => '/extra/invoice',
			'title' => 'Invoice',
			'route-name' => 'extra-invoice'
		],[
			'url' => '/extra/error-page',
			'title' => '404 Error Page',
			'route-name' => 'extra-error-page'
		],[
			'url' => '/extra/profile',
			'title' => 'Profile Page',
			'route-name' => 'extra-profile'
		],[
			'url' => '/extra/scrum-board',
			'title' => 'Scrum Board',
			'highlight' => true,
			'route-name' => 'extra-scrum-board'
		],[
			'url' => '/extra/cookie-acceptance-banner',
			'title' => 'Cookie Acceptance Banner',
			'highlight' => true,
			'route-name' => 'extra-cookie-acceptance-banner'
		]]
	],[
		'icon' => 'fa fa-key',
		'title' => 'Login & Register',
		'url' => 'javascript:;',
		'caret' => true,
		'sub_menu' => [[
			'url' => '/login/v1',
			'title' => 'Login',
			'route-name' => 'login-v1'
		],[
			'url' => '/login/v2',
			'title' => 'Login v2',
			'route-name' => 'login-v2'
		],[
			'url' => '/login/v3',
			'title' => 'Login v3',
			'route-name' => 'login-v3'
		],[
			'url' => '/register/v3',
			'title' => 'Register v3',
			'route-name' => 'register-v3'
		]]
	],[
		'icon' => 'fa fa-cube',
		'title' => 'Version',
		'url' => 'javascript:;',
		'label' => 'NEW',
		'caret' => true,
		'sub_menu' => [[
			'url' => 'javascript:;',
			'title' => 'HTML'
		],[
			'url' => 'javascript:;',
			'title' => 'AJAX'
		],[
			'url' => 'javascript:;',
			'title' => 'ANGULAR JS'
		],[
			'url' => 'javascript:;',
			'title' => 'ANGULAR JS 10'
		],[
			'url' => 'javascript:;',
			'title' => 'LARAVEL'
		],[
			'url' => 'javascript:;',
			'title' => 'REACT JS'
		],[
			'url' => 'javascript:;',
			'title' => 'ASP.NET'
		],[
			'url' => 'javascript:;',
			'title' => 'MATERIAL DESIGN'
		],[
			'url' => 'javascript:;',
			'title' => 'APPLE DESIGN',
			'highlight' => true
		],[
			'url' => 'javascript:;',
			'title' => 'TRANSPARENT DESIGN',
			'highlight' => true
		],[
			'url' => 'javascript:;',
			'title' => 'FACEBOOK DESIGN',
			'highlight' => true
		],[
			'url' => 'javascript:;',
			'title' => 'GOOGLE DESIGN',
			'highlight' => true
		]]
	],[
		'icon' => 'fa fa-medkit',
		'title' => 'Helper',
		'url' => 'javascript:;',
		'caret' => true,
		'sub_menu' => [[
			'url' => '/helper/css',
			'title' => 'Predefined CSS Classes',
			'route-name' => 'helper-css'
		]]
	],[
		'icon' => 'fa fa-align-left',
		'title' => 'Menu Level',
		'url' => 'javascript:;',
		'caret' => true,
		'sub_menu' => [[
			'url' => 'javascript:;',
			'title' => 'Menu 1.1',
			'sub_menu' => [[
				'url' => 'javascript:;',
				'title' => 'Menu 2.1',
				'sub_menu' => [[
					'url' => 'javascript:;',
					'title' => 'Menu 3.1',
				],[
					'url' => 'javascript:;',
					'title' => 'Menu 3.2'
				]]
			],[
				'url' => 'javascript:;',
				'title' => 'Menu 2.2'
			],[
				'url' => 'javascript:;',
				'title' => 'Menu 2.3'
			]]
		],[
			'url' => 'javascript:;',
			'title' => 'Menu 1.2'
		],[
			'url' => 'javascript:;',
			'title' => 'Menu 1.3'
		]]
	]]
];
