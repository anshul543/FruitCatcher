var database;
var BACKGROUND;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var Fruits;
var fruitGroup;
var FRUIT1, FRUIT2, FRUIT3, FRUIT4, FRUIT5;
var player_img;
var SCORE1 = 0;
var SCORE2 = 0;

function preload(){
  back_img = loadImage("IMAGES/Jungle.jpg");
  player_img = loadImage("IMAGES/Basket.png");
  FRUIT1 = loadImage("IMAGES/Apple.png");
  FRUIT2 = loadImage("IMAGES/Banana.png");
  FRUIT3 = loadImage("IMAGES/Melon.png");
  FRUIT4 = loadImage("IMAGES/Orange.png");
  FRUIT5 = loadImage("IMAGES/Pineapple.png");
  fruitGroup = new Group();
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

  if(playerCount === 2){
    game.update(1);
  }

  if(gameState === 1){
    clear();
    game.play();
  } 

  if(gameState === 2){
    game.end();
  }

}