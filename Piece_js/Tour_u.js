import Tour from "./Tour.js";

export default class Tour_u extends Tour{

	constructor(campDeLaPiece){
		super(campDeLaPiece);
	}

    toString(){
		return super.toString() + " upgrade";
	}

	type(){
		return "Tour_u";
	}

	isAuthorizedMovementPlayer1(x,y,j,k){
        
        return ((super.isAuthorizedMovementPlayer1) || (x - 1 == j && y - 1 == k && x - 1 > -1 && y - 1 > -1)  || (x + 1 == j && y - 1 == k && x + 1 < 9 && y - 1 > -1)
        || (x - 1 == j && y + 1 == k && x - 1 > -1 && y + 1 < 9) || (x + 1 == j && y + 1 == k && x + 1 < 9 && y + 1 < 9));
		
	}

	isAuthorizedMovementPlayer2(x,y,j,k){

		return ((super.isAuthorizedMovementPlayer2) || (x + 1 == j && y + 1 == k && x + 1 < 9 && y + 1 < 9)  || (x - 1 == j && y + 1 == k && x - 1 > -1 && y + 1 < 9)
        || (x + 1 == j && y - 1 == k && x + 1 < 9 && y - 1 > -1) || (x - 1 == j && y - 1 == k && x - 1 > -1 && y - 1 > -1));
    }
	
	href(){
        return 'image/tour_u.png';
	}
	
	isEvolve(){
		return true;
	}
}