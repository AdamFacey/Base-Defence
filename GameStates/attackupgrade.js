
var AttackUpgrade = function() 
{
    this.prototype = BaseState;
}

BaseState.prototype.load = function() 
{
}

BaseState.prototype.unload = function() 
{
}

BaseState.prototype.update = function(deltaTime) 
{
}

BaseState.prototype.draw = function() 
{
    context.fillStyle = "#8B0000"
    context.font="48px Palatino Linotype";
    context.fillText("Game Over", (canvas.width / 2) - (context.measureText("Game Over").width / 2), 150);	
}