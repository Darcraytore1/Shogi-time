import Echequier from "./Echequier_js.js";
import Lancier from "./Piece_js/Lancier.js";
import Fou from "./Piece_js/Fou.js";
import GeneralArgent from "./Piece_js/GeneralArgent.js";
import GeneralOr from "./Piece_js/GeneralOr.js";
import Tour from "./Piece_js/Tour.js";
import Pion from "./Piece_js/Pion.js";
import Cavalier from "./Piece_js/Cavalier.js";
import Roi from "./Piece_js/Roi.js";

import Lancier_u from "./Piece_js/Lancier_u.js";
import Fou_u from "./Piece_js/Fou_u.js";
import GeneralArgent_u from "./Piece_js/GeneralArgent_u.js";
import Tour_u from "./Piece_js/Tour_u.js";
import Pion_u from "./Piece_js/Pion_u.js";
import Cavalier_u from "./Piece_js/Cavalier_u.js";


export default class Player {

    echequier;
    // Voir à réduire en une seul liste 
    listePieceGagne;
    whoPlay

    constructor(echequier,whoPlay){
        this.echequier = echequier;
        this.whoPlay = whoPlay;
        this.listePieceGagne = new Map();
    }

    /*
    Permet de faire évoluer une pièces qui arrive sur l'une des 3 dernières cases du plateau 
    */
    evolvePiece(x,y,j,k,piece,sure){
        if (!(piece.type() == "Roi" || piece.type() == "GeneralOr")){

            var newPiece = null;
            if (sure == false){
                if (window.confirm("Voulez vous faire évoluer votre pièce") == true){
                    if (piece.type() == "Fou"){
                        newPiece = new Fou_u(piece.getCampDeLaPiece())
                        this.echequier.pieceEvolve(x,y,j,k,new Fou_u(piece.getCampDeLaPiece()));
                    }

                    if (piece.type() == "Tour"){
                        newPiece = new Tour_u(piece.getCampDeLaPiece())
                        this.echequier.pieceEvolve(x,y,j,k,new Tour_u(piece.getCampDeLaPiece()));
                    }

                    if (piece.type() == "GeneralArgent"){
                        newPiece = new GeneralArgent_u(piece.getCampDeLaPiece());
                        this.echequier.pieceEvolve(x,y,j,k,new GeneralArgent_u(piece.getCampDeLaPiece()));
                    }

                    if (piece.type() == "Pion"){
                        newPiece = new Pion_u(piece.getCampDeLaPiece());
                        this.echequier.pieceEvolve(x,y,j,k,new Pion_u(piece.getCampDeLaPiece()));
                    }

                    if (piece.type() == "Lancier"){
                        newPiece = new Lancier_u(piece.getCampDeLaPiece());
                        this.echequier.pieceEvolve(x,y,j,k,new Lancier_u(piece.getCampDeLaPiece()));
                    }

                    if (piece.type() == "Cavalier"){
                        newPiece = new Cavalier_u(piece.getCampDeLaPiece());
                        this.echequier.pieceEvolve(x,y,j,k,new Cavalier_u(piece.getCampDeLaPiece()));
                    }
                }
            }

            else {
                if (piece.type() == "Fou"){
                    newPiece = new Fou_u(piece.getCampDeLaPiece())
                    this.echequier.pieceEvolve(x,y,j,k,new Fou_u(piece.getCampDeLaPiece()));
                }

                if (piece.type() == "Tour"){
                    newPiece = new Tour_u(piece.getCampDeLaPiece())
                    this.echequier.pieceEvolve(x,y,j,k,new Tour_u(piece.getCampDeLaPiece()));
                }

                if (piece.type() == "GeneralArgent"){
                    newPiece = new GeneralArgent_u(piece.getCampDeLaPiece());
                    this.echequier.pieceEvolve(x,y,j,k,new GeneralArgent_u(piece.getCampDeLaPiece()));
                }

                if (piece.type() == "Pion"){
                    newPiece = new Pion_u(piece.getCampDeLaPiece());
                    this.echequier.pieceEvolve(x,y,j,k,new Pion_u(piece.getCampDeLaPiece()));
                }

                if (piece.type() == "Lancier"){
                    newPiece = new Lancier_u(piece.getCampDeLaPiece());
                    this.echequier.pieceEvolve(x,y,j,k,new Lancier_u(piece.getCampDeLaPiece()));
                }

                if (piece.type() == "Cavalier"){
                    newPiece = new Cavalier_u(piece.getCampDeLaPiece());
                    this.echequier.pieceEvolve(x,y,j,k,new Cavalier_u(piece.getCampDeLaPiece()));
                }
            }
            
            //var a = document.getElementById(x+", "+y);
            //a.firstElementChild.src = newPiece.href();
        }
    }

    
    /*  Joue une piece et doit influencer en consequence l'echequier
        x et y sont les coordonnees de la piece choisi et j, k sont 
        les coordonnees de l'endroit ou on veut que la piece aille 
        doit également gérer les échecs 
        Return un booléen, true si le mouvement est possible et a été effectué sinon renvoie false.
    */
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
        //console.log(piece);
        if (piece.isAuthorizedMovementPlayer(j,k,this.echequier)){		// Si le mouvement qu'essaie de faire la piece est authorise par rapport a la piece choisie
            string = "la case de destination n'est pas vide";

            if (this.echequier.getPieceCellule()[k][j] == null || this.echequier.getPieceCellule()[k][j].getCampDeLaPiece() != this.echequier.getPieceCellule()[y][x].getCampDeLaPiece()){		// Si l'endroit ou veut aller la piece n'a pas deja une piece sur cette position ou bien si c'est une piece ennemi

                if (this.echequier.isEchec(piece.getCampDeLaPiece()) == true){

                    var piece2 = this.echequier.getPieceCellule()[k][j];
                    this.echequier.changeCellule(j,k,piece);
                    this.echequier.changeCellule(x,y,null);
                    console.log("Vous êtes échec");
                    if (this.echequier.isEchec(piece.getCampDeLaPiece()) == true) {

                        console.log("ça ne règle pas votre échec");
                        this.echequier.changeCellule(j,k,piece2);
                        this.echequier.changeCellule(x,y,piece);
                        return false;
                    }

                }

                else if (this.echequier.getPieceCellule()[k][j] == null){
                    this.echequier.changeCellule(j,k,piece);
                    this.echequier.changeCellule(x,y,null);

                }
                
                else{
                    console.log("chiottttte");
                    var type = this.echequier.getPieceCellule()[k][j].type();
                    // Pour incrémenter la bonne case dans la map
                    if (type == "Pion_u") type = "Pion";
                    if (type == "Lancier_u") type = "Lancier";
                    if (type == "GeneralArgent_u") type = "GeneralArgent";
                    if (type == "Tour_u") type = "Tour";
                    if (type == "Fou_u") type = "Fou";
                    if (type == "Cavalier_u") type = "Cavalier";

                    console.log(this.listePieceGagne.get(type) == undefined);
                    if (this.listePieceGagne.get(type) == undefined) this.listePieceGagne.set(type,1);
                    else this.listePieceGagne.set(type,this.listePieceGagne.get(type)+1);
                    
                    
                    this.echequier.changeCellule(j,k,piece);
                    this.echequier.changeCellule(x,y,null);
                }

                if (piece.getCampDeLaPiece() == 1 && k == 8 && piece.isEvolve() == false){
                    this.evolvePiece(x,y,j,k,piece,true);
                }

                else if (piece.getCampDeLaPiece() == 1 && k > 5 && piece.isEvolve() == false){
                    this.evolvePiece(x,y,j,k,piece,false);
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

        console.log(string);


        return (false);
    }

    Player2playPiece(x,y,j,k){

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
        if (piece.isAuthorizedMovementPlayer(j,k,this.echequier)){		// Si le mouvement qu'essaie de faire la piece est authorise par rapport a la piece choisie
            string = "la case de destination n'est pas vide";

            if (this.echequier.getPieceCellule()[k][j] == null || this.echequier.getPieceCellule()[k][j].getCampDeLaPiece() != this.echequier.getPieceCellule()[y][x].getCampDeLaPiece()){		// Si l'endroit ou veut aller la piece n'a pas deja une piece sur cette position ou bien si c'est une piece ennemi

                if (this.echequier.isEchec(piece.getCampDeLaPiece()) == true){

                    var type = this.echequier.getPieceCellule()[k][j].type();
                    
                    var piece2 = this.echequier.getPieceCellule()[k][j];
                    this.echequier.changeCellule(j,k,piece);
                    this.echequier.changeCellule(x,y,null);
                    console.log("Vous êtes échec");
                    // Indiqué d'une manière ou d'une autre que le joueur est échec

                    console.log("Que se passe t'il ?");
                    if (this.echequier.isEchec(piece.getCampDeLaPiece()) == true) {

                        console.log("ça ne règle pas votre échec");
                        this.echequier.changeCellule(j,k,piece2);
                        this.echequier.changeCellule(x,y,piece);
                        return false;
                    }

                    
                    console.log("prise de la pièces = " + type);
                    if (type == "Pion_u") type = "Pion";
                    if (type == "Lancier_u") type = "Lancier";
                    if (type == "GeneralArgent_u") type = "GeneralArgent";
                    if (type == "Tour_u") type = "Tour";
                    if (type == "Fou_u") type = "Fou";
                    if (type == "Cavalier_u") type = "Cavalier";

                    if (this.listePieceGagne.get(type) == undefined) this.listePieceGagne.set(type,1);
                    else this.listePieceGagne.set(type,this.listePieceGagne.get(type)+1);

                    this.echequier.changeCellule(j,k,piece);
                    this.echequier.changeCellule(x,y,null);

                }

                else if (this.echequier.getPieceCellule()[k][j] == null){

                    this.echequier.changeCellule(j,k,piece);
                    this.echequier.changeCellule(x,y,null);

                }

                else{
                    // Ici on met la banque des pièces 
                    // this.echequier.getPieceCellule()[k][j].setX(this.listePieceGagne.length);

                    var type = this.echequier.getPieceCellule()[k][j].type();
                    console.log("prise de la pièces = " + type);
                    if (type == "Pion_u") type = "Pion";
                    if (type == "Lancier_u") type = "Lancier";
                    if (type == "GeneralArgent_u") type = "GeneralArgent";
                    if (type == "Tour_u") type = "Tour";
                    if (type == "Fou_u") type = "Fou";
                    if (type == "Cavalier_u") type = "Cavalier";

                    if (this.listePieceGagne.get(type) == undefined) this.listePieceGagne.set(type,1);
                    else this.listePieceGagne.set(type,this.listePieceGagne.get(type)+1);

                    this.echequier.changeCellule(j,k,piece);
                    this.echequier.changeCellule(x,y,null);
                }

                console.log(piece.getCampDeLaPiece());
                console.log(k);

                if (piece.getCampDeLaPiece() == 2 && k == 0 && (piece.isEvolve() == false)){   
                    this.evolvePiece(x,y,j,k,piece,true)
                }

                else if (piece.getCampDeLaPiece() == 2 && k <= 2 && (piece.isEvolve() == false)){
                    this.evolvePiece(x,y,j,k,piece,false);
                    // Changer l'image utilisé pour mettre celle de l'evolve.
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

    isParachutable(x,y){
        if (this.echequier.getPieceCellule()[y][x] == null) console.log("La place pour être parachuté est libre");
        else console.log("La place pour être parachuté est déjà prise");
        return this.echequier.getPieceCellule()[y][x] == null;
    }

    // Parachute une piece et doit influencer en consequence l'echequier à l'indice x,y, le camp indique le camp que devra avoir la nouvelle pieces, le nomPiece indique la
    // pièce qui devra être créée
    parachutagePiece(x,y,camp,nomPiece){

        //console.log(x,y);
        //console.log(nomPiece);


        if (nomPiece == "Pion") var piecePlace = new Pion(camp,x,y);
        if (nomPiece == "Lancier") var piecePlace = new Lancier(camp,x,y);
        if (nomPiece == "Fou") var piecePlace = new Fou(camp,x,y);
        if (nomPiece == "Tour") var piecePlace = new Tour(camp,x,y);
        if (nomPiece == "GeneralOr") var piecePlace = new GeneralOr(camp,x,y);
        if (nomPiece == "GeneralArgent") var piecePlace = new GeneralArgent(camp,x,y);
        if (nomPiece == "Cavalier") var piecePlace = new Cavalier(camp,x,y);
        
        this.echequier.changeCellule(x,y,piecePlace);
    }

    getEchequier(){
        return this.echequier;
    }

    toString(){
        var string = "";
        listePieceGagne.forEach(function(key,value,map){
            string += key + value + "\n";
        });

        return string;
    }

    // renvoie un string si la p
    get(string){
        this.listePieceGagne.get(string);
    }

    changeWhoPlay(){
        if (this.whoPlay) this.whoPlay = false;
        else this.whoPlay = true;
    }

    getWhoPlay(){
        return this.whoPlay;
    }
}

/*
var echequier = new Echequier();
var player = new Player(echequier); 
console.log(player.getEchequier());
*/