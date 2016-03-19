var app = angular.module('newark', []);



app.controller('newark-task', function ($http,$scope) {

  $scope.foo='bar';

  console.log($scope.foo);

  $http.get('/tasks')
    .then( function(response){
      return response.data
    })
    .then(function(data){

      $scope.tasks=data
      console.log($scope.tasks);
    });

});


app.controller('add', function ($http,$scope) {


  $scope.update = function(task) {
      console.log(task)

      $http.post('/add', task)
       .then(
           function(response){
             console.log(response)
           },
           function(response){
              console.log(response)
           }
    );

      };

});