<?php
class Cavalier extends Piece{


	private $campDeLaPiece;

	function __construct($campDeLaPiece){
		$this->campDeLaPiece = $campDeLaPiece;
	}

	function __toString(){
		return "Cavalier ".$this->campDeLaPiece;
	}

	function isAuthorizedMovementPlayer1($x,$y,$j,$k){

		if (($x - 1 == $j and $y - 2 == $k and $x -1 > -1 and $y - 2 > -1) or ($x + 1 == $j and $y - 2 == $k and $x + 1 < 9 and $y - 2 > -1)){

			return true;

		}

		return false;

	}

	function isAuthorizedMovementPlayer2($x,$y,$j,$k){

		if (($x - 1 == $j and $y + 2 == $k and $x -1 > -1 and $y + 2 < 9) or ($x + 1 == $j and $y + 2 == $k and $x + 1 < 9 and $y - 2 < 9)){

			return true;

		}

		return false;
	}

	function getCampDeLaPiece(){
		return $this->campDeLaPiece;
	}

	function printImgPiece($x,$y){
		if ($this->campDeLaPiece == 1){
			echo "<img src='image/cavalier.png' class='reverse' id='$x,$y' draggable='true' ondragstart='onDragStart(event);' x='$x' y='$y' camp='1'></img>";
		}
		else {
			echo "<img src='image/cavalier.png' id='$x,$y' draggable='true' ondragstart='onDragStart(event);' x='$x' y='$y' camp='2'></img>";
		}
		//echo "<img src='image/cavalier.png' id='$x,$y' draggable='true'></img>";
	}
}
?>