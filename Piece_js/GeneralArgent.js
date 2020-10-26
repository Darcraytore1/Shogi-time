export default class GeneralArgent {

	campDeLaPiece;

	constructor(campDeLaPiece){
		this.campDeLaPiece = campDeLaPiece;
	}

	toString(){
		return "GeneralArgent "+this.campDeLaPiece;
	}

	type(){
		return "GeneralArgent";
	}

	// ça a l'air correct
	isAuthorizedMovementPlayer1(x,y,j,k){	
		
		if ( (x == j && y + 1 == k && y + 1 < 9) || (x - 1 == j && y - 1 == k && x - 1 > -1 && y - 1 > -1)  || (x + 1 == j && y - 1 == k && x + 1 < 9 && y - 1 > -1)
			|| (x - 1 == j && y + 1 == k && x - 1 > -1 && y + 1 < 9) || (x + 1 == j && y + 1 == k && x + 1 < 9 && y + 1 < 9)){

			return true;

		}

		return false;
	}

	isAuthorizedMovementPlayer2(x,y,j,k){	
		
		if ( (x == j && y - 1 == k && y - 1 > -1) || (x + 1 == j && y + 1 == k && x + 1 < 9 && y + 1 < 9)  || (x - 1 == j && y + 1 == k && x - 1 > -1 && y + 1 < 9)
			|| (x + 1 == j && y - 1 == k && x + 1 < 9 && y - 1 > -1) || (x - 1 == j && y - 1 == k && x - 1 > -1 && y - 1 > -1)){

			return true;

		}

		return false;
	}

	getCampDeLaPiece(){
		return this.campDeLaPieces;
	}

	href(){
		return 'image/generalArgent.png';
	}

	printImgPiece(x,y){
		return "<img src='image/generalArgent.png' id='x,y' draggable='true' ondragstart='onDragStart(event);'></img>";
	}

	isEvolve(){
		return false;
	}
 }