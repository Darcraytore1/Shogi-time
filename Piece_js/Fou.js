
export default class Fou {

    campDeLaPiece;

	constructor(campDeLaPiece){
		this.campDeLaPiece = campDeLaPiece;
	}

	toString(){
		return "Fou "+this.campDeLaPiece;
	}

	type(){
		return "Fou";
	}

	// Calcul des diagonals du tableau 
	isAuthorizedMovementPlayer1(x,y,j,k){
		var i;
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

	isAuthorizedMovementPlayer2(x,y,j,k){
		var i;
		for (i = 0; i<9;i++){
			
			if ((x - i == j && y - i == k && y - i > -1 && x - i > -1) || (x + i == j && y + i == k && y + i < 9 && x + i < 9) 
				|| (x - i == j && y + i == k && y + i < 9 && x - i > -1) || (x + i == j && y - i == k && y - i > -1 && x + i < 9)){
				return true;
			}
		}

		return false;
	}

	getCampDeLaPiece(){
		return this.campDeLaPiece;
	}

	href(){
		return 'image/fou.png';
	}

	printImgPiece(x,y){
		return "<img src='image/fou.png' id='x,y' draggable='true' ondragstart='onDragStart(event);' x='x' y='y'></img>";
	}

	isEvolve(){
		return false;
	}

	// Problématique pour toutes les pièces qui attaquent à distance, car je ne peux récupérer les endroits ou elles peuvent réellement aller ici vu que je calcule à un endroit 
	// les réelle mouvement qu'elles peuvent faire, garder la tour, le fou et le lancier pour la fin pour ses raisons.
	// ça fonctionne environ, faudra tester plus tard 
	getAttackPositions(echequier,x,y){

		var attackPosition = [];

		var i = 0;
		var compteur = 0;

		// Normalement cette condition if est inutile, je sais pas pourquoi je l'enlève pas d'ailleurs, je crois qu'elle me fait plaisir, elle me soulage.
		
		if (x - 1 > -1 && y - 1 > -1){

			if (x > y) compteur = x;
			else compteur = y;

			for (i = 1;i< compteur + 1;i++){
				if(echequier.getPieceCellule()[y - i][x - i] != null){
					break;
				}
				attackPosition.push([x-i,y-i]);
			}
		}
		
		
		
		if (x + 1 < 9 && y + 1 < 9){

			if (x < y) compteur = x;
			else compteur = y;

			for (i = 1;i< compteur + 1 ;i++){
				if(echequier.getPieceCellule()[y + i][x + i] != null){
					break
				}
				attackPosition.push([x+i,y+i]);
			}

		}
		
		
		if (x - 1 > -1 && y + 1 < 9){

			if (x < (8-y)){
				compteur = x;
			}
			else {
				compteur = 8-y;
			}
			for (i = 1;i < compteur + 1;i++){
				
				if(echequier.getPieceCellule()[y + i][x - i] != null){
					break;
				}
				attackPosition.push([x-i,y+i]);
			}

		}
		
		if (x + 1 < 9 && y - 1 > -1){

			if (y < (8-x)){
				compteur = y;
			}
			else {
				compteur = 8-x;
			}

			for (i = 1;i< compteur + 1;i++){
				if(echequier.getPieceCellule()[y - i][x + i] != null){
					break;
				}
				attackPosition.push([x+i,y-i]);
			}
		}
		
		return attackPosition;
		
	}

}
