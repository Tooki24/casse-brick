let url='http://localhost:3000/bestPlayers'
let urlPost='http://localhost:3000/newScore'

function drawSB(document){
    let Val
    fetch(url).then(function(res)
    {
    if(res.ok)
        return res.json();
    }).then(function(value)
    {   
    for (let i=0;i<10;i++)
    {
        let tr=document.createElement("tr");
        let td=document.createElement("td");
        let td2=document.createElement("td");
        td.innerHTML=value[i].nom;
        td2.innerHTML=value[i].score;
        tr.appendChild(td)
        tr.appendChild(td2)
        document.getElementById("ListScore").appendChild(tr)
    }
    }).catch(function(err)
    {
        console.error(err);
    });
    
}

function addScore(player,score)
{
    fetch(urlPost,
    {
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({nom: player, score: score})
    })
    .then(function(res){ console.log(res) })
    .catch(function(res){ console.log(res) })
}