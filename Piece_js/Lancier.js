export default class Lancier {

    campDeLaPiece;

    constructor(campDeLaPiece){
        this.campDeLaPiece = campDeLaPiece;
    }

    toString(){
        return "Lancier " + this.campDeLaPiece;
    }

    type(){
		return "Lancier";
	}

    isAuthorizedMovementPlayer1(x,y,j,k){

        for (var i = 0; i<9;i++){

            if (x == j && y + i == k && y + i < 9){
                return true;
            }
        }

        return false;
    }

    isAuthorizedMovementPlayer2(x,y,j,k){

        for (var i = 0; i<9;i++){
            
            if (x == j && y - i == k && y - i > -1){
                return true;
            }
        }

        return false;
    }

    getCampDeLaPiece(){
        return this.campDeLaPiece;
    }

    printImgPiece(x,y){
        return "<img src='image/lancier.png' id='x,y' draggable='true' ondragstart='onDragStart(event);'></img>";
    }

 }