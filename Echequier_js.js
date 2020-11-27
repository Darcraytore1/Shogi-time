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

export default class Echequier {


    //public $piceceCellule = new Lancier(); //[([(new Lancier(),new Cavalier(),new GeneralArgent(),new GeneralOr(), new Roi(),new GeneralOr(), new GeneralArgent(),new Cavalier(),new Lancier())); // Dans le tableau je dois initialiser chacune des pièces 
    pieceCellule;
    numCellule; // Dans ce tableau je dois initialiser chaque case

    constructor() {
        this.pieceCellule = [[new Lancier(1,0,0),new Cavalier(1,1,0),new GeneralArgent(1,2,0),new GeneralOr(1,3,0), new Roi(1,4,0),new GeneralOr(1,5,0), new GeneralArgent(1,6,0),new Cavalier(1,7,0),new Lancier(1,8,0)],
                                    [null,new Tour(1,1,1),null,null,null,null,null,new Fou(1,7,1),null],
                                    [new Pion(1,0,2),new Pion(1,1,2),new Pion(1,2,2),new Pion(1,3,2),new Pion(1,4,2),new Pion(1,5,2),new Pion(1,6,2),new Pion(1,7,2),new Pion(1,8,2)],
                                    [null,null,null,null,null,null,null,null,null],
                                    [null,null,null,null,null,null,null,null,null],
                                    [null,null,null,null,null,null,null,null,null],
                                    [new Pion(2,0,6),new Pion(2,1,6),new Pion(2,2,6),new Pion(2,3,6),new Pion(2,4,6),new Pion(2,5,6),new Pion(2,6,6),new Pion(2,7,6),new Pion(2,8,6)],
                                    [null,new Tour(2,1,7),null,null,null,null,null,new Fou(2,7,7),null],
                                    [new Lancier(2,0,8),new Cavalier(2,1,8),new GeneralArgent(2,2,8),new GeneralOr(2,3,8), new Roi(2,4,8),new GeneralOr(2,5,8), new GeneralArgent(2,6,8),new Cavalier(2,7,8),new Lancier(2,8,8)]];

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
        
        if (value != null){
            value.setX(x);
            value.setY(y);
        }
        
        
        this.pieceCellule[y][x] = value;
    }


    createImg(piece,x,y){

        var img = null;
        img = document.createElement('img');
        img.src = piece.href();
        img.setAttribute("x",""+x);
        img.setAttribute("y",""+y);
        img.setAttribute("camp",piece.getCampDeLaPiece());
        if (piece.getCampDeLaPiece() == 1) img.classList.add("reverse");
        img.id = x+","+y;
        return img
        
    }

    createImgReverse(piece,x,y){

        var img = null;
        img = document.createElement('img');
        img.src = piece.href();
        img.setAttribute("x",""+x);
        img.setAttribute("y",""+y);
        img.setAttribute("camp",piece.getCampDeLaPiece());
        img.classList.add("reverse");
        img.id = x+","+y;
        return img
        
    }

    // La méthode create img est déjà utilisé pour le début de l'affichage j'uniformiserai le tout plus tard
    createNormalImg(piece,x,y){
        var img = null;
        img = document.createElement('img');
        img.src = piece.href();
        img.setAttribute("x",""+x);
        img.setAttribute("y",""+y);
        img.setAttribute("camp",piece.getCampDeLaPiece());
        return img
    }

    pieceEvolve(x,y,j,k,piece){

        
        var elementPiece = document.getElementById(x+", "+y).firstElementChild
        elementPiece.src = piece.href()

        if (piece != null){
            piece.setX(j);
            piece.setY(k);
        }

        this.pieceCellule[k][j] = piece;
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

    // Affiche l'echequier, est pour le moment utilisé pour seulement la première apparition de l'échéquier, après celle ci les pièces sont manipulées avec le js.
    affiche(){
        var casesBlanc = document.querySelectorAll(".caseBlanc");
        var img = null;
        
        var number = 0;
        var x = 0;
        var y = 0;
        for (var value of this.pieceCellule){
            if (x != 0) y++;
            x = 0;
            for (var value2 of value){
                if (value2 != null){
                    //element = document.createElement(this.pieceCellule[i][j].printImgPiece(casesBlanc[number].getAttribute("x"),casesBlanc[number].getAttribute("y")));
                    img = this.createImg(value2,x,y)
                    casesBlanc[number].appendChild(img);
                }
                number++;
                x++;
            }
            
        }   
    }
    
    // En parametre le numéro du joueur, donc soit 1, soit 2
    piecesPlayerAlive(playerNum){
        
        var piecesAlive = [];
        this.pieceCellule.forEach(ligne => {
            ligne.forEach(piece =>{
                if (piece != null && piece.getCampDeLaPiece() == playerNum){
                    piecesAlive.push(piece);
                }
                });
        });

        return piecesAlive;
    }

    // Elle ne va pas être optimisé au début mais faire une fonction qui regarde chacune des pièces d'un côté ou de l'autre, les positions ou elles peuvent arriver.
    // Compliqué, il manque les arguments dans la méthodes getAttackPositions. Réfléchir ...
    allPosiblePositions(playerNum){
        
        var piecesAlive = this.piecesPlayerAlive(playerNum);
        var allPossiblePositions = [];
        piecesAlive.forEach(piece => {
            // C'est le getAttackPosition qui embete car on regarde par la meme occasion si le roi a joue et donc appel récursif
            allPossiblePositions.push(piece.getAttackPositions(this));
        });
        

        return allPossiblePositions;
    }
    
    positionRoi(playerNum){
        var i;
        var j;
        var x;
        var y;

        for (i = 0; i < this.pieceCellule.length;i++){
            for (j = 0; j < this.pieceCellule[i].length;j++){

                if (this.pieceCellule[i][j] != null){
                    if (this.pieceCellule[i][j].toString() == "Roi "+ playerNum){
                        x = j;
                        y = i;
                    }
                }
            }
        }

        return [x,y];
    }

    isAttacked(x,y,allPositions){

        var raison;

        allPositions.forEach(position => {
            position.forEach( coordonne => {
                if (coordonne[0] == x && coordonne[1] == y) raison = true;
            })
        })

        return raison;
    }


    isEchec(playerNum){
        // exemple pour le joueur 1
        // Faire pour la prochaine fois 
        var raison = false;
        var positionRoi = this.positionRoi(playerNum);

        var roi = this.pieceCellule[positionRoi[1]][positionRoi[0]]
        if (roi.getCampDeLaPiece() == 2){
            var allPossiblePositions = this.allPosiblePositions(1);
        }
        else {
            var allPossiblePositions = this.allPosiblePositions(2);
        }

        if (this.isAttacked(positionRoi[0],positionRoi[1],allPossiblePositions)) raison = true;
        return raison;
    }

    simulation(playerNum){
        while (this.isEchec(playerNum) == true) {
            // Doit jouer un coup si ce coup, ne le sort pas de son echec, ce n'est pas un coup faisable
            
        }
    }  
}
