<?php
class Fou extends Piece{

 	private $campDeLaPiece;

	function __construct($campDeLaPiece){
		$this->campDeLaPiece = $campDeLaPiece;
	}

	function __toString(){
		return "Fou ".$this->campDeLaPiece;
	}

	// Calcul des diagonals du tableau 
	function isAuthorizedMovementPlayer1($x,$y,$j,$k){
		for ($i = 0; $i<9;$i++){

			/*
			if ($x )
			if ($x + $i == $j and $y + $i == $k and $y + $i < 9 and $x + $i < 9)	// Une solution trouve en appelant l'echequier ici et en verifiant si une piece est presente sur chaque diagonal
			*/
			
			if (($x + $i == $j and $y + $i == $k and $y + $i < 9 and $x + $i < 9) or ($x - $i == $j and $y - $i == $k and $y - $i > -1 and $x - $i > -1) 
				or ($x + $i == $j and $y - $i == $k and $y - $i > -1 and $x + $i < 9) or ($x - $i == $j and $y + $i == $k and $y + $i < 9 and $x - $i > -1)){
				return true;
			}
		}

		return false;
	}

	function getCampDeLaPiece(){
		return $this->campDeLaPiece;
	}

	function printImgPiece($x,$y){
		if ($this->campDeLaPiece == 1){
			echo "<img src='image/fou.png' id='$x,$y' draggable='true' ondragstart='onDragStart(event);' x='$x' y='$y' camp='1'></img>";
		}
		else {
			echo "<img src='image/fou.png' id='$x,$y' draggable='true' ondragstart='onDragStart(event);' x='$x' y='$y' camp='2'></img>";
		}
		//echo "<img src='image/fou.png' id='$x,$y' draggable='true'></img>";
	}
}
?>