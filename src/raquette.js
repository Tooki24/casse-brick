/*Raquette*/

//https://developer.mozilla.org/fr/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls


class Raquette
{
    constructor(positionX,positionY)
    {
        this.positionX = positionX;
        this.positionY = positionY;
        this.large = 200;
        this.hauteur = 25;
        this.vitesse = 5;
    }

    drawRaquette(ctx)
    {
        console.log("Ajout de la raquette au jeu");
        ctx.rect(this.positionX,this.positionY, this.large , this.hauteur);
        ctx.fillStyle = "orange";
    
        ctx.fill();
    }

    deleteRaquette(ctx)
    {
        console.log("La raquette est supprimer");
        ctx.clearRect(this.positionX,this.positionY,this.large,this.hauteur);
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
