//Add IE8 fallback for background-size cover that inserts an <img>
app.imageCover = (function($){
  'use strict';

  //If the browser supports background-size: cover, we don't need this
  if(Modernizr.bgsizecover){
    return true;
  }

  function bindActions(){
    $('.image.cover').each(function(index, image){
      if(image.style.backgroundImage){
        var url = image.style.backgroundImage.match(/\((.*?)\)/)[1].replace(/('|")/g,'');
        var img = document.createElement('img');
        img.src = url;

        //Replace background-image with <img>
        image.style.backgroundImage = null;
        $(image).prepend(img);
      }
    });
  }

  $(window).on('ready', bindActions);

  return {};

})(jQuery);
