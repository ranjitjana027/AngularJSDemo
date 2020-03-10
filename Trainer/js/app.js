
angular.module('app', ['ngRoute','7MinWorkout']).
    config(['$routeProvider','$sceDelegateProvider', function ($routeProvider, $sceDelegateProvider) {
    $routeProvider.when('/start', {
        templateUrl: 'partials/start.html'
    });
    $routeProvider.when('/workout', { 
        templateUrl: 'partials/workout.html', 
        controller: 'WorkoutController' 
    });
    $routeProvider.when('/finish', { 
        templateUrl: 'partials/finish.html' 
    });
    $routeProvider.otherwise({ 
        redirectTo: '/start' 
    });

        $sceDelegateProvider.resourceUrlWhitelist([
            // Allow same origin resource loads.
            'self',
            'http://*.youtube.com/**']);

}]);

angular.module('7MinWorkout',[]);
