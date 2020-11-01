import Fou from "./Fou.js";

export default class Fou_u extends Fou{

	constructor(campDeLaPiece,x,y){
        super(campDeLaPiece,x,y);
    }

    toString(){
		return "Fou " + "upgrade";
	}

	type(){
		return "Fou_u";
	}

	href(){
        return 'image/fou_u.png';
	}
	
	isEvolve(){
		return true;
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

	getAttackPositions(echequier){
		var attackPosition = super.getAttackPositions(echequier);

		if (this.y + 1 < 9) {
            if (echequier.getPieceCellule()[this.y+1][this.x] == null || echequier.getPieceCellule()[this.y+1][this.x].getCampDeLaPiece != 2){
				attackPosition.push([this.x,this.y+1]);
			}
        }

        if (this.x + 1 < 9){
            if (echequier.getPieceCellule()[this.y][this.x+1] == null || echequier.getPieceCellule()[this.y][this.x+1].getCampDeLaPiece != 2){
				attackPosition.push([this.x+1,this.y]);
			}
        }

        if (this.y - 1 > -1) {
            if (echequier.getPieceCellule()[this.y-1][this.x] == null || echequier.getPieceCellule()[this.y-1][this.x].getCampDeLaPiece != 2){
				attackPosition.push([this.x,this.y-1]);
			}
        }

        if (this.x - 1 > -1) {
            if (echequier.getPieceCellule()[this.y][this.x-1] == null || echequier.getPieceCellule()[this.y][this.x-1].getCampDeLaPiece != 2){
				attackPosition.push([this.x-1,this.y]);
			}
		}
		
		return attackPosition;
	}
}