/*
Template Name: Color Admin - Responsive Admin Dashboard Template build with Bootstrap 4
Version: 4.7.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin/
*/

/* Prevent Global Link Click
------------------------------------------------ */

colorAdminApp.directive('a', function () {
  return {
    restrict: 'E',
    link: function (scope, elem, attrs) {
      if (attrs.ngClick || attrs.href === '' || attrs.href === '#') {
        elem.on('click', function (e) {
          e.preventDefault();
        });
      }
    }
  };
});