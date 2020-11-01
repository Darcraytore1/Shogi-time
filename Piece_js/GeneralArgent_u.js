import PieceEvolve from "./PieceEvolve.js";

export default class GeneralArgent_u extends PieceEvolve{

    constructor(campDeLaPiece,x,y){
        super(campDeLaPiece,x,y);
    }

    toString(){
        return "GeneralArgent " + "upgrade";
    }
    
    type(){
        return "GeneralArgent_u";
    }

    href(){
        return 'image/generalArgent_u.png';
    }

    isEvolve(){
		return true;
	}
}
