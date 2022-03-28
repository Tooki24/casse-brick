let mur1=[0,0,10,500]
let mur2=[690,0,10,500]
let mur3=[0,0,700,10]
let murs=[mur1,mur2,mur3]


function buildMurs(ctx){
    for (let i=0;i<murs.length;i++)
    {
        ctx.rect(murs[i][0],murs[i][1],murs[i][2],murs[i][3])
    }   
    ctx.fill() 
}