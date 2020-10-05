class Cavalier{


	campDeLaPiece;

	constructor(campDeLaPiece){
		this.campDeLaPiece = campDeLaPiece;
	}

	toString(){
		return "Cavalier "+this.campDeLaPiece;
	}

	isAuthorizedMovementPlayer1(x,y,j,k){

		if ((x - 1 == j && y - 2 == k && x -1 > -1 && y - 2 > -1) || (x + 1 == j && y - 2 == k && x + 1 < 9 && y - 2 > -1)){

			return true;

		}

		return false;

	}

	isAuthorizedMovementPlayer2(x,y,j,k){

		if ((x - 1 == j && $y + 2 == k && x -1 > -1 && y + 2 < 9) || (x + 1 == j && y + 2 == k && x + 1 < 9 && y - 2 < 9)){

			return true;

		}

		return false;
	}

	getCampDeLaPiece(){
		return this.campDeLaPiece;
	}

	printImgPiece($x,$y){
		document.write("<img src='image/cavalier.png' id='$x,$y' draggable='true' ondragstart='onDragStart(event);' ></img>");
	}
}
