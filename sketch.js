var database;
var back_img;
var GameState = 0;
var PlayerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var GameLoad;

function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
}

function GameLoad(){
  game = new Game();
  game.getState();
  game.start();
  database = firebase.database();
}

function draw() {
  background(back_img);
  drawSprites();

   if (PlayerCount === 2) {
     game.update(1);
   }
   if (GameState === 1) {
     clear(); 
     game.play();
   }
   if (GameState === 2) {
    
     game.end();
   }
   
}