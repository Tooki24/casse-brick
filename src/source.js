let canvas;
let context;
let started;
let x;
let y;

let rightPressed = false;
let leftPressed = false;


function clearCanvas(event)
{
    context.clearRect(0, 0, canvas.width, canvas.height);
}



$(document).ready(function()
{
    /* Canvas */
    canvas = document.getElementById('drawArea');
    context = canvas.getContext('2d');
    context.lineWidth = 1;
    context.strokeStyle = "#871de0";

    //Raquette

     let raquette = new Raquette(200,200);
    raquette.drawRaquette(context);

    document.addEventListener("keydown", keyDownHandler);
    //document.addEventListener("keyup", keyUpHandler, false);

    console.log(raquette.getpositionX());
   

    function keyDownHandler(event)
    {
        if(event.key == "Right" || event.key == "ArrowRight")
        {
            raquette.deleteRaquette(context);
            raquette.setpositionX(raquette.getpositionX()+raquette.getvitesse())
            raquette.drawRaquette(context);
        }

    }
});

