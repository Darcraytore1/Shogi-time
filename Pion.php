<?php
	class Pion extends Piece{

		private $campDeLaPiece;

		function __construct($campDeLaPiece){
			$this->campDeLaPiece = $campDeLaPiece;
		}

		function __toString(){
			return "Pion ".$this->campDeLaPiece;
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

		// Attention ne pas oublier le this
		function getCampDeLaPiece(){
			return $this->campDeLaPiece;
		}

 	}
?>