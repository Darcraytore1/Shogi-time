import Pion from "./Pion.js";

export default class Pion_u extends Pion{

    constructor(campDeLaPiece){
		super(campDeLaPiece);
	}

    toString(){
        return super.toString() + " upgrade";
    }

    type(){
		return "Pion_u";
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
}