
$(function(){

   // set some initial variables
   var photoData,
       photoItems,
       hashtagSearch,
       instagramUrl,
       $photoList = $('.photo-list');


  $( document ).ajaxStart(function() {
      $(".loading-gif").append('<img class="loader" src="images/ajax-loader.gif" alt="loading spinner">');
});
$( document ).ajaxStop(function() {
   $(".loading-gif").remove(); });

   // when the form is submitted
   $('#search-form').on('submit', function(event) {
       event.preventDefault();

      // reset all the things
      $photoList.empty();
      $('.searchLogo').remove();
      photoData, photoItems = '',
      
      // get the search string
      hashtagSearch = $('#search-words').val().replace(" ", ''),
      instagramUrl = "https://api.instagram.com/v1/tags/"+hashtagSearch+"/media/recent?client_id=f7d4d6f8007343d69a53ac5bfe36f964"; 
      
      // make the call to the endpoint
      $.ajax({
         method: 'GET',
         url: instagramUrl,
         dataType: 'jsonp'
      })


      // if it works...
      .done(function(data) {
         photoData = data.data;
         if ( photoData.length !== 0 ) {
            $.each(photoData, function(key, value) {
               photoItems += '<li class="photo-container">';
                  photoItems += '<ul>';
                     photoItems += '<li class="main-image">';
                     photoItems += '<img src="' + value.images.standard_resolution.url+ '" />';
                     photoItems += '</li>';  
                     photoItems += '<li class="image-info">';
                     photoItems += '<div class="profile-photo">'; 
                     photoItems += '<img src="' + value.user.profile_picture+ '" />';
                     photoItems += '</div>'; 
                     photoItems += '<div class="username">'; 
                     photoItems += '<h1>' + value.user.username + '</h1>';
                     photoItems += '<div class="likes">';
                     photoItems += '<i class="fa fa-comments"></i>' + " " +value.comments.count + " "+'<i class="fa fa-heart"></i>' +" " + value.likes.count + '</p>';
                     photoItems += '</div>';
                     photoItems += '</div>';
                     photoItems += '</li>';
 
                  photoItems += '</ul>';
               photoItems += '</li>';
            });
         } else {
            photoItems += '<p style="margin-top: 18px;">Sorry, photos not found.</p>';
         }
         $photoList.append(photoItems);
      })
      // and if it fails...
      .fail(function() {
         $photoList.append('<li>Sorry! There was a problem, please try again.</li>');
      });


   });
});

