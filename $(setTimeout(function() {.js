$(setTimeout(function() {
  $('html, body').animate({ 
    scrollTop: $(document).height()-$(window).height()}, 
    5400, 
    "linear"
  );
}, 3000));

setTimeout(
  function() 
  {
    //do something special
  }, 5000);