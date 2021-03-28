/*
Template Name: Color Admin - Responsive Admin Dashboard Template build with Bootstrap 4
Version: 4.7.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin/
	----------------------------
			APPS CONTROLLER TABLE
	----------------------------
	 1.0 CONTROLLER - App
	 
   2.0 CONTROLLER - Sidebar
   3.0 CONTROLLER - Right Sidebar
   4.0 CONTROLLER - Header
   5.0 CONTROLLER - Top Menu
   
   6.0 CONTROLLER - Dashboard v1
   7.0 CONTROLLER - Dashboard v2
   8.0 CONTROLLER - Dashboard v3
   
   9.0 CONTROLLER - Email Inbox
  10.0 CONTROLLER - Email Compose
	11.0 CONTROLLER - Email Detail
	
	12.0 CONTROLLER - UI Widget Boxes
	13.0 CONTROLLER - UI Typography
	14.0 CONTROLLER - UI Icons
	15.0 CONTROLLER - UI General
	16.0 CONTROLLER - UI Buttons
	17.0 CONTROLLER - UI Modal Notification
	18.0 CONTROLLER - UI Tree
	19.0 CONTROLLER - UI Language Bar
	20.0 CONTROLLER - UI Unlimited Tabs
	
	21.0 CONTROLLER - Form Plugins
	22.0 CONTROLLER - Form Slider + Switcher
	23.0 CONTROLLER - Form Validation
	25.0 CONTROLLER - Form Wizards
	24.0 CONTROLLER - Form Elements
	25.0 CONTROLLER - Form Dropzone
	26.0 CONTROLLER - Form Wizards
	27.0 CONTROLLER - Summernote
	
	28.0 CONTROLLER - Table Basic
	29.0 CONTROLLER - Table Manage Default
	30.0 CONTROLLER - Table Manage Autofill
	31.0 CONTROLLER - Table Manage Buttons
	32.0 CONTROLLER - Table Manage ColReorder
	33.0 CONTROLLER - Table Manage Fixed Columns
	34.0 CONTROLLER - Table Manage Fixed Header
	35.0 CONTROLLER - Table Manage KeyTable
	36.0 CONTROLLER - Table Manage Responsive
	37.0 CONTROLLER - Table Manage RowReorder
	38.0 CONTROLLER - Table Manage Scroller
	39.0 CONTROLLER - Table Manage Select
	40.0 CONTROLLER - Table Manage Extension Combination
	
	41.0 CONTROLLER - Flot Chart
	42.0 CONTROLLER - Chart JS
	43.0 CONTROLLER - Chart d3
	44.0 CONTROLLER - Chart Apex
	
	45.0 CONTROLLER - Calendar
	
	46.0 CONTROLLER - Vector Map
	47.0 CONTROLLER - Google Map
	
	48.0 CONTROLLER - Gallery V1
	49.0 CONTROLLER - Gallery V2
	
	50.0 CONTROLLER - Page with Footer
	51.0 CONTROLLER - Page without Sidebar
	52.0 CONTROLLER - Page with Right Sidebar
	53.0 CONTROLLER - Page with Minified Sidebar
	54.0 CONTROLLER - Page with Two Sidebar
	55.0 CONTROLLER - Full Height Content
	56.0 CONTROLLER - Page with Wide Sidebar
	57.0 CONTROLLER - Page with Light Sidebar
	58.0 CONTROLLER - Page with Mega Menu
	59.0 CONTROLLER - Page with Top Menu
	60.0 CONTROLLER - Page with Boxed Layout
	61.0 CONTROLLER - Page with Mixed Menu
	62.0 CONTROLLER - Page Boxed Layout with Mixed Menu
	63.0 CONTROLLER - Page with Transparent Sidebar
	64.0 CONTROLLER - Page with Search Sidebar
	
	65.0 CONTROLLER - Timeline
	66.0 CONTROLLER - Coming Soon
	67.0 CONTROLLER - Profile Page
	68.0 CONTROLLER - 404 Error
	
	69.0 CONTROLLER - Login V1
	70.0 CONTROLLER - Login V2
	71.0 CONTROLLER - Login V3
	72.0 CONTROLLER - Register V3
	
	73.0 CONTROLLER - Widgets
	
	74.0 CONTROLLER - POS Counter Checkout
	75.0 CONTROLLER - POS Customer Order
	76.0 CONTROLLER - POS Kitchen Order
	77.0 CONTROLLER - POS Kitchen Order
	78.0 CONTROLLER - POS Kitchen Order
	<!-- ======== GLOBAL SCRIPT SETTING ======== -->
*/

