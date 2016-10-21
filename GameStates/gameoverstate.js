
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
    if(keyboard.isKeyDown(keyboard.KEY_ENTER) == true)
    {
        stateManager.pushState(new SplashState());
    }
}

GameOverState.prototype.draw = function() 
{
    drawMenuBackground();
    
	//Resetting everything
	player.angle = 0;
	player.rotation = 0;
	
	goblins.splice(0, goblins.length);
	bullets.splice(0, bullets.length);
	
	money = 0;
	
	context.fillStyle = "#DC143C"
    context.font="60px Palatino Linotype";
    context.fillText("Game Over", (canvas.width / 2) - (context.measureText("Game Over").width / 2), 150);
    context.font="28px Palatino Linotype";
    context.fillText("Press 'Enter' to Play again", (canvas.width / 2) - (context.measureText("Press Enter To Play agian").width / 2), 200);	
}