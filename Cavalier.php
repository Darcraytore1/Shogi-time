<?php
class Cavalier extends Piece{
	function __construct(){
		
	}

	function __toString(){
		return "Cavalier";
	}

	function isAuthorizedMovementPlayer1($x,$y,$j,$k){

		if ( ($x - 1 == $j and $y - 2 == $k and $x -1 > -1 and $y - 2 > -1) or ($x + 1 == $j and $y - 2 == $k and $x + 1 < 9 and $y - 2 > -1)){

			return true;

		}

		return false;

	}

	function isAuthorizedMovementPlayer1($x,$y,$j,$k){

		if ( ($x - 1 == $j and $y + 2 == $k and $x -1 > -1 and $y + 2 < 9) or ($x + 1 == $j and $y + 2 == $k and $x + 1 < 9 and $y - 2 < 9)){

			return true;

		}

		return false;

	}
}
?>