/* -------------------------------
   1.0 CONTROLLER - App
------------------------------- */
colorAdminApp.controller('appController', ['$rootScope', '$scope', function ($rootScope, $scope) {
  $scope.$on('$includeContentLoaded', function () {
    handleSlimScroll();
  });
  $scope.$on('$viewContentLoaded', function () {
  
  });
  $scope.$on('$stateChangeStart', function () {
    // reset layout setting
    $rootScope.setting.layout.pageSidebarMinified = false;
    $rootScope.setting.layout.pageFixedFooter = false;
    $rootScope.setting.layout.pageRightSidebar = false;
    $rootScope.setting.layout.pageTwoSidebar = false;
    $rootScope.setting.layout.pageTopMenu = false;
    $rootScope.setting.layout.pageBoxedLayout = false;
    $rootScope.setting.layout.pageWithoutSidebar = false;
    $rootScope.setting.layout.pageContentFullHeight = false;
    $rootScope.setting.layout.pageContentFullWidth = false;
    $rootScope.setting.layout.paceTop = false;
    $rootScope.setting.layout.pageLanguageBar = false;
    $rootScope.setting.layout.pageSidebarTransparent = false;
    $rootScope.setting.layout.pageWideSidebar = false;
    $rootScope.setting.layout.pageLightSidebar = false;
    $rootScope.setting.layout.pageWithFooter = false;
    $rootScope.setting.layout.pageMegaMenu = false;
    $rootScope.setting.layout.pageWithoutHeader = false;
    $rootScope.setting.layout.pageBgWhite = false;
    $rootScope.setting.layout.pageContentInverseMode = false;
    $rootScope.setting.layout.pageSidebarSearch = false;

    App.scrollTop();
    $('.pace .pace-progress').addClass('hide');
    $('.pace').removeClass('pace-inactive');
  });
  $scope.$on('$stateChangeSuccess', function () {
    Pace.restart();
    App.initPageLoad();
    App.initSidebarSelection();
    App.initSidebarMobileSelection();
    setTimeout(function () {
      App.initLocalStorage();
      App.initComponent();
    }, 0);
    if ($('#top-menu').length !== 0) {
      $('#top-menu').removeAttr('style');
    }
  });
  $scope.$on('$stateNotFound', function () {
    Pace.stop();
  });
  $scope.$on('$stateChangeError', function () {
    Pace.stop();
  });
}]);


/* -------------------------------
   2.0 CONTROLLER - Sidebar
------------------------------- */
colorAdminApp.controller('sidebarController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
  	// javascript / jQuery here
  });
});


/* -------------------------------
   3.0 CONTROLLER - Right Sidebar
------------------------------- */
colorAdminApp.controller('rightSidebarController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
  	// javascript / jQuery here
  });
});


/* -------------------------------
   4.0 CONTROLLER - Header
------------------------------- */
colorAdminApp.controller('headerController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
  	// javascript / jQuery here
  });
});


/* -------------------------------
   5.0 CONTROLLER - Top Menu
------------------------------- */
colorAdminApp.controller('topMenuController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    handleUnlimitedTopMenuRender();
  });
});


