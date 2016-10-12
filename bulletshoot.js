function BulletDraw();
    
    // update the shoot timer
    if(shootTimer > 0)
    shootTimer -= deltaTime;

    // update all the bullets
    for(var i=0; i<bullets.length; i++)
    {
        bullets[i].x += bullets[i].velocityX;
        bullets[i].y += bullets[i].velocityY;
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

    // draw all the bullets
    for(var i=0; i<bullets.length; i++)
    {
        context.drawImage(bullets[i].image,
        bullets[i].x - bullets[i].width/2,
        bullets[i].y - bullets[i].height/2);
    }