//Плавный скролл
$("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});

//Бургер
let burger = $('.nav-burger');
burger.on('click', function(){
    burger.toggleClass('nav-burger_active');
    $('.nav__list').toggleClass('nav__list_active');
    // $('.nav__list').fadeToggle();
});
