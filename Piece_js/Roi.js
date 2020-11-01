import Piece from "./Piece.js";
export default class Roi extends Piece{

	constructor(campDeLaPiece,x,y){
        super(campDeLaPiece,x,y);
    }

	toString(){
		return "Roi " + this.campDeLaPiece;
	}

	type(){
		return "Roi";
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
		return 'image/roi.png';
	}

	printImgPiece(){
		return "<img src='image/roi.png' id='this.x,this.y' draggable='true' ondragstart='onDragStart(event);'></img>";
	}

	isEvolve(){
		return false;
	}

	getAttackPositions(echequier){
		// Restreindre ses mouvements au cases qui ne sont pas menacé par le camp adverse 
		var attackPosition = [];

		//Lignes
		
		if (this.y + 1 < 9) {
            if (echequier.getPieceCellule()[this.y+1][this.x] == null || echequier.getPieceCellule()[this.y+1][this.x].getCampDeLaPiece != 2){
				// Concrètement j'ai besoin de savoir, si une case donnée est menacé par au moins une pièces adverse
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

		//Diagos
		
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
				attackPosition.push([this.x+1,this.y-1]);
			}
		}

		/*
		if (this.campDeLaPiece == 2){
			for (var i = 0; i < attackPosition.length; i++){
				echequier.isAttacked(attackPosition[i][0],attackPosition[i][1],1) attackPosition.pop(1);
			}
			if (echequier.isAttacked(this.x,this.y,1)) attackPosition.push([this.x,this.y+1]);
			
		}
		else {
			if (echequier.isAttacked(this.x,this.y,1)) attackPosition.push([this.x,this.y+1])
		}
		*/
		

		return attackPosition;
	}
}
