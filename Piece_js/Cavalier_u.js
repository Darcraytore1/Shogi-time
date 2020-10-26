import Cavalier from "./Cavalier.js";

export default class Cavalier_u extends Cavalier{

    constructor(campDeLaPiece){
		super(campDeLaPiece);
	}

    toString(){
		return super.toString() + " upgrade";
	}

	type(){
		return "Cavalier_u";
	}

    isAuthorizedMovementPlayer1(x,y,j,k){

        if ( (x == j && y + 1 == k && y + 1 < 9) || (x + 1 == j && y == k && x + 1 < 9) || (x - 1 == j && y == k && x - 1 > -1)
            || (x == j && y - 1 == k && y - 1 > -1) || (x - 1 == j && y + 1 == k && x - 1 > -1 && y + 1 < 9) || (x + 1 == j && y + 1 == k && x + 1 < 9 && y + 1 < 9)){

            return true;

        }

        return false;

    }

    isAuthorizedMovementPlayer2(x,y,j,k){

        if ( (x == j && y - 1 == k && y - 1 > -1) || (x - 1 == j && y == k && x - 1 > -1) || (x + 1 == j && y == k && x + 1 < 9)
            || (x == j && y + 1 == k && y + 1 < 9) || (x + 1 == j && y - 1 == k && x + 1 < 9 && y - 1 > -1) || (x - 1 == j && y - 1 == k && x - 1 > -1 && y - 1 > -1)){

            return true;

        }

        return false;
    }

    href(){
        return 'image/cavalier_u.png';
    }

    isEvolve(){
		return true;
	}
}