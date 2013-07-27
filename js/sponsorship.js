$(function() {
    var day = new Date().getTime() / (24 * 60 * 60 * 1000) | 0,
        rng = new MersenneTwister(day),
        sponsors = $('#sponsors'),
        sortedSponsorElements;

    sortedSponsorElements = $('.sponsor', sponsors).get().sort(function() { return rng.random() - 0.5; });

    $.each(sortedSponsorElements, function(_, element) {
        sponsors.append($(element));
    });
});
