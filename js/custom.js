var $toggle = $('#navBarBurger');
var $menu = $('#navbarMenu');
var $menuItems = $('.navbar-item');

$toggle.click(function() {
    $(this).toggleClass('is-active');
    $menu.toggleClass('is-active');
});

$menuItems.click(function(e) {
    $menu.removeClass('is-active');
    $toggle.removeClass('is-active');

    $menuItems.removeClass('is-active');
    $(this).removeClass('is-active');
    $(e.target).addClass('is-active')
});