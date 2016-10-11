
var DefenceUpgrade = function() 
{
    this.prototype = BaseState;
}

DefenceUpgrade.prototype.load = function() 
{
    
}

DefenceUpgrade.prototype.unload = function() 
{

}

DefenceUpgrade.prototype.update = function(deltaTime) 
{
    context.fillStyle = "#000000"
    context.font="20px Palatino Linotype";
    context.fillText("Health", 10, 100);

    context.font="20px Palatino Linotype";
    context.fillText("Health Regeneration", 10, 150);
    context.font="20px Palatino Linotype";
    context.fillText("Empty", 10, 200);
    context.font="20px Palatino Linotype";
    context.fillText("Empty", 10, 250);

    if(keyboard.isKeyDown(keyboard.KEY_ESCAPE) == true)
	{
		stateManager.popState(new DefenceUpgrade());
	}
}

DefenceUpgrade.prototype.draw = function() 
{
    context.fillStyle = "#000000"
    context.font="48px Palatino Linotype";
    context.fillText("Defence", (canvas.width / 2) - (context.measureText("Defence").width / 2), 50);	
}