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

		if ((x - 1 == j && y + 2 == k && x -1 > -1 && y + 2 < 9) || (x + 1 == j && y + 2 == k && x + 1 < 9 && y - 2 < 9)){

			return true;

		}

		return false;
	}

	getCampDeLaPiece(){
		return this.campDeLaPiece;
	}

	printImgPiece(x,y){
		document.write("<img src='image/cavalier.png' id='x,y' draggable='true' ondragstart='onDragStart(event);' ></img>");
	}
}

class Lancier {

    campDeLaPiece;

    constructor(campDeLaPiece){
        this.campDeLaPiece = campDeLaPiece;
    }

    toString(){
        return "Lancier " + this.campDeLaPiece;
    }

    isAuthorizedMovementPlayer1(x,y,j,k){

        for (i = 0; i<9;i++){

            if (x == j && y + i == k && y + i < 9){
                return true;
            }
        }

        return false;
    }

    isAuthorizedMovementPlayer2(x,y,j,k){

        for (i = 0; i<9;i++){
            
            if (x == j && y + i == k && y - i > -1){
                return true;
            }
        }

        return false;
    }

    getCampDeLaPiece(){
        return this.campDeLaPiece;
    }

    printImgPiece(x,y){
        document.write("<img src='image/lancier.png' id='x,y' draggable='true' ondragstart='onDragStart(event);' x='x' y='y'></img>");
    }
 }

 class GeneralArgent {

	campDeLaPiece;

	constructor(campDeLaPiece){
		this.campDeLaPiece = campDeLaPiece;
	}

	toString(){
		return "GeneralArgent "+this.campDeLaPiece;
	}

	// ça a l'air correct
	isAuthorizedMovementPlayer1(x,y,j,k){	
		
		if ( (x == j && y + 1 == k && y + 1 < 9) || (x - 1 == j && y - 1 == k && x - 1 > -1 && y - 1 > -1)  || (x + 1 == j && y - 1 == k && x + 1 < 9 && y - 1 > -1)
			|| (x - 1 == j && y + 1 == k && x - 1 > -1 && y + 1 < 9) || (x + 1 == j && y + 1 == k && x + 1 < 9 && y + 1 < 9)){

			return true;

		}

		return false;
	}

	fisAuthorizedMovementPlayer2(x,y,j,k){	
		
		if ( (x == j && y - 1 == k && y - 1 > -1) || (x - 1 == j && y - 1 == k && x - 1 > -1 && y - 1 > -1)  || (x + 1 == j && y - 1 == k && x + 1 < 9 && y - 1 > -1)
			|| (x - 1 == j && y + 1 == k && x - 1 > -1 && y + 1 < 9) || (x + 1 == j && y + 1 == k && x + 1 < 9 && y + 1 < 9)){

			return true;

		}

		return false;
	}

	getCampDeLaPiece(){
		return this.campDeLaPieces;
	}

	printImgPiece(x,y){
		document.write("<img src='image/generalArgent.png' id='x,y' draggable='true' ondragstart='onDragStart(event);'></img>");
	}

 }

 
class GeneralOr{

    campDeLaPiece;

    constructor(campDeLaPiece){
        this.campDeLaPiece = campDeLaPiece;
    }

    toString(){
    
        return "GeneralOr "+this.campDeLaPiece;

    }

    // ça a l'air correct
    isAuthorizedMovementPlayer1(x,y,j,k){

        if ( (x == j && y + 1 == k && y + 1 < 9) || (x + 1 == j && y == k && x + 1 < 9) || (x - 1 == j && y == k && x - 1 > -1)
            || (x == j && y - 1 == k && y - 1 > -1) || (x - 1 == j && y + 1 == k && x - 1 > -1 && y + 1 < 9) || (x + 1 == j && y + 1 == k && x + 1 < 9 && y + 1 < 9)){

            return true;

        }

        return false;

    }

    isAuthorizedMovementPlayer2(x,y,j,k){

        if ( (x == j && y + 1 == k && y + 1 < 9) || (x + 1 == j && y == k && x + 1 < 9) || (x - 1 == j && y == k && x - 1 > -1)
            || (x == j && y - 1 == k && y - 1 > -1) || (x - 1 == j && y - 1 == k && x - 1 > -1 && y - 1 > -1) || (x + 1 == j && y - 1 == k && x + 1 < 9 && y - 1 > - 1)){

            return true;

        }

        return false;
    }

    getCampDeLaPiece(){
        return this.campDeLaPiece;
    }

    printImgPiece(x,y){
        document.write("<img src='image/generalOr.png' id='x,y' draggable='true' ondragstart='onDragStart(event);' x='x' y='y'></img>");
    }
}


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

class Pion {

    campDeLaPiece;

    constructor(campDeLaPiece){
        this.campDeLaPiece = campDeLaPiece;
    }

    toString(){
        return "Pion " + this.campDeLaPiece;
    }

