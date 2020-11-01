import PieceEvolve from "./PieceEvolve.js";

export default class Cavalier_u extends PieceEvolve{

    constructor(campDeLaPiece,x,y){
        super(campDeLaPiece,x,y);
    }

    toString(){
		return "Cavalier " + "upgrade";
	}

	type(){
		return "Cavalier_u";
	}

    href(){
        return 'image/cavalier_u.png';
    }

    isEvolve(){
		return true;
    }
}