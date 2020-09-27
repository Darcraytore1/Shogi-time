<?php
	require_once("Lancier.php");   // Peut être compacté pour mettre toutes les classes de pièces dans un seul fichier, à voir
	require_once("GeneralArgent.php");
	require_once("GeneralOr.php");
	require_once("Pion.php");
	require_once("Roi.php");
	require_once("Tour.php");
	require_once("Fou.php");
	require_once("Cavalier.php");

	class Echequier {


		//public $piceceCellule = new Lancier(); //array(array(new Lancier(),new Cavalier(),new GeneralArgent(),new GeneralOr(), new Roi(),new GeneralOr(), new GeneralArgent(),new Cavalier(),new Lancier())); // Dans le tableau je dois initialiser chacune des pièces 
		public $pieceCellule = new Lancier();
		public $numCellule = array(array(1,2,3,4,5,6,7,8,9), // Dans ce tableau je dois initialiser chaque case
								   array(1,2,3,4,5,6,7,8,9), 
								   array(1,2,3,4,5,6,7,8,9), 
								   array(1,2,3,4,5,6,7,8,9),
								   array(1,2,3,4,5,6,7,8,9), 
								   array(1,2,3,4,5,6,7,8,9), 
								   array(1,2,3,4,5,6,7,8,9), 
								   array(1,2,3,4,5,6,7,8,9), 
								   array(1,2,3,4,5,6,7,8,9));

		function __constuct(){
			print "Dans le constructeur ";
		}
	}

?>