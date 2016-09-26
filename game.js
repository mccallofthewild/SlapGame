$(document).ready(function(){
var gravity = 1.2;
function Player(username){
    this.name = username;
    this.score = 0;
    this.dropTimes = [Date.now()];
    this.balloon = new Balloon()
}
function Balloon(){
    this.altitude = 20;
    this.goldbars = 5;
    this.barArr = ["<img src='https://cdn1.iconfinder.com/data/icons/business-colored-icons-vol-1/128/019-512.png'/>"];
    this.fuel = 100;
    this.lift=0;
    this.weight = 0;
}
function burnfuel(a){
    a.lift -= 0.2;
    a.fuel -= 1;
}
function removeBag(p){
    //player has the drop time
    if(p.balloon.goldbars > 0){p.balloon.goldbars -= 1; p.dropTimes.push(Date.now())}
}
function calculateScore(player){
    var dropTimes = player.dropTimes;
    var drops = dropTimes.length
    var currentBags = 5;
    for(var i = 0; i<drops-1; i++){
        player.score += (dropTimes[i+1] - dropTimes[i])*currentBags;
        currentBags--;
    }
    player.score = Math.round(player.score/100)
    return player.score;
}
function gameover(player){
    player.dropTimes.push(Date.now())
    $('.container-fixed').toggle();
    $('.game-over').toggle();
    $('#score').html(calculateScore(player));
    if(sessionStorage.scores){
        sessionStorage.scores += " " + player.score
    }else{
        sessionStorage.setItem("scores", "")
    }
    var scorelist = ""
    for(var i=0; i<sessionStorage.scores.split(" "); i++){
        scorelist += sessionStorage.scores[i] + "<br>"
    }
    $('#highscores').html(scorelist)
}
function update(p){
    var a = p.balloon;
    if(a.barArr.length < a.goldbars){
        a.barArr.push("<img src='https://cdn1.iconfinder.com/data/icons/business-colored-icons-vol-1/128/019-512.png'/>")
    }
    if(a.barArr.length > a.goldbars){
        a.barArr.pop();
    }
    a.lift+= 0.05
    a.weight = (a.goldbars/5);
    a.altitude += gravity*(a.weight) + a.lift;
    a.altitude = (a.altitude < 0)? Math.abs(a.altitude): a.altitude;

    $('#balloon').css('top', a.altitude + "%");
    $('#bars').html(a.barArr.join(""))
    // $('#bars').html(a.goldbars);
    $('#health').height(a.fuel + "%");
    var waterlevel = $('.water').offset().top;
    var balloonBottom = $('#balloon').offset().top + $('#balloon').height();
    if(balloonBottom > waterlevel || a.fuel <= 0){
        gameover(p);
        //Timer is an object that needs to be canceled
        //look at cancel interval
        clearInterval(timer)
    }
   
}

var player = new Player("McCall");
var balloon = player.balloon;
function keyFunct(){

 $(window).keydown(function(event){
        var key = event.keyCode;
        // $('#bags').html(event.keyCode)
        if(key == 38){
           burnfuel(balloon)
        }else if(key == 40){
            removeBag(player);
        }
    });
}
var timer = setInterval(function(){update(player)}, 100);
debugger
keyFunct();


})