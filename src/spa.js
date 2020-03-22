var miniProj = angular.module('miniProj', ['ngRoute']);

miniProj.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            title : 'Welcome!',
            templateUrl : 'pages/home.html',
            controller  : 'homeController'
        })
        .when('/who', {
            title : 'Who?',
            templateUrl : 'pages/who.html',
            controller  : 'whoController'
        })
        .when('/what', {
            title : 'What?',
            templateUrl : 'pages/what.html',
            controller  : 'whatController'
        })
        .when('/hobbies', {
            title : 'Hobbies',
            templateUrl : 'pages/hobbies.html',
            controller  : 'hobbiesController'
        })
        .when('/project', {
            title : 'Project',
            templateUrl : 'pages/project.html',
            controller  : 'projectController'
        })

    $locationProvider.html5Mode(true);
  }]);

miniProj.controller('homeController', function($scope) {
    $scope.title = 'This is the home page, I guess...';
});

miniProj.controller('whoController', function($scope) {
    $scope.title = 'Who am I?';
});

miniProj.controller('whatController', function($scope) {
    $scope.title = 'What do I do?';
});

miniProj.controller('hobbiesController', function($scope) {
    $scope.title = 'What are my hobbies?';
});

miniProj.controller('projectController', function($scope) {
    $scope.title = 'What is this project about?';
});

miniProj.run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);