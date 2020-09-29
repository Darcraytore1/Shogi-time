<?php

class Tour extends Piece {

	private $campDeLaPiece;

	function __construct($campDeLaPiece){
		$this->campDeLaPiece = $campDeLaPiece;
	}

	function __toString(){
		return "Tour ".$this->campDeLaPiece;
	}

	function isAuthorizedMovementPlayer1($x,$y,$j,$k){

		for ($i = 0; $i<9;$i++){

			if (($x + $i == $j and $y == $k and $x + $i < 9) or ($x - $i == $j and $y == $k and $x - $i > -1) 
				or ($x == $j and $y - $i == $k and $y - $i > -1) or ($x == $j and $y + $i == $k and $y + $i < 9)){
				return true;
			}
		}

		return false;
	}

	function getCampDeLaPiece(){
		return $this->campDeLaPiece;
	}
}
?>