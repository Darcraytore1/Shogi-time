<?php
class GeneralArgent extends Piece{

	private $campDeLaPiece;

	function __construct($campDeLaPiece){
		$this->campDeLaPiece = $campDeLaPiece;
	}

	function __toString(){
		return "GeneralArgent ".$this->campDeLaPiece;
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

	function getCampDeLaPiece(){
		return $this->campDeLaPieces;
	}

	function printImgPiece($x,$y){
		//echo "<img src='image/generalArgent.png' id='$x,$y' draggable='true' ondragstart='onDragStart(event);' x='$x' y='$y'></img>";
		echo "<img src='image/generalArgent.png' id='$x,$y' draggable='true'></img>";
	}

 }
?>