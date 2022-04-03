class Balle
{
    constructor(positionX, positionY, radiusBalle)
    {
        this.positionX = positionX;
        this.positionY = positionY;
        this.vitesseX = 1.25;
        this.vitesseY = -1.25;
        this.angle = 45;
        this.radiusBalle = radiusBalle;
    }

    drawBalle(ctx) 
    {
        //Dessin de la balle
        ctx.beginPath();
        ctx.arc(this.positionX+this.vitesseX, this.positionY+this.vitesseY, this.radiusBalle, 0, Math.PI*2);
        ctx.fillStyle = "#6BFCFC";
        ctx.fill();
        ctx.closePath();
    }

    move()
    {
        this.positionX += this.vitesseX;
        this.positionY += this.vitesseY;
    }

    getPositionX()
    {
        return this.positionX;
    }

    getPositionY()
    {
        return this.positionY;
    }

    getVitesse()
    {
        return this.vitesse;
    }

    setPositionX(newPositionX)
    {
        this.positionX=newPositionX;
    }

    setPositionY(newPositionY)
    {
        this.positionY=newPositionY;
    }

    setVitesse(newVitesse)
    {
        this.vitesse=newVitesse;
    }
}






