/*Raquette*/
let raquetteX = 300;
let raquetteY = 700;

let raquetteLarge = 200;
let raquetteHaute = 25;


//https://developer.mozilla.org/fr/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls


function drawRaquette(ctx,rightPressed,leftPressed)
{
    ctx.clear;

    console.log(rightPressed)

    if(rightPressed==true)
    {
        raquetteX=raquetteX-5;
    }

    console.log(raquetteX);
    ctx.rect(raquetteX, raquetteY,raquetteLarge , raquetteHaute);
    ctx.fillStyle = "orange";

    ctx.fill();
}

/* */