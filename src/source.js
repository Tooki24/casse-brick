let canvas;
let context;
let started;
let x;
let y;
let radiusBalle = 6;
let hauteurRaquette = 13;
let largeurRaquette = 80;
let largeurBrique = 20;
let longueurBrique = 74.2;
let nbColonnes = 9;
let nbLignes = 9;
let interBrique = 3;
let interBriqueMur = 4;


function collide(cvs, balle, raquette) {
    //Si la balle touche le plafond
    if (balle.positionY - radiusBalle + balle.vitesseY < 0) {
        console.log("Collision avec le plafond")
        balle.vitesseY = -balle.vitesseY;
    }

    //Si la balle touche un des murs
    if (balle.positionX + radiusBalle + balle.vitesseX > cvs.width || balle.positionX - radiusBalle + balle.vitesseX < 0) {
        console.log("Collision avec un des murs")
        balle.vitesseX = -balle.vitesseX;
    }

    //Si la balle touche le haut de la raquette
    if (balle.positionY + radiusBalle + balle.vitesseY > raquette.positionY && balle.positionX >= raquette.positionX && balle.positionX <= raquette.positionX + raquette.largeur && balle.positionY <= raquette.positionY + raquette.hauteur) {
        console.log("Collision avec le haut de la raquette")
        balle.vitesseY = -balle.vitesseY;
    }

    //Si la balle touche le côté gauche de la raquette
    if (balle.positionX + radiusBalle + balle.vitesseX > raquette.positionX && balle.positionY >= raquette.positionY && balle.positionY <= raquette.positionY + raquette.hauteur && balle.positionX + radiusBalle <= raquette.positionX + raquette.largeur) {
        console.log("Collision avec le cote gauche de la raquette")
        balle.vitesseX = -balle.vitesseX;
    }

    //Si la balle touche le côté droit de la raquette
    if (balle.positionX - radiusBalle + balle.vitesseX < raquette.positionX + raquette.largeur && balle.positionY >= raquette.positionY && balle.positionY <= raquette.positionY + raquette.hauteur && balle.positionX - radiusBalle >= raquette.positionX) {
        console.log("Collision avec le cote droit de la raquette")
        balle.vitesseX = -balle.vitesseX;
    }
}

function generateBricks() {
    let bricksArray = [];
    let nbPoints = 0;
    let brickType = 0;
    for (let c = 0; c < nbColonnes; c++) {
        for (let l = 0; l < nbLignes; l++) {
            
            let random = Math.floor(Math.random() * 101);
            //apparition de briques normales
            if (0 <= random && random <= 84) {
                 nbPoints = 10;
                 brickType = 0;
             }
            //apparition de briques de vitesse
            else if (random > 84) {
                nbPoints = 10;
                brickType = 1;
            }

            let xBrick = c * (longueurBrique+interBrique) + interBriqueMur ;
            let yBrick = l * (largeurBrique+interBrique) + interBriqueMur;
            let aBrick = new Brick(longueurBrique, largeurBrique, brickType, xBrick, yBrick, nbPoints);
            bricksArray.push(aBrick);

            // if (91 <= random) {
            //     removeBrick(brick);
            // }
        }
    }
    return bricksArray;
}

function drawBricks(bricksArray, ctx) {
    bricksArray.forEach(aBrick => {
            aBrick.drawBrick(ctx);
    });
}




$(document).ready(function () {
    //Canvas
    canvas = document.getElementById('drawArea');
    context = canvas.getContext('2d');
    context.lineWidth = 1;
    context.strokeStyle = "#871de0";

    //Déclaration des objets
    let raquette = new Raquette(canvas.width / 2 - largeurRaquette / 2, 500, largeurRaquette, hauteurRaquette);
    let balle = new Balle(canvas.width / 2, 500 - radiusBalle + 1, radiusBalle);
    let bricksArray = generateBricks();


    //Gestion de la raquette
    document.addEventListener("keydown", keyDownHandler);

    function keyDownHandler(event) {
        console.log("Position de la raquette : " + raquette.getpositionX());
        if (event.key == "Right" || event.key == "ArrowRight") {
            if (raquette.getpositionX() < canvas.width - largeurRaquette) {
                raquette.setpositionX(raquette.getpositionX() + raquette.getvitesse());
            }
        }
        else if (event.key == "Left" || event.key == "ArrowLeft") {
            if (raquette.getpositionX() > 0) {
                raquette.setpositionX(raquette.getpositionX() - raquette.getvitesse());
            }
        }
    }
    //Fin raquette

    function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        raquette.drawRaquette(context);
        balle.drawBalle(context);
        drawBricks(bricksArray, context);
        collide(canvas, balle, raquette);
        balle.move();
    }
    setInterval(draw, 10);
});

