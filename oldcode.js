$(document).ready(function(){

var health = 1;
var healthRate = 0.2;
var hits = 0;
var name = "";
var gravityrate = 1.2;
var scene = window.innerHeight;
var helium = 

function gravity(){
    var waterlevel = $('.water').offset().top;
    var balloonBottom = $('#sprite-img').offset().top + $('#sprite-img').height();
    console.log("WaterLevel:" + balloonBottom)
    if(balloonBottom > waterlevel){
        gameover();
    }else{
        health += healthRate
        healthRate += 0.4
        health = Math.abs(health)
    }
    update();
    
}
function gameover(){
    $('body').html("GAME OVER");
    health = 0
}
function Player(name){
    this.name = name;
    this.hits = 0;
    this.health = 100;
}
function Item(name, imgsrc, strength, power){
    this.name = name;
    this.imgsrc = imgsrc;
    this.strength = strength;
    this.power = power;
}
function burn(){
    healthRate -= 0.15
}
function drop(){
    healthRate 
}
function update(){
    document.getElementById('health').style.height = health + "%"
    document.getElementById('sprite-img').style.top = health + "%";
    document.getElementById('healthval').innerHTML = ~~health + "%"
    document.getElementById('hits').innerHTML = hits;
    document.getElementById('name').innerHTML = name;

}

var loser = () => document.getElementById('loser').style.display = "flex";
function attack(f){
    hits++;
    update();
    if(health <= 0){
        health = 1;
    }
    f
}
var time = 500;
function gravityy(){
    setInterval(gravity, time)
}
$(document).ready(function(){gravityy()}) 
$(window).keydown(function(){attack(burn())})
// document.onkeydown = function(){    document.getElementById('name').innerHTML = event.keyCode};
console.log(new Item("bob", "dklj", "klk", "kljlkljkljk"))

});