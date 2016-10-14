
var ResourcesUpgrade = function() 
{
    this.prototype = BaseState;
}

ResourcesUpgrade.prototype.load = function() 
{
    
}

ResourcesUpgrade.prototype.unload = function() 
{

}

ResourcesUpgrade.prototype.update = function(deltaTime) 
{
    context.fillStyle = "#8B0000"
    context.font="24px Palatino Linotype";
    context.fillText("Gold Per Kill", 10, 100);
    context.font="24px Palatino Linotype";
    context.fillText("Gold Production", 10, 150);
    context.font="24px Palatino Linotype";
    context.fillText("Less Cost", 10, 200);
    context.font="24px Palatino Linotype";
    context.fillText("Empty", 10, 250);

    if(keyboard.isKeyDown(keyboard.KEY_ESCAPE) == true)
	{
		stateManager.popState(new ResourcesUpgrade());
	}
}

ResourcesUpgrade.prototype.draw = function() 
{
    context.fillStyle = "#8B0000"
    context.font="48px Palatino Linotype";
    context.fillText("Resources", (canvas.width / 2) - (context.measureText("Resources").width / 2), 50);	
}