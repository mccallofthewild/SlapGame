var red = 0;
var green = 0;
var blue = 0;
var n = 0;
var Color = {
    red: 0,
    green: 0,
    blue: 0
}
function lightness() {
    red++;
    green++;
    blue++;
    updateColor();
}
function updateColor(){
    document.body.style.backgroundColor = "rgb(" + Color.red + ", " + Color.green + ", " + Color.blue + ")";
    document.getElementById('color-text').innerText = "rgb(" + Color.red + ", " + Color.green + ", " + Color.blue + ")";

}
function colorize(color){
    Color[color]++;
    updateColor();
}
var intVal = 0;
function switcher(){
    if(n==1){
        intVal = setInterval(colorize("red"), 7);
    }else if(n==2){
        intVal = setInterval(colorize("green"), 7);
    }else if(n==3){
        intVal = setInterval(colorize("blue"), 7);
    }else if(n>3){

    }
}
var randomColor = {
    red: Math.floor(Math.random()*255),
    green: Math.floor(Math.random()*255),
    blue: Math.floor(Math.random()*255)
}
window.onload = function(){document.getElementById("user-color").style.backgroundColor = "rgb(" + randomColor.red + ", " + randomColor.green + ", " + randomColor.blue + ")";}
window.onkeyup = function(){clearInterval(intVal); n++}
window.onkeydown = function(){switcher();}