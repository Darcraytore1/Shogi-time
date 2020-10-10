<?php 
	class Lancier extends Piece{

		private $campDeLaPiece;

		function __construct($campDeLaPiece){
			$this->campDeLaPiece = $campDeLaPiece;
		}

		function __toString(){
			return "Lancier ".$this->campDeLaPiece;
		}

		function isAuthorizedMovementPlayer1($x,$y,$j,$k){

			for ($i = 0; $i<9;$i++){

				if ($x == $j and $y + $i == $k and $y + $i < 9){
					return true;
				}
			}

			return false;
		}

		function isAuthorizedMovementPlayer2($x,$y,$j,$k){

			for ($i = 0; $i<9;$i++){
				
				if ($x == $j and $y + $i == $k and $y - $i > -1){
					return true;
				}
			}

			return false;
		}

		function getCampDeLaPiece(){
			return $this->campDeLaPiece;
		}

		function printImgPiece($x,$y){
			echo "<img src='image/lancier.png' id='$x,$y' draggable='true' ondragstart='onDragStart(event);' x='$x' y='$y'></img>";
		}
 	}
?>