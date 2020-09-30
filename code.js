var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var wall1=createSprite(200,117,200,5);
var wall2=createSprite(200,300,200,5);
var wall3=createSprite(100,140,5,50);
var wall4=createSprite(100,280,5,50);
var wall5=createSprite(298,140,5,50);
var wall6=createSprite(297,280,5,50);
var wall7=createSprite(75,165,50,5);
var wall8=createSprite(75,256,50,5);
var wall9=createSprite(50,208,5,90);
var wall10=createSprite(320,160,50,5);
var wall11=createSprite(320,256,50,5);
var wall12=createSprite(340,210,5,100);
var user=createSprite(76,209,20,20);
{
  textSize(40);
  stroke("red");
  text("user", 76,222);
  }
stroke(rgb(128, 128, 128));
fill("red");
var malware=createSprite(129,280,10,10);
var hacker=createSprite(180,132,10,10);
var virus=createSprite(205,281,10,10);
var phishing=createSprite(262,134,10,10);
malware.velocityY=-6;
hacker.velocityY=-6;
virus.velocityY=-6;
phishing.velocityY=6;

user.shapeColor='orange';
malware.shapeColor='black';
hacker.shapeColor='green';
virus.shapeColor='blue';
phishing.shapeColor='red';
var counts=0;
function draw() {
  background('yellow');
  text("Deaths"+counts,226,77);
  malware.bounceOff(wall1);
  malware.bounceOff(wall2);
hacker.bounceOff(wall1);
hacker.bounceOff(wall2);
    virus.bounceOff(wall1);
  virus.bounceOff(wall2);
    phishing.bounceOff(wall1);
  phishing.bounceOff(wall2);
if (keyIsDown(RIGHT_ARROW)){
  user.x=user.x+2;
}
  if (keyIsDown(LEFT_ARROW)){
    user.x=user.x-2;
  }
  if (user.isTouching(malware)||user.isTouching(hacker)||user.isTouching(virus)||user.isTouching(phishing)){
    user.x=78;
    user.y=201;
    counts=counts+1;
  }
  textSize(19);
textFont("Poppins");
text("Phishing", 261, 319);

textSize(19);
text("User",60,230);
textSize(19);

textFont("Poppins");
text("Hacker", 160, 319);
textSize(19);
text("Malware",100,110);
text("Virus",210,110);

  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
