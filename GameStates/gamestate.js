
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

    // update and draw the boulder
    // we want to do this first so that the ballista is drawn on
    // top of the boulder
    if(bullet.isDead == false)
    {
        bullet.x += bullet.velocityX;
        bullet.y += bullet.velocityY;
        context.drawImage(bullet.image,
        bullet.x - bullet.width/2,
        bullet.y - bullet.height/2);
    }

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