import Piece from "./Piece.js";
export default class Fou extends Piece{

	constructor(campDeLaPiece,x,y){
        super(campDeLaPiece,x,y);
    }


	toString(){
		return "Fou "+this.campDeLaPiece;
	}

	type(){
		return "Fou";
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
		return 'image/fou.png';
	}

	printImgPiece(){
		return "<img src='image/fou.png' id='this.x,this.y' draggable='true' ondragstart='onDragStart(event);' this.x='this.x' this.y='this.y'></img>";
	}

	isEvolve(){
		return false;
	}

	// Problématique pour toutes les pièces qui attaquent à distance, car je ne peux récupérer les endroits ou elles peuvent réellement aller ici vu que je calcule à un endroit 
	// les réelle mouvement qu'elles peuvent faire, garder la tour, le fou et le lancier pour la fin pour ses raisons.
	// ça fonctionne environ, faudra tester plus tard 
	getAttackPositions(echequier){

		var attackPosition = [];

		var i = 0;
		var compteur = 0;

		// Normalement cette condition if est inutile, je sais pas pourquoi je l'enlève pas d'ailleurs, je crois qu'elle me fait plaisir, elle me soulage.
		
		if (this.x - 1 > -1 && this.y - 1 > -1){

			if (this.x > this.y) compteur = this.x;
			else compteur = this.y;

			for (i = 1;i< compteur + 1;i++){

				if(echequier.getPieceCellule()[this.y - i][this.x - i] != null){
					if (echequier.getPieceCellule()[this.y - i][this.x - i].getCampDeLaPiece() != this.campDeLaPiece){
						attackPosition.push([this.x-i,this.y-i]);
						break;
					}
					break;
				}
				attackPosition.push([this.x-i,this.y-i]);
			}
		}
		
		
		
		if (this.x + 1 < 9 && this.y + 1 < 9){

			if (this.x < this.y) compteur = this.x;
			else compteur = this.y;

			for (i = 1;i< compteur + 1 ;i++){

				console.log("prout");
				console.log(echequier.getPieceCellule());
				if(echequier.getPieceCellule()[this.y + i][this.x + i] != null){
					if (echequier.getPieceCellule()[this.y + i][this.x + i].getCampDeLaPiece() != this.campDeLaPiece){
						attackPosition.push([this.x+i,this.y+i]);
						break;
					}
					break
				}
				attackPosition.push([this.x+i,this.y+i]);
			}

		}
		
		
		if (this.x - 1 > -1 && this.y + 1 < 9){

			if (this.x < (8-this.y)){
				compteur = this.x;
			}
			else {
				compteur = 8-this.y;
			}
			for (i = 1;i < compteur + 1;i++){
				console.log("caca");
				console.log(echequier.getPieceCellule());
				if(echequier.getPieceCellule()[this.y + i][this.x - i] != null){
					if (echequier.getPieceCellule()[this.y + i][this.x - i].getCampDeLaPiece() != this.campDeLaPiece){
						attackPosition.push([this.x-i,this.y+i]);
						break;
					}
					break;
				}
				attackPosition.push([this.x-i,this.y+i]);
			}

		}
		
		if (this.x + 1 < 9 && this.y - 1 > -1){

			if (this.y < (8-this.x)){
				compteur = this.y;
			}
			else {
				compteur = 8-this.x;
			}

			for (i = 1;i< compteur + 1;i++){
				if(echequier.getPieceCellule()[this.y - i][this.x + i] != null){
					if (echequier.getPieceCellule()[this.y - i][this.x + i].getCampDeLaPiece() != this.campDeLaPiece){
						attackPosition.push([this.x+i,this.y-i]);
						break;
					}
					break;
				}
				attackPosition.push([this.x+i,this.y-i]);
			}
		}
		
		return attackPosition;
		
	}
}
