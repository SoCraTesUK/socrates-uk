$(function() {
    var sponsors = $('#sponsors'),
        sortedSponsorElements;

    sortedSponsorElements = $('.sponsor', sponsors).get().sort(function() { return (Math.round(Math.random())-0.5); });

    $.each(sortedSponsorElements, function(_, element) {
        sponsors.append($(element));
    });
});