/* -------------------------------
   6.0 CONTROLLER - Dashboard v1
------------------------------- */
colorAdminApp.controller('dashboardController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
   $.getScript('../assets/js/demo/dashboard.js');
  });
});


/* -------------------------------
   7.0 CONTROLLER - Dashboard v2
------------------------------- */
colorAdminApp.controller('dashboardV2Controller', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
  	$.getScript('../assets/js/demo/dashboard-v2.js');
  });
});


/* -------------------------------
   8.0 CONTROLLER - Dashboard v3
------------------------------- */
colorAdminApp.controller('dashboardV3Controller', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
  	$.getScript('../assets/js/demo/dashboard-v3.js');
  });
});


/* -------------------------------
   9.0 CONTROLLER - Email Inbox
------------------------------- */
colorAdminApp.controller('emailInboxController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.pageContentFullWidth = true;
  $rootScope.setting.layout.pageContentFullHeight = true;

  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/email-inbox.demo.js');
  });
});


/* -------------------------------
   10.0 CONTROLLER - Email Compose
------------------------------- */
colorAdminApp.controller('emailComposeController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.pageContentFullWidth = true;
  $rootScope.setting.layout.pageContentFullHeight = true;

  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/email-compose.demo.js');
  });
});


/* -------------------------------
   11.0 CONTROLLER - Email Detail
------------------------------- */
colorAdminApp.controller('emailDetailController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.pageContentFullWidth = true;
  $rootScope.setting.layout.pageContentFullHeight = true;
});


/* -------------------------------
   12.0 CONTROLLER - UI Widget Boxes
------------------------------- */
colorAdminApp.controller('uiWidgetBoxesController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/render.highlight.js');
  });
});


/* -------------------------------
   13.0 CONTROLLER - UI Typography
------------------------------- */
colorAdminApp.controller('uiTypographyController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/render.highlight.js');
  });
});


/* -------------------------------
   14.0 CONTROLLER - UI Icons
------------------------------- */
colorAdminApp.controller('uiIconsController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/render.highlight.js');
  });
});


/* -------------------------------
   15.0 CONTROLLER - UI General
------------------------------- */
colorAdminApp.controller('uiGeneralController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/render.highlight.js');
  });
});


/* -------------------------------
   16.0 CONTROLLER - UI Buttons
------------------------------- */
colorAdminApp.controller('uiButtonsController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/render.highlight.js');
  });
});


/* -------------------------------
   17.0 CONTROLLER - UI Modal Notification
------------------------------- */
colorAdminApp.controller('uiModalNotificationController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/ui-modal-notification.demo.js');
  });
});


/* -------------------------------
   18.0 CONTROLLER - UI Tree
------------------------------- */
colorAdminApp.controller('uiTreeController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/ui-tree.demo.js');
  });
});


/* -------------------------------
   19.0 CONTROLLER - UI Language Bar
------------------------------- */
colorAdminApp.controller('uiLanguageBarIconController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.pageLanguageBar = true;
});


/* -------------------------------
   20.0 CONTROLLER - UI Unlimited Tabs
------------------------------- */
colorAdminApp.controller('uiUnlimitedTabsController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
  	handleUnlimitedTabsRender();
  });
});


/* -------------------------------
   21.0 CONTROLLER - Form Plugins
------------------------------- */
colorAdminApp.controller('formPluginsController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/form-plugins.demo.js');
  });
});


/* -------------------------------
   22.0 CONTROLLER - Form Slider + Switcher
------------------------------- */
colorAdminApp.controller('formSliderSwitcherController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/form-slider-switcher.demo.js');
  });
});


