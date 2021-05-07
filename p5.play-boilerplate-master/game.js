class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
     
     
    }
  
    play(){
      form.hide();
      
      Player.getPlayerInfo();
      //image(image2,displayWidth/2,displayHeight/2,displayWidth,displayHeight);
      //clear ()
      //background(image2)
       
  
      bg=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
     bg.addImage(image2);
     bg.velocityX=-5;
     
      drawSprites();
    }
  
    end(){
      console.log("Game Ended");
      console.log(player.rank);
    }
  }
  