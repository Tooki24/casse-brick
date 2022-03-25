let canvas;
let context;
let started;
let x;
let y;

let rightPressed = false;
let leftPressed = false;

$(document).ready(function()
{
    /* Canvas */
    canvas = document.getElementById('drawArea');
    context = canvas.getContext('2d');
    context.lineWidth = 1;
    context.strokeStyle = "#871de0";

    //Raquette
     let raquette = new Raquette(canvas.height/2,700);

    document.addEventListener("keydown", keyDownHandler);

    function keyDownHandler(event)
    {
        if(event.key == "Right" || event.key == "ArrowRight")
        {
            raquette.setpositionX(raquette.getpositionX()+raquette.getvitesse());
        }
        else if(event.key == "Left" || event.key == "ArrowLeft") 
        {
            raquette.setpositionX(raquette.getpositionX()-raquette.getvitesse());
        }

    }
    //Fin raquette

    function draw()
    {
        context.clearRect(0,0,canvas.width,canvas.height);
        raquette.drawRaquette(context);
    }
    setInterval(draw,10);


});

