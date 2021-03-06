function UpdatesChecks()
{
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
    spawnTimer -= deltaTime;
    if(spawnTimer <= 0)
    {
        spawnTimer = 1;
        spawnGoblin();
    }
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
                stateManager.switchState(new GameOverState());
            }
    }
}