var shootTimer = 0;
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

    // update the shoot timer
    if(shootTimer > 0)
    shootTimer -= deltaTime;

    if(keyboard.isKeyDown(keyboard.KEY_SPACE) == true && shootTimer <= 0)
    {
        shootTimer += maxShootTimer;
        Shoot();
    }

    for(var i=0; i<bullets.length; i++)
    {
        // check if the bullet has gone out of the screen boundaries
        // and if so kill it
        if(bullets[i].x < -bullets[i].width ||
        bullets[i].x > canvas.width ||
        bullets[i].y < -bullets[i].height ||
        bullets[i].y > canvas.height)
        {
            // remove 1 element at position i
            bullets.splice(i, 1);

            // because we are deleting elements from the middle of the
            // array, we can only remove 1 at a time. So, as soon as we
            // remove 1 bullet stop.
            break;
        }
    }

    for(var i=0; i<gremlins.length; i++)
    {
        gremlins[i].update(deltaTime);

            if(gremlins[i].x > canvas.width + gremlins[i].width/2)
            {
                gremlins[i].x = 0;
            }
            if(gremlins[i].x < 0 - gremlins[i].width/2)
            {
                gremlins[i].x = canvas.width;
            }
            if(gremlins[i].y > canvas.height + gremlins[i].height/2)
            {
                gremlins[i].y = 0;
            }
            if(gremlins[i].y < 0 - gremlins[i].height/2)
            {
                gremlins[i].y = canvas.height;
            }
    }

    for(var i=0; i<gremlins.length; i++)
    {
        gremlins[i].draw();
    }
    spawnTimer -= deltaTime;
	if(spawnTimer = 9)
	{
		spawnGremlin();
	}
	if(spawnTimer = 6)
	{
		spawnGoblin();
	}
    if(spawnTimer <= 0)
    {
        spawnTimer = 12;
        spawnGoblin();
    }
    for(var i=0; i<gremlins.length; i++)
    {
        if(intersects(
            player.x - player.width/2,
            player.y - player.height/2,
            player.width, player.height,
            gremlins[i].x - gremlins[i].width/2,
            gremlins[i].y - gremlins[i].height/2,
            gremlins[i].width, gremlins[i].height) == true)
            {
                attackTimer -= deltaTime
                if (attackTimer <= 0)
                {
                    attackTimer = 1;
                    currentHealth -= 10;
                }

                if(currentHealth <1)
                {
                    stateManager.switchState(new GameOverState());
                }
                gremlins.splice(i, 1);
                break;
            }
		gremlins[i].draw();
    }


    for(var i=0; i<goblins.length; i++)
    {
        goblins[i].update(deltaTime);

            if(goblins[i].x > canvas.width + goblins[i].width/2)
            {
                goblins[i].x = 0;
            }
            if(goblins[i].x < 0 - goblins[i].width/2)
            {
                goblins[i].x = canvas.width;
            }
            if(goblins[i].y > canvas.height + goblins[i].height/2)
            {
                goblins[i].y = 0;
            }
            if(goblins[i].y < 0 - goblins[i].height/2)
            {
                goblins[i].y = canvas.height;
            }
    }

    for(var i=0; i<goblins.length; i++)
    {
        goblins[i].draw();
    }
    /*spawnTimer -= deltaTime;
    if(spawnTimer <= 0)
    {
        spawnTimer = 3;
        spawnGoblin();
    }*/
    for(var i=0; i<goblins.length; i++)
    {
        if(intersects(
            player.x - player.width/2,
            player.y - player.height/2,
            player.width, player.height,
            goblins[i].x - goblins[i].width/2,
            goblins[i].y - goblins[i].height/2,
            goblins[i].width, goblins[i].height) == true)
            {
                attackTimer -= deltaTime
                if (attackTimer <= 0)
                {
                    attackTimer = 1;
                    currentHealth -= 10;
                }

                if(currentHealth <1)
                {
                    stateManager.switchState(new GameOverState());
                }
                //goblins.splice(i, 1);
                break;
            }
    }
	
	//Drawn base here to hide bugged enemy, yet not hide bullets/player
	drawBase();
	
	// update all the bullets
    for(var i=0; i<bullets.length; i++)
    {
        bullets[i].x += bullets[i].velocityX;
        bullets[i].y += bullets[i].velocityY;
        bullets[i].draw();
    }

    collisionGremlin();
    collisionGoblin();
    intersects();
    
    player.update(deltaTime);
    player.draw();
    drawVariableBar();
    drawHealth();
    drawMoney();
    //drawAttackUpgrade();
    //drawDefenseUpgrade();
    //drawResourcesUpgrade();
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
