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
            .when('/home', {
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
            .when('/faculty', {
                templateUrl : 'app/views/faculty.html' 
            })    
            .when('/newyork', {
                templateUrl : 'app/views/newyork.html'  
            })     
            .when('/la', {
                templateUrl : 'app/views/la.html'  
            });     
}
angular
  .module('travelAgency')
  .config(config) ;