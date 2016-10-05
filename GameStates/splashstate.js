var splashTimer = 3;
var SplashState = function() 
{
    this.prototype = BaseState;
}

SplashState.prototype.load = function() 
{
}

SplashState.prototype.unload = function() 
{
}

SplashState.prototype.update = function(deltaTime) 
{
    splashTimer -= deltaTime;
    if(splashTimer <= 0)
    {
        stateManager.switchState(new GameState());
    }
}

SplashState.prototype.draw = function() 
{
    drawSplashBackground();

    context.fillStyle = "#8B0000"
    context.font="48px Palatino Linotype";
    context.fillText("Medieval Defence", (canvas.width / 2) - (context.measureText("Medieval Defence").width / 2), 150);
    context.font="20px Palatino Linotype";
    context.fillText("Loading...", (canvas.width / 2) - (context.measureText("Loading").width / 2), 250);
}