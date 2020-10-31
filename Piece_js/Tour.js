export default class Tour{

	campDeLaPiece;

	constructor(campDeLaPiece){
		this.campDeLaPiece = campDeLaPiece;
	}

	toString(){
		return "Tour " + this.campDeLaPiece;
	}

	type(){
		return "Tour";
	}

	isAuthorizedMovementPlayer1(x,y,j,k){
		var i;
		
		for (i = 0; i<9;i++){

			if ((x + i == j && y == k && x + i < 9) || (x - i == j && y == k && x - i > -1) 
				|| (x == j && y - i == k && y - i > -1) || (x == j && y + i == k && y + i < 9)){
				return true;
			}
		}

		return false;
	}

	isAuthorizedMovementPlayer2(x,y,j,k){

		var i;
		
		for (i = 0; i<9;i++){

			if ((x - i == j && y == k && x - i > -1) || (x + i == j && y == k && x + i < 9) 
				|| (x == j && y + i == k && y + i < 9) || (x == j && y - i == k && y - i > -1)){
				return true;
			}
		}

		return false;
	}

	getCampDeLaPiece(){
		return this.campDeLaPiece;
	}
	href(){
		return 'image/tour.png';
	}
	
	printImgPiece(x,y){
		return "<img src='image/tour.png' id='x,y' draggable='true' ondragstart='onDragStart(event);'></img>";
	}

	isEvolve(){
		return false;
	}

	
    getAttackPositions(echequier,x,y){

		var attackPosition = [];

		var i = 0;
		var compteur = 0;

		// Normalement cette condition if est inutile, je sais pas pourquoi je l'enlève pas d'ailleurs, je crois qu'elle me fait plaisir, elle me soulage.
		
		if (y - 1 > -1){

			compteur = y;

			for (i = 1;i< compteur + 1;i++){
				if(echequier.getPieceCellule()[y - i][x] != null){
					break;
				}
				attackPosition.push([x,y-i]);
			}
		}
		
		
		
		if (x + 1 < 9){

			compteur = 8-x;

			for (i = 1;i< compteur + 1 ;i++){
				if(echequier.getPieceCellule()[y][x + i] != null){
					break
				}
				attackPosition.push([x+i,y]);
			}

		}
		
		
		if (x - 1 > -1){

			compteur = x;

			for (i = 1;i < compteur + 1;i++){
				
				if(echequier.getPieceCellule()[y][x - i] != null){
					break;
				}
				attackPosition.push([x-i,y]);
			}

		}
		
		if (y + 1 < 9){

			compteur = 8 - y;

			for (i = 1;i< compteur + 1;i++){
				if(echequier.getPieceCellule()[y + i][x] != null){
					break;
				}
				attackPosition.push([x,y+i]);
			}
		}
		
		return attackPosition;
		
	}
}
