class Form {

    constructor() {
      this.button =createButton('play');
      this.title = createElement('h2');
      this.greetings=createElement('h2');
      this.input=createInput("name");
    }
    hide(){
      
      this.button.hide();

      
      this.title.hide();
    }
  
    display(){
      this.title.html("King hunting");
      this.title.position(displayWidth/2 - 200, 100);
      this.title.style('color','blue');
      this.title.style('font-size','70px');
  
      this.input.position(displayWidth/2-100,displayHeight/2-100);
      this.button.position(displayWidth/2 -100, displayHeight/2);
      this.button.style('width','200px');
      this.button.style('height','50px');
      this.button.style('background','green');
      
     this.button.mousePressed(()=>{
       this.title.hide();
       this.button.hide();
       this.input.hide();
       playerCount=playerCount+1;
         player.name = this.input.value();
         player.update()
         player.updateCount(playerCount)
       //this.greetings.html("Hello " + player.name);
       //this.greetings.position(displayWidth/2 , displayHeight/2);

       
     
       
     })
      
  
    }
  }
  