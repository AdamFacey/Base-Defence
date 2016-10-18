
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
    if(keyboard.isKeyDown(keyboard.KEY_ESCAPE) == true)
	{
		stateManager.popState(new ResourcesUpgrade());
	}

    context.fillStyle = "#ffffff";
    context.font="24px Palatino Linotype";
    context.fillText("Current = ",120,135);
    context.fillText("Current = ",120,210);
}

ResourcesUpgrade.prototype.draw = function() 
{
    context.fillStyle = "#8B0000"
    context.font="48px Palatino Linotype";
    context.fillText("Resources", (canvas.width / 2) - (context.measureText("Resources").width / 2), 50);

    
    context.font="24px Palatino Linotype";
    context.fillText("Gold Per Kill", 10, 100);
    context.fillText("Gold Production", 10, 175);
    context.fillText("Less Cost", 10, 250);
    context.fillText("Empty", 10, 325);	

    context.fillStyle = "#666666";
    context.fillRect(10,110,105,40);
    context.fillRect(10,185,105,40);
    context.fillRect(10,260,105,40);
    context.fillRect(10,335,105,40);
    context.fillStyle = "#000000";
    context.fillText("Upgrade",15,135);
    context.fillText("Upgrade",15,210);
    context.fillText("Upgrade",15,285);
    context.fillText("Upgrade",15,360);
}