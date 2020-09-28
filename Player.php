<?php
	class Player {

		private $echequier;

		function __construct($echequier){
			$this->echequier = $echequier;
		}

		// Joue une piece et doit influencer en consequence l'echequier
		// x et y sont les coordonnees de la piece choisi et j, k sont 
		// les coordonnees de l'endroit ou on veut que la piece aille 
		function Player1playPiece($x,$y,$j,$k){
			if ($x == $j and $y == $k){		// L'endroit de depart et d'arrive sont les memes donc il ne faut rien faire
				return (false);
			}
			// echo "$y, $x";  // Il faut mettre une difference de 1 car le 0 n'existe pas sur un plateau
			$piece = $this->echequier->getPieceCellule()[$y][$x];		// Recuperation de la piece au coordonne x,y
			if ($piece == null){
				echo "La piece selectionne n'existe pas";
				return false;
			}
			$string = "le mouvement demande n'est pas authorise par cette piece";
			if ($piece->isAuthorizedMovementPlayer1($x,$y,$j,$k)){		// Si le mouvement qu'essaie de faire la piece est authorise par rapport a la piece choisie
				$string = "la case de destination n'est pas vide";
				if ($this->echequier->getPieceCellule()[$k][$j] == null){		// Si l'endroit ou veut aller la piece n'a pas deja une piece sur cette position

					$this->echequier->changeCellule($j,$k,$piece);
					$this->echequier->changeCellule($x,$y,null);

					/*
					$this->echequier->getPieceCellule()[$k][$j] = $piece;
					echo $this->echequier->getPieceCellule()[$k][$j];
					$this->echequier->getPieceCellule()[$y][$x] = null;
					echo $this->echequier->getPieceCellule()[$y][$x]; // Ne change pas rellement la valeur du tableau, j'ai donc cree une methode dans echequier pour reellement changer la valeur des cases;
					*/
					return(true); 	// Faire en sorte que la piece change de place 
				}
			}

			echo "Le mouvement demande n'est pas executable ".$string;


			return (false);
		}

		function Player2playPiece($x,$y,$j,$k){
			$piece = $this->echequier->getPieceCellule()[$y][$x];
			if ($piece->isAuthorizedMovementPlayer2($x,$y,$j,$k)){

			}
			return(false);
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