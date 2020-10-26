export default class Pion {

    campDeLaPiece;

    constructor(campDeLaPiece){
        this.campDeLaPiece = campDeLaPiece;
    }

    toString(){
        return "Pion " + this.campDeLaPiece;
    }

    type(){
		return "Pion";
	}

    // Si le mouvement est authorise renvoie true sinon false
    isAuthorizedMovementPlayer1(x,y,j,k){
        if (x == j && y + 1 == k && y + 1 < 9){
            return true;
        }
        return false;
    }

    isAuthorizedMovementPlayer2(x,y,j,k){
        if (x == j && y - 1 == k && y - 1 > -1){
            return true;
        }
        return false;
    }

    // Attention ne pas oublier le this
    getCampDeLaPiece(){
        return this.campDeLaPiece;
    }

    href(){
		return 'image/pion.png';
	}

    printImgPiece(x,y){
        return "<img src='image/pion.png' id='x,y' draggable='true' ondragstart='onDragStart(event);'></img>";
    }

    isEvolve(){
		return false;
	}
}
