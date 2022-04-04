let vies=3;
let score=0;
let nom="Nom";


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
    console.log("1 vie perdue");
    vies--;
    drawLives(document);
    if(vies==0){
        notify()
    }
}

function getLives(){
    return vies;
}

function drawLives(document){
    document.getElementById("score").innerHTML="score : "+score
    document.getElementById("lives").innerHTML=""

    if(getLives()<3){
        for(let i=0; i<vies; i++)
        {
            document.getElementById("lives").innerHTML+='<img src="img/full_heart.png" width="30px"></img>'
        }
        for(let i=0;i<3-getLives();i++)
        {
            console.log("-life");
            document.getElementById("lives").innerHTML+='<img src="img/full_heart.png" width="30px" id="deadLives"></img>'
        } 
    }
    else {
        for(let i=0;i<getLives();i++)
        {
            console.log("+life");
            document.getElementById("lives").innerHTML+='<img src="img/full_heart.png" width="30px"></img>'
        }
    }
}

function inputOpen(document){
    var modal = document.getElementById("myModal");
    modal.style.display="block";

}

