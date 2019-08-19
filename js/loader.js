// Window PreLoader 


$(window).on( 'load', function() {
    $(".book_preload").delay(2000).fadeOut(200);
    $(".book").on('click', function() {
    $(".book_preload").fadeOut(200);
    })
})