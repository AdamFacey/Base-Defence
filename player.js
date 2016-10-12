var playerX = this.x;
var playerY = this.y;

var playerDamage = 10;
var playerAttackSpeed = 1;

var Player = function()
{
    this.image = document.createElement("img");
    this.x = canvas.width/2;
    this.y = canvas.height/2;
    this.width = 41;
    this.height = 41;
    this.angle = 0;
    this.rotation = 0;

    this.image.src = "Player, Base/PlayerBallista.png";
};

Player.prototype.update = function(deltaTime)
{
    if(keyboard.isKeyDown(keyboard.KEY_LEFT) == true)
    {
        this.rotation -= 0.05;
    }
    if(keyboard.isKeyDown(keyboard.KEY_RIGHT) == true)
    {
        this.rotation += 0.05;
    }
}

Player.rotation += Player.angularDirection;

Player.prototype.draw = function()
{
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.drawImage(this.image, -this.width/2, -this.height/2);
    context.restore();
}