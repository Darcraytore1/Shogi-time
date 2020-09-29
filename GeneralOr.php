<?php
 	class GeneralOr extends Piece{

		private $campDeLaPiece;

		function __construct($campDeLaPiece){
			$this->campDeLaPiece = $campDeLaPiece;
		}

		function __toString(){
		
			return "GeneralOr ".$this->campDeLaPiece;

		}

		// ça a l'air correct
		function isAuthorizedMovementPlayer1($x,$y,$j,$k){

			if ( ($x == $j and $y + 1 == $k and $y + 1 < 9) or ($x + 1 == $j and $y == $k and $x + 1 < 9) or ($x - 1 == $j and $y == $k and $x - 1 > -1)
				or ($x == $j and $y - 1 == $k and $y - 1 > -1) or ($x - 1 == $j and $y + 1 == $k and $x - 1 > -1 and $y + 1 < 9) or ($x + 1 == $j and $y + 1 == $k and $x + 1 < 9 and $y + 1 < 9)){

				return true;

			}

			return false;

		}

		function isAuthorizedMovementPlayer2($x,$y,$j,$k){

			if ( ($x == $j and $y + 1 == $k and $y + 1 < 9) or ($x + 1 == $j and $y == $k and $x + 1 < 9) or ($x - 1 == $j and $y == $k and $x - 1 > -1)
				or ($x == $j and $y - 1 == $k and $y - 1 > -1) or ($x - 1 == $j and $y - 1 == $k and $x - 1 > -1 and $y - 1 > -1) or ($x + 1 == $j and $y - 1 == $k and $x + 1 < 9 and $y - 1 > - 1)){

				return true;

			}

			return false;
		}

		function getCampDeLaPiece(){
			return $this->campDeLaPiece;
		}
 	}
?>