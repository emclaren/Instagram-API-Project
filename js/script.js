(function(){

  var app = angular.module("project3", [ ]);
  
  app.controller("Instacontroller", ['$scope', '$http', function($scope, $http){
   
    $scope.loading = false;
    $scope.posts = [];
    $scope.getPhotos = function(){
      var searchInput = "https://api.instagram.com/v1/tags/"+ $scope.hashtag + "/media/recent?client_id=f7d4d6f8007343d69a53ac5bfe36f964"; 

      $http{{
        
      }}

    };

  }]);

})();





// $(function(){

//    // set some initial variables
//    var photoData,
//        photoItems,
//        hashtagSearch,
//        instagramUrl,
//        $photoList = $('.photo-list');


//    // when the form is submitted
//    $('#search-form').on('submit', function(event) {
//        event.preventDefault();
//        $('.loading-gif').css("display", "block")

//       // reset all the things
//       $photoList.empty();
//       $('.searchLogo').remove();
//       photoData, photoItems = '',
      
//       // get the search string
//       hashtagSearch = $('#search-words').val().replace(" ", ''),
//       instagramUrl = 
      
//       // make the call to the endpoint
//       $.ajax({
//          method: 'GET',
//          url: instagramUrl,
//          dataType: 'jsonp'
//       })


//       // if it works...
//       .done(function(data) {
//          photoData = data.data;
//          if ( photoData.length !== 0 ) {
//             $.each(photoData, function(key, value) {

//             });
//          } else {
//             photoItems += '<p style="margin-top: 18px;">Sorry, photos not found.</p>';
//          }
//          $photoList.append(photoItems);
//       })
//       // and if it fails...
//       .fail(function() {
//          $photoList.append('<li>Sorry! There was a problem, please try again.</li>');
//       })
//       .always (function() {
//           $('.loading-gif').css("display", "none");
//       });
//    });
// });