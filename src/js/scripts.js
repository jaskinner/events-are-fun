(function () {
    var highlightBtn = function (elm) {
            $('.block').toggleClass('darken');
            if (elm) {
                $(elm).toggleClass('identified');
            }
        },
        getElements = function (id) {
            var elms = {
                block: $('.timeblock').find("[data-target='" + id + "']"),
                detail: $('.details').find("[data-details='" + id + "']")
            };
            return elms;
        };

    $('.grid-section').hover(function () {
        var btnID = $(this).attr("id"),
            elms = getElements(btnID);

        highlightBtn(elms.block);
        $(elms.detail).toggleClass('showing');
    });

    $('[data-target]').hover(function () {
        var eventID = $(this).data('target'),
            elms = getElements(eventID);

        highlightBtn($(this));
        $(elms.detail).toggleClass('showing');
    })
})();
