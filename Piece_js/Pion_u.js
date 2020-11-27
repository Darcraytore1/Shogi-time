import PieceEvolve from "./PieceEvolve.js";

export default class Pion_u extends PieceEvolve{

    constructor(campDeLaPiece,x,y){
        super(campDeLaPiece,x,y);
    }

    toString(){
        return "Pion " + " upgrade";
    }

    type(){
		return "Pion_u";
    }

    href(){
        return 'image/pion_u.png';
    }

    isEvolve(){
		return true;
    }
    
}