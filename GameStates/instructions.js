
var Instructions = function() 
{
}

Instructions.prototype.load = function() 
{
}

Instructions.prototype.unload = function() 
{
}

Instructions.prototype.update = function(dt) 
{
    if(keyboard.isKeyDown(keyboard.KEY_ESCAPE) == true)
	{
		stateManager.popState(new Instructions());
	}
}

Instructions.prototype.draw = function() 
{
    drawMenuBackground();
    //drawSign();

    context.fillStyle = "#FFFFFF"
    context.font="46px Palatino Linotype";
    context.fillText("Instructions", (canvas.width / 2) - (context.measureText("Instructions").width / 2), 50);
    context.font="24px Palatino Linotype";
    context.fillText("'A' and 'D' to rotate", (canvas.width / 2) - (context.measureText("A and D to rotate").width / 2), 125);
    context.fillText("'Spacebar' to shoot", (canvas.width / 2) - (context.measureText("Spacebar to shoot").width / 2), 175);
    context.fillText("'Escape' to exit", (canvas.width / 2) - (context.measureText("Escape to exit").width / 2), 225);
    context.fillText("'1' for attack upgrades", (canvas.width / 2) - (context.measureText("1 for attack upgrades").width / 2), 275);
    context.fillText("'2' for defence upgrades", (canvas.width / 2) - (context.measureText("2 for defence upgrades").width / 2), 325);
    context.fillText("'3' for resource upgrades", (canvas.width / 2) - (context.measureText("3 for resource upgrades").width / 2), 375);
}