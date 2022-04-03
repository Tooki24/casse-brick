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
            ctx.fillStyle = "#01FFFF";
        }
        else if(this.type == 1)
        {
            ctx.rect(this.positionX, this.positionY, this.long, this.larg);
            ctx.fillStyle = "#BF00FE";
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




