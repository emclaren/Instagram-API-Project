(function(){

  var app = angular.module("project3", [ ]);
  
  app.controller("Instacontroller", ['$scope', '$http', function($scope, $http){
   
    $scope.loading = false;
    $scope.posts = [];
    $scope.getPhotos = function(e){
      e && e.preventDefault();
      $scope.loading=true;
      var searchInput = "https://api.instagram.com/v1/tags/"+ $scope.hashtag + "/media/recent?callback=JSON_CALLBACK&client_id=f7d4d6f8007343d69a53ac5bfe36f964"; 
      $http.jsonp(searchInput).then(function(response){
        $scope.posts = response.data.data;
        $scope.loading=false;
      });
    };
     
  }]);
})();
