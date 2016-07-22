function config(    $ocLazyLoadProvider, $routeProvider) {

 

  $ocLazyLoadProvider.config({
    // Set to true if you want to see what and when is dynamically loaded
    debug: false
  });

  $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'app/views/main.html' 
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'app/views/about.html'  
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'app/views/contact.html'  
            })    
            .when('/concierge', {
                templateUrl : 'app/views/concierge.html' 
            })    
            .when('/newyork', {
                templateUrl : 'app/views/newyork.html'  
            })     
            .when('/la', {
                templateUrl : 'app/views/la.html'  
            });    
    
  /* $stateProvider
    .state('home', { 
      url: "/home",
      templateUrl: "app/views/main.html",
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              name: 'flickr',
              files: ['assets/lib/flickr.js']
            }, {
              name: 'flexslider',
              files: ['assets/lib/flexslider.min.js']
            },{
              name: 'lightbox',
              files: ['assets/lib/lightbox.min.js']
            },{
              name: 'masonry',
              files: ['assets/lib/masonry.min.js']
            },{
              name: 'twitterfetcher',
              files: ['assets/lib/twitterfetcher.min.js']
            },{
              name: 'spectragram',
              files: ['assets/lib/spectragram.min.js']
            },{
              name: 'ytplayer',
              files: ['assets/lib/ytplayer.min.js']
            },{
              name: 'countdown',
              files: ['assets/lib/countdown.min.js']
            },{
              name: 'sscroll',
              files: ['assets/lib/smooth-scroll.min.js']
            },{
              name: 'scripts',
              files: ['assets/lib/scripts.js']
            } ,{
              name: 'parallax',
              files: ['assets/lib/parallax.js']
            },
          ]);
        }
      }
    }) */ 
 
  
}
angular
  .module('travelAgency')
  .config(config) ;