class Brick{
    constructor(type,points,img){
    this.type=type;
    this.points=points;
    this.img=new Image();
    this.img.src=img
    }


function drawBrick(ctx,x,y){
    let normalBrick= new Brick("normal",10,'/img/normal_brick.png')
    let img=normalBrick.getImg
    console.log(normalBrick.img)
    normalBrick.img.onload=function(){
        ctx.drawImage(img,x,y)
    }

}
