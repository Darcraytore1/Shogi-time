
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

//var echequier = new Echequier();
//console.log(echequier);
//document.write(echequier);

/*
$Echequier = new Echequier();
echo($Echequier -> getPieceCellule());
*/

class Player {

    echequier;
    listePieceGagne;

    constructor(echequier){
        this.echequier = echequier;
        this.listePieceGagne = [];
    }

    // Joue une piece et doit influencer en consequence l'echequier
    // x et y sont les coordonnees de la piece choisi et j, k sont 
    // les coordonnees de l'endroit ou on veut que la piece aille 
    Player1playPiece(x,y,j,k){

        if (x == j && y == k){		// L'endroit de depart et d'arrive sont les memes donc il ne faut rien faire
            return (false);
        }
        // console.log( "y, x";  // Il faut mettre une difference de 1 car le 0 n'existe pas sur un plateau
        piece = this.echequier.getPieceCellule()[y][x];		// Recuperation de la piece au coordonne x,y
        if (piece == null){
            console.log( "La piece selectionne n'existe pas");
            return false;
        }

        string = "le mouvement demande n'est pas authorise par cette piece";
        if (piece.isAuthorizedMovementPlayer1(x,y,j,k)){		// Si le mouvement qu'essaie de faire la piece est authorise par rapport a la piece choisie
            string = "la case de destination n'est pas vide";

            if (this.echequier.getPieceCellule()[k][j] == null || this.echequier.getPieceCellule()[k][j].getCampDeLaPiece() != this.echequier.getPieceCellule()[y][x].getCampDeLaPiece()){		// Si l'endroit ou veut aller la piece n'a pas deja une piece sur cette position ou bien si c'est une piece ennemi


                // Test si il y a des pieces sur le chemin pour aller a la case destination pour le fou
                if (piece == "Fou"){

                    if (x - j > 0 && y - k > 0){
                        //console.log( "1";
                        for (i = 1;i< x - j;i++){
                            if(this.echequier.getPieceCellule()[y - i][x - i] != null){
                                console.log( "Il y a des pieces sur le chemin de ton deplacement petit galopin");
                                return false;
                            }
                        }

                    }

                    if (x - j < 0 && y - k < 0){
                        //console.log( "2";
                        for (i = 1;i< j - x;i++){
                            if(this.echequier.getPieceCellule()[y + i][x + i] != null){
                                console.log( "Il y a des pieces sur le chemin de ton deplacement petit galopin");
                                return false;
                            }
                        }

                    }

                    if (x - j > 0 && y - k < 0){
                        //console.log( "3";
                        for (i = 1;i < x - j;i++){
                            
                            if(this.echequier.getPieceCellule()[y + i][x - i] != null){
                                console.log( "i");
                                console.log( "Il y a des pieces sur le chemin de ton deplacement petit galopin");
                                return false;
                            }
                        }

                    }

                    if (x - j < 0 && y - k > 0){
                        //console.log( "4";
                        for (i = 1;i< j - x;i++){
                            if(this.echequier.getPieceCellule()[y - i][x + i] != null){
                                console.log( "Il y a des pieces sur le chemin de ton deplacement petit galopin");
                                return false;
                            }
                        }
                    }
                }


                // Test si il y a des pieces sur le chemin pour aller a la case destination pour la tour
                if (piece == "Tour"){

                    if (x - j > 0 && y == k){
                        //console.log( "1";
                        for (i = 1;i< x - j;i++){
                            if(this.echequier.getPieceCellule()[y][x - i] != null){
                                console.log( "Il y a des pieces sur le chemin de ton deplacement petit galopin");
                                return false;
                            }
                        }
                    }

                    if (x - j < 0 && y == k){
                        //console.log( "2";
                        for (i = 1;i< j - x;i++){
                            if(this.echequier.getPieceCellule()[y][x + i] != null){
                                console.log( "Il y a des pieces sur le chemin de ton deplacement petit galopin");
                                return false;
                            }
                        }
                    }

                    if (x == j && y - k < 0){
                        //console.log( "3";
                        for (i = 1;i < k - y;i++){
                            
                            if(this.echequier.getPieceCellule()[y + i][x] != null){
                                //console.log( "i";
                                console.log( "Il y a des pieces sur le chemin de ton deplacement petit galopin");
                                return false;
                            }
                        }
                    }

                    if (x == j && y - k > 0){
                        //console.log( "4";
                        for (i = 1;i< y - k;i++){
                            if(this.echequier.getPieceCellule()[y - i][x] != null){
                                console.log( "Il y a des pieces sur le chemin de ton deplacement petit galopin");
                                return false;
                            }
                        }
                    }
                }


                // Test si il y a des pieces sur le chemin pour aller a la case destination pour le lancier
                if (piece == "Lancier"){
                    //console.log( "k");
                    for (i = 1; i < k-y;i ++){
                        //console.log( "5");
                        if(this.echequier.getPieceCellule()[y + i][x] != null){
                            console.log( "Il y a des pieces sur le chemin de ton deplacement petit galopin");
                            return false;
                        }
                    }
                }




                if (this.echequier.getPieceCellule()[k][j] == null){

                    this.echequier.changeCellule(j,k,piece);
                    this.echequier.changeCellule(x,y,null);

                }

                else{

                    this.listePieceGagne.push(this.echequier.getPieceCellule()[k][j]);
                    this.echequier.changeCellule(j,k,piece);
                    this.echequier.changeCellule(x,y,null);
                }

                /*
                this.echequier.getPieceCellule()[k][j] = piece;
                console.log( this.echequier.getPieceCellule()[k][j]);
                this.echequier.getPieceCellule()[y][x] = null;
                console.log( this.echequier.getPieceCellule()[y][x]; // Ne change pas rellement la valeur du tableau, j'ai donc cree une methode dans echequier pour reellement changer la valeur des cases;
                */
                return(true); 	// Faire en sorte que la piece change de place 
            }
        }

        console.log( string);


        return (false);
    }

    Player2playPiece(x,y,j,k){

        piece = this.echequier.getPieceCellule()[y][x];
        if (piece.isAuthorizedMovementPlayer2(x,y,j,k)){

        }
        return(false);
        
    }

    // Parachute une piece et doit influencer en consequence l'echequier
    parachutagePiece(piece,x,y){

        if (piece == null){
            console.log( "La piece selectionne n'existe pas");
            return false;
        }
        
        if(this.echequier.getPieceCellule()[y][x] == null && in_array(piece, this.listePieceGagne)){
            this.echequier.changeCellule(x,y,piece);
            return true;
        }

        return false;
    }

    getEchequier(){
        return this.echequier;
    }

    toString(){
        var string = "";
        for (var value of this.listePieceGagne) {

            string += value+" ,";
        }

        return string;
    }
}

var echequier = new Echequier();
var player = new Player(echequier); 
console.log(player.getEchequier());
document.write(player.getEchequier());