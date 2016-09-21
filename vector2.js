var vector2 = function ()
{
    this.x = 100;
    this.y = 100;
}

vector2.prototype.set = function (x,y) 
{
    this.x = x;
    this.y = y;
}
vector2.prototype.getMagnitude = function()
{
    var x2 = this.x * this.x;
    var y2 = this.y * this.y;
    var h2 = x2 + y2;
    return Math.sqrt(h2);
}
vector2.prototype.normalise = function ()
{
    var magnitude = this.getMagnitude();
    this.x = this.x / magnitude;
    this.y = this.y / magnitude;
}