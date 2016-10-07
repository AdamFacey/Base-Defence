var Goblin = function(x,y)
{
    this.image = document.createElement("img");
    this.x = 100;
    this.y = 100;
    this.width = 23;
    this.height = 14;
    //this.angle = 0;
    //this.rotation = 0;
    this.speed = 2;

    this.image.src = "Enemies/goblin.png";
};

Goblin.prototype.update = function(deltaTime)
{
    /*this.rotation = Math.atan2(player.y - this.y, player.x - this.x);

    this.x += Math.cos(this.rotation) * this.speed;
    this.y += Math.sin(this.rotation) * this.speed;*/
    var dirX = player.x - this.x;
    var dirY = player.y - this.y;

    hyp = Math.sqrt(dirX*dirX + dirY*dirY);
    dirX /= hyp;
    dirY /= hyp;

    this.x += dirY*this.speed;
    this.y += dirX*this.speed;
}

Goblin.prototype.draw = function()
{
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.drawImage(this.image,this.x, this.y);
    context.restore();
}