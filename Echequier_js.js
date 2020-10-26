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

    pieceEvolve(x,y,j,k,piece){

        
        var elementPiece = document.getElementById(x+", "+y).firstElementChild
        elementPiece.src = piece.href()
        

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
}


