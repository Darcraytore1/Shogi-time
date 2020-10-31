export default class Cavalier{


	campDeLaPiece;

	constructor(campDeLaPiece){
		this.campDeLaPiece = campDeLaPiece;
	}

	toString(){
		return "Cavalier "+this.campDeLaPiece;
	}

	type(){
		return "Cavalier";
	}

	isAuthorizedMovementPlayer1(x,y,j,k){

		if ((x - 1 == j && y + 2 == k && x - 1 > -1 && y + 2 < 9) || (x + 1 == j && y + 2 == k && x + 1 < 9 && y + 2 < 9)){

			return true;

		}

		return false;

	}

	isAuthorizedMovementPlayer2(x,y,j,k){

		if ((x + 1 == j && y - 2 == k && x +1 < 9 && y - 2 > -1) || (x - 1 == j && y - 2 == k && x - 1 > -1 && y - 2 > -1)){

			return true;

		}

		return false;
	}

	getCampDeLaPiece(){
		return this.campDeLaPiece;
	}

	href(){
		return 'image/cavalier.png';
	}

	printImgPiece(x,y){
		return "<img src='image/cavalier.png' id='x,y' draggable='true' ondragstart='onDragStart(event);' ></img>";
	}

	isEvolve(){
		return false;
	}

	getAttackPositions(echequier,x,y){
		var attackPosition = [];

		if (this.campDeLaPiece == 2){
			if (x +1 < 9 && y - 2 > -1 ){
				if (echequier.getPieceCellule()[x+1][y-2] == null || echequier.getPieceCellule()[x+1][y-2].getCampDeLaPiece != 2){
					attackPosition.push([x+1,y-2]);
				}
			}

			if (x - 1 > -1 && y - 2 > -1){
				if (echequier.getPieceCellule()[x-1][y-2] == null || echequier.getPieceCellule()[x-1][y-2].getCampDeLaPiece != 2){
					attackPosition.push([x-1,y-2]);
				}
			}
		}
		
		else {
			if (x - 1 > -1 && y + 2 < 9){
				if (echequier.getPieceCellule()[x-1][y+2] == null || echequier.getPieceCellule()[x-1][y+2].getCampDeLaPiece == 2){
					attackPosition.push([x-1,y+2]);
				}
			}

			if (x + 1 < 9 && y + 2 < 9){
				if (echequier.getPieceCellule()[x+1][y+2] == null || echequier.getPieceCellule()[x+1][y+2].getCampDeLaPiece == 2){
					attackPosition.push([x+1,y+2]);
				}
			}
		}

		return attackPosition;
	}
}

