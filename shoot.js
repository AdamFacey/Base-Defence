var Shoot = function()
    {
        // we can only have 1 boulder at a time
        if(bullet.isDead == false)
        return;

        // start off with a velocity that shoots the boulder straight up
        var velX = 0;
        var velY = 1;
        
        // now rotate this vector according to the boulder's current rotation
        var s = Math.sin(bullet.rotation);
        var c = Math.cos(bullet.rotation);
        
        // for an explanation of this formula,
        // see http://en.wikipedia.org/wiki/Rotation_matrix
        var xVel = (velX * c) - (velY * s);
        var yVel = (velX * s) + (velY * c);
        
        // dont bother storing a direction and calculating the
        // velocity every frame, because it won't change.
        // Just store the pre-calculated velocity
        bullet.velocityX = xVel * BULLET_SPEED;
        bullet.velocityY = yVel * BULLET_SPEED;
        
        // make the boulder alive
        bullet.isDead = false;
    }
\ No newline at end of file