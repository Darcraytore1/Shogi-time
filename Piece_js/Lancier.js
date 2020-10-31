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

    href(){
		return 'image/lancier.png';
	}

    printImgPiece(x,y){
        return "<img src='image/lancier.png' id='x,y' draggable='true' ondragstart='onDragStart(event);'></img>";
    }

    isEvolve(){
		return false;
    }
    

    getAttackPositions(echequier,x,y){

		var attackPosition = [];

		var i = 0;
		var compteur = 0;

        // Normalement cette condition if est inutile, je sais pas pourquoi je l'enlève pas d'ailleurs, je crois qu'elle me fait plaisir, elle me soulage.
        
        if (this.campDeLaPiece == 2){

            if (y - 1 > -1){

                compteur = y;
    
                for (i = 1;i< compteur + 1;i++){
                    if(echequier.getPieceCellule()[y - i][x] != null){
                        break;
                    }
                    attackPosition.push([x,y-i]);
                }
            }       
        }
        else{
            if (y + 1 < 9){

                compteur = 8 - y;
    
                for (i = 1;i< compteur + 1;i++){
                    if(echequier.getPieceCellule()[y + i][x] != null){
                        break;
                    }
                    attackPosition.push([x,y+i]);
                }
            }       
        }
		
		return attackPosition;
		
	}

 }