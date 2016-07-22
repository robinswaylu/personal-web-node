'use strict';

angular.module('travelAgency', ['ngSanitize', "ngRoute",'ngAnimate', 'ngCookies', 'ngResource' , 'ui.bootstrap', 'pascalprecht.translate', 'oc.lazyLoad' ])
 
  .run(["$rootScope", "$window", '$location', function($rootScope, $window,  $location) {

    $rootScope.$on('$routeChangeStart', function(evt, absNewUrl, absOldUrl){
        console.log('change path');
        $window.scrollTo(0,0);    //scroll to top of page after each route change
})}]);