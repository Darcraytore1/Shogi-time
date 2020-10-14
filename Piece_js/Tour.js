export default class Tour{

	campDeLaPiece;

	constructor(campDeLaPiece){
		this.campDeLaPiece = campDeLaPiece;
	}

	toString(){
		return "Tour " + this.campDeLaPiece;
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

	getCampDeLaPiece(){
		return this.campDeLaPiece;
	}

	printImgPiece(x,y){
	    document.write("<img src='image/tour.png' id='x,y' draggable='true' ondragstart='onDragStart(event);'></img>");
	}
}