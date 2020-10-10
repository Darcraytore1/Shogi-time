
class Fou {

    campDeLaPiece;

	constructor(campDeLaPiece){
		this.campDeLaPiece = campDeLaPiece;
	}

	toString(){
		return "Fou "+this.campDeLaPiece;
	}

	// Calcul des diagonals du tableau 
	isAuthorizedMovementPlayer1(x,y,j,k){
		for (i = 0; i<9;i++){

			/*
			if (x )
			if (x + i == j && y + i == k && y + i < 9 && x + i < 9)	// Une solution trouve en appelant l'echequier ici et en verifiant si une piece est presente sur chaque diagonal
			*/
			
			if ((x + i == j && y + i == k && y + i < 9 && x + i < 9) || (x - i == j && y - i == k && y - i > -1 && x - i > -1) 
				|| (x + i == j && y - i == k && y - i > -1 && x + i < 9) || (x - i == j && y + i == k && y + i < 9 && x - i > -1)){
				return true;
			}
		}

		return false;
	}

	getCampDeLaPiece(){
		return this.campDeLaPiece;
	}

	printImgPiece(x,y){
		document.write("<img src='image/fou.png' id='x,y' draggable='true' ondragstart='onDragStart(event);' x='x' y='y'></img>");
	}
}
