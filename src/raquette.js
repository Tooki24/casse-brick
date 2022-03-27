/*Raquette*/

class Raquette
{
    constructor(positionX,positionY)
    {
        this.positionX = positionX;
        this.positionY = positionY;
        this.large = 200;
        this.hauteur = 25;
        this.vitesse = 10;
    }

    drawRaquette(ctx)
    {
        ctx.beginPath();
        ctx.rect(this.positionX,this.positionY, this.large , this.hauteur);
        ctx.fillStyle = "orange";
        ctx.fill();
    }

    getpositionX()
    {
        return this.positionX;
    }

    setpositionX(positionX)
    {
        this.positionX = positionX;
    }

    getpositionY()
    {
        return this.positionY;
    }

    setpositionY(positionY)
    {
        this.positionY = positionY;
    }

    getvitesse()
    {
        return this.vitesse;
    }

    setvitesse(vitesse)
    {
        this.vitesse = vitesse;
    }
    
}

/* Fin raquette*/