
var random_r;
var win = 0;
var lost = 0;
var last = 0;



var resetAndStart = function () {

    $(".crystals").empty();

    var images = [
            './assets./images./green crystal.jpeg';
            './assets./images./heart crystal.jpeg';
            './assets./images./pink crystal.jpeg';
            './assets./images./red crystal.jpeg';
        ];

    random_r = Math.floor(Math.random() * 120 ) + 12;

    $("#result").html('random_result: ' + random_r);

    for(var i = 0; i < 4; i++){

        var random = Math.floor(Math.random() * 12) + 1;
    
        var crystal = $("<div>");
            crystal.attr({
            "class": 'crystal',
            "data-random": random
            
        });
        crystal.css({
            "background-image":"url('" + (images[i]) +  ""),
            "background-size":"cover"
        });
        
        
    
    $(".crystals").append(crystal);


    


$("#last").html("Total Score: " + last);

}

startGame();


$(".crystal").on('click', function() {
    
    var num = parseInt($(this).attr('data-random'));

    last += num;

    console.log(last);

    if(last > random_r) {
        lost--;

        $("#lost").html(win);
    }
    else if(last === random_r){
        win++;

        $("#win").html(win);
    }
    

});

