$(function() {
    var someonewon=false;
    //Click Button to Start Race
    $('#startRace').click(function() {
        //get the width of Pikatcu and Mario
        var howfatarethey = $('#Pikatchu').width();
        // get the width of the racetrack
        var howmuchtheyneedtoworkout = $(window).width() - howfatarethey-15;
        // generate a random # between 1 and 10,000 , higher numbers lowers speed
        var pokeballs = Math.floor( (Math.random() * 10000) + 1 );
        var mushrooms = Math.floor( (Math.random() * 10000) + 1 );
        // animate Pikatchu
        $('#Pikatchu').animate({
            // move Pikatchu on start of the racetrack
            left: howmuchtheyneedtoworkout
        }, pokeballs, function() {
            if(!someonewon)
            {checkIfComplete('Pikatchu'); someonewon=true;}
            else alert('Pikatchu Lost');
        });
        // animate Characters
        $('#Mario').animate({
            left: howmuchtheyneedtoworkout
        }, mushrooms, function() {
            if(!someonewon)
            {eckIfComplete('Mario');
            someonewon=true;}
            else alert('Mario Lost');
        });
    });

    function  checkIfComplete(x){
        alert(x+" WON!")
    };
    //Reset the Race
    $('#resetRace').click(function() {
        $('.runners').css('left','0');
        $('.infoaboutrace span').text('');
        someonewon=false;
    });
});