import Fou from "./Fou.js";

export default class Fou_u extends Fou{

	constructor(campDeLaPiece){
		super(campDeLaPiece);
	}

    toString(){
		return super.toString() + " upgrade";
	}

	type(){
		return "Fou_u";
	}

    isAuthorizedMovementPlayer1(x,y,j,k){

		return ((super.isAuthorizedMovementPlayer1(x,y,j,k)) || ((x == j && y + 1 == k && y + 1 < 9) || (x + 1 == j && y == k && x + 1 < 9) || (x - 1 == j && y == k && x - 1 > -1)
        || (x == j && y - 1 == k && y - 1 > -1)));

	}

	isAuthorizedMovementPlayer2(x,y,j,k){

		return ((super.isAuthorizedMovementPlayer2(x,y,j,k)) || ((x == j && y + 1 == k && y + 1 < 9) || (x + 1 == j && y == k && x + 1 < 9) || (x - 1 == j && y == k && x - 1 > -1)
        || (x == j && y - 1 == k && y - 1 > -1)));

	}

	href(){
        return 'image/fou_u.png';
	}
	
	isEvolve(){
		return true;
	}
}