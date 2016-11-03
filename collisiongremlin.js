function collisionGremlin()
{
    // check if any bullet intersects any gremlin. If so, kill them both.
    for(var j=0; j<bullets.length; j++)
    {
        for(var i=0; i<gremlins.length; i++)
        {
            if(intersects(
            bullets[j].x - bullets[j].width/2, bullets[j].y -
                bullets[j].height/2,
            bullets[j].width, bullets[j].height,
            gremlins[i].x - gremlins[i].width/2, gremlins[i].y -
                gremlins[i].height/2,
            gremlins[i].width, gremlins[i].height) == true)
            {
                gremlins[i].hp -= 13;
                bullets.splice(j, 1);
                
                if((gremlins[i].hp < 1) == true)
                {
                    money = money + 5;
                    gremlins.splice(i, 1);
                    
                }
                break;
            }
        }
    }
    drawMoney()
}