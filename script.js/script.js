$('.hiring__items > div').on('click', function(){
    $(this).children('.hiring__icon').toggleClass('active');
    $(this).parent('.hiring__items').toggleClass('toggleBg');
    $(this).next('p').slideToggle(300)  
})
$('features__items > div').on('click', function(){
    $(this).children('features__line').toggleClass('line-active');
    $(this).parent('.features__items').toggleClass('toggleColor');
    $(this).next('item__text').slideToggle(300)
})
$('.carusel').slick({
    autoplay: true,
    autoplaySpeed:5000,
});