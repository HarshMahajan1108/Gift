class Form {
  constructor() {
    // this.title = createElement('h2');
    this.input = createInput();
    this.button = createButton("↵");
    this.button2 = createButton("▶");
    // this.greeting = createElement('h4');
    this.confession = createElement('h1');
    // this.confession2 = createElement('h3');
  }

  hide(){
    // this.greeting.hide();
    // this.title.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    this.input.position(displayWidth/2 - 90, 280);
    this.input.style('background', 'black');
    this.input.style('borderColor', 'white');
    this.input.style('color', 'white');
    this.input.style('borderLeftColor', 'white');
    this.input.style('borderTopColor', 'white');
    this.input.style('fontFamily', 'Viner Hand ITC');
    this.input.style('cursor', 'pointer');
   
    this.button.position(displayWidth/2 + 55, 280);
    this.button.style('background', 'grey');
    this.button.style('height', '28px');
    this.button.style('width', '28px');
    
    this.button2.position(10, 10);
    this.button2.style('background', 'white')
    this.button2.hide();
    
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();

      if(this.input.value() === "Shree" || this.input.value() === "shree"
      || this.input.value() === "Sukirti"|| this.input.value() === "sukirti" && this.button.mousePressed){
        hbd = loadImage('images/dn.jpg');
        // hbd.height = displayHeight;
        // hbd.width = displayWidth;
        // this.button2.show();

        this.button2.mousePressed(()=>{

        // video = createVideo("images/keshu.mp4");
        // flag=1
        // positionFlag=1
        // console.log("IN")
        // console.log("preessed")

        // if(flag===1){
          // video.play();
          // console.log("video staterd")
        // }

        // if(positionFlag===1){
          // console.log("in pos")
          //  video.position(width/2 - 3550, height/2 - 285);
          //  video.size(displayWidth + 5780, displayHeight - 130);
          //  positionFlag=0;
          // }
        
        // if(flag===1){
        //   console.log("in image")
        //         image(video, width/2-150, height/2-250);
        //   }

      })
      // } else if(this.input.value() === "" && this.button.mousePressed) {
      //   hbd = loadImage('images/tds.jpg');
        // this.confession.html("Dear " + player.name + " Sir/Mam");
        // this.confession.font('Viner Hand ITC')
        // this.confession.position(displayWidth/2 + 350, 475);
      // } else {
        // hbd = loadImage('images/sorry.jpg');
        // this.confession.html("Seems like you have come at wrong place !" + this.input.value());
        // this.confession.font('Viner Hand ITC')
        // this.confession.position(displayWidth/2 - 350, 75);
        // this.confession2.html("But It seems like this is not the place you are looking for !");
        // this.confession2.position(displayWidth/2 - 210, 275);
      }
    });
  }
}

/*
 
After line 36
        this.greeting.html("Happy Anniversary");
 
        this.greeting.position(displayWidth/2 - 85, 300);
        this.greeting2.html("Drag the mouse for surprise");
 
        this.greeting2.position(displayWidth/2 -60, 350);

*/

/*

After line 34
this.greeting.html("Happy Marriage Anniversary");
this.greeting.position(displayWidth/2 - 85, 300);

*/