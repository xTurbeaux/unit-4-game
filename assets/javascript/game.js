
var random_r;
var win;
var lost;
var last = 0;



$(".crystal").attr('class');

random_r = Math.floor(Math.random() * 120 ) + 12;
    console.log(random_r);

$("#Random_result").html('Random Result: ' + random_r);

for(var i = 0; i < 4; i++){

    var random = Math.floor(Math.random() * 12) + 1;
    console.log(random);
    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
            
        });
    $(".crystals").append(crystal);
    
}

$(".crystal").on('click', function() {
    
    var num = parseInt($(this).attr('data-random'));

    last += num;

    console.log(last);

    if(last > random_r) {
        console.log("lose");
    }
    else if(last === random_r){
        console.log("win");
    }
    

});

