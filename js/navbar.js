$('.nav-link, .navbar-brand').click(function() {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(sectionTo).offset().top
    }, 1000);
});

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop() > 300) {
            $('.aw').css({
                "opacity": "1", "pointer-events": "auto"
            });

        } else {
            $('.aw').css({
                "opacity": "0", "pointer-events": "none"
            });
        }
    });
    $('.aw').click(function(){
        $('html').animate({scrollTop:0}, 500);
    });
});