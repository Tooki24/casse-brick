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
let start = 0;
let start2 = 0;

// Gestion de la popup quand le joueur perd la balle
function openPopup() {

    // Creation des elements de la popup

    let divMain = document.getElementById('main');

    let divPartiePerdue = document.createElement('div');
    let divImage = document.createElement('div');
    let divrestart = document.createElement('div');

    divPartiePerdue.className = "popup";
    divImage.className = "gameOver";
    divrestart.className = "restart";

    divMain.appendChild(divPartiePerdue);
    divPartiePerdue.appendChild(divImage);
    divPartiePerdue.appendChild(divrestart);

    // Gestion du clic sur le bouton restart
    divrestart.addEventListener('click', function(){divPartiePerdue.style.display="none";});
}


function collide(cvs, balle, raquette, bricksArray) {
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

    //Si la balle touche le mur du bas
    if(balle.positionY-radiusBalle + balle.vitesseY > 600) {
        console.log("La partie est perdue")
        balle.vitesseX = 0;
        balle.vitesseY = 0;
        loseLife();
        openPopup();
        
    }

    // --------------------------------------------------
    // Si la balle touche la raquette
    // --------------------------------------------------

    //Si la balle touche le haut de la raquette
    if (balle.positionY + radiusBalle + balle.vitesseY > raquette.positionY && balle.positionX >= raquette.positionX && balle.positionX <= raquette.positionX + raquette.largeur && balle.positionY <= raquette.positionY + raquette.hauteur) {
        console.log("Collision avec le haut de la raquette")
        balle.vitesseY = -balle.vitesseY;
    }

    //Si la balle touche le c??t?? gauche de la raquette
    if (balle.positionX + radiusBalle + balle.vitesseX > raquette.positionX && balle.positionY >= raquette.positionY && balle.positionY <= raquette.positionY + raquette.hauteur && balle.positionX + radiusBalle <= raquette.positionX + raquette.largeur) {
        console.log("Collision avec le cote gauche de la raquette")
        balle.vitesseX = -balle.vitesseX;
    }

    //Si la balle touche le c??t?? droit de la raquette
    if (balle.positionX - radiusBalle + balle.vitesseX < raquette.positionX + raquette.largeur && balle.positionY >= raquette.positionY && balle.positionY <= raquette.positionY + raquette.hauteur && balle.positionX - radiusBalle >= raquette.positionX) {
        console.log("Collision avec le cote droit de la raquette")
        balle.vitesseX = -balle.vitesseX;
    }


    // --------------------------------------------------
    // Si la balles touche une brique
    // --------------------------------------------------


    // detect collision with bottom of a brick
    for (let i=0; i<bricksArray.length;i++){
        let aBrick=bricksArray[i]

        if (balle.positionY + radiusBalle + balle.vitesseY > aBrick.positionY && balle.positionX >= aBrick.positionX && balle.positionX <= aBrick.positionX + aBrick.long && balle.positionY <= aBrick.positionY + aBrick.larg) {
            console.log("Collision avec le bas d'une brique")
            balle.vitesseY = -balle.vitesseY;
            bricksArray.splice(i,1);
            setScore(aBrick.points);
        }

        if (balle.positionY - radiusBalle + balle.vitesseY < aBrick.positionY + aBrick.larg && balle.positionX >= aBrick.positionX && balle.positionX <= aBrick.positionX + aBrick.long && balle.positionY >= aBrick.positionY) {
            console.log("Collision avec le haut d'une brique")
            balle.vitesseY = -balle.vitesseY;
            bricksArray.splice(i,1);
            setScore(aBrick.points);
        }

        
        if (balle.positionX + radiusBalle + balle.vitesseX > aBrick.positionX && balle.positionY >= aBrick.positionY && balle.positionY <= aBrick.positionY + aBrick.larg && balle.positionX + radiusBalle <= aBrick.positionX + aBrick.long) {
            console.log("Collision avec le cote gauche d'une brique")
            balle.vitesseX = -balle.vitesseX;
            bricksArray.splice(i,1);
            setScore(aBrick.points);
        }
        
        if (balle.positionX - radiusBalle + balle.vitesseX < aBrick.positionX + aBrick.long && balle.positionY >= aBrick.positionY && balle.positionY <= aBrick.positionY + aBrick.larg && balle.positionX - radiusBalle >= aBrick.positionX) {
            console.log("Collision avec le cote droit d'une brique")
            balle.vitesseX = -balle.vitesseX;
            bricksArray.splice(i,1);
            setScore(aBrick.points);
        }
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
                nbPoints = 30;
                brickType = 1;
            }

            let xBrick = c * (longueurBrique+interBrique) + interBriqueMur ;
            let yBrick = l * (largeurBrique+interBrique) + interBriqueMur;
            let aBrick = new Brick(longueurBrique, largeurBrique, brickType, xBrick, yBrick, nbPoints);
            bricksArray.push(aBrick);
        }
    }
    return bricksArray;
}

function drawBricks(bricksArray, ctx) {
    bricksArray.forEach(aBrick => {
            aBrick.drawBrick(ctx);
    });
}

$(document).ready(function()
{
    drawName(document)
    /* Canvas */
    canvas = document.getElementById('drawArea');
    context = canvas.getContext('2d');
    context.lineWidth = 1;
    context.strokeStyle = "#871de0";

    //D??claration des objets
    let raquette = new Raquette(canvas.width / 2 - largeurRaquette / 2, 500, largeurRaquette, hauteurRaquette);
    let balle = new Balle(canvas.width / 2, 500 - radiusBalle + 1, radiusBalle);
    let bricksArray = generateBricks();


    //Gestion de la raquette
    document.addEventListener("keydown", keyDownHandler);

    function keyDownHandler(event) {
        console.log("Position de la raquette : " + raquette.getpositionX());
        if ((event.key == "Right" || event.key == "ArrowRight") && start2==1) {
            start=1;
            if (raquette.getpositionX() < canvas.width - largeurRaquette) {
                raquette.setpositionX(raquette.getpositionX() + raquette.getvitesse());
            }
        }
        else if ((event.key == "Left" || event.key == "ArrowLeft") && start2==1) {
            start=1;
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
        collide(canvas, balle, raquette, bricksArray);
        if(start==1 && start2==1)
        {
            balle.move();
        }
        drawLives(document);
    }
    setInterval(draw, 10);

    drawSB(document)
    inputOpen(document);
    $("#btn").click(function(){
        console.log("clic");
        setNom(document.getElementById("inputNom").value,document);
        document.getElementById("myModal").style.display="none"
        start2=1;
    })
    $("#close").click(function(){
        document.getElementById("myModal").style.display="none"
    })
    $("#modify").click(function(){
        document.getElementById("myModal").style.display="block"
        start2=0;
        start=0;
    })
    buildMurs(context);
    addScore(getNom(),100);
});

