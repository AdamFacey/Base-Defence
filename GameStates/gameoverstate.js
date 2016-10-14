
var GameOverState = function() 
{
	this.prototype = BaseState;
}

GameOverState.prototype.load = function() 
{
}

GameOverState.prototype.unload = function() 
{
}

GameOverState.prototype.update = function(deltaTime) 
{
    /*if(keyboard.isKeyDown(keyboard.KEY_ENTER) == true)
    {
        stateManager.pushState(new SplashState());
    }*/
}

GameOverState.prototype.draw = function() 
{
	context.fillStyle = "#8B0000"
    context.font="60px Palatino Linotype";
    context.fillText("Game Over", (canvas.width / 2) - (context.measureText("Game Over").width / 2), 150);
    context.font="28px Palatino Linotype";
    //context.fillText("Press 'Enter' to Play again", (canvas.width / 2) - (context.measureText("Press Enter To Play agian").width / 2), 200);	
}