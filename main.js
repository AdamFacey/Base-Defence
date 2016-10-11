var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

var startFrameMillis = Date.now();
var endFrameMillis = Date.now()

var STATE_SPLASH = 0;
var STATE_GAME = 1;
var STATE_GAMEOVER = 2;
var STATE_UPGRADES = 3;

var gameState = STATE_SPLASH;

var BULLET_SPEED = 1.5;

var bullet = new Bullet();
var shoot = new Shoot();

var player = new Player();
var keyboard = new Keyboard();

var spawnTimer = 0;

var goblin = new Goblin();
var goblins = [];

var stateManager = new StateManager();
stateManager.pushState( new SplashState());

var splashBackground = document.createElement("img");
splashBackground.src = "Background/Splash Background.png";

function drawSplashBackground()
{
    context.drawImage(splashBackground, 0, 0);
}       
splashBackground.onload = drawSplashBackground;

var health = 100;
var startingHealth = 100;
var maxHealth = health;
var currentHealth = startingHealth
function drawHealth()
{
    context.fillStyle = "#000000";
    context.fillRect(5,5,150,35);
    context.fillStyle = "#ff0000";
    context.fillRect(10,10,140,25);
    context.fillStyle = "#66ff33";
    context.fillRect(10,10,(currentHealth/100)*140,25);
    context.font = "16px Arial";
    context.fillStyle = "#000000";
    context.fillText(currentHealth+" / "+maxHealth, 40, 28);
}

var money = 0;
function drawMoney()
{
    context.font = "20px Arial";
    context.fillStyle = "#ffff00";
    context.fillText("$ "+money, 500, 20);
}

var attackImage = document.createElement("img");
attackImage.src = "Buttons, Upgrades/Attack.png";
function drawAttackUpgrade()
{
    context.fillStyle = "#ff0000";
    context.fillRect(190,410,80,100);
    context.drawImage(attackImage,230 - 20, 450 - 20);
}

var defenceImage = document.createElement("img");
defenceImage.src = "Buttons, Upgrades/Defence.png";
function drawDefenseUpgrade()
{
    context.fillStyle = "#4d79ff";
    context.fillRect(280,410,80,100);
    context.drawImage(defenceImage,320 - 20, 450 - 20);
}

var resourcesImage = document.createElement("img");
resourcesImage.src = "Buttons, Upgrades/Resources.png";
function drawResourcesUpgrade()
{
    context.fillStyle = "#ffff00";
    context.fillRect(370,410,80,100);
    context.drawImage(resourcesImage,410 - 20, 450 - 20);
}

var grass = document.createElement("img");
grass.src = "Background/Grass.png"

var background = [];
 for(var Y=0;Y<15;Y++)
    {
        background[Y] = [];
        for(var X=0; X<20; X++)
        background[Y][X] = grass;
    }
function drawBackground()
{
    for(var Y=0; Y<15; Y++)
    {
       for(var X=0; X<20; X++)
       {
           context.drawImage(background[Y][X], X*32, Y*32);
       } 
    }   
}

var base = document.createElement("img");
base.src = "Player, Base/PlayerBase.png"
function drawBase()
{
    context.drawImage(base, canvas.width/2 - 60, canvas.height/2 - 60);
}

function getDeltaTime()
{
    endFrameMillis = startFrameMillis;
    startFrameMillis = Date.now();

    var deltaTime = (startFrameMillis - endFrameMillis) * 0.001;

    if(deltaTime > 1)
        deltaTime = 1;

    return deltaTime;
}

function initialize()
{
    musicBackground = new Howl(
    {
        urls: ["Music/background.ogg"],
        loop: true,
        buffer: true,
        volume: 0.1
    });
    musicBackground.play();
}

function runGameOver(deltaTime)
{
    context.fillStyle = "#8B0000"
    context.font="48px Palatino Linotype";
    context.fillText("Game Over", (canvas.width / 2) - (context.measureText("Game Over").width / 2), 150);
}

function run()
{
    context.fillStyle = "#ccc";
    context.fillRect(0,0, canvas.width, canvas.height);

    var deltaTime = getDeltaTime();

    stateManager.update(deltaTime);
    stateManager.draw();
}

var musicBackground

initialize();

//-------------------------------------------------------------------------------
(function () 
{
  var onEachFrame;
  if (window.requestAnimationFrame) 
	{
    onEachFrame = function (cb) 
		{
      var _cb = function () { cb(); window.requestAnimationFrame(_cb); }
      _cb();
    };
  } else if (window.mozRequestAnimationFrame) 
	{
    onEachFrame = function (cb) 
		{
      var _cb = function () { cb(); window.mozRequestAnimationFrame(_cb); }
      _cb();
    };
  } else 
	{
    onEachFrame = function (cb) 
		{
      setInterval(cb, 1000 / 60);
    } 
  }

  window.onEachFrame = onEachFrame;
})();

window.onEachFrame(run);