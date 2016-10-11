
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
    bullet.update(deltaTime);
    bullet.draw();
    player.update(deltaTime);
    player.draw();
    goblin.update(deltaTime);
    goblin.draw();
    drawHealth();
    drawAttackUpgrade();
    drawDefenseUpgrade();
    drawResourcesUpgrade();
	if(keyboard.isKeyDown(keyboard.KEY_ONE) == true)
	{
		stateManager.pushState(new AttackUpgrade());
	}
}

GameState.prototype.draw = function() 
{
}