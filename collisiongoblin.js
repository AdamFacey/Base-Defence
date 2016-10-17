function collisionGoblin()
{
    // check if any bullet intersects any goblin. If so, kill them both.
    for(var i=0; i<goblins.length; i++)
    {
        for(var j=0; j<bullets.length; j++)
        {
            if(intersects(
            bullets[j].x - bullets[j].width/2, bullets[j].y -
                bullets[j].height/2,
            bullets[j].width, bullets[j].height,
            goblins[i].x - goblins[i].width/2, goblins[i].y -
                goblins[i].height/2,
            goblins[i].width, goblins[i].height) == true)
            {
                goblins[i].hp -= 13;
                bullets.splice(j, 1);
                
                if((goblins[i].hp < 1) == true)
                {
                    money = money + 50;
                    goblins.splice(i, 1);
                }
            }
        }
    }
    drawMoney()
}