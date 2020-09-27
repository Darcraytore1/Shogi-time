<?php
	class Pion extends Piece{
		function __construct(){

		}

		function __toString(){
			return "Pion";
		}

		// Si le mouvement est authorise renvoie true sinon false
		function isAuthorizedMovement($x,$y,$j,$k){
			if ($x == $j and $y + 1 == $k ){
				return true;
			}
			return false;
		}
 	}
?>