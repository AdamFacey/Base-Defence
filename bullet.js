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