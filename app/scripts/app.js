'use strict';

angular
  .module('testAppOfmApp', [
    'ngResource',
    'ngRoute'
  ]).directive('scrollReload', function() { // Anlegen der scrollReload Directive
    return function(scope, element, attributes) {
        var scrollDiv = element[0];

        //console.log(element);
        //debugger;

        element.bind('scroll', function() {
            if ( scrollDiv.scrollHeight <= scrollDiv.scrollTop + scrollDiv.offsetHeight ) {
               //debugger;
                scope.$apply(attributes.scrollReload);
            }
        });
    };
}).config(function ($routeProvider) { // Anlegen der Routen
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/liste', {
        templateUrl: 'views/liste.html',
        controller: 'ListeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });