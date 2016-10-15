var SplashState = function() 
{
    this.prototype = BaseState;
    money = 0;
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
    context.font="60px Palatino Linotype";
    context.fillText("Medieval Defence", (canvas.width / 2) - (context.measureText("Medieval Defence").width / 2), 75);
    context.font="28px Palatino Linotype";
    context.fillText("Press 'Enter' to Play", (canvas.width / 2) - (context.measureText("Press Enter To Play").width / 2), 175);
    context.font="28px Palatino Linotype";
    context.fillText("Press 'I' for Instructions", (canvas.width / 2) - (context.measureText("Press I For Instructions").width / 2), 225);
}