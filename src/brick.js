//classe brick
class Brick{
    constructor(longueur, largeur, type, x, y, points){
    this.long=longueur;
    this.larg=largeur;
    this.type=type;
    this.positionX=x;
    this.positionY=y;
    this.points=points;
    console.log(this.positionX)
    }

    drawBrick(ctx) {
        ctx.beginPath();
        let img = new Image()
        // lorsque type vaut 0 il s'agit d'une brique normale, lorsqu'il vaut 1 il s'agit d'une brique de vitesse
        if(this.type == 0)
        {
            ctx.rect(this.positionX, this.positionY, this.long, this.larg);
            ctx.fillStyle = "#0095DD";
        }
        else if(this.type == 1)
        {
            ctx.rect(this.positionX, this.positionY, this.long, this.larg);
            ctx.fillStyle = "#f00020";
        }


        ctx.fill();
        ctx.closePath();
    }

    getType()
    {
        return this.type;
    }  

    getPoints()
    {
        return this.points;
    }
}




// //dessine un tableau de brick avec un maximum de 4 bricks vitesses
//     drawBrick(ctx, i){

//     if(this.type==1)
//     {
//         let imgNormal = new Image();
//         imgNormal.src = "/img/normal_brick.png"
//         imgNormal.onload = function()
//         {
//             console.log("je charge l'img")
//             ctx.drawImage(imgNormal,0,0)
//         }
//     }
//     else if(this.type==3)
//     {
//         let imgSpeed = new Image();
//         imgSpeed.onload = function()
//         {
//             ctx.drawImage("/img/speed_brick.png",)
//         }
//     }
// }
// }




    // let nbSpeedmax=6
    // let nbSpeed=0
    // //génère la grille des bricks (9x6)
    // for (let larg=0;larg<9;larg++ ){
    //     for (let lon=0; lon<6; lon++){
    //         let normalBrick= new Brick("normal",10,'/img/normal_brick.png')
    //         let speedBrick= new Brick("vitesse",30, "/img/speed_brick.png")
    //         let img=normalBrick.img
    //         let img2= speedBrick.img
    //         let x= normalBrick.larg*larg
    //         let y=normalBrick.long*lon
    //         let typeBrick=getRandom(2)
    //         //affiche une brick normale si le nombre aléatoire est de 0, sinon une brick vitesse si il y en a pas encore "nbSpeedmax", sinon met une brick normale
    //         if(typeBrick==0){
    //             normalBrick.img.onload=function(){
    //                 ctx.drawImage(img,x,y,112/1.5,40/1.5)   
    //             }
    //         }
    //         else if(typeBrick==1){
    //             if(nbSpeed<nbSpeedmax){
    //                 if(getRandom(5)==0){
    //                     speedBrick.img.onload=function(){
    //                         ctx.drawImage(img2,x,y,112/1.5,40/1.5)
    //                     }
    //                     nbSpeed+=1
    //                 }
    //                 else {
    //                     normalBrick.img.onload=function(){
    //                         ctx.drawImage(img,x,y,112/1.5,40/1.5)
                        
    //                     }
    //                 }
    //             }
    //             else {
    //                 normalBrick.img.onload=function(){
    //                     ctx.drawImage(img,x,y,112/1.5,40/1.5)
                    
    //                 }
    //         }
    //         }
    //     }
    // }


