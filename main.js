var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

var startFrameMillis = Date.now();
var endFrameMillis = Date.now()

var STATE_SPLASH = 0;
var STATE_GAME = 1;
var STATE_GAMEOVER = 2;
var STATE_UPGRADES = 3;

var gameState = STATE_SPLASH;

var health = 100
function drawHealth()
{
    context.fillStyle = "#000000";
    context.fillRect(5,5,150,35);
    context.fillStyle = "#ccc";
    context.fillRect(10,10,140,25);
    context.fillStyle = "#ff0000";
    context.fillRect(10,10,(health/100)*140,25);
    
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

var splashTimer = 3;
function runSplash(deltaTime)
{
    splashTimer -= deltaTime;
    if(splashTimer <= 0)
    {
        gameState = STATE_GAME;
        return;
    }
    context.fillStyle = "#000"
    context.font="30px Arial";
    context.fillText("Medievil Defence", (canvas.width / 2) - (context.measureText("Medievil Defence").width / 2), 150);
    context.font="12px Arial";
    context.fillText("Loading", (canvas.width / 2) - (context.measureText("Loading").width / 2), 250);
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

goblin.onload = drawGoblin;

function runGame(deltaTime)
{
    drawHealth();
}

function runGameOver(deltaTime)
{
     context.fillStyle = "#000"
    context.font="30px Arial";
    context.fillText("Game Over", (canvas.width / 2) - (context.measureText("Game Over").width / 2), 150);
}

function run()
{
    context.fillStyle = "#ccc";
    context.fillRect(0,0, canvas.width, canvas.height);

    var deltaTime = getDeltaTime();

    switch(gameState)
    {
        case STATE_SPLASH:
			runSplash(deltaTime);
			break;
		case STATE_GAME:
			runGame(deltaTime);
			break;
		case STATE_GAMEOVER:
			runGameOver(deltaTime);
			break;
    }
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