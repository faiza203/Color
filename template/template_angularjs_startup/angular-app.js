/*
Template Name: Color Admin - Responsive Admin Dashboard Template build with Bootstrap 4
Version: 4.7.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin/
*/

var colorAdminApp = angular.module('colorAdminApp', [
  'ui.router',
  'ui.router.state.events',
  'ui.bootstrap',
  'oc.lazyLoad'
]);

colorAdminApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/app/home');

  $stateProvider
    .state('app', {
      url: '/app',
      templateUrl: 'template/app.html',
      abstract: true
    })
    .state('app.home', {
      url: '/home',
      data: {
        pageTitle: 'Home Page'
      },
      templateUrl: 'views/index.html'
    })
    /*
      REFERENCE FOR JQUERY PLUGINS
      .state('app.dashboard.v1', {
        url: '/v1',
        templateUrl: 'views/index.html',
        data: { pageTitle: 'Dashboard v1' },
        resolve: {
          service: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load({
              serie: true,
              files: [
                '../assets/plugins/jvectormap-next/jquery-jvectormap.css',
								'../assets/plugins/bootstrap-datepicker/dist/css/bootstrap-datepicker.css',
								'../assets/plugins/gritter/css/jquery.gritter.css',
								'../assets/plugins/gritter/js/jquery.gritter.js',
								'../assets/plugins/flot/jquery.flot.js',
								'../assets/plugins/flot/jquery.flot.time.js',
								'../assets/plugins/flot/jquery.flot.resize.js',
								'../assets/plugins/flot/jquery.flot.pie.js',
								'../assets/plugins/jquery-sparkline/jquery.sparkline.min.js',
								'../assets/plugins/jvectormap-next/jquery-jvectormap.min.js',
								'../assets/plugins/jvectormap-next/jquery-jvectormap-world-mill.js',
								'../assets/plugins/bootstrap-datepicker/dist/js/bootstrap-datepicker.js'
              ] 
            });
          }]
        }
      })
    */
}]);

colorAdminApp.run(['$rootScope', '$state', 'setting', function ($rootScope, $state, setting) {
  $rootScope.$state = $state;
  $rootScope.setting = setting;
}]);