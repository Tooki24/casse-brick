let vies=3;
let score=0;
let nom="exemple";


function drawName(document){
    document.getElementById("nom").innerHTML=nom
}

function getNom(){
    return nom;
}

function setNom(name,document){
    nom=name;
    drawName(document)
}

function setScore(value){
    score+=value;
}

function getScore(){
    return score
}

function notify(){
    return "No lives left";
}

function loseLife(){
    vies--;
    if(vies==0){
        notify()
    }
}

function getLives(){
    return vies;
}

function drawLives(document){
    document.getElementById("score").innerHTML+=score
    for(let i=0;i<getLives();i++)
    {
        console.log("+life");
        document.getElementById("lives").innerHTML+='<img src="img/hearth.png" width="30px"></img>'
    }
    if(getLives()<3){
        for(let i=0;i<3-getLives();i++)
        {
            console.log("-life");
            document.getElementById("lives").innerHTML+='<img src="img/hearth.png" width="30px" id="deadLives"></img>'
        } 
    }
}

function inputOpen(document){
    var modal = document.getElementById("myModal");
    modal.style.display="block";

}

