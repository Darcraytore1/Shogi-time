import Tour from "./Tour.js";

export default class Tour_u extends Tour{

	constructor(campDeLaPiece){
		super(campDeLaPiece);
	}

    toString(){
		return super.toString() + " upgrade";
	}

	type(){
		return "Tour_u";
	}
	
	href(){
        return 'image/tour_u.png';
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

		if (this.x - 1 > -1 && this.y - 1 > -1){
			if (echequier.getPieceCellule()[this.y-1][this.x-1] == null || echequier.getPieceCellule()[this.y-1][this.x-1].getCampDeLaPiece != 2){
				attackPosition.push([this.x-1,this.y-1]);
			}
		}

		if (this.x + 1 < 9 && this.y - 1 > -1){
			if (echequier.getPieceCellule()[this.y-1][this.x+1] == null || echequier.getPieceCellule()[this.y-1][this.x+1].getCampDeLaPiece != 2){
				attackPosition.push([this.x+1,this.y-1]);
			}
		}

		if (this.x - 1 > -1 && this.y + 1 < 9){
			if (echequier.getPieceCellule()[this.y+1][this.x-1] == null || echequier.getPieceCellule()[this.y+1][this.x-1].getCampDeLaPiece != 2){
				attackPosition.push([this.x-1,this.y+1]);
			}
		}

		if (this.x + 1 < 9 && this.y + 1 < 9){
			if (echequier.getPieceCellule()[this.y+1][this.x+1] == null || echequier.getPieceCellule()[this.y+1][this.x+1].getCampDeLaPiece != 2){
				attackPosition.push([this.x+1,this.y+1]);
			}
		}
		
		return attackPosition;
	}
}