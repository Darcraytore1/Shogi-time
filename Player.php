<?php
	class Player {

		private $echequier;
		private $listePieceGagne;

		function __construct($echequier){
			$this->echequier = $echequier;
			$this->listePieceGagne = [];
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

				if ($this->echequier->getPieceCellule()[$k][$j] == null or $this->echequier->getPieceCellule()[$k][$j]->getCampDeLaPiece() != $this->echequier->getPieceCellule()[$y][$x]->getCampDeLaPiece()){		// Si l'endroit ou veut aller la piece n'a pas deja une piece sur cette position ou bien si c'est une piece ennemi


					// Test si il y a des pieces sur le chemin pour aller a la case destination pour le fou
					if ($piece == "Fou"){

						if ($x - $j > 0 and $y - $k > 0){
							//echo "1";
							for ($i = 1;$i< $x - $j;$i++){
								if($this->echequier->getPieceCellule()[$y - $i][$x - $i] != null){
									echo "Il y a des pieces sur le chemin de ton deplacement petit galopin";
									return false;
								}
							}

						}

						if ($x - $j < 0 and $y - $k < 0){
							//echo "2";
							for ($i = 1;$i< $j - $x;$i++){
								if($this->echequier->getPieceCellule()[$y + $i][$x + $i] != null){
									echo "Il y a des pieces sur le chemin de ton deplacement petit galopin";
									return false;
								}
							}

						}

						if ($x - $j > 0 and $y - $k < 0){
							//echo "3";
							for ($i = 1;$i < $x - $j;$i++){
								
								if($this->echequier->getPieceCellule()[$y + $i][$x - $i] != null){
									echo "$i";
									echo "Il y a des pieces sur le chemin de ton deplacement petit galopin";
									return false;
								}
							}

						}

						if ($x - $j < 0 and $y - $k > 0){
							//echo "4";
							for ($i = 1;$i< $j - $x;$i++){
								if($this->echequier->getPieceCellule()[$y - $i][$x + $i] != null){
									echo "Il y a des pieces sur le chemin de ton deplacement petit galopin";
									return false;
								}
							}
						}
					}


					// Test si il y a des pieces sur le chemin pour aller a la case destination pour la tour
					if ($piece == "Tour"){

						if ($x - $j > 0 and $y == $k){
							//echo "1";
							for ($i = 1;$i< $x - $j;$i++){
								if($this->echequier->getPieceCellule()[$y][$x - $i] != null){
									echo "Il y a des pieces sur le chemin de ton deplacement petit galopin";
									return false;
								}
							}
						}

						if ($x - $j < 0 and $y == $k){
							//echo "2";
							for ($i = 1;$i< $j - $x;$i++){
								if($this->echequier->getPieceCellule()[$y][$x + $i] != null){
									echo "Il y a des pieces sur le chemin de ton deplacement petit galopin";
									return false;
								}
							}
						}

						if ($x == $j and $y - $k < 0){
							//echo "3";
							for ($i = 1;$i < $k - $y;$i++){
								
								if($this->echequier->getPieceCellule()[$y + $i][$x] != null){
									//echo "$i";
									echo "Il y a des pieces sur le chemin de ton deplacement petit galopin";
									return false;
								}
							}
						}

						if ($x == $j and $y - $k > 0){
							//echo "4";
							for ($i = 1;$i< $y - $k;$i++){
								if($this->echequier->getPieceCellule()[$y - $i][$x] != null){
									echo "Il y a des pieces sur le chemin de ton deplacement petit galopin";
									return false;
								}
							}
						}
					}


					// Test si il y a des pieces sur le chemin pour aller a la case destination pour le lancier
					if ($piece == "Lancier"){
						//echo "$k";
						for ($i = 1; $i < $k-$y;$i ++){
							//echo "5";
							if($this->echequier->getPieceCellule()[$y + $i][$x] != null){
								echo "Il y a des pieces sur le chemin de ton deplacement petit galopin";
								return false;
							}
						}
					}




					if ($this->echequier->getPieceCellule()[$k][$j] == null){

						$this->echequier->changeCellule($j,$k,$piece);
						$this->echequier->changeCellule($x,$y,null);

					}

					else{

						$this->listePieceGagne[] = $this->echequier->getPieceCellule()[$k][$j]->getCampDeLaPiece();
						$this->echequier->changeCellule($j,$k,$piece);
						$this->echequier->changeCellule($x,$y,null);
					}

					/*
					$this->echequier->getPieceCellule()[$k][$j] = $piece;
					echo $this->echequier->getPieceCellule()[$k][$j];
					$this->echequier->getPieceCellule()[$y][$x] = null;
					echo $this->echequier->getPieceCellule()[$y][$x]; // Ne change pas rellement la valeur du tableau, j'ai donc cree une methode dans echequier pour reellement changer la valeur des cases;
					*/
					return(true); 	// Faire en sorte que la piece change de place 
				}
			}

			echo $string;


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