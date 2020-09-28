<?php 
	class Lancier extends Piece{

		function __construct(){

		}

		function __toString(){
			return "Lancier";
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
 	}
?>