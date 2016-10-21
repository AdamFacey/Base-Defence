
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
    if(keyboard.isKeyDown(keyboard.KEY_ESCAPE) == true)
	{
		stateManager.popState(new DefenceUpgrade());
	}

    context.fillStyle = "#ffffff";
    context.font="24px Palatino Linotype";
    context.fillText("Current = "+currentHealth,120,135);
    context.fillText("Current = ",120,210);
}

DefenceUpgrade.prototype.draw = function() 
{
    drawMenuBackground();
    
    context.fillStyle = "#FFFFFF"
    context.font="48px Palatino Linotype";
    context.fillText("Defence", (canvas.width / 2) - (context.measureText("Defence").width / 2), 50);

    context.font="24px Palatino Linotype";
    context.fillText("Health", 110, 100);
    context.fillText("Health Regeneration", 110, 175);
    context.fillText("Empty", 110, 250);
    context.fillText("Empty", 110, 325);	

    context.fillStyle = "#666666";
    context.fillRect(110,110,105,40);
    context.fillRect(110,185,105,40);
    context.fillRect(110,260,105,40);
    context.fillRect(110,335,105,40);
    context.fillStyle = "#000000";
    context.fillText("Upgrade",115,135);
    context.fillText("Upgrade",115,210);
    context.fillText("Upgrade",115,285);
    context.fillText("Upgrade",115,360);
}