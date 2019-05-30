(function() {
    var highlightBtn = function(elm){
        $('.block').toggleClass('darken');
        if(elm) {
            $(elm).toggleClass('identified');
        }
    };

    $('.grid-section').hover(function () {
        var btnID = $(this).attr("id"),
            block = $('.timeblock').find("[data-target='" + btnID + "']");

        highlightBtn(block);
    });

    $('[data-target]').hover(function () {
        var eventID = $(this).data('target'),
            detail  = $('.details').find("[data-details='" + eventID + "']");

        highlightBtn($(this));
        $(detail).toggleClass('showing');
    })
})();
