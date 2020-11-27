import Piece from "./Piece.js";
export default class Lancier extends Piece{

    

    constructor(campDeLaPiece,x,y){
        super(campDeLaPiece,x,y);
    }

    toString(){
        return "Lancier " + this.campDeLaPiece;
    }

    type(){
		return "Lancier";
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

    href(){
		return 'image/lancier.png';
	}

    printImgPiece(){
        return "<img src='image/lancier.png' id='this.x,this.y' draggable='true' ondragstart='onDragStart(event);'></img>";
    }

    isEvolve(){
		return false;
    }
    

    getAttackPositions(echequier){

		var attackPosition = [];

		var i = 0;
		var compteur = 0;

        // Normalement cette condition if est inutile, je sais pas pourquoi je l'enlève pas d'ailleurs, je crois qu'elle me fait plaisir, elle me soulage.
        
        if (this.campDeLaPiece == 2){

            if (this.y - 1 > -1){

                compteur = this.y;
    
                for (i = 1;i< compteur + 1;i++){
                    if(echequier.getPieceCellule()[this.y - i][this.x] != null){
                        if (echequier.getPieceCellule()[this.y - i][this.x].getCampDeLaPiece() != this.campDeLaPiece){
                            attackPosition.push([this.x,this.y-i]);
                            break;
                        }
                        break;
                    }
                    attackPosition.push([this.x,this.y-i]);
                }
            }       
        }
        else{
            if (this.y + 1 < 9){

                compteur = 8 - this.y;
    
                for (i = 1;i< compteur + 1;i++){
                    if(echequier.getPieceCellule()[this.y + i][this.x] != null){
                        if (echequier.getPieceCellule()[this.y + i][this.x].getCampDeLaPiece() != this.campDeLaPiece){
                            attackPosition.push([this.x,this.y+i]);
                            break;
                        }
                        break;
                    }
                    attackPosition.push([this.x,this.y+i]);
                }
            }       
        }
		
		return attackPosition;
		
    }

    numBanc(){
        return 6;
    }
 }