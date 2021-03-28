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
	 
	 6.0 CONTROLLER - Home
   <!-- ======== GLOBAL SCRIPT SETTING ======== -->
*/

/* -------------------------------
   1.0 CONTROLLER - App
------------------------------- */
colorAdminApp.controller('appController', ['$rootScope', '$scope', function ($rootScope, $scope) {
  $scope.$on('$includeContentLoaded', function () {
    handleSlimScroll();
  });
  $scope.$on('$viewContentLoaded', function () {});
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
  	// javascript / jQuery here
  });
});


/* -------------------------------
   6.0 CONTROLLER - Home
------------------------------- */
colorAdminApp.controller('homeController', function ($scope, $rootScope, $state) {
  angular.element(document).ready(function () {
    // javascript / jQuery here
  });
});