var canvas, backgroundImage;

var gameState = 0;
var playerCount = 0;

var database;
var allPlayers;
var form, player, game, hbd, bd1;

var video;
var flag=0
var positionFlag=0

function setup(){
  canvas = createCanvas(displayWidth - 30, displayHeight - 130);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  hbd = loadImage('images/bg.jpg');

 }

function draw(){
  background(hbd);
   
}

/*
function mouseDragged() {
  console.log("preessed")
  if(flag===1){
    video.play();
    console.log("video staterd")
  }
}
*/