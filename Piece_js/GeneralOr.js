
export default class GeneralOr{

    campDeLaPiece;

    constructor(campDeLaPiece){
        this.campDeLaPiece = campDeLaPiece;
    }

    toString(){
    
        return "GeneralOr "+this.campDeLaPiece;

    }

    type(){
		return "GeneralOr";
	}

    // ça a l'air correct
    isAuthorizedMovementPlayer1(x,y,j,k){

        if ( (x == j && y + 1 == k && y + 1 < 9) || (x + 1 == j && y == k && x + 1 < 9) || (x - 1 == j && y == k && x - 1 > -1)
            || (x == j && y - 1 == k && y - 1 > -1) || (x - 1 == j && y + 1 == k && x - 1 > -1 && y + 1 < 9) || (x + 1 == j && y + 1 == k && x + 1 < 9 && y + 1 < 9)){

            return true;

        }

        return false;

    }

    isAuthorizedMovementPlayer2(x,y,j,k){

        if ( (x == j && y - 1 == k && y - 1 > -1) || (x - 1 == j && y == k && x - 1 > -1) || (x + 1 == j && y == k && x + 1 < 9)
            || (x == j && y + 1 == k && y + 1 < 9) || (x + 1 == j && y - 1 == k && x + 1 < 9 && y - 1 > -1) || (x - 1 == j && y - 1 == k && x - 1 > -1 && y - 1 > -1)){

            return true;

        }

        return false;
    }

    getCampDeLaPiece(){
        return this.campDeLaPiece;
    }

    href(){
		return 'image/generalOr.png';
	}

    printImgPiece(x,y){
        return "<img src='image/generalOr.png' id='x,y' draggable='true' ondragstart='onDragStart(event);'></img>";
    }
}
