
var AttackUpgrade = function() 
{
    this.prototype = BaseState;
}

AttackUpgrade.prototype.load = function() 
{
    
}

AttackUpgrade.prototype.unload = function() 
{

}

AttackUpgrade.prototype.update = function(deltaTime) 
{
    context.fillStyle = "#000000"
    context.font="20px Palatino Linotype";
    context.fillText("Damage", 10, 100);
    context.fillStyle = "#000000"
    context.font="20px Palatino Linotype";
    context.fillText("Attack Speed", 10, 150);
    context.fillStyle = "#000000"
    context.font="20px Palatino Linotype";
    context.fillText("Extra Turrets", 10, 200);
    context.fillStyle = "#000000"
    context.font="20px Palatino Linotype";
    context.fillText("Turret Damage", 10, 250);

}

AttackUpgrade.prototype.draw = function() 
{
    context.fillStyle = "#000000"
    context.font="48px Palatino Linotype";
    context.fillText("Upgrades", (canvas.width / 2) - (context.measureText("Upgrades").width / 2), 50);	
}