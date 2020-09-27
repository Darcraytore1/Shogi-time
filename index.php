<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="CSS.css">
	<title> Site shogi de ouf (J'espère un jour) </title>
</head>
<body> 
	<p class="center"> Shogi master </p>

</body>
</html>

<?php 
	
	require_once("Echequier.php");
	require_once("Lancier.php");
	require_once("Player.php");

 	// La question à se poser est de savoir si il est important de séparer chaque, pour moi oui donc j'ai crée une classe pour chaque pièce.


	$echequier = new Echequier();
	//$Lancier = new Lancier();		//Lancier peut bien etre appele 

	//print_r($Echequier->getPieceCellule());		// La fonction get fonctionne bien
	//print($Lancier->lancier);

	$player = new Player($echequier);
	print($player->getEchequier());
	print($player->playPiece(2,3,4,5));
	
?>