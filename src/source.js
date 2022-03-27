let canvas;
let context;
let started;
let x;
let y;
let radiusBalle = 7




function collide(cvs , balle)
{
    //Si la balle touche le plafond
    if(balle.postionY-balle.radiusBalle + balle.vitesseY < 0) {
        console.log("Collision avec le plafond")
        balle.vitesseY = -balle.vitesseY;
    }

    //Si la balle touche un des murs
    if(balle.postionX+balle.radiusBalle + balle.vitesseX > cvs.width || balle.postionX-radiusBalle + balle.vitesseX < 0) {
        balle.vitesseX = -balle.vitesseX;
        console.log("Collision avec un des murs")
    }
}

let rightPressed = false;
let leftPressed = false;

$(document).ready(function()
{
    /* Canvas */
    canvas = document.getElementById('drawArea');
    context = canvas.getContext('2d');
    context.lineWidth = 1;
    context.strokeStyle = "#871de0";

    //Déclaration des objets
    let raquette = new Raquette(canvas.height/2,700);
    let balle = new Balle(canvas.width/2, canvas.height-70, radiusBalle);

    //Gestion de la raquette
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

    function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        raquette.drawRaquette(context);
        balle.drawBalle(context);
        collide(canvas, balle);
        balle.move();
      }
      setInterval(draw, 10);
});

