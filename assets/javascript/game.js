
var random_r;
var win;
var lost;

random_r = Math.floor(Math.random() * 120 ) + 12;
    console.log(random_r);

$("#Random_result").html('Random Result: ');

for(var i = 0; i < 4; i++){

    var random = Math.floor(Math.random() * 12);
    console.log(random);
    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
            
        });
    $(".crystals").append(crystal);
    
}


