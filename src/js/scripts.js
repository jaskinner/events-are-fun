(function () {
    var getElements = function (id) {
            var elms = $('.panel').find("[data-event='" + id + "']");
            return elms;
        };

    $('[data-event]').hover(function () {
        var eventID = $(this).data('event'),
            elms = getElements(eventID);

        $('.block').toggleClass('darken');
        $(elms).toggleClass('showing');
    })
})();
