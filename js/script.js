
$(document).ready(function(){

   // set some initial variables
   var albumData,
       albumItems,
       artistName,
       itunesUrl,
       $albumList = $('.album-list');
   // when the form is submitted
   $('#search-form').on('submit', function(event) {
      event.preventDefault();
      // reset all the things
      $albumList.empty();
      albumData, albumItems = '',
      // get the search string
      artistName = $('#search-words').val().replace(/ /g, '+'),
      itunesUrl = "https://api.instagram.com/v1/tags/"+artistName+"/media/recent?client_id=f7d4d6f8007343d69a53ac5bfe36f964" 
      // make the call to the endpoint
      $.ajax({
         method: 'GET',
         url: itunesUrl,
         dataType: 'jsonp'
      })
      // if it works...
      .done(function(data) {
         albumData = data.data;
         if ( albumData.length !== 0 ) {
            $.each(albumData, function(key, value) {
               albumItems += '<li>';
               albumItems += '<img src="' + value.images.standard_resolution.url+ '" />';
               // albumItems += '<p>' + value.images.thumbnail.url + '</p>';
               albumItems += '</li>';
            });
         } else {
            albumItems += '<p style="margin-top: 18px;">Sorry, artist not found.</p>';
         }
         $albumList.append(albumItems);
      })
      // and if it fails...
      .fail(function() {
         $albumList.append('<li>Sorry! There was a problem, please try again.</li>');
      });
   });
});

