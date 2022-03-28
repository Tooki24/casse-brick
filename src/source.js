
let canvas;
let context;
let started;
let x;
let y;

function mouseMove(event)
{
    getMousePos(event);

    // Si started == true, alors tracer une ligne
    if(started)
    {
        context.lineTo(x, y);
        // Dessine la forme
        context.stroke();
    }
}

function mouseClick(event)
{
    // Lorsque le clic est detecte, passe la variable started à true
    // et deplace la position initiale de la souris
    context.beginPath();
    context.moveTo(x, y);
    started = true;
}

function mouseUp(event)
{
    // Passer la variable started a false lorsque le bouton est relache
    if(started)
    started = false;
}

function getMousePos(evt)
{
    let rect = canvas.getBoundingClientRect();
    let scaleX = canvas.width / rect.width;
    let scaleY = canvas.height / rect.height;
    x = (evt.clientX - rect.left) * scaleX;
    y = (evt.clientY - rect.top) * scaleY;
}

function clearCanvas(event)
{
    context.clearRect(0, 0, canvas.width, canvas.height);
}



$(document).ready(function()
{
    drawName(document)
    console.log('test');
    /* Canvas */
    canvas = document.getElementById('drawArea');
    context = canvas.getContext('2d');
    context.lineWidth = 1;
    context.strokeStyle = "#871de0";
    drawSB(document)
    // Ajout des gestionnaires d'evenements
    canvas.addEventListener('mousemove', mouseMove);
    canvas.addEventListener('mousedown', mouseClick);
    canvas.addEventListener('mouseup', mouseUp);
    inputOpen(document);
    $("#btn").click(function(){
        console.log("clic");
        setNom(document.getElementById("inputNom").value,document);
        document.getElementById("myModal").style.display="none"
    })
    $("#close").click(function(){
        document.getElementById("myModal").style.display="none"
    })
    $("#modify").click(function(){
        document.getElementById("myModal").style.display="block"
    })
    buildMurs(context);
    addScore(getNom(),100);
    // On imagine qu’il y a un bouton pour effacer le contenu du canvas
    $('#clear').on('click', clearCanvas);
    drawLives(document);
});
