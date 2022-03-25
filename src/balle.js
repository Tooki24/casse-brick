class Balle
{
    constructor(postionX, postionY, radiusBalle)
    {
        this.postionX = postionX;
        this.postionY = postionY;
        this.vitesseX = 2;
        this.vitesseY = -2;
        this.angle = 45;
        this.radiusBalle = radiusBalle;
    }

    drawBalle(ctx) 
    {
        console.log("Création de la balle");
        //Dessin de la balle
        ctx.beginPath();
        ctx.arc(this.postionX+this.vitesseX, this.postionY+this.vitesseY, this.radiusBalle, 0, Math.PI*2);
        ctx.fillStyle = "#6BFCFC";
        ctx.fill();
        ctx.closePath();
    }

    move()
    {
        this.postionX += this.vitesseX;
        this.postionY += this.vitesseY;
    }

    getPositionX()
    {
        return this.postionX;
    }

    getPositionY()
    {
        return this.postionY;
    }

    getVitesse()
    {
        return this.vitesse;
    }

    setPositionX(newPositionX)
    {
        this.postionX=newPositionX;
    }

    setPositionY(newPositionY)
    {
        this.postionY=newPositionY;
    }

    setVitesse(newVitesse)
    {
        this.vitesse=newVitesse;
    }
}






