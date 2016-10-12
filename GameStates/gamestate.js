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

    // update all the bullets
    for(var i=0; i<bullets.length; i++)
    {
        bullets[i].x += bullets[i].velocityX;
        bullets[i].y += bullets[i].velocityY;
        bullets[i].draw();
    }

    for(var i=0; i<bullets.length; i++)
    {
        // check if the bullet has gone out of the screen boundaries
        // and if so kill it
        if(bullets[i].x < -bullets[i].width ||
        bullets[i].x > SCREEN_WIDTH ||
        bullets[i].y < -bullets[i].height ||
        bullets[i].y > SCREEN_HEIGHT)
        {
            // remove 1 element at position i
            bullets.splice(i, 1);

            // because we are deleting elements from the middle of the
            // array, we can only remove 1 at a time. So, as soon as we
            // remove 1 bullet stop.
            break;
        }
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