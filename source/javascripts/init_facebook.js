  /////////////////////////////////////
  //         BEGIN API HOOKS         //
  /////////////////////////////////////

  //        Facebook API HOOKS       //
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1520962544877525',
      xfbml      : true,
      version    : 'v2.5'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

  /////////////////////////////////////
  //           END API HOOKS         //
  /////////////////////////////////////



  /////////////////////////////////////
  //      BEGIN SHARE MECHANISMS     //
  /////////////////////////////////////
  //      Facebook Share function    //
  function fbShare() {
    FB.ui(
    {
      // SHARE INFO
      method: 'feed',
      name: 'Mayday Parade | Share To Win', // name of the product or content you want to share
      link: 'http://maydayparade.com/lettinggo', // link back to the product or content you are sharing
      picture: 'https://s3.amazonaws.com/myfangate.com/mayday2016/shareimage.jpg', // path to an image you would like to share with this content
      caption: 'http://maydayparade.com/lettinggo', // caption
      description: 'SHARE THE NEW MUSIC VIDEO FOR "LETTING GO" TO WIN WARPED TOUR TICKETS + MORE' // description of your product or content
    },
    function(response) {
      if (response && response.post_id) {
        // Successful Facebook Share Callback
        $('#fbshareinput').prop('checked', true);
        $('#fbshareinput').next('.error-box').next('span.error').html('');
      } else {
        // Unsuccessful Facebook Share Callback
        $('#fbshareinput').prop('checked', false);
      }
    });
  }
