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
    if(keyboard.isKeyDown(keyboard.KEY_ESCAPE) == true)
	{
		stateManager.popState(new AttackUpgrade());
	}
	if(keyboard.isKeyDown(keyboard.KEY_ZERO) == true)
	{
		if(money - upgradePrice >= 0)
		{
			playerDamage = playerDamage + 10;
			money = money - upgradePrice;
			upgradePrice = upgradePrice + increasePrice;
		}
	}
	if(keyboard.isKeyDown(keyboard.KEY_NINE) == true)
	{
		if(money - upgradePrice >= 0)
		{
			playerAttackSpeed = playerAttackSpeed - 0.1;
			maxShootCooldown = maxShootCooldown - 0.05;
			money = money - upgradePrice;
			upgradePrice = upgradePrice + increasePrice;
		}
	}
}

AttackUpgrade.prototype.draw = function() 
{
    drawMenuBackground();

    context.fillStyle = "#FFFFFF";
    context.font="48px Palatino Linotype";
    context.fillText("Attack", (canvas.width / 2) - (context.measureText("Attack").width / 2), 50);

    context.font ="24px Palatino Linotype";
    context.fillText("Damage", 110, 100);
    context.fillText("Attack Speed", 110, 175);
    context.fillText("Extra Turrets", 110, 250);
    context.fillText("Turret Damage", 110, 325);
    
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
	
	context.fillStyle = "#ffffff";
    context.font="24px Palatino Linotype";
    context.fillText("Current = "+playerDamage,300,135);
    context.fillText("Current = "+playerAttackSpeed,300,210);
}
