$('.hiring__items > div').on('click', function(){
    $(this).children('.hiring__icon').toggleClass('active');
    $(this).parent('.hiring__items').toggleClass('toggleBg');
    $(this).next('p').slideToggle(300)  
})
$('.items__selector > div').on('click', function(){
    $(this).next('p').slideToggle(300);
    $(this).next().next('items__hr').toggleClass('hr__toggleBg');
    $(this).children('.selector__pre-title').toggleClass('items-toggleСolor');   
})
$('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
});