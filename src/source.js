$(document).ready(function()
{
/* Canvas */
canvas = document.getElementById('drawArea');
context = canvas.getContext('2d');
context.lineWidth = 1;
context.strokeStyle = "#871de0";

// Ajout des gestionnaires d'evenements
canvas.addEventListener('mousemove', mouseMove);
canvas.addEventListener('mousedown', mouseClick);
canvas.addEventListener('mouseup', mouseUp);

// On imagine qu’il y a un bouton pour effacer le contenu du canvas
$('#clear').on('click', clearCanvas);
});
