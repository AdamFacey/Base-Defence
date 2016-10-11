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
    if(keyboard.isKeyDown(keyboard.KEY_ENTER) == true)
    {
        stateManager.switchState(new GameState());
    }
    if(keyboard.isKeyDown(keyboard.KEY_I) == true)
	{
		stateManager.pushState(new Instructions());
	}
}

SplashState.prototype.draw = function() 
{
    drawSplashBackground();

    context.fillStyle = "#8B0000"
    context.font="48px Palatino Linotype";
    context.fillText("Medieval Defence", (canvas.width / 2) - (context.measureText("Medieval Defence").width / 2), 75);
    context.font="32px Palatino Linotype";
    context.fillText("Press Enter To Play", (canvas.width / 2) - (context.measureText("Press Enter To Play").width / 2), 175);
    context.font="32px Palatino Linotype";
    context.fillText("Press I For Instructions", (canvas.width / 2) - (context.measureText("Press I For Instructions").width / 2), 225);
}