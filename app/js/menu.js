(function mainMenu() {

  var pages = [
    { caption: 'Productos', url: '#' },
    { caption: 'Acerca de', url: '#' },
    { caption: 'Tienda', url: '#' }
  ];

  $(window).on('scroll', function() {
    if($(window).scrollTop() !== 0) {
      $('main-menu').addClass('scrolled');
    } else {
      $('main-menu').removeClass('scrolled');
    }
  });

  function init() {
    var menuItemTemplate = '<div class="menu-item"><a href="{{url}}">{{caption}}</a></div>';
    var output = '';

    for(var i = 0; i < pages.length; i++) {
      var menuItem = menuItemTemplate.split('{{url}}').join(pages[i].url);
      menuItem = menuItem.split('{{caption}}').join(pages[i].caption);
      output += menuItem;
    }

    $('main-menu').html('<div><img src="img/logo.png" /></div>' + output);
  }

  init();

})();