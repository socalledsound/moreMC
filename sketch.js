const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 400;
var mouse_moved = false;
var touch_started = false;
var explode_sprite_sheet;
var EYE_sprite_sheet;
var tile_sprite_sheet;

var EYE_walk;
var EYE_stand;
var EYE_sprite;


// let EYE;
let EYEAnim;
let EYESpritesheet;

let bgImg;
let numEyes = 2;
let eyeImages = Array.from({length: numEyes});
let eyes = Array.from({length: numEyes});
let eyeAnimations = Array.from({length: numEyes});
let eyeSprites = Array.from({length: numEyes});
let eyeData = [
  'https://res.cloudinary.com/allhailmc/image/upload/v1601184708/Eyez/eyezcloudinary/0.png',
  'https://res.cloudinary.com/allhailmc/image/upload/v1601249195/Eyez/eyezcloudinary/eyesNew/14.png'
]
// document.body.style.backgroundImage = "'projectDOS.jpg";


const numWaves = 10;
let waves = Array.from({length: numWaves});



function preload(){

  bgImg = loadImage("img/projectDOS.jpg")

  eyeImages.forEach((eye, i) => {
    eyeImages[i] = loadImage(eyeData[i]);
  })



    EYESpritesheet = loadSpriteSheet('img/wave3.png', 192, 32, 6);
    
  //  eyeAnimations.forEach( (eye, i) => {
  //    eyeAnimations[i] = loadAnimation(eyeImages[i]);
  //  }) 
    


    EYEAnim = loadAnimation(EYESpritesheet);
   
    
    // loadJSON('wave3.json', function(tile_frames) {
    //   // Load tiles sprite sheet from frames array once frames array is ready
    //   tile_sprite_sheet = loadSpriteSheet('wave3', tile_frames);
    // });
}
function setup(){
  createCanvas(800, 800);
  angleMode(DEGREES);
  stroke(255);
  strokeWeight(6);
  noFill();
  background(0);

  waves.forEach((wave, i) => {
    waves[i] = new Wave(150 + (i*10), 150 + ( i * 30 ));
})


  console.log(eyeImages);

  eyeImages.forEach((image, i) => {
    eyes[i] = new Eye(image);
})


  // eyeSprites.forEach((eye, i) => {
  //   const size = random(50,150);
  //   eyeSprites[i] = createSprite(random(0, width-200), random(0, height -200), size, size);
  // })



  EYE_sprite = createSprite(111, 284, 140, 200);
  EYE_sprite.addAnimation('walk', EYEAnim);
  // EYE_sprite.addAnimation('stand', EYE_stand);
}


function draw(){
  image(bgImg, 0, -100);

  eyes.forEach(eye => {
    eye.update();
    eye.checkEdges();
    eye.display();
  })
  update(EYE_sprite);
  drawSprites();

  waves.forEach(wave =>{
    wave.update();
    wave.display();
})

}







function update(object) {
  if (keyDown("up") || keyDown("down") || keyDown("left") || keyDown("right")) {
    if (keyDown("up")) {
      object.addSpeed(2, 270);
    }
    if (keyDown("down")) {
      object.addSpeed(2, 90);
    }
    if (keyDown("left")) {
      object.addSpeed(2, 180);
      object.mirrorX(-1);
    }
    if (keyDown("right")) {
      object.addSpeed(2, 0);
      object.mirrorX(1);
    }
  } else {
    object.setSpeed(0);
  }
  // drawObject(object);
}

// function drawObject(object) {
//   if (object.getSpeed() > 0.0001) {
//     object.changeAnimation("move");
//   } else {
//     object.changeImage("still");
//   }
//   EYE.limitSpeed(EYE.moveSpeed);
//   drawSprite(object);
// }