/* -------------------------------
   23.0 CONTROLLER - Form Validation
------------------------------- */
colorAdminApp.controller('formValidationController', function ($scope, $rootScope, $state) {
  $scope.submitForm = function (form) {
    if (!form.$valid) {
      $('form[name="' + form.$name + '"] *').tooltip('dispose');
      angular.forEach(form.$error, function (field) {
        angular.forEach(field, function (errorField) {
          errorField.$setTouched();
          var targetContainer = 'form[name="' + form.$name + '"] [name="' + errorField.$name + '"]';
          var targetMessage = (errorField.$error.required) ? 'This is required' : '';
          targetMessage = (errorField.$error.email) ? 'Invalid email' : targetMessage;
          targetMessage = (errorField.$error.url) ? 'Invalid website url' : targetMessage;
          targetMessage = (errorField.$error.number) ? 'Only number is allowed' : targetMessage;
          targetMessage = (errorField.$name == 'alphabets') ? 'Only alphabets is allowed' : targetMessage;
          targetMessage = (errorField.$error.minlength) ? 'You must provide at least 20 characters for this field' : targetMessage;
          targetMessage = (errorField.$error.maxlength) ? 'You must not exceed the maximum of 200 characters for this field' : targetMessage;

          $(targetContainer).first().tooltip({
            placement: 'top',
            trigger: 'normal',
            title: targetMessage,
            container: 'body',
            animation: false
          });
          $(targetContainer).first().tooltip('show');
        });
      });
    }
  };
});


/* -------------------------------
   24.0 CONTROLLER - Form Elements
------------------------------- */
colorAdminApp.controller('formElementsController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
  	$.getScript('../assets/js/demo/render.highlight.js');
  });
});


/* -------------------------------
   25.0 CONTROLLER - Form Dropzone
------------------------------- */
colorAdminApp.controller('dropzoneController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/render.highlight.js');
    new Dropzone("#demo-upload");
  });
});


/* -------------------------------
   26.0 CONTROLLER - Form Wizards
------------------------------- */
colorAdminApp.controller('formWizardsController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
  	$.getScript('../assets/js/demo/render.highlight.js');
  });
});


/* -------------------------------
   27.0 CONTROLLER - Summernote
------------------------------- */
colorAdminApp.controller('summernoteController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/form-summernote.demo.js');
  });
});


/* -------------------------------
   28.0 CONTROLLER - Table Basic
------------------------------- */
colorAdminApp.controller('tableBasicController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/render.highlight.js');
  });
});


/* -------------------------------
   29.0 CONTROLLER - Table Manage Default
------------------------------- */
colorAdminApp.controller('tableManageDefaultController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/table-manage-default.demo.js');
  });
});


/* -------------------------------
   30.0 CONTROLLER - Table Manage Autofill
------------------------------- */
colorAdminApp.controller('tableManageAutofillController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/table-manage-autofill.demo.js');
  });
});


/* -------------------------------
   31.0 CONTROLLER - Table Manage Buttons
------------------------------- */
colorAdminApp.controller('tableManageButtonsController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/table-manage-buttons.demo.js');
  });
});


/* -------------------------------
   32.0 CONTROLLER - Table Manage ColReorder
------------------------------- */
colorAdminApp.controller('tableManageColReorderController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/table-manage-colreorder.demo.js');
  });
});


/* -------------------------------
   33.0 CONTROLLER - Table Manage Fixed Columns
------------------------------- */
colorAdminApp.controller('tableManageFixedColumnsController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/table-manage-fixed-columns.demo.js');
  });
});


/* -------------------------------
   34.0 CONTROLLER - Table Manage Fixed Header
------------------------------- */
colorAdminApp.controller('tableManageFixedHeaderController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/table-manage-fixed-header.demo.js');
  });
});


/* -------------------------------
   35.0 CONTROLLER - Table Manage KeyTable
------------------------------- */
colorAdminApp.controller('tableManageKeyTableController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/table-manage-keytable.demo.js');
  });
});


/* -------------------------------
   36.0 CONTROLLER - Table Manage Responsive
------------------------------- */
colorAdminApp.controller('tableManageResponsiveController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/table-manage-responsive.demo.js');
  });
});


