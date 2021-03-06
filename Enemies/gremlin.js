var gremlinHealth = 12;
var gremlinSteal = 10;
var gremlinAttackSpeed = 2;
var gremlinMoveSpeed = 30;

var Gremlin = function(x,y)
{
    this.image = document.createElement("img");
    this.x = 100;
    this.y = 100;

    var X = canvas.width/2;
    var Y = canvas.height/2;

    var dirX = rand(-10,10);
    var dirY = rand(-10,10);

    var magnitude = (dirX * dirX) + (dirY * dirY);
    if(magnitude != 0)
    {
        var oneOverMag = 1 / Math.sqrt(magnitude);
        dirX *= oneOverMag;
        dirY *= oneOverMag;
    }
    var movX = dirX * canvas.width;
    var movY = dirY * canvas.height;

    this.hp = goblinHealth;
    this.x = X + movX;
    this.y = Y + movY;

    this.width = 23;
    this.height = 14;
    //this.angle = 0;
    //this.rotation = 0;
    this.speed = 1;

    this.image.src = "Enemies/gremlin.png";
};

Gremlin.prototype.update = function(deltaTime)
{
    var dx = this.x - player.x; //my position minus the target position
    var dy = this.y - player.y;
 
    //normalise the vector
    var mag = (dx*dx) + (dy*dy);
    mag = Math.sqrt(mag);
   
    dx = dx/mag;
    dy = dy/mag;
 
    this.x = this.x - dx;
    this.y = this.y - dy;
}

Gremlin.prototype.draw = function()
{
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.drawImage(this.image,0, 0);
    context.restore();
}

function rand(floor, ceil)
{
    return Math.floor( (Math.random()* (ceil-floor)) +floor );
}

function spawnGremlin()
{
    var tempGremlin = new Gremlin;
    gremlins.push(tempGremlin);
}