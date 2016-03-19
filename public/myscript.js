var app = angular.module('newark', []);



app.controller('newark-task', function ($http,$scope) {

  $scope.foo='bar';
  $scope.tasks={}
  console.log($scope.foo);
  $scope.get= function(){
          $http.get('/tasks')
        .then( function(response){
          return response.data
        })
        .then(function(data){

          $scope.tasks=data
          console.log($scope.tasks);
        });
    };

    $scope.get();//trying to figure out how to refresh...



});



app.controller('add', function ($http,$scope) {


  $scope.update = function(task) {
      console.log(task)

      $http.post('/add', task)
       .then(
           function(response){
             console.log(response)
             //this part took me a long time to figure out!
             angular.element(document.getElementById('hello')).scope().get();
           },
           function(response){
              console.log(response)
           }

        );


      };




});