/* -------------------------------
   37.0 CONTROLLER - Table Manage RowReorder
------------------------------- */
colorAdminApp.controller('tableManageRowReorderController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/table-manage-rowreorder.demo.js');
  });
});


/* -------------------------------
   38.0 CONTROLLER - Table Manage Scroller
------------------------------- */
colorAdminApp.controller('tableManageScrollerController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/table-manage-scroller.demo.js');
  });
});


/* -------------------------------
   39.0 CONTROLLER - Table Manage Select
------------------------------- */
colorAdminApp.controller('tableManageSelectController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/table-manage-select.demo.js');
  });
});


/* -------------------------------
   40.0 CONTROLLER - Table Manage Extension Combination
------------------------------- */
colorAdminApp.controller('tableManageCombineController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/table-manage-combine.demo.js');
  });
});


/* -------------------------------
   41.0 CONTROLLER - Flot Chart
------------------------------- */
colorAdminApp.controller('chartFlotController', function ($scope, $rootScope, $state) {
	angular.element(document).ready(function () {
     $.getScript('../assets/js/demo/chart-flot.demo.js');
  });
});


/* -------------------------------
   42.0 CONTROLLER - Chart JS
------------------------------- */
colorAdminApp.controller('chartJsController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
     $.getScript('../assets/js/demo/chart-js.demo.js');
  });
});


/* -------------------------------
   43.0 CONTROLLER - Chart d3
------------------------------- */
colorAdminApp.controller('chartD3Controller', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/chart-d3.demo.js');
  });
});


/* -------------------------------
   44.0 CONTROLLER - Chart Apex
------------------------------- */
colorAdminApp.controller('chartApexController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/chart-apex.demo.js');
  });
});


/* -------------------------------
   45.0 CONTROLLER - Calendar
------------------------------- */
colorAdminApp.controller('calendarController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/calendar.demo.js');
  });
});


/* -------------------------------
   46.0 CONTROLLER - Vector Map
------------------------------- */
colorAdminApp.controller('mapVectorController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.pageContentFullWidth = true;
  $rootScope.setting.layout.pageContentInverseMode = true;

  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/map-vector.demo.js');
  });
});


/* -------------------------------
   47.0 CONTROLLER - Google Map
------------------------------- */
colorAdminApp.controller('mapGoogleController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.pageContentFullWidth = true;

  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/map-google.demo.js');
  });
});


/* -------------------------------
   48.0 CONTROLLER - Gallery V1
------------------------------- */
colorAdminApp.controller('galleryController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/gallery.demo.js');
  });
});


/* -------------------------------
   49.0 CONTROLLER - Gallery V2
------------------------------- */
colorAdminApp.controller('galleryV2Controller', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/gallery-v2.demo.js');
  });
});


/* -------------------------------
   50.0 CONTROLLER - Page with Footer
------------------------------- */
colorAdminApp.controller('pageWithFooterController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.pageWithFooter = true;
});


/* -------------------------------
   51.0 CONTROLLER - Page without Sidebar
------------------------------- */
colorAdminApp.controller('pageWithoutSidebarController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.pageWithoutSidebar = true;
});


/* -------------------------------
   52.0 CONTROLLER - Page with Right Sidebar
------------------------------- */
colorAdminApp.controller('pageWithRightSidebarController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.pageRightSidebar = true;
});


/* -------------------------------
   53.0 CONTROLLER - Page with Minified Sidebar
------------------------------- */
colorAdminApp.controller('pageWithMinifiedSidebarController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.pageSidebarMinified = true;
});


/* -------------------------------
   54.0 CONTROLLER - Page with Two Sidebar
------------------------------- */
colorAdminApp.controller('pageWithTwoSidebarController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.pageTwoSidebar = true;
  
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/page-with-two-sidebar.demo.js');
  });
});


/* -------------------------------
   55.0 CONTROLLER - Full Height Content
------------------------------- */
colorAdminApp.controller('pageFullHeightContentController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.pageContentFullHeight = true;
  $rootScope.setting.layout.pageContentFullWidth = true;
});


