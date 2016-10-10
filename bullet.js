var Bullet = function()
{
    this.image = document.createElement("img");
    this.x = canvas.width/2;
    this.y = canvas.height/2;
    this.width = 10;
    this.height = 10;
    this.angle = 0;
    this.rotation = 0;
    this.velocityX = 0,
    this.velocityY = 0,
    this.isDead = true

    this.image.src = "Player, Base/Boulder.png";
};

Bullet.prototype.update = function(deltaTime)
{
    if(keyboard.isKeyDown(keyboard.KEY_LEFT) == true)
    {
        this.rotation -= 0.05;
    }
    if(keyboard.isKeyDown(keyboard.KEY_RIGHT) == true)
    {
        this.rotation += 0.05;
    }
    if(keyboard.isKeyDown(keyboard.KEY_SPACE) == true)
    {
        Shoot();
        this.isDead = false
    }
}

Bullet.rotation += Bullet.angularDirection;

Bullet.prototype.draw = function()
{
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.drawImage(this.image, -this.width/2, -this.height/2);
    context.restore();
}