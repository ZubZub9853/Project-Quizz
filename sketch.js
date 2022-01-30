var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var player1score =0;
var player2score =0;

var obstacleGroup,obstacle,obstacleImage;

function preload(){
  back_img = loadImage("./images/Bkgd_img.jpg");
  play_img = loadImage("./images/play.png");
  reset_img = loadImage("./images/reset1.png");
 
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}