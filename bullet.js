var Bullet = function()
{
    this.image = document.createElement("img"),
    this.x = canvas.width/2;
    this.y = canvas.height/2;
    this.width = 10,
    this.height = 10,
    this.velocityX = 0,
    this.velocityY = 0

    this.image.src = "Player, Base/Boulder.png"
};

var shootTimer = 0;
Bullet.prototype.update = function(deltaTime)
{
    // update the shoot timer
    if(shootTimer > 0)
    shootTimer -= deltaTime;

    if(keyboard.isKeyDown(keyboard.KEY_SPACE && shootTimer <= 0) == true)
    {
        shootTimer += 0.3;
        Shoot();
    }

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
}

Bullet.prototype.draw = function()
{
    // draw all the bullets
    for(var i=0; i<bullets.length; i++)
    {
        context.drawImage(bullets[i].image,
        bullets[i].x - bullets[i].width/2,
        bullets[i].y - bullets[i].height/2);
    }
}