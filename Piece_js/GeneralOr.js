
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

    isEvolve(){
		return false;
    }
    
    getAttackPositions(x,y){
        var attackPosition = [];
        
        if (y + 1 < 9) {
            if (echequier.getPieceCellule()[x][y+1] == null || echequier.getPieceCellule()[x][y+1].getCampDeLaPiece != 2){
				attackPosition.push([x,y+1]);
			}
        }

        if (x + 1 < 9){
            if (echequier.getPieceCellule()[x+1][y] == null || echequier.getPieceCellule()[x+1][y].getCampDeLaPiece != 2){
				attackPosition.push([x+1,y]);
			}
        }

        if (y - 1 > -1) {
            if (echequier.getPieceCellule()[x][y-1] == null || echequier.getPieceCellule()[x][y-1].getCampDeLaPiece != 2){
				attackPosition.push([x,y-1]);
			}
        }

        if (x - 1 > -1) {
            if (echequier.getPieceCellule()[x-1][y] == null || echequier.getPieceCellule()[x-1][y].getCampDeLaPiece != 2){
				attackPosition.push([x-1,y]);
			}
        }

		if (this.campDeLaPiece == 2){
            
            if (x + 1 < 9 && y - 1 > -1) {
                if (echequier.getPieceCellule()[x+1][y-1] == null || echequier.getPieceCellule()[x+1][y-1].getCampDeLaPiece != 2){
                    attackPosition.push([x+1,y-1]);
                }
            }
            if (x - 1 > -1 && y - 1 > -1){
                if (echequier.getPieceCellule()[x-1][y-1] == null || echequier.getPieceCellule()[x-1][y-1].getCampDeLaPiece != 2){
                    attackPosition.push([x-1,y-1]);
                }
            }
        }
			
		else {

            if (x - 1 > -1 && y + 1 < 9){
                if (echequier.getPieceCellule()[x-1][y+1] == null || echequier.getPieceCellule()[x-1][y+1].getCampDeLaPiece != 2){
                    attackPosition.push([x-1,y+1]);
                }
            }
            if (x + 1 < 9 && y + 1 < 9){
                if (echequier.getPieceCellule()[x+1][y+1] == null || echequier.getPieceCellule()[x+1][y+1].getCampDeLaPiece != 2){
                    attackPosition.push([x+1,y+1]);
                }
            }
        }
        
        return attackPosition;
	}
}
