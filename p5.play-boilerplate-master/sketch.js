var form, player, game;
var image;
var gameState=0;
var playerCount=0;
var database;
var allPlayers;
var bg;

     
function preload(){
image=loadImage("images/Ramayana1.jpg");
image2=loadImage("images/gb2.jpg");
}




function setup() {
  createCanvas(displayWidth,displayHeight);
  database=firebase.database()
  game=new Game()
  game.getState()
  game.start()
  
  
}

function draw() {
  background(image); 
  if (playerCount===1){
    game.update(1)

  }
  if(gameState===1){
      game.play()
  }
 

 
  
} 
  

