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

    for(var i=0; i<goblins.length; i++)
    {
        goblins[i].X = goblins[i].X + goblins[i].velocityX;
        goblins[i].Y = goblins[i].Y + goblins[i].velocityY;

            if(goblins[i].X > canvas.width + goblins[i].width/2)
            {
                goblins[i].X = 0;
            }
            if(goblins[i].X < 0 - goblins[i].width/2)
            {
                goblins[i].X = canvas.width;
            }
            if(goblins[i].Y > canvas.height + goblins[i].height/2)
            {
                goblins[i].Y = 0;
            }
            if(goblins[i].Y < 0 - goblins[i].height/2)
            {
                goblins[i].Y = canvas.height;
            }
    }

    for(var i=0; i<goblins.length; i++)
    {
        context.drawImage(goblins[i].image, goblins[i].X - goblins[i].width/2,
                            goblins[i].Y - goblins[i].height/2);
    }
    spawnTimer -= deltaTime;
    if(spawnTimer <= 0)
    {
        spawnTimer = 1;
        spawnGoblin();
    }

    player.update(deltaTime);
    player.draw();
    goblin.update(deltaTime);
    goblin.draw();
    drawHealth();
    drawMoney();
    drawAttackUpgrade();
    drawDefenseUpgrade();
    drawResourcesUpgrade();
	if(keyboard.isKeyDown(keyboard.KEY_ONE) == true)
	{
		stateManager.pushState(new AttackUpgrade());
	}
    if(keyboard.isKeyDown(keyboard.KEY_TWO) == true)
	{
		stateManager.pushState(new DefenceUpgrade());
	}
    if(keyboard.isKeyDown(keyboard.KEY_THREE) == true)
	{
		stateManager.pushState(new ResourcesUpgrade());
	}
}

GameState.prototype.draw = function() 
{
}