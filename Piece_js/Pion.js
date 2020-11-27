import Piece from "./Piece.js";

export default class Pion extends Piece{

    

    constructor(campDeLaPiece,x,y){
        super(campDeLaPiece,x,y);
    }

    toString(){
        return "Pion " + this.campDeLaPiece;
    }

    type(){
		return "Pion";
    }
    
    isAuthorizedMovementPlayer(j,k,echequier){
        var raison = false;

        this.getAttackPositions(echequier).forEach(position => {
            
            if ((position[0] == j) && (position[1] == k)) {
                
                // Je ne comprends pas pourquoi mais si je fais un return ici, ça n'arrête pas ma fonction
                raison = true;
            }
        });
        return raison;
    }

    // Attention ne pas oublier le this
    getCampDeLaPiece(){
        return this.campDeLaPiece;
    }

    href(){
		return 'image/pion.png';
	}

    printImgPiece(){
        return "<img src='image/pion.png' id='this.x,this.y' draggable='true' ondragstart='onDragStart(event);'></img>";
    }

    isEvolve(){
		return false;
    }
    
    getAttackPositions(echequier){

		var attackPosition = [];

		if (this.campDeLaPiece == 2){
            if (this.y - 1 > -1) {
                if (echequier.getPieceCellule()[this.y-1][this.x] == null || echequier.getPieceCellule()[this.y-1][this.x].getCampDeLaPiece != 2){
                    attackPosition.push([this.x,this.y-1]);
                }
            }
        }

		else {
			if (this.y + 1 < 9) {
                if (echequier.getPieceCellule()[this.y+1][this.x] == null || echequier.getPieceCellule()[this.y+1][this.x].getCampDeLaPiece != 2){
                    attackPosition.push([this.x,this.y+1]);
                }
            }
		}

		return attackPosition;
    }

    numBanc(){
        return 0;
    }
}
