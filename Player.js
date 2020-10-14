import Echequier from "./Echequier_js.js";
import Lancier from "./Piece_js/Lancier.js";
import Fou from "./Piece_js/Fou.js";
import GeneralArgent from "./Piece_js/GeneralArgent.js";
import GeneralOr from "./Piece_js/GeneralOr.js";
import Tour from "./Piece_js/Tour.js";
import Pion from "./Piece_js/Pion.js";
import Cavalier from "./Piece_js/Cavalier.js";
import Roi from "./Piece_js/Roi.js";

export default class Player {

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
        var piece;
        var string;
        var i;
        
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

/*
var echequier = new Echequier();
var player = new Player(echequier); 
console.log(player.getEchequier());
*/