import Lancier from "./Piece_js/Lancier.js";
import Fou from "./Piece_js/Fou.js";
import GeneralArgent from "./Piece_js/GeneralArgent.js";
import GeneralOr from "./Piece_js/GeneralOr.js";
import Tour from "./Piece_js/Tour.js";
import Pion from "./Piece_js/Pion.js";
import Cavalier from "./Piece_js/Cavalier.js";
import Roi from "./Piece_js/Roi.js";

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


