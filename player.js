var Player = function()
{
    this.image = document.createElement("img");
    this.x = canvas.width/2;
    this.y = canvas.height/2;
    this.width = 41;
    this.height = 41;

    this.image.src = "Player, Base/PlayerBallista.png";
}

Player.prototype.update = function(deltaTime)
{
    
}

Player.prototype.draw = function()
{
    context.save();
    context.translate(this.x, this.y);
    context.drawImage(this.image, -this.width/2, -this.height/2);
    context.restore();
}