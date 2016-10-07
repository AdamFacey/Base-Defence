
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
}

GameOverState.prototype.draw = function() 
{
	context.fillStyle = "#8B0000"
    context.font="48px Palatino Linotype";
    context.fillText("Game Over", (canvas.width / 2) - (context.measureText("Game Over").width / 2), 150);	
}