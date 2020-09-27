<?php
	require_once("Piece.php");
	require_once("Lancier.php");   // Peut être compacté pour mettre toutes les classes de pièces dans un seul fichier, à voir
	require_once("GeneralArgent.php");
	require_once("GeneralOr.php");
	require_once("Pion.php");
	require_once("Roi.php");
	require_once("Tour.php");
	require_once("Fou.php");
	require_once("Cavalier.php");

	// La visibilite public pour les classes ne fonctionnent pas chercher pourquoi
	class Echequier {


		//public $piceceCellule = new Lancier(); //array(array(new Lancier(),new Cavalier(),new GeneralArgent(),new GeneralOr(), new Roi(),new GeneralOr(), new GeneralArgent(),new Cavalier(),new Lancier())); // Dans le tableau je dois initialiser chacune des pièces 
		private $pieceCellule;
		private $numCellule; // Dans ce tableau je dois initialiser chaque case

		public function __construct() {
			$this->pieceCellule = array(array(new Lancier(),new Cavalier(),new GeneralArgent(),new GeneralOr(), new Roi(),new GeneralOr(), new GeneralArgent(),new Cavalier(),new Lancier()),
										array(null,new Tour(),null,null,null,null,null,new Fou(),null),
										array(new Pion(),new Pion(),new Pion(),new Pion(),new Pion(),new Pion(),new Pion(),new Pion(),new Pion()),
										array(null,null,null,null,null,null,null,null,null),
										array(null,null,null,null,null,null,null,null,null),
										array(null,null,null,null,null,null,null,null,null),
										array(new Pion(),new Pion(),new Pion(),new Pion(),new Pion(),new Pion(),new Pion(),new Pion(),new Pion()),
										array(null,new Tour(),null,null,null,null,null,new Fou(),null),
										array(new Lancier(),new Cavalier(),new GeneralArgent(),new GeneralOr(), new Roi(),new GeneralOr(), new GeneralArgent(),new Cavalier(),new Lancier()));

			$this->numCellule = array(array(1,2,3,4,5,6,7,8,9),
								   array(1,2,3,4,5,6,7,8,9), 
								   array(1,2,3,4,5,6,7,8,9), 
								   array(1,2,3,4,5,6,7,8,9),
								   array(1,2,3,4,5,6,7,8,9), 
								   array(1,2,3,4,5,6,7,8,9), 
								   array(1,2,3,4,5,6,7,8,9), 
								   array(1,2,3,4,5,6,7,8,9), 
								   array(1,2,3,4,5,6,7,8,9));

		}

		public function getPieceCellule() {
			return $this->pieceCellule;		// Sans mettre le this, on me dit que pieceCellule n'a pas été initiliase etrange, peut etre une specifite du php
		}

		

		// Pour voir a quoi ressemble le tableau
		public function __toString(){

			$i = 0;
			$string = "";
			foreach ($this->pieceCellule as $value) {
				$string.= "$i = ";
				foreach ($value as $value2) {
					if ($value2 == null){
						$string.=" ";
					}
					else {
						$string.="$value2 ";
					}
				}
				$string.= "<br>";
				$i ++;
				//$string += "$value";
			}
			return $string;
			//return "L'etat actuelle de l'echequier est ". $this->pieceCellule;
		}
	}


	/*
	$Echequier = new Echequier();
	echo($Echequier -> getPieceCellule());
	*/
	

?>