    // Si le mouvement est authorise renvoie true sinon false
    isAuthorizedMovementPlayer1(x,y,j,k){
        if (x == j && y + 1 == k && y + 1 < 9){
            return true;
        }
        return false;
    }

    isAuthorizedMovementPlayer2(x,y,j,k){
        if (x == j && y - 1 == k && y - 1 > -1){
            return true;
        }
        return false;
    }

    // Attention ne pas oublier le this
    getCampDeLaPiece(){
        return this.campDeLaPiece;
    }

    printImgPiece(x,y){
        document.write("<img src='image/pion.png' id='x,y' draggable='true' ondragstart='onDragStart(event);'></img>");
    }

}

class Roi {

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

class Tour{

	campDeLaPiece;

	constructor(campDeLaPiece){
		this.campDeLaPiece = campDeLaPiece;
	}

	toString(){
		return "Tour " + this.campDeLaPiece;
	}

	isAuthorizedMovementPlayer1(x,y,j,k){

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

    
    // Comprendre comment fonctionne les imports
    
    //require_once("Piece_js/Piece.js");
	//import * as Lancier from "Piece_js/Lancier.js";   // Peut être compacté pour mettre toutes les classes de pièces dans un seul fichier, à voir
	/*import * as GeneralArgent from "Piece_js/GeneralArgent.js";
	import * as GeneralOr from "Piece_js/GeneralOr.js";
	import * as Pion from "Piece_js/Pion.js";
	import * as Roi from "Piece_js/Roi.js";
	import * as Tour from "Piece_js/Tour.js";
	import * as Fou from "Piece_js/Fou.js";
    import * as Cavalier from "Piece_js/Cavalier.js";
    */

// La visibilite public pour les classes ne fonctionnent pas chercher pourquoi
class Echequier {


    //public $piceceCellule = new Lancier(); //[([(new Lancier(),new Cavalier(),new GeneralArgent(),new GeneralOr(), new Roi(),new GeneralOr(), new GeneralArgent(),new Cavalier(),new Lancier())); // Dans le tableau je dois initialiser chacune des pièces 
    pieceCellule;
    numCellule; // Dans ce tableau je dois initialiser chaque case

    constructor() {
        this.pieceCellule = [[new Lancier(1),new Cavalier(1),new GeneralArgent(1),new GeneralOr(1), new Roi(1),new GeneralOr(1), new GeneralArgent(1),new Cavalier(1),new Lancier(1)],
                                    [null,new Tour(1),null,null,null,null,null,new Fou(1),null],
                                    [new Pion(1),new Pion(1),new Pion(1),new Pion(1),new Pion(1),new Pion(1),new Pion(1),new Pion(1),new Pion(1)],
                                    [null,null,null,null,null,null,null,null,null],
                                    [null,null,null,null,null,null,null,null,null],
                                    [null,null,null,null,null,null,null,null,null],
                                    [new Pion(2),new Pion(2),new Pion(2),new Pion(2),new Pion(2),new Pion(2),new Pion(2),new Pion(2),new Pion(2)],
                                    [null,new Tour(2),null,null,null,null,null,new Fou(2),null],
                                    [new Lancier(2),new Cavalier(2),new GeneralArgent(2),new GeneralOr(2), new Roi(2),new GeneralOr(2), new GeneralArgent(2),new Cavalier(2),new Lancier(2)]];

        this.numCellule = [[1,2,3,4,5,6,7,8,9],
                                [1,2,3,4,5,6,7,8,9], 
                                [1,2,3,4,5,6,7,8,9], 
                                [1,2,3,4,5,6,7,8,9],
                                [1,2,3,4,5,6,7,8,9], 
                                [1,2,3,4,5,6,7,8,9], 
                                [1,2,3,4,5,6,7,8,9], 
                                [1,2,3,4,5,6,7,8,9], 
                                [1,2,3,4,5,6,7,8,9]];

    }

    getPieceCellule() {
        return this.pieceCellule;		// Sans mettre le this, on me dit que pieceCellule n'a pas été initiliase etrange, peut etre une specifite du php
    }

    changeCellule(x,y,value){
        this.pieceCellule[y][x] = value;
    }

    // Pour voir a quoi ressemble le tableau
    toString(){

        var i = 0;
        var string = "";
        for(var value of this.pieceCellule ) {
            string+= i + " = ";
            for(var value2 of value) {
                if (value2 == null){
                    string+=" ";
                }
                else {
                    //console.log(value2.toString());
                    string+= value2;
                }
            }
            string+= "<br>";
            i ++;
            //$string += "$value";
        }
        return string;
        //return "L'etat actuelle de l'echequier est ". $this->pieceCellule;
    }
}

var echequier = new Echequier();
//console.log(echequier);
document.write(echequier);

/*
$Echequier = new Echequier();
echo($Echequier -> getPieceCellule());
*/


