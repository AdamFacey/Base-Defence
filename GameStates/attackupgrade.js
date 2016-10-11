
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
    context.font="20px Palatino Linotype";
    context.fillText("Attack Speed", 10, 150);
    context.font="20px Palatino Linotype";
    context.fillText("Extra Turrets", 10, 200);
    context.font="20px Palatino Linotype";
    context.fillText("Turret Damage", 10, 250);

    if(keyboard.isKeyDown(keyboard.KEY_ESCAPE) == true)
	{
		stateManager.popState(new AttackUpgrade());
	}
}

AttackUpgrade.prototype.draw = function() 
{
    context.fillStyle = "#000000"
    context.font="48px Palatino Linotype";
    context.fillText("Attack", (canvas.width / 2) - (context.measureText("Attack").width / 2), 50);	
}