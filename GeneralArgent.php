<?php
class GeneralArgent extends Piece{
	function __construct(){
			
	}

	function __toString(){
		return "GeneralArgent";
	}

	// ça a l'air correct
	function isAuthorizedMovementPlayer1($x,$y,$j,$k){	
		
		if ( ($x == $j and $y + 1 == $k and $y + 1 < 9) or ($x - 1 == $j and $y - 1 == $k and $x - 1 > -1 and $y - 1 > -1)  or ($x + 1 == $j and $y - 1 == $k and $x + 1 < 9 and $y - 1 > -1)
			or ($x - 1 == $j and $y + 1 == $k and $x - 1 > -1 and $y + 1 < 9) or ($x + 1 == $j and $y + 1 == $k and $x + 1 < 9 and $y + 1 < 9)){

			return true;

		}

		return false;
	}

	function isAuthorizedMovementPlayer2($x,$y,$j,$k){	
		
		if ( ($x == $j and $y - 1 == $k and $y - 1 > -1) or ($x - 1 == $j and $y - 1 == $k and $x - 1 > -1 and $y - 1 > -1)  or ($x + 1 == $j and $y - 1 == $k and $x + 1 < 9 and $y - 1 > -1)
			or ($x - 1 == $j and $y + 1 == $k and $x - 1 > -1 and $y + 1 < 9) or ($x + 1 == $j and $y + 1 == $k and $x + 1 < 9 and $y + 1 < 9)){

			return true;

		}

		return false;
	}



 }
?>