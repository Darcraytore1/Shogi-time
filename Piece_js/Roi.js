export default class Roi {

	campDeLaPiece;

	constructor(campDeLaPiece){
		this.campDeLaPiece = campDeLaPiece;
	}

	toString(){
		return "Roi " + this.campDeLaPiece;
	}

	 isAuthorizedMovementPlayer1(x,y,j,k){
		
		if ( (x == j && y + 1 == k && y + 1 < 9) || (x + 1 == j && y == k && x + 1 < 9) || (x - 1 == j && y == k && x - 1 > -1)
			|| (x == j && y - 1 == k && y - 1 > -1) || (x - 1 == j && y + 1 == k && x - 1 > -1 && y + 1 < 9) || (x + 1 == j && y + 1 == k && x + 1 < 9 && y + 1 < 9)
			|| (x - 1 == j && y - 1 == k && x - 1 > -1 && y - 1 > -1)  || (x + 1 == j && y - 1 == k && x + 1 < 9 && y - 1 > -1)){

			return true;

		}

		return false;
	}

	 getCampDeLaPiece(){
		return this.campDeLaPiece;
	}

	 printImgPiece(x,y){
		document.write("<img src='image/roi.png' id='x,y' draggable='true' ondragstart='onDragStart(event);' x='x' y='y'></img>");
	}
}
