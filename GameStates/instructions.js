
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
    context.fillStyle = "#000000"
    context.font="48px Palatino Linotype";
    context.fillText("Instructions", (canvas.width / 2) - (context.measureText("Instructions").width / 2), 50);
    context.font="20px Palatino Linotype";
    context.fillText("A and D to rotate", (canvas.width / 2) - (context.measureText("A and D to rotate").width / 2), 150);
    context.fillText("Spacebar to shoot", (canvas.width / 2) - (context.measureText("Spacebar to shoot").width / 2), 200);
    context.fillText("Escape to exit", (canvas.width / 2) - (context.measureText("Escape to exit").width / 2), 250);
    context.fillText("1 for attack upgrades", (canvas.width / 2) - (context.measureText("1 for attack upgrades").width / 2), 300);
    context.fillText("2 for defence upgrades", (canvas.width / 2) - (context.measureText("2 for defence upgrades").width / 2), 350);
    context.fillText("3 for resource upgrades", (canvas.width / 2) - (context.measureText("3 for resource upgrades").width / 2), 400);
}