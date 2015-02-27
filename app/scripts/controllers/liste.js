'use strict';

angular.module('testAppOfmApp')
.controller('ListeCtrl', function ($scope, $http) {

    /**
    * Funktion loadNewContent zum Absetzen der dynamisch erzeugten AJAX Calls:
    */

    $scope.daten = [];

    var cnt = 1;
    $scope.loadNewContent = function() {
        for (var i = 0; i < 5; i++) {
            $http.get('http://time.jsontest.com/').then(function(jsonResponse) {
                $scope.daten.push({id: cnt, response: jsonResponse});
                cnt += 1;
            });
        }
    };

    // Einmal aufgerufen zum Initialisieren der Liste
    $scope.loadNewContent();

    // Beispiel eines AJAX CALLS mit JSONP, gibt einmal pro Seitenaufruf die  IP Adresse auf der Console aus:
    var responsePromise = $http.jsonp( "http://ip.jsontest.com/?callback=JSON_CALLBACK" );

    responsePromise.success(function(data) {
        console.log(data);
    });
});
