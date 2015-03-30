//Click Handler to open social links in new window.
//
//Markup:
//<a data-share-site="Facebook" href="http://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fmountbakertheatre.php-dev.domain7.com%2Fshows%2Fneko-case%2F" class="js-share_link">Facebook</a>
app.socialShare = (function($){
  'use strict';

  var selector = '.js-share_link';

  function init(){
    $(selector).click(function(e){

      e.preventDefault();

      var href = $(e.target).attr('href'),
        title = 'Share on ' + $(e.target).attr('data-share-site'),
        left = ($(window).width()/2)-(550/2),
        top = ($(window).height()/2)-(300/2);

      window.open(href, title, "height=300,width=550,resizable=1, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no,top="+top+", left="+left);

    });
  }

  $(document).on('ready', init);

})(jQuery);
