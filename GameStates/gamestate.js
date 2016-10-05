
var GameState = function() 
{
	this.prototype = BaseState;
}

GameState.prototype.load = function() 
{
}

GameState.prototype.unload = function() 
{
}

GameState.prototype.update = function(deltaTime) 
{
	drawBackground();
    drawBase();
    player.update(deltaTime);
    player.draw();
    drawHealth();
    drawAttackUpgrade();
    drawDefenseUpgrade();
    drawResourcesUpgrade();
}

GameState.prototype.draw = function() 
{
}