/* -------------------------------
   56.0 CONTROLLER - Page with Wide Sidebar
------------------------------- */
colorAdminApp.controller('pageWithWideSidebarController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.pageWideSidebar = true;
});


/* -------------------------------
   57.0 CONTROLLER - Page with Light Sidebar
------------------------------- */
colorAdminApp.controller('pageWithLightSidebarController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.pageLightSidebar = true;
});


/* -------------------------------
   58.0 CONTROLLER - Page with Mega Menu
------------------------------- */
colorAdminApp.controller('pageWithMegaMenuController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.pageMegaMenu = true;
});


/* -------------------------------
   59.0 CONTROLLER - Page with Top Menu
------------------------------- */
colorAdminApp.controller('pageWithTopMenuController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.pageTopMenu = true;
  $rootScope.setting.layout.pageWithoutSidebar = true;
});


/* -------------------------------
   60.0 CONTROLLER - Page with Boxed Layout
------------------------------- */
colorAdminApp.controller('pageWithBoxedLayoutController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.pageBoxedLayout = true;
});


/* -------------------------------
   61.0 CONTROLLER - Page with Mixed Menu
------------------------------- */
colorAdminApp.controller('pageWithMixedMenuController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.pageTopMenu = true;
});


/* -------------------------------
   62.0 CONTROLLER - Page Boxed Layout with Mixed Menu
------------------------------- */
colorAdminApp.controller('pageBoxedLayoutWithMixedMenuController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.pageBoxedLayout = true;
  $rootScope.setting.layout.pageTopMenu = true;
});


/* -------------------------------
   63.0 CONTROLLER - Page with Transparent Sidebar
------------------------------- */
colorAdminApp.controller('pageWithTransparentSidebarController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.pageSidebarTransparent = true;
});


/* -------------------------------
   64.0 CONTROLLER - Page with Search Sidebar
------------------------------- */
colorAdminApp.controller('pageWithSearchSidebarController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.pageSidebarSearch = true;
});


/* -------------------------------
   65.0 CONTROLLER - Timeline
------------------------------- */
colorAdminApp.controller('extraTimelineController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/timeline.demo.js');
  });
});


/* -------------------------------
   66.0 CONTROLLER - Coming Soon
------------------------------- */
colorAdminApp.controller('comingSoonController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.pageWithoutHeader = true;
  $rootScope.setting.layout.pageBgWhite = true;
  $rootScope.setting.layout.paceTop = true;

  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/coming-soon.demo.js');
  });
});


/* -------------------------------
   67.0 CONTROLLER - Profile Page
------------------------------- */
colorAdminApp.controller('profileController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.pageContentFullWidth = true;

  angular.element(document).ready(function () {
    $.getScript('../assets/js/demo/profile.demo.js');
  });
});


/* -------------------------------
   68.0 CONTROLLER - 404 Error
------------------------------- */
colorAdminApp.controller('errorController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.pageWithoutHeader = true;
  $rootScope.setting.layout.paceTop = true;
});


/* -------------------------------
   69.0 CONTROLLER - Login V1
------------------------------- */
colorAdminApp.controller('loginV1Controller', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.pageWithoutHeader = true;
  $rootScope.setting.layout.paceTop = true;

  $scope.submitForm = function (form) {
    $state.go('app.dashboard.v3');
  };
});


/* -------------------------------
   70.0 CONTROLLER - Login V2
------------------------------- */
colorAdminApp.controller('loginV2Controller', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.pageWithoutHeader = true;
  $rootScope.setting.layout.paceTop = true;

  $scope.submitForm = function (form) {
    $state.go('app.dashboard.v3');
  };

  angular.element(document).ready(function () {
  	$.getScript('../assets/js/demo/login-v2.demo.js');
  });
});


