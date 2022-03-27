//classe brick
class Brick{
    constructor(type,points,img){
    this.type=type;
    this.points=points;
    this.img=new Image();
    this.img.src=img
    this.long=40/1.5
    this.larg=112/1.5
    }
}

//génère un nombre random de 0 a max
function getRandom(max){
    return Math.floor(Math.random()*max)
}

//dessine un tableau de brick avec un maximum de 4 bricks vitesses
function drawBrick(ctx,){
    let nbSpeedmax=6
    let nbSpeed=0
    //génère la grille des bricks (9x6)
    for (let larg=0;larg<9;larg++ ){
        for (let lon=0; lon<6; lon++){
            let normalBrick= new Brick("normal",10,'/img/normal_brick.png')
            let speedBrick= new Brick("vitesse",30, "/img/speed_brick.png")
            let img=normalBrick.img
            let img2= speedBrick.img
            let x= normalBrick.larg*larg
            let y=normalBrick.long*lon
            let typeBrick=getRandom(2)
            //affiche une brick normale si le nombre aléatoire est de 0, sinon une brick vitesse si il y en a pas encore "nbSpeedmax", sinon met une brick normale
            if(typeBrick==0){
                normalBrick.img.onload=function(){
                    ctx.drawImage(img,x,y,112/1.5,40/1.5)
                
                }
            }
            else if(typeBrick==1){
                if(nbSpeed<nbSpeedmax){
                    if(getRandom(5)==0){
                        speedBrick.img.onload=function(){
                            ctx.drawImage(img2,x,y,112/1.5,40/1.5)
                        }
                        nbSpeed+=1
                    }
                    else {
                        normalBrick.img.onload=function(){
                            ctx.drawImage(img,x,y,112/1.5,40/1.5)
                        
                        }


                    }
                }
                else {
                    normalBrick.img.onload=function(){
                        ctx.drawImage(img,x,y,112/1.5,40/1.5)
                    
                    }


            }


            }
        }
    }
}

