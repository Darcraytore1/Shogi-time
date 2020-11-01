import PieceEvolve from "./PieceEvolve.js";
import Lancier from "./PieceEvolve.js";

export default class Lancier_u extends PieceEvolve{

    constructor(campDeLaPiece,x,y){
        super(campDeLaPiece,x,y);
    }

    toString(){
        return "Lancier" + " upgrade";
    }

    type(){
		return "Lancier";
    }

    href(){
        return 'image/lancier_u.png';
    }

    isEvolve(){
		return true;
	}
}