/* -------------------------------
   71.0 CONTROLLER - Login V3
------------------------------- */
colorAdminApp.controller('loginV3Controller', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.pageWithoutHeader = true;
  $rootScope.setting.layout.paceTop = true;
  $rootScope.setting.layout.pageBgWhite = true;

  $scope.submitForm = function (form) {
    $state.go('app.dashboard.v3');
  };
});


/* -------------------------------
   72.0 CONTROLLER - Register V3
------------------------------- */
colorAdminApp.controller('registerV3Controller', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.pageWithoutHeader = true;
  $rootScope.setting.layout.paceTop = true;
  $rootScope.setting.layout.pageBgWhite = true;

  $scope.submitForm = function (form) {
    $state.go('app.dashboard.v3');
  };
});


/* -------------------------------
   73.0 CONTROLLER - Widgets
------------------------------- */
colorAdminApp.controller('widgetController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
  	$.getScript('../assets/js/demo/widget.demo.js');
  	$.getScript('../assets/js/demo/render.highlight.js');
  });
});


/* -------------------------------
   74.0 CONTROLLER - POS Counter Checkout
------------------------------- */
colorAdminApp.controller('posCounterCheckoutController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.pageWithoutHeader = true;
  $rootScope.setting.layout.pageWithoutSidebar = true;
  $rootScope.setting.layout.paceTop = true;
  $rootScope.setting.layout.pageContentFullHeight = true;
  $rootScope.setting.layout.pageContentFullWidth = true;

  angular.element(document).ready(function () {
  	$.getScript('../assets/js/demo/pos-counter-checkout.demo.js');
  });
});


/* -------------------------------
   75.0 CONTROLLER - POS Customer Order
------------------------------- */
colorAdminApp.controller('posCustomerOrderController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.pageWithoutHeader = true;
  $rootScope.setting.layout.pageWithoutSidebar = true;
  $rootScope.setting.layout.paceTop = true;
  $rootScope.setting.layout.pageContentFullHeight = true;
  $rootScope.setting.layout.pageContentFullWidth = true;

  angular.element(document).ready(function () {
  	$.getScript('../assets/js/demo/pos-customer-order.demo.js');
  });
});


/* -------------------------------
   76.0 CONTROLLER - POS Kitchen Order
------------------------------- */
colorAdminApp.controller('posKitchenOrderController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.pageWithoutHeader = true;
  $rootScope.setting.layout.pageWithoutSidebar = true;
  $rootScope.setting.layout.paceTop = true;
  $rootScope.setting.layout.pageContentFullHeight = true;
  $rootScope.setting.layout.pageContentFullWidth = true;

  angular.element(document).ready(function () {
  	$.getScript('../assets/js/demo/pos-kitchen-order.demo.js');
  });
});


/* -------------------------------
   77.0 CONTROLLER - POS Kitchen Order
------------------------------- */
colorAdminApp.controller('posMenuStockController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.pageWithoutHeader = true;
  $rootScope.setting.layout.pageWithoutSidebar = true;
  $rootScope.setting.layout.paceTop = true;
  $rootScope.setting.layout.pageContentFullHeight = true;
  $rootScope.setting.layout.pageContentFullWidth = true;

  angular.element(document).ready(function () {
  	$.getScript('../assets/js/demo/pos-menu-stock.demo.js');
  });
});


/* -------------------------------
   78.0 CONTROLLER - POS Kitchen Order
------------------------------- */
colorAdminApp.controller('posTableBookingController', function ($scope, $rootScope, $state) {
  $rootScope.setting.layout.pageWithoutHeader = true;
  $rootScope.setting.layout.pageWithoutSidebar = true;
  $rootScope.setting.layout.paceTop = true;
  $rootScope.setting.layout.pageContentFullHeight = true;
  $rootScope.setting.layout.pageContentFullWidth = true;

  angular.element(document).ready(function () {
  	$.getScript('../assets/js/demo/pos-table-booking.demo.js');
  });
});