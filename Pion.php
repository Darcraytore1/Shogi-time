<?php
	class Pion extends Piece{
		function __construct(){

		}

		function __toString(){
			return "Pion";
		}

		// Si le mouvement est authorise renvoie true sinon false
		function isAuthorizedMovementPlayer1($x,$y,$j,$k){
			if ($x == $j and $y + 1 == $k and $y + 1 < 9){
				return true;
			}
			return false;
		}

		function isAuthorizedMovementPlayer2($x,$y,$j,$k){
			if ($x == $j and $y - 1 == $k and $y - 1 > -1){
				return true;
			}
			return false;
		}

 	}
?>