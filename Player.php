<?php
	class Player {

		private $echequier;

		function __construct($echequier){
			$this->echequier = $echequier;
		}

		// Joue une piece et doit influencer en consequence l'echequier
		// x et y sont les coordonnees de la piece choisi et j, k sont 
		// les coordonnees de l'endroit ou on veut que la piece aille 
		function playPiece($x,$y,$j,$k){
			$piece = $this->echequier->getPieceCellule()[$x][$y];
			return $piece->isAuthorizedMovement($x,$y,$j,$k);
		}

		// Parachute une piece et doit influencer en consequence l'echequier
		function parachutagePiece(){

		}

		function getEchequier(){
			return $this->echequier;
		}
	}

	/*
	$player = new Player(); 
	echo($player->getEchequier);
	*/
?>