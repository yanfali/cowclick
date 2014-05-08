(function() {
    'use strict';
    var score = 0;
    var $picture = $('img');
    var $score = $('.score');
    $picture.on('click', function() {
        score += Math.floor(Math.random(Date.now()) * 10);
        $score.html('<h1 style="text-align: center;">' + score + ' Points</h1>');
    });
})();
