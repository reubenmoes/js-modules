//This is a service type module for creating maps.
//It allows you to async load the google maps API on pages that have maps.
//When the API is loaded.  The map DOM node will emit a 'googleMapReady' event
app.maps = (function($){
  'use strict';

  var MAPSELECTOR = '.js-national-map';

  // The function that loads the google map api script and initializes any maps the wrapper callback
  function loadGoogleMapsApi() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +
        'callback=app.maps.initAllMaps';
    document.body.appendChild(script);
  }

  // callback function for google maps load based on data-map-init="" attribute
  function initAllMaps(){
    $(MAPSELECTOR).trigger('googleMapReady');
  }

  //INIT
  $(document).on('ready', function(){
    if($(MAPSELECTOR).length){
      loadGoogleMapsApi();
    }
  });

  //Return public API
  return {
    initAllMaps: initAllMaps
  };

})(jQuery);
