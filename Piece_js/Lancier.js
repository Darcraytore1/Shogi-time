class Lancier {

    campDeLaPiece;

    constructor(campDeLaPiece){
        this.campDeLaPiece = campDeLaPiece;
    }

    toString(){
        return "Lancier " + campDeLaPiece;
    }

    isAuthorizedMovementPlayer1(x,y,j,k){

        for (i = 0; i<9;i++){

            if (x == j && y + i == k && y + i < 9){
                return true;
            }
        }

        return false;
    }

    isAuthorizedMovementPlayer2(x,y,j,k){

        for (i = 0; i<9;i++){
            
            if (x == j && y + i == k && y - i > -1){
                return true;
            }
        }

        return false;
    }

    getCampDeLaPiece(){
        return campDeLaPiece;
    }

    printImgPiece(x,y){
        document.write("<img src='image/lancier.png' id='x,y' draggable='true' ondragstart='onDragStart(event);' x='x' y='y'></img>");
    }
 }