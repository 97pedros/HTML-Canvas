const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
retangulo = 
{
    x: 20,
    y: 20,
    w: 20,
    h: 20,
    y_velocity: 0,
    x_velocity: 0,
    no_ar: false
};

function full()
{
    canvas.requestFullscreen()
}

function keyup()
{
    retangulo.y_velocity = 0;
    retangulo.x_velocity = 0;
}

function jump()
{
    retangulo.y_velocity -= 20;
    retangulo.no_ar = true;
    setTimeout(() => {  retangulo.y_velocity = 2; }, 100);
}

function moveLeft()
{
    retangulo.x_velocity = -5;
}

function moveRight()
{
    retangulo.x_velocity = 5;
}

// function keydown(event)
// {

//     if(event.key == ' ' && retangulo.no_ar == false)
//     {
//         jump();
//     }
//     if(event.key == 'a' || event.key == 'ArrowLeft')
//     {
//         moveLeft();
//     }
//     if(event.key == 'd' || event.key == 'ArrowRight')
//     {
//         moveRight();
//     }
// }

function keypress(event)
{
    if(event.key == 'd')
    {
        moveRight();
    }
    else if(event.key == 'a')
    {
        moveLeft();
    }
    else if(event.key == ' ')
    {
        jump();
    }
}


function loop() {
    context.clearRect(0, 0, 640, 360);
    
    
    context.fillStyle='#0f380f';
    context.fillRect(retangulo.x, retangulo.y, retangulo.w, retangulo.h);
    retangulo.x += retangulo.x_velocity;
    if(retangulo.y > 270)
    {
        retangulo.y = 270;
        retangulo.no_ar = false;
    }
    if(retangulo.x <= 0)
    {
        retangulo.x = 0;
        retangulo.x_velocity = 0;
    }
    if(retangulo.x >= 620)
    {
        retangulo.x = 620;
    }
    if(retangulo.no_ar)
    {
        retangulo.y_velocity = 0;
    }
    
    retangulo.y += retangulo.y_velocity;
    retangulo.y += 5;
    requestAnimationFrame(loop);
}


addEventListener("keydown", keydown)
addEventListener("keyup", keyup)